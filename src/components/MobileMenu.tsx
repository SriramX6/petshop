"use client"
import Logout from "./logoutForm"
import { getSession } from "@/actions";
import Link from "next/link";
import { useState } from "react";

const MobileMenu =  () => {

  // const session = await getSession();
  
  const[isOpen , setIsOpen] = useState(false);
  return (
    <div className="" >
        <div className=" flex flex-col gap-[4.5px] cursor-pointer" onClick={()=>setIsOpen(prev=>!prev)}>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? 'rotate-45' :'' } origin-left ease-in-out duration-500 `}/>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm  ${isOpen ? 'opacity-0' :'' } ease-in-out duration-500 `}/>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? '-rotate-45' :'' } origin-left ease-in-out duration-500 `}/>
        </div>
        {isOpen && (
          <div className="absolute left-0 top-24 w-full h-[calc(100vh - 96px)] bg-white flex flex-col items-center  justify-center gap-8 font-medium text-xl z-10" >
            <Link href="/" onClick={()=>setIsOpen(prev=>!prev)}>Home</Link>
            <Link href="/profile" onClick={()=>setIsOpen(prev=>!prev)} >Profile</Link>
            <Link href="/login" onClick={()=>setIsOpen(prev=>!prev)} >Login</Link>
            <Logout/>
          </div>
        )}
    </div>
  )
}

export default MobileMenu