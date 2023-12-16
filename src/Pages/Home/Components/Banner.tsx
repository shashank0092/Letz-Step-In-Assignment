import { motion,useInView } from "framer-motion";
import { useRef } from "react"

const Banner=()=>{

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    console.log(isInView,"THIS IS IN BANNER FILE")
    return(
        <>

            <div className="px-20 py-10 flex flex-row gap-5 bg-pink-400 xsm:flex-col xsm:justify-center xsm:items-center xsm:px-0 xsm:py-10 xsm:rounded-2xl"   >

                <div className="w-3/12  xsm:w-3/4 md:w-3/4" > 
                    <motion.img src="https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/Logo.jpeg?updatedAt=1702453784543" alt="" className="w-full  rounded-xl" drag dragConstraints={{top:0,bottom:0,left:0,right:0}} />
                </div>

                <div className="flex flex-col justify-center items-center  gap-5" ref={ref}>
                    <div>
                        <motion.p 
                        className="text-white text-3xl text-center xsm:text-lg" 
                        style={{
                            scale:isInView?2:0,
                            transition:"all 5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        >
                        Letz Step In
                        
                        </motion.p>
                    </div>
                    <div className="xsm:w-[100vw] " >
                        <p className="text-white text-lg tracking-wider xsm:w-full xsm:tracking-normal xsm:px-5 xsm:text-base" >Best Insdustry Data,Timeline,Great Qulity Dashabords,Working And Intractive Dasboard Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio totam accusantium laudantium, exercitationem quae doloremque libero officia, nobis explicabo itaque in nemo repellendus aliquid odit, fugit similique corporis? Ullam?</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Banner;