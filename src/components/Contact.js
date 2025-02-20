import { useEffect } from "react";
const Contact = () => {

    useEffect(()=>{
        console.log("Contact useEffect");
    },[])

    return (
        <div className="m-8 px-8">
            <h1>No Contact found</h1>
            
        </div>
    )
}

export default Contact;