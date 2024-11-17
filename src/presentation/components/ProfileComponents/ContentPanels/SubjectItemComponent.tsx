import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface ObjectContent {
    subject:string;
    teacher:string;
    subjectId:string;
    credits:string;
}

export interface Props {
    subjectObj:ObjectContent;
}

export const SubjectItem = ({subjectObj}:Props) => {
    const [isPanelVisible, setIsPanelVisible] = useState(false);

    const togglePanel = () => {
        setIsPanelVisible(!isPanelVisible); 
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="flex z-2 flex-row justify-end w-full rounded-lg shadow-xl py-4 bg-surface cursor-pointer pr-4 gap-28 hover:bg-opacity-50" onClick={togglePanel}>
                    <h2 className="w-full ml-28 font-bold text-xl">{subjectObj.subject}</h2>
                    <ChevronDownIcon className="w-8 h-8"/>
                </div>

                <div
                    className={`transition-all z-1 duration-500 rounded-b-lg ease-in-out overflow-hidden ${
                    isPanelVisible ? "max-h-40" : "max-h-0"
                    }`}
                >
                    <div className="flex flex-row p-4 bg-surface shadow-xl justify-between">
                        <div className="flex flex-col items-start gap-2">
                            <p>Profesor: {subjectObj.teacher}</p>
                            <p>Codigo: {subjectObj.subjectId}</p>
                            <p>Créditos: {subjectObj.credits}</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className="flex flex-row items-center h-fit gap-1 bg-yellow-600 py-1 px-2 rounded-lg cursor-pointer">
                                <p>Requisitos del Curso</p>
                                <PlusCircleIcon className="w-5 h-5"/>
                            </div>
                            <div className="flex flex-row items-center h-fit gap-1 bg-yellow-600 py-1 px-2 rounded-lg cursor-pointer">
                                <p>Material de Estudio</p>
                                <PlusCircleIcon className="w-5 h-5"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </> 
    )
}