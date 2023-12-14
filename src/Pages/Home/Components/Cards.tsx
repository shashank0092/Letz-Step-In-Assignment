import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../global/store";

interface Props {
    carddetails: {
        image: string;
        headText: string;
        subText: string;
        route: string
    }
}



const Cards = ({ carddetails }: Props) => {

    const{setCurrentDashboard}=useGlobalContext()

    return (
        <>

            <div className="px-10 xsm:px-5" >
                <div className="flex w-full justify-around  bg-black py-10 rounded-3xl xsm:flex-col xsm:justify-center xsm:items-center xsm:py-5" >
                    <div className="w-1/12  xsm:w-full xsm:px-10 xsm:py-5"  >

                        <img src={carddetails?.image} alt="buldings" className=" flex-0 rounded-xl" draggable />

                    </div>
                    <div className="flex flex-col gap-5 w-3/6 xsm:w-full xsm:px-5 xsm:py-5" >
                        <div>
                            <p className="text-white font-bold text-5xl xsm:text-center xsm:text-xl  " > {carddetails?.headText} </p>
                        </div>
                        <div>
                            <p className="text-white text-xl w-2/3 xsm:text-sm xsm:w-full xsm:text-center " >{carddetails?.subText}</p>
                        </div>
                    </div>

                    <div className=" flex items-center" >
                        <Link onClick={()=>setCurrentDashboard(carddetails?.route)} to={carddetails?.route} className="bg-green-600 text-white py-5 px-5 rounded-2xl flex gap-3 items-center  " >Dashboard <FaArrowRight /> </Link>
                    </div>
                </div>
            </div>

        </>
    )


}

export default Cards;