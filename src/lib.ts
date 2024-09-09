import { SessionOptions } from "iron-session";

export interface SessionData {
    userID?:string;
    username?:string;
    img?:string;
    isPro?:boolean;
    isBlocked?:boolean;
    isLoggedINn:boolean;
}

export const defaultSession:SessionData = {
    isLoggedINn :false
}

export const sessionOptions: SessionOptions  = {
    password : process.env.SECRET_KEY! , 
    cookieName : 'el-Sesone' ,
    cookieOptions : {
        httpOnly:true ,
        secure : process.env.NODE_ENV === "production"

    }
}