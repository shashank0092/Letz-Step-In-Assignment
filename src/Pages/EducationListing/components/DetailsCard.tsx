import { IoIosStar } from "react-icons/io";
import AllDetailsBox from "./AllDetailsBox";
import { useState } from "react";
interface Props{
    property:{
        Id:string,
        name:string,
        address:string,
        image:string,
        ratings:number,
        maxPrice:number,
        minPrice:number,
        onborded:string,
        ProperteyOwner:string,
        contactNumber:number,
        officeEmail:string,
        bigImage:string,
        rent:Array<object>,
        about:string,
        location:{lat:number,lng:number}
    }
}

const DetailsCard = ({property}:Props) => {

    const[showDetailsBox,setDetailsBox]=useState(false)
    return (
        <>
            <>
                 
                <div className={`${showDetailsBox?("flex fixed bg-white top-0.5 m-10 bottom-0 left-20 right-0 xsm:m-0 xsm:left-5 xsm:top-10 md:top-16 md:h-[80vh] border border-black rounded-xl h-[90vh]  justify-center item xsm:w-[90vw] "):("hidden")}`} >
                    <AllDetailsBox property={property} setDetailsBox={setDetailsBox}  />
                </div>

                <div className="  flex flex-col justify-around items-center  rounded-3xl bg-blue-200 w-[25vw] h-96 p-10 xsm:p-0 xsm:w-[38vw]  md:w-[20vw]  md:p-0" >
                    <div className="flex justify-center" >
                        <img src={property.image}  alt="propertye image" className="w-1/2 rounded-xl" />
                    </div>
                    <div className="flex flex-row xsm:flex xsm:flex-col  " >

                        <div>
                            <p className="text-sm font-bold text-white  w-1/2 xsm:hidden md:hidden" >
                                {property.address}
                            </p>
                        </div>
                        <div className="" >
                            <p className="text-lg font-bold flex items-center gap-1 text-white " >
                                <IoIosStar className="text-yellow-400" />{property.ratings}
                            </p>
                        </div>
                    </div>

                    <div>
                        <button className="bg-green-300  p-5 rounded-2xl " onClick={()=>setDetailsBox(true)} >See More</button>
                    </div>

                </div>
            </>
        </>
    )
}

export default DetailsCard;