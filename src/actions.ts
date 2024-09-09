"use server"

import { sessionOptions , SessionData, defaultSession } from "@/lib"
import { getIronSession } from "iron-session"
// import { redirect } from "next/dist/server/api-utils"
import { redirect } from 'next/navigation';
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache";


let username = "john"; 
let isPro =  true;
let isBlocked = true;


export const getSession = async () => {
    // "use-server";
    const session  = await getIronSession<SessionData>(cookies() , sessionOptions);

    if(!session.isLoggedINn){
        session.isLoggedINn = defaultSession.isLoggedINn;
    }

    session.isBlocked = isBlocked;
    session.isPro = isPro;
    return session;

}
export const login = async (prevState:{error : undefined | string }, formData:FormData) => {
    const session = await getSession()

    const formUsername = formData.get("username") as string
    const formPassword = formData.get("password") as string
//  check user in the db
// const user = await db.getUser({username , password})
    if(formUsername !== username){
        return {error : "wrong credentials"}
    }     

    session.userID = '1';
    session.username = formUsername;
    session.isPro = isPro;
    session.isLoggedINn = true;

    await session.save()
     redirect("/")
    

// "use-server";
}
export const logout = async () => {
    // "use-server";
    const session = await getSession()
    session.destroy()
    redirect('/')           
}

export const changePremium = async() => {
    const session = await getSession()

    isPro = !session.isPro
    session.isPro = isPro
    await session.save()
    revalidatePath("/profile")
}


export const changeUsername = async(formData : FormData) => {
    const session = await getSession()

    const newUsername = formData.get("username") as string

    username = newUsername

    session.username = username
    await session.save();
    revalidatePath("/profile")
}
