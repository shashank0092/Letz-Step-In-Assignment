import { RealStateData } from "../constant/RealstateData";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import {useState,useEffect} from "react"
const Table = () => {

    const[resultData,SetResultData]=useState<any>([]);
    const[pageIndex,SetPageIndex]=useState<number>(11);

    useEffect(()=>{
        const setData=[]
        for(let i=0;i<10;i++){
            setData.push(RealStateData[i]);
        }
        SetResultData(setData)
    },[])

    const NextPage=()=>{
        const number=pageIndex;

        if(pageIndex>11){
            return;
        }
        const setData=[]
        for(let i=number-1;i<number+9;i++){
            setData.push(RealStateData[i])
        }
        SetPageIndex(pageIndex+10)
        console.log(pageIndex,"after + btn")
        SetResultData(setData);
        console.log(pageIndex,"this is avliable page index")
    }

    const PreviousPage=()=>{
        const number=pageIndex;
        console.log(number,"this is page number")
        // if(number==11){
        //     return;
        // }

        const setData=[];

        for(let i=number;i<=number-10;i--){
            console.log(i);
            setData.push(RealStateData[i]);
        }
        SetPageIndex(pageIndex-10)
        SetResultData(setData)
    }
    
    return (
        <>
            <div className='w-full flex flex-col items-center justify-center mt-10 '>
                <div className='w-11/12'>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className='h-16 border border-black'>
                                <th className='text-center text-lg border-r border-black'>Id</th>
                                <th className='text-center text-lg w-3/6 border-r border-black'>Address</th>

                             
                                <th className='text-center text-lg border-r border-black'> Price</th>
                        
                          
                                <th className='text-center text-lg border-r border-black'>Contact</th>
                                <th className='text-center text-lg w-1/6 border-r border-black'>Reach US</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            {
                                resultData.map((ele:any, index:any) => {
                                    return (
                                        <tr className='h-16 border-b' key={index}>
                                            <td className="border border-black text-center" >{ele.Id}</td>
                                            <td className="border border-black text-center">{ele.address}</td>
                                            
                                            
                                            <td className="border border-black text-center">{ele.maxPrice}</td>
                                           
                                            <td className="border border-black text-center">{ele.contactNumber}</td>
                                            
                                            <td className="border border-black">
                                                <div className='flex items-center justify-evenly'>
                                                    <button className="bg-green-400 p-3 rounded-xl text-white" >Issue Report</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-evenly mt-5 items-center h-full w-full" >
                        <div  >
                            <button onClick={()=>PreviousPage()} >
                            <FaAngleDoubleLeft />
                            </button>
                        </div>
                        <div>
                           {
                            pageIndex>11?(
                                <>
                                     <p className="text-xl font-bold h-full" >2</p>
                                </>
                            ):(
                                <p className="text-xl font-bold h-full" >1</p>
                            )
                           }
                        </div>
                        <div>
                            <button onClick={()=>NextPage()} >
                                <FaAngleDoubleRight/>
                            </button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Table;