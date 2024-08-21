import { useEffect, useState } from "react";
import { RES_MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(RES_MENU_API + resId,  {
            headers: {
            'x-cors-api-key': 'temp_94232cce67beb712be1362cbfd52cc05'
            }
          }); 
        const json = await data.json();
        setResInfo(json?.data);
    }

    return resInfo;
}
export default useRestaurantMenu;