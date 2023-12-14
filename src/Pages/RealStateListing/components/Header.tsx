const Header = () => {
    return (
        <> 
            <div className="flex  items-center w-full " >
                <div className="w-1/2" >
                    <div>
                        <p className="font-bold text-7xl leading-relaxed " >Hello Sir,</p>
                    </div>

                    <div className="" >
                        <p className="font-semibold text-5xl leading-snug" >Welcome to our Property Dashboard</p>
                        <p className="font-medium text-xl leading-tight" >Best Property Deals</p>
                    </div>

                </div>

                <div className=" w-1/2" >
                    <img src="https://ik.imagekit.io/shashank007/Letz%20Step%20In%20Assignment/Business%20deal-bro.png?updatedAt=1702557869327" alt="" className="" />
                </div>
            </div>
        </>
    )
}

export default Header;