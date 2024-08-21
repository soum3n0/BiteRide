// import { useState } from "react";
import Menu from "./Menu";

const MenuCatagory = (props) => {
    const { data, value, setShowMenuIndex } = props;
    const menuList = data?.card?.card?.itemCards;
    const menuTitle = data?.card?.card?.title;
    // console.log(menuList);
    // const [showMenu, setShowMenu] = useState(true);

    const handleClick = ()=>{
        setShowMenuIndex();
    }

    return (
        <div className="px-4 pt-2 rounded-xl">
            {/* Accordion */}
            <div className="p-4 flex justify-between items-center cursor-pointer text-xl shadow rounded-lg" onClick={handleClick}>
                <h1 className="text-xl font-bold">{menuTitle} [{menuList.length}] </h1>
                <i className="fa-solid fa-circle-chevron-down"></i>
            </div>
            <div className="px-8 pb-2">
                {(menuList.length > 0) && (value) && (
                    menuList.map((menu) => (
                        <Menu key={menu?.card?.info?.id} data={menu} />
                    ))
                )}
            </div>
        </div>
    )
};

export default MenuCatagory;