import { MdCancel } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";
import { FaKitMedical } from "react-icons/fa6";
import { MdDirectionsTransit } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";
import Map from "../../../Layouts/Map";
import { IoIosKey } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { SlActionRedo } from "react-icons/sl";
import Contact from "../../../Layouts/Contact";
interface Props {
    property: {
        Id: string,
        address: string,
        name: string
        image: string,
        ratings: number,
        maxPrice: number,
        minPrice: number,
        onborded: string,
        ProperteyOwner: string,
        contactNumber: number,
        officeEmail: string,
        bigImage: string,
        rent: Array<object>,
        about: string,
        location: { lat: number, lng: number }
    },
    setDetailsBox: React.Dispatch<React.SetStateAction<boolean>>

}



const AllDetailsBox = ({ property, setDetailsBox }: Props) => {


    return (
        <>
            <div className=" bg-gray-200 rounded-xl  xsm:w-[90vw]  " >
                <div>
                    <div style={{ backgroundImage: `url(${property.bigImage})` }} className="xsm:bg-cover  h-[40vh]  rounded-xl" ></div>
                    <div className="absolute top-2 left-2"   >
                        <MdCancel color="#ffff" size={40} onClick={() => setDetailsBox(false)} />
                    </div>
                </div>
                <div className="flex overflow-x-auto overflow-y-auto xsm:overflow-x-hidden h-80 xsm:flex-col " >
                    <div className="p-5 flex flex-col gap-5 xsm:p-0" >

                        <div className="flex flex-row justify-between items-center gap-5 mt-2 xsm:px-3">
                            <div className="flex flex-row items-center xsm:flex-col" >
                                <p className="text-2xl font-normal xsm:hidden" >
                                    Name:
                                </p>
                                <p className="text-xl xsm:text-base" >
                                    {property?.name}
                                </p>
                            </div>
                            <div className="bg-purple-900 p-3 rounded-full xsm:p-2" >
                                <p className="flex items-center text-white" >
                                    Verified:<MdVerified className="text-green-300 text-3xl xsm:text-lg" />
                                </p>
                            </div>
                        </div>
                        <div className="xsm:px-3">
                            <div className="flex flex-row items-center">
                                <p className="text-2xl font-normal xsm:hidden" >
                                    Address:
                                </p>
                                <p className="text-lg xsm:text-base">
                                    {property?.address}
                                </p>
                            </div>
                        </div>
                        <div>
                           
                        </div>
                        <div className="flex flex-col gap-5 xsm:items-center" >
                            <div >
                                <p className="text-2xl font-normal"  >Saftey Provided:</p>
                            </div>
                            <div className="flex  gap-10 xsm:flex-col" >
                                <div className="flex flex-col items-center justify-center gap-3 " >
                                    <div>
                                        <AiFillSafetyCertificate size={40} className="text-red-300" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium " >Security Services</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div>
                                        <MdOutlineSecurity size={40} className="text-green-300" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium">Digital Security</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div>
                                        <GiSecurityGate className="text-purple-300" size={40} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium">Advance Cheacking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 xsm:items-center"  >
                            <div>
                                <p className="text-2xl font-normal" >Facilites Provided:</p>
                            </div>
                            <div className="flex gap-10 xsm:flex-col "   >
                                <div className="flex flex-col items-center justify-center gap-3" >
                                    <div>
                                        <FaKitMedical size={40} className="text-green-300" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium">Medical Facilities</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div>
                                        <MdDirectionsTransit size={40} className="text-yellow-300" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium">Transport Facilities</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div>
                                        <IoMdAirplane size={40} className="text-blue-300" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium">Airport Facilities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-3">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/_K4MiRt0yrw?si=7deHJgwSDzMQW8dG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="xsm:w-[85vw]" ></iframe>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col gap-5" >
                        <div>

                            <div className="flex " >
                                <p className="flex text-xl items-center gap-2 font-medium" ><FaMap className="text-xl text-yellow-300 " />Map Location:</p>
                            </div>
                            <div className="h-[37vh] w-[45vw] xsm:w-[81vw]" >
                                <Map lat={property.location.lat} lng={property.location.lng} />
                            </div>

                        </div>
                        <div>
                            <div>
                                <p className="flex items-center gap-2 text-xl font-medium" ><MdLeaderboard className="text-red-300 text-xl" />Owner Details:</p>
                            </div>
                            <div>
                                <div>
                                    <p className="flex items-center gap-2 text-lg " ><IoIosKey className="text-blue-300" />{property.ProperteyOwner}</p>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2 text-lg "><FaPhoneAlt className="text-green-300" />{property.contactNumber}</p>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2 text-lg "><MdEmail className="text-pink-300" />{property.officeEmail}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="flex items-center font-medium text-lg gap-2" ><FaInfoCircle className="text-lg text-purple-300" />About Us</p>
                            </div>
                            <div>
                                <p className="xsm:text-center" >{property.about}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2" >
                            <div  >
                                <p className="flex items-center gap-2 text-lg font-medium" ><SlActionRedo className="text-orange-300 " />Want To</p>
                            </div>
                            <div className="flex justify-around xsm:flex-col xsm:gap-5">
                                <div  >
                                    <button className="bg-green-300 p-5 px-20 text-white text-xl font-bold rounded-xl xsm:w-full" >Buy</button>
                                </div>
                                <div>
                                    <Contact/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AllDetailsBox