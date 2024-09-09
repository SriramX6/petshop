import { logout } from "@/actions"

const logoutForm = () => {
  return (
    <form action={logout} ><button>logout</button></form>
  )
}

export default logoutForm