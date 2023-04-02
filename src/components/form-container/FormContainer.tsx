import * as React from "react";
import { FormSteps, FormStepsProps } from "./form-steps/FormSteps";

export interface FormContainerProps extends FormStepsProps {}

export const FormContainer: React.FunctionComponent<FormContainerProps> = ({ stepId }) => {
    return (
        <div className="bg-white rounded-[16px] w-[900px] h-[600px] p-4 flex">
            <FormSteps stepId={stepId} />
            <div>FormContainer</div>
        </div>
    );
};
