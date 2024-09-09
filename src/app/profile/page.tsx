import { changePremium, changeUsername, getSession } from "@/actions"
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation";

const profile = async () => {
  const session = await getSession();

  if(!session.isLoggedINn){
    redirect("/")
  }

  return (
    <div className="profile" >
      <h1>welcome to profile page</h1>
      <p> 
        welcome, <b>{session.username}</b>
      </p>

      <span> you are a <b>{session.isPro ? " Premium" : "Free" }</b> user</span>
      <form action={changePremium}>
        <button> {session.isPro ? "Cancel" : "Buy"  } Premium </button>
      </form>

      <form action={changeUsername}>
        <input type = "text" name= "username" required placeholder={session.username}/>
        <button>Update</button>
      </form>
      </div>
  )
}

export default profile