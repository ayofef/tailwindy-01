"use client";

import { useRouter } from "next/navigation";

export default function Home() {
    // redirect to /step
    const router = useRouter();

    router.replace("/step/1");

    return null;
}
