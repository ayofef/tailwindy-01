import * as React from "react";
import { FormSteps, FormStepsProps } from "./form-steps/FormSteps";
import { FORM_COMPONENTS_MAP } from "./form-components-map";

export interface FormContainerProps extends FormStepsProps {}

export const FormContainer: React.FunctionComponent<FormContainerProps> = ({ stepId }) => {
    const FormComponent = FORM_COMPONENTS_MAP[stepId];

    return (
        <div className="bg-white rounded-[16px] w-[900px] h-[600px] p-4 flex">
            <FormSteps stepId={stepId} />
            {FormComponent ? <FormComponent /> : null}
        </div>
    );
};
