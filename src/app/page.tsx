"use client";

export default function Home() {
    // redirect to /step

    if (typeof window !== "undefined") {
        window?.location?.replace?.("/step/1");
    }

    return null;
}
