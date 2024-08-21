import { useEffect } from "react";
import UserContact from "./UserContact";
const Contact = () => {

    useEffect(()=>{
        console.log("Contact useEffect");
    },[])

    return (
        <div className="m-8 px-8">
            <h1>No Contact found</h1>
            <div>Soumen</div>
            <UserContact data="First"/>
            <UserContact data="second"/>
        </div>
    )
}

export default Contact;