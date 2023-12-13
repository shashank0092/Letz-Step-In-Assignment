import React from "react";
import { motion, useInView } from "framer-motion"
import { Header, RealStateCard, DineOutCard, EducationCard, FitnessCard, Banner } from "./Components"
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react"
import Footer from "../../Layouts/Footer";

const Home = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
  
    return (
        <>
            <div className="bg-gray-200"   >
                <div>
                    <Header />
                </div>
                <div  >
                    <div className="px-20 py-20  flex items-center xsm:px-5 xsm:py-5 " >
                        <div className=" w-full" >
                            <motion.p
                                className="text-black font-bold text-4xl flex gap-5 xsm:text-base"
                                initial={{ x: -500 }}
                                animate={{ x: 0 }}
                                whileHover={{ color: "green", textDecoration: "underline" }}

                            >Expolre Our Fancey And Simple Dashboard <FaArrowRightLong size={40} /></motion.p>
                        </div>

                    </div>
                    <div className="flex flex-col gap-5" ref={ref} >
                        <motion.div 
                        
                        style={{
                       
                            transform:isInView?"none":"translateX(-2000px)",
                            transition:"all 5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        >
                            <RealStateCard />
                        </motion.div>
                        <motion.div
                        
                        style={{
                       
                            transform:isInView?"none":"translateX(2000px)",
                            transition:"all 5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        
                        >
                            <DineOutCard />
                        </motion.div>
                        <motion.div
                       
                        style={{
                        
                            transform:isInView?"none":"translateX(-2000px)",
                            transition:"all 5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        >
                            <EducationCard />
                        </motion.div>
                        <motion.div
                        
                         style={{
                            // display:isInView?"flex":"none",
                            transform:isInView?"none":"translateX(2000px)",
                            transition:"all 5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                         >
                            <FitnessCard />
                        </motion.div>
                    </div>

                    <div className="py-10 " >
                        <Banner />
                    </div>

                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;