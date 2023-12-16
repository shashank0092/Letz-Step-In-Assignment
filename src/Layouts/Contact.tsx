import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    const [queryForm, setQueryForm] = useState(false)
    const queryFormSubmit = (e: React.FormEvent) => {
        console.log("shukla boi")
        e.preventDefault();
        toast("Our Business Growth Team will get in touch shortly, Thank you for your valuable inquiry.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setQueryForm(false)
    }
    return (
        <>
            {
                queryForm ?
                    (<>
                        <div>
                            <form onSubmit={queryFormSubmit} className="flex flex-col gap-5 items-center" >
                                <div className="flex gap-4 items-center" >
                                    <div>
                                        <p>Query:</p>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Enter Query Here" className="p-2 border border-black rounded-full" />
                                    </div>
                                </div>
                                <div className=" flex gap-4 items-center" >
                                    <div className="flex gap-4 items-center"  >
                                        <p>Email:</p>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Enter Email Here" className="p-2 border border-black rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="bg-purple-500 p-2 rounded-lg text-white">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                       
                    </>) :
                    (<><button className="bg-red-300 p-5 px-20 text-white text-xl font-bold rounded-xl xsm:w-full" onClick={() => setQueryForm(true)}  >Contact Now</button></>)
            }
          {
             <ToastContainer/>
          }
        </>
    )
}

export default Contact