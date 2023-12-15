import { EducationData } from "../constant/EducationData";

import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useState, useEffect } from "react"
import DetailsCard from "./DetailsCard";
const Properties = () => {
    const [resultData, SetResultData] = useState<any>([]);
    const [pageIndex, SetPageIndex] = useState<number>(11);


    useEffect(() => {
        const setData = []
        for (let i = 0; i < 10; i++) {
            setData.push(EducationData[i]);
        }
        SetResultData(setData)
    }, [])

    const NextPage = () => {
        const number = pageIndex;

        if (pageIndex > 11) {
            return;
        }
        const setData = []
        for (let i = number - 1; i < number + 9; i++) {
            setData.push(EducationData[i])
        }
        SetPageIndex(pageIndex + 10)
        console.log(pageIndex, "after + btn")
        SetResultData(setData);
        console.log(pageIndex, "this is avliable page index")
    }

    const PreviousPage = () => {
        const number = pageIndex;
        console.log(number, "this is page number")
        // if(number==11){
        //     return;
        // }

        const setData = [];

        for (let i = number; i <= number - 10; i--) {
            console.log(i);
            setData.push(EducationData[i]);
        }
        SetPageIndex(pageIndex - 10)
        SetResultData(setData)
    }
    return (
        <>
            <div>
                <div className="grid  grid-cols-3 gap-20 xsm:grid-cols-2 xsm:gap-20 xsm:p-5 " >
                    {
                        resultData.map((property: any, key: any) => {

                            return (
                                <DetailsCard property={property} key={key} />
                            )
                        })
                    }
                </div>

                <div>
                    <div className="flex justify-evenly mt-5 items-center h-full w-full" >
                        <div  >
                            <button onClick={() => PreviousPage()} >
                                <FaAngleDoubleLeft />
                            </button>
                        </div>
                        <div>
                            {
                                pageIndex > 11 ? (
                                    <>
                                        <p className="text-xl font-bold h-full" >2</p>
                                    </>
                                ) : (
                                    <p className="text-xl font-bold h-full" >1</p>
                                )
                            }
                        </div>
                        <div>
                            <button onClick={() => NextPage()} >
                                <FaAngleDoubleRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Properties;