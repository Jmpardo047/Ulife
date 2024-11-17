import { SubjectItem } from "./SubjectItemComponent"
import { ObjectContent } from "./SubjectItemComponent"

export const SubjectItem1:ObjectContent = {
    subject:"Introducción a Ingeniería de Sistemas",
    teacher:"AAAA",
    subjectId:"1234",
    credits:"3"
}

export const SubjectItem2:ObjectContent = {
    subject:"Introducción a la Programación",
    teacher:"AAAA",
    subjectId:"1234",
    credits:"3"
}

export const SubjectItem3:ObjectContent = {
    subject:"Cálculo",
    teacher:"AAAA",
    subjectId:"1234",
    credits:"3"
}

export const SubjectItem4:ObjectContent = {
    subject:"Cálculo",
    teacher:"AAAA",
    subjectId:"1234",
    credits:"3"
}

export const MySubjects:React.FC = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full overflow-y-scroll sroll scrollbar-short">
                <div className="flex flex-col w-2/3 rounded-lg shadow-lg gap-2">
                    <SubjectItem subjectObj={SubjectItem1}/>
                    <SubjectItem subjectObj={SubjectItem2}/>
                    <SubjectItem subjectObj={SubjectItem3}/>
                </div>
            </div>
        </>
    )
}