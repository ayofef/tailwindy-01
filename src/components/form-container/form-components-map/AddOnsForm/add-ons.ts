const ADD_ONS_ID_MAP = {
    ONLINE_SERVICE: "ONLINE_SERVICE",
    LARGE_STORAGE: "LARGE_STORAGE",
    CUSTOMISABLE_PROFILE: "CUSTOMISABLE_PROFILE",
} as const;

export type AddOnsId = typeof ADD_ONS_ID_MAP[keyof typeof ADD_ONS_ID_MAP];

export const ADD_ONS = [
    {
        id: ADD_ONS_ID_MAP.ONLINE_SERVICE,
        label: "Online Service",
        description: "Access to multiplayer games",
        price: "+$1/mo",
    },
    {
        id: ADD_ONS_ID_MAP.LARGE_STORAGE,
        label: "Large Storage",
        description: "Extra 1TB of cloud save",
        price: "+$2/mo",
    },
    {
        id: ADD_ONS_ID_MAP.CUSTOMISABLE_PROFILE,
        label: "Customisable Profile",
        description: "Customise theme on your profile",
        price: "+$2/mo",
    },
];
