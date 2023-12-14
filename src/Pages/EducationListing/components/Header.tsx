const Header = () => {
    return (
        <> 
            <div className="flex  items-center w-full xsm:flex-col " >
                <div className="w-1/2 xsm:w-full  " >
                    <div className="xsm:py-5" >
                        <p className="font-bold text-7xl leading-relaxed xsm:text-4xl xsm:text-center text-blue-300" >Hello Sir,</p>
                    </div>

                    <div className="" >
                        <p className="font-semibold text-5xl leading-snug xsm:text-xl xsm:text-center xsm:py-2 " >Welcome to our Educational Propertey Dashboard</p>
                        <p className="font-medium text-xl leading-tight xsm:text-lg xsm:text-center" >Best Places for quality education </p>
                    </div>

                </div>

                <div className=" w-1/2 xsm:w-full xsm:mt-20" >
                    <img src="https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/college%20students-bro.png?updatedAt=1702582779696" alt="" className="" />
                </div>
            </div>
        </>
    )
}

export default Header;