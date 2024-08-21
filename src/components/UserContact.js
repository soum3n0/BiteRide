import { useEffect } from "react";
const UserContact = (props)=>{
    useEffect(()=>{
        // For all intences this will be printed after all instances execution in batch
        console.log("UseEffect "+props.data);
    },[])

    // For all instances this line will be executed first
    console.log("hey "+props.data)

    return(
        <div>Contact No: ***</div>
    )
}
export default UserContact;