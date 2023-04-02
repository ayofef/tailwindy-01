const FIELD_MAP = {
    name: "name",
    email: "email",
    phone: "phone",
} as const;

export const FIELDS = [
    {
        name: FIELD_MAP.name,
        label: "Name",
        type: "text",
        placeholder: "Full name",
    },
    {
        name: FIELD_MAP.email,
        label: "Email",
        type: "email",
        placeholder: "joe@example.com",
    },
    {
        name: FIELD_MAP.phone,
        label: "Phone",
        type: "tel",
        placeholder: "e.g. +1 234 567 890",
    },
] as const;
