const PLANS_IDS = {
    ARCADE: "ARCADE",
    ADVANCED: "ADVANCED",
    PRO: "PRO",
} as const;

export const PLANS = [
    {
        id: PLANS_IDS.ARCADE,
        label: "Arcade",
        price: "$9/mo",
        icon_url: "/icon-arcade.svg",
    },
    {
        id: PLANS_IDS.ADVANCED,
        label: "Advanced",
        price: "$12/mo",
        icon_url: "/icon-advanced.svg",
    },
    {
        id: PLANS_IDS.PRO,
        label: "Pro",
        price: "$15/mo",
        icon_url: "/icon-pro.svg",
    },
] as const;
