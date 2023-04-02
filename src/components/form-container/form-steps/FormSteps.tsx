import * as React from "react";
import { FORM_STEPS, FormIds } from "@/constants";

export interface FormStepsProps {
    stepId: FormIds;
}

export const FormSteps: React.FunctionComponent<FormStepsProps> = ({ stepId }) => {
    return (
        <div className="w-[260px] h-full bg-blue-300 rounded-[8px] pt-10 px-8 mr-8 bg-sidebar-desktop flex-shrink-0">
            {FORM_STEPS.map((step, index) => {
                const isActive = stepId === step.id;
                return (
                    <div key={step.id} className="flex items-center mb-8">
                        <div className={` ${isActive ? "bg-blue-100 text-blue-400" : "text-white border-white  border"} w-8 h-8 rounded-full  flex items-center justify-center  text-sm font-bold`}>{step.id}</div>
                        <div>
                            <p className="ml-4 text-gray-400 text-[12px]">STEP {step.id}</p>
                            <p className="ml-4 text-white text-sm font-bold uppercase tracking-widest">{step.title}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
