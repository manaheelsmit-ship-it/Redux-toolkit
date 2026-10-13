import { useSelector } from "react-redux"
export default function Dashboard(){
    const name = useSelector((state)=>state.user.name)
    return(
        <>
        <h1>Dashboard</h1>
        <h1>welcome,{name} </h1>
        </>
    )
}