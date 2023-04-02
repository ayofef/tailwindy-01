import * as React from "react";
import { FormWrapper, Button } from "../common";
import { FORM_ID_MAP } from "@/constants";
import { AddOns } from "./AddOns";

export interface AddOnsFormProps {}

export const AddOnsForm: React.FunctionComponent<AddOnsFormProps> = () => {
    return (
        <FormWrapper title="Pick add-ons" description="Add-ons help enhance your gaming experience">
            <AddOns />

            <Button prevStepId={FORM_ID_MAP.SELECT_PLAN} nextStepId={FORM_ID_MAP.SUMMARY} />
        </FormWrapper>
    );
};
