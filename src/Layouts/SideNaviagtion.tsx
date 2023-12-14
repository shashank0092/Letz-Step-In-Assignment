import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar
} from "react-pro-sidebar";
import { FiHome } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { FaWeightHanging } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";

const Header = () => {


  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  }

  return (
    <>
      <div id="header" className="flex flex-col items-center " >

        <div>
          <Sidebar collapsed={menuCollapse} style={{ height: "100vh", display: "flex", borderRight: "1px solid black" }} >
            <div className="flex flex-col h-full justify-between"  >
              <div>
                <div>
                  <div className="flex flex-col justify-center items-center">

                    <p  >{menuCollapse ? (
                      <div className="flex justify-center items-center">
                        <img src="https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/LogoIcon.png?updatedAt=1702456713242" alt="small logo" className="h-1/2 w-4/5" onClick={menuIconClick} />
                      </div>
                    ) : (
                      <div className=" flex justify-center">
                        <img src="https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/Logo.png?updatedAt=1702537419917" alt="big logo" onClick={menuIconClick} className="h-1/2 w-1/2 " />
                      </div>
                    )}</p>
                  </div>

                </div>
                <div>
                  <Menu >
                    <MenuItem icon={<FiHome />}>
                      Home
                    </MenuItem>
                    <MenuItem active={true} icon={<FaBuilding />}>Category</MenuItem>
                    <MenuItem icon={<FaBowlFood />}>Author</MenuItem>
                    <MenuItem icon={<FaWeightHanging />}>Settings</MenuItem>
                  </Menu>
                </div>
              </div>
              <div className={` ${menuCollapse?("hidden"):("flex flex-col justify-center items-center gap-5 mb-5")} `} >
                <div className="flex w-full justify-center" >
                  <img src="https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/Dark%20analytics-bro.png?updatedAt=1702562069121" alt="" className="w-2/4" />
                </div>
                <div className="flex items-center gap-3" >
                  <div>
                      <p className="text-xl text-green-600 font-semibold" >Hello User</p>
                  </div>
                  <div>
                    <FaRocket className="text-green-400" />
                  </div>
                </div>
                
                
                <div>
                  <p className="text-sm px-3 font-medium text-gray-600 text-center" >
                    Hello User This is our Real State Dashboard.This is a normal version for watching graph and charts please buy subsciption
                  </p>
                </div>
                <div>
                  <button className="flex items-center gap-3 bg-black text-green-300 p-3 px-5 rounded-2xl" >
                      Upgrade Pro <GrUpgrade/>
                  </button>
                </div>
              </div>
            </div>
          </Sidebar>
        </div>


      </div>
    </>
  );
};

export default Header;
