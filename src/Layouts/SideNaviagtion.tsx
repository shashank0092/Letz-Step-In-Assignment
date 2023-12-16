import { useState, useEffect } from "react";
import {
  Menu,
  MenuItem,
  Sidebar
} from "react-pro-sidebar";
import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { FaWeightHanging } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../global/store";
import "./Sidebar.css"

interface themeType {
  iconColor: string,
  text: string,
  image: string
}


const Header = () => {

  const { setCurrentDashboard, currentDashboard } = useGlobalContext()
  const [theme, setTheme] = useState<themeType>({ iconColor: "", text: "", image: "" })


  console.log(currentDashboard, "this is cureent dashboard")

  const [menuCollapse, setMenuCollapse] = useState(false)

  useEffect(() => {
    ThemeDecide()
  }, [])

  const ThemeDecide = () => {
    if (currentDashboard == "/realstate") {
      setTheme({ iconColor: "green", text: "Real State", image: "https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/Dark%20analytics-bro%20green.png?updatedAt=1702586376336" })
    }
    else if (currentDashboard == "/education") {
      setTheme({ iconColor: "blue", text: "Education Property", image: "https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/Dark%20analytics-bro%20Blue.png?updatedAt=1702585590422" })
    }
    else if (currentDashboard == "/dineoutplace") {
      setTheme({ iconColor: "red", text: "Dining Place Property", image: "https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/Dark%20analytics-bro%20Re.png?updatedAt=1702585778472" })
    }
    else {
      setTheme({ iconColor: "yellow", text: "Fitness Property", image: "https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/Dark%20analytics-bro%20yellow.png?updatedAt=1702586318799" })
    }
  }


  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  }

  return (
    <>
      <div id="header" className="flex flex-col items-center bg-white   " >

        <div className="   xsm:w-[100vw]" >
          <Sidebar collapsed={menuCollapse} rootStyles={{
            '@media screen and (min-width: 200px) and (max-width: 500px)': {
              width:"100vw"
            },
          }} className={`h-[100vh] xsm:w-[100vw] flex border-1 border-r border-black ${menuCollapse ? (" xsm:h-[5vh]") : (" xsm:h-[20vh] xsm:w-[100vw]")} `}    >
            <div className="flex flex-col h-full justify-between "  >
              <div className="" >
                <div>
                  <div className="flex flex-col justify-center items-center xsm:w-full">

                    <p  >{menuCollapse ? (
                      <div className="flex justify-center items-center">
                        <img src="https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/LogoIcon.png?updatedAt=1702456713242" alt="small logo" className="h-1/2 w-4/5 xsm:w-1/2" onClick={menuIconClick} />
                      </div>
                    ) : (
                      <div className=" flex justify-center">
                        <img src="https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/Logo.png?updatedAt=1702537419917" alt="big logo" onClick={menuIconClick} className="h-1/2 w-1/2 " />
                      </div>
                    )}</p>
                  </div>

                </div>
                <div >
                  <Menu className="uldesign"  >

                    <Link onClick={() => setCurrentDashboard(null)} to="/"  >
                      <MenuItem icon={<FaHome className={`text-${theme.iconColor}-300 xsm:xsm:sm`} />}  >
                        <p className="text-sm xsm:hidden"  >Home</p>
                      </MenuItem>
                    </Link>


                    <Link onClick={() => setCurrentDashboard("/realstate")} to="/realstate" >
                      <MenuItem active={true} icon={<FaBuilding className={`text-${theme.iconColor}-300 xsm:text-sm`} />}>
                        <p className="xsm:text-sm xsm:hidden" >Real State</p>
                      </MenuItem>
                    </Link>


                    <Link onClick={() => setCurrentDashboard("/dineoutplace")} to="/dineoutplace">
                      <MenuItem icon={<FaBowlFood className={`text-${theme.iconColor}-300 xsm:text-sm `} />}>
                        <p className="xsm:text-sm xsm:hidden" >Dinner Place</p>
                      </MenuItem>
                    </Link>


                    <Link onClick={() => setCurrentDashboard("/education")} to="/education">
                      <MenuItem icon={<FaBookOpen className={`text-${theme.iconColor}-300 xsm:text-sm`} />}>
                        <p className="xsm:text-sm xsm:hidden" >Education</p>
                      </MenuItem>
                    </Link>


                    <Link onClick={() => setCurrentDashboard("/fitness")} to="/fitness">
                      <MenuItem icon={<FaWeightHanging className={`text-${theme.iconColor}-300 xsm:text-sm`} />}>
                        <p className="xsm:text-sm xsm:hidden">Fitness</p>
                      </MenuItem>
                    </Link>


                  </Menu>
                </div>
              </div  >
              {
                menuCollapse ? (
                  <div className="flex justify-center items-center h-1/5 xsm:none" >
                    <FaUser className={`text-${theme.iconColor}-300`} onClick={() => menuIconClick()} />
                  </div>
                ) : (
                  <>
                    <div className={` ${menuCollapse ? ("hidden ") :

                      ("flex flex-col justify-center items-center gap-5 mb-5 xsm:hidden")} `} >


                      <div className="flex w-full justify-center xsm:hidden" >
                        <img src={theme.image} alt="" className="w-2/4" />
                      </div>
                      <div className="flex items-center gap-3" >
                        <div>
                          <p className={`text-xl text-${theme.iconColor}-600  font-semibold`} >Hello User</p>
                        </div>
                        <div>
                          <FaRocket className={`text-${theme.iconColor}-300`} />
                        </div>
                      </div>


                      <div>
                        <p className="text-sm px-3 font-medium text-gray-600 text-center" >
                          Hello User This is our {`${theme.text}`} Dashboard.This is a normal version for watching graph and charts please buy subsciption
                        </p>
                      </div>
                      <div>
                        <button className={`flex items-center gap-3 bg-black text-${theme.iconColor}-300 p-3 px-5 rounded-2xl`} >
                          Upgrade Pro <GrUpgrade />
                        </button>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
          </Sidebar>
        </div>


      </div>
    </>
  );
};

export default Header;
