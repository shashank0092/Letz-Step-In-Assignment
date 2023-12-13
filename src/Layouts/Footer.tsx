import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="bg-black px-20 py-20 flex flex-col gap-10">
                <div className="flex justify-evenly" >
                    <div className=" w-1/3" >
                        <div className="flex items-center gap-2" >
                            <div className="" >
                                <img src="https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/LogoIcon.png?updatedAt=1702456713242" alt="" className="" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-2xl" >
                                    LetZ Step In
                                </p>
                            </div>
                        </div>
                        <div  >
                            <div className="flex gap-2 items-center">
                                <div>
                                    <FaMapMarkerAlt color="#ffff" />
                                </div>
                                <div>
                                    <p className="text-white w-1/2" >S NO. 578/2, FL NO. C-4023 ATHAR GALAXYDS BHOOMKAR WASTIKD, WAKADGB, PUNEJE Pune MH 411057 IN</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center" >
                                <div>
                                    <MdMail color="#ffff" />
                                </div>
                                <div>
                                    <p className="text-white" >sumitbhumkar111169@gmail.com</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5" >
                        <p className="text-white font-bold text-xl" >Home</p>
                        <p className="text-white font-bold text-xl" >Education</p>
                        <p className="text-white font-bold text-xl" >Real State</p>
                        <p className="text-white font-bold text-xl" >Fitness</p>
                        <p className="text-white font-bold text-xl" >Dining Place</p>

                    </div>
                    <div className="flex flex-col gap-5" >
                        <p className="text-white font-bold text-xl" >Contact Us</p>
                        <p className="text-white font-bold text-xl" >Have Query</p>
                        <p className="text-white font-bold text-xl" >Carrer</p>
                        <p className="text-white font-bold text-xl" >About Us</p>
                        <p className="text-white font-bold text-xl" >Team</p>


                    </div>
                    
                </div>

                <div className="flex justify-evenly " >
                    <div>
                        <FaLinkedin color="#ffff" size={30} />
                    </div>
                    <div>
                        <FaInstagramSquare color="#ffff" size={30}/>
                    </div>
                    <div>
                        <FaFacebook color="#ffff" size={30}/>
                    </div>
                    <div>
                        <FaSnapchat color="#ffff" size={30}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;