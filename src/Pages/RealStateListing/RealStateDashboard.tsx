import SideNavigation from "../../Layouts/SideNaviagtion";
import Header from "./components/Header";
import MetaCard from "../../Layouts/MetaCard";
import { FaUser } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import Table from "./components/Table";
import Footer from "../../Layouts/Footer";


const RealStateDashboard = () => {



    return (
        <>
            <div className="w-full" >
                <div className="fixed  border " >
                    <SideNavigation />
                </div>

                <div className="pl-72 flex flex-col gap-10 w-full" >
                    <div className="w-full py-5" >
                        <Header />
                    </div>
                    <div className="flex justify-around" >
                        <MetaCard icons={<FaUser size={40} color="#ffff" />} text="Users" color="bg-blue-400" number="200" />
                        <MetaCard icons={<FaBuildingCircleCheck size={40} color="#ffff" />} text="Sold" color="bg-green-400" number="100" />
                        <MetaCard icons={<FaBuilding size={40} color="#ffff" />} text="In List" color="bg-red-400" number="300" />
                        <MetaCard icons={<FaMapMarkerAlt size={40} color="#ffff" />} text="Cities" color="bg-yellow-400" number="200" />
                    </div>
                    <div className="" >
                        <div>
                            <p className="text-4xl font-semibold" > Propertey Listed </p>
                        </div>
                        <div className="mb-16" >
                            <Table />
                        </div>
                    </div>
                </div>

                <div className="absolute w-full" >
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default RealStateDashboard;