import * as React from "react";
import { FormWrapper, Button } from "../common";
import { FORM_ID_MAP } from "@/constants";

export interface SummaryFormProps {}

export const SummaryForm: React.FunctionComponent<SummaryFormProps> = () => {
    return (
        <FormWrapper title="Finishing up" description="Double-check everything looks OK before confirming.">
            <div className="bg-blue-100/20 rounded-lg p-6">
                <div className="flex justify-between pb-6 mb-6 border-b">
                    <p className="text-blue-400 font-medium">Arcade (Monthly)</p>
                    <p className="text-blue-400 text-md font-medium">$9/mo</p>
                </div>
                <div className="flex justify-between mb-4">
                    <p className="text-gray-400">Online service</p>
                    <p className="text-blue-400">$1/mo</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-400">Larger storage</p>
                    <p className="text-blue-400">$2/mo</p>
                </div>
            </div>
            <div className="flex justify-between mt-8 px-6">
                <p className="text-gray-400">Total (per month)</p>
                <p className="text-blue-300 text-lg font-medium">$12/mo</p>
            </div>
            <Button prevStepId={FORM_ID_MAP.ADD_ONS}>
                <button type="button" className=" ml-auto bg-blue-400 hover:bg-blue-400/80 transition-all duration-[300ms] active:translate-y-1 text-white font-medium px-6 py-3 rounded-lg">
                    Confirm
                </button>
            </Button>
        </FormWrapper>
    );
};
