"use client"
import {login} from "@/actions"
import { useFormState } from "react-dom"

const LoginForm = () => {
    const [state , formAction] = useFormState<any, FormData>(login, undefined )
  return (
    <form  action={formAction} >
        <input className="text-white bg-black "  type = 'text' name = "username" required placeholder="username"/> <br/><br/>
        <input className="text-white bg-black" type = 'password' name = "password" required placeholder="password"/>
        <br/><br/>
        <button>Login</button>
        {state?.error && <p>{state.error}</p>}
    </form>
  )
}

export default LoginForm