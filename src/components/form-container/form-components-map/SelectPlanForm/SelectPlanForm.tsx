import * as React from "react";
import { FormWrapper, Button } from "../common";
import { FORM_ID_MAP } from "@/constants";
import Image from "next/image";
import { PLANS } from "./plans";
import { SpanToggle } from "./SpanToggle";

export interface SelectPlanFormProps {}

export const SelectPlanForm: React.FunctionComponent<SelectPlanFormProps> = () => {
    return (
        <FormWrapper title="Select your plan" description="You have the option of monthly or yearly billing.">
            <div className="flex justify-between w-full">
                {PLANS.map((plan, index) => {
                    const isFirst = index === 0;

                    return (
                        <div key={plan.id} className={`flex flex-col h-[166px] p-4 w-[150px] border border-gray-300 hover:border-blue-300 hover:bg-blue-100/20 transition-all duration[300ms] rounded-md cursor-pointer ${isFirst ? "" : "ml-5"}`}>
                            <Image src={plan.icon_url} alt={plan.label} width={100} height={100} className="w-10 h-10" />
                            <div className="mt-auto flex flex-col items-start">
                                <p className="text-blue-400 font-semibold">{plan.label}</p>
                                <p className="text-gray-400 text-sm">{plan.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <SpanToggle />

            <Button prevStepId={FORM_ID_MAP.YOUR_INFO} nextStepId={FORM_ID_MAP.ADD_ONS} />
        </FormWrapper>
    );
};
