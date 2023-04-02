export const FORM_ID_MAP = {
    YOUR_INFO: 1,
    SELECT_PLAN: 2,
    ADD_ONS: 3,
    SUMMARY: 4,
} as const;

export type FormIds = typeof FORM_ID_MAP[keyof typeof FORM_ID_MAP];

export const FORM_STEPS = [
    {
        id: FORM_ID_MAP.YOUR_INFO,
        title: "Your Info",
    },
    {
        id: FORM_ID_MAP.SELECT_PLAN,
        title: "Select Plan",
    },
    {
        id: FORM_ID_MAP.ADD_ONS,
        title: "Add-ons",
    },
    {
        id: FORM_ID_MAP.SUMMARY,
        title: "Summary",
    },
] as const;
