import * as React from "react";
import { FormIds, FORM_ID_MAP } from "@/constants";
import { PersonalInfoForm } from "./PersonalInfoForm";

export const FORM_COMPONENTS_MAP: Record<FormIds, React.FunctionComponent> = {
    [FORM_ID_MAP.YOUR_INFO]: PersonalInfoForm,
    [FORM_ID_MAP.SELECT_PLAN]: PersonalInfoForm,
    [FORM_ID_MAP.ADD_ONS]: PersonalInfoForm,
    [FORM_ID_MAP.SUMMARY]: PersonalInfoForm,
} as const;
