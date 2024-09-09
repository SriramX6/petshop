import { getSession } from "@/actions"
import Link from "next/link"
import { redirect } from "next/navigation"


const premium = async () => {

  const session  = await getSession()

  if(!session.isLoggedINn){
    redirect("/")
  }
  if(!session.isPro){
    return(
      <div className="notPremium">
        <h1>Only premium user can see this content</h1>
        <Link href="/profile">GO to profile page to upgrade to premium</Link>
      </div>
    )
  }
  return (
    <div>
      <span>Welcome to premium members only page, <b>{session.username}</b></span>
    </div>
  )
}

export default premium