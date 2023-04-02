import * as React from "react";
import { FormWrapper, TextInput, Button } from "../common";
import { FORM_ID_MAP } from "@/constants";
import { FIELDS } from "./form-settings";

export interface PersonalInfoFormProps {}

export const PersonalInfoForm: React.FunctionComponent<PersonalInfoFormProps> = () => {
    return (
        <FormWrapper title="Personal Info" description="Please provide your name, email address and phone number.">
            {FIELDS.map((field) => (
                <TextInput key={field.name} label={field.label} id={field.name} placeholder={field.placeholder} />
            ))}

            <Button label="Next Step" nextStepId={FORM_ID_MAP.SELECT_PLAN} />
        </FormWrapper>
    );
};
