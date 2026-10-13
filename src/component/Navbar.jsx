
import { useSelector ,useDispatch} from "react-redux"
import {updateName, updateEmail} from "../redux/counterSlice"
export default function Navbar() {
    const name = useSelector((state) => state.user.name)
    const email = useSelector((state)=>state.user.email)
    const dispatch = useDispatch()
    return (
        <>
            <h1>welcome,{name}</h1>
            <h1>here is my email, {email}</h1>
            <button onClick={()=>dispatch(updateName("admin"))}>
                update name
            </button>
            <button onClick={()=>dispatch(updateEmail("admin@gmail.com"))}>
                update email
            </button>
        </>
    )
}