import { useSelector } from "react-redux"
export default function Profile(){
    const name = useSelector((state)=>state.user.name)
    return(
        <>
        <h1>Profile</h1>
        <h1>welcome,{name} </h1>
        </>
    )
}