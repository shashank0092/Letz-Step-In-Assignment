import React from "react"
interface Props {
    icons: React.ReactElement,
    text: string,
    color: string,
    number: string

}

const MetaCard = ({ icons, text, color, number }: Props) => {
    return (
        <>

            <div className={`${color} w-1/5 h-44  rounded-xl flex flex-col justify-evenly items-center xsm:w-full  `} >
                <div>
                    {icons}
                </div>
                <div className="flex flex-col items-center" >
                    <div>
                        <p className="text-3xl text-white font-semibold" >{text}</p>
                    </div>
                    <div>
                        <p className="text-lg font-medium text-white" >{number}+</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MetaCard;