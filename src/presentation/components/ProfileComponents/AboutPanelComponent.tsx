import { AcademicCapIcon, BookOpenIcon, InformationCircleIcon, MapPinIcon } from "@heroicons/react/24/outline"

export const AboutPanel = () => {
    return (
        <>
            <div className="flex flex-col gap-4 bg-coverSurface w-full rounded-lg py-4 px-4 items-start shadow-lg h-min">
                <h2 className="font-semibold text-2xl" >About Me</h2>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-3">
                        <AcademicCapIcon className="w-7 h-7"/>
                        <span>Ingenieria de Sistemas</span>
                    </div>
                    <div className="flex flex-row gap-3">
                        <MapPinIcon className="w-7 h-7"/>
                        <span>Bogotá D.C</span>
                    </div>
                    <div className="flex flex-row gap-3">
                        <BookOpenIcon className="w-7 h-7"/>
                        <span>Primer Semestre</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-2 items-center">
                        <InformationCircleIcon className="w-7 h-7"/>
                        <span className="font-semibold">Personal Info</span>
                    </div>
                    <p className="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident odio dolore dolores eaque sequi, 
                    at veniam doloribus voluptate, magni obcaecati corporis eum quam suscipit mollitia dolorum facere aut deserunt. Possimus?</p>
                </div>
                
            </div>
        </>
    )
}