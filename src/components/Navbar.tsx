import Link from "next/link"
import Logout from "./logoutForm"
import { getSession } from "@/actions"
import MobileMenu from "./MobileMenu"
import Image from "next/image"

const Navbar = async () => {
  const session = await getSession()

  // console.log(session)
  return (
    // <nav className="bg-black">
    //   <Link href ="/">Homepage</Link>
    //   <Link href ="/premium">Premium</Link>
    //   <Link href ="/profile">profile</Link>
    //   <Link href ="/login">login</Link>
    //   {session.isLoggedINn && <Logout/>}
    // </nav>
<div className=" bg-black  h-24 flex items-center justify-between" >

      {/* LEFT */}
   <div className=" md:hidden lg:block w-[20%]">
   <Link  className="font-bold text-xl text-blue-500 " href ="/">PETSHOP</Link>
    </div>

{/* CENTER */}
<div className="hidden md:flex w-[50%]">
  <div className=" flex gap-6 text-gray-600">
    
      <Link href ="/" className="flex gap-2 text-white">
        <Image src = "/home.png" alt="Homepage" width={16} height={16} />
        <span>HomePage</span>
      </Link>

      <Link href ="/profile" className="flex gap-2 text-white" >
        <Image src = "/friends.png" alt="profile" width={16} height={16} />
        <span>Profile</span>
      </Link>

      <Link href ="/login" className="flex gap-2 text-white" >
        <Image src = "/noAvatar.png" alt="profile" width={16} height={16} />
        <span>Login</span>
      </Link>

      {session.isLoggedINn && <Logout/>}
  </div>
</div>

{/* RIGHT */}
<div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end" >
  <MobileMenu/>
</div>

</div>



  )
}

export default Navbar