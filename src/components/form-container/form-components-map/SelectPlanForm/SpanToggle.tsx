"use client";

import * as React from "react";

export interface SpanToggleProps {}

export const SpanToggle: React.FunctionComponent<SpanToggleProps> = () => {
    const [isMonthly, setIsMonthly] = React.useState(true);
    const toggleMonthly = () => setIsMonthly((prevState) => !prevState);

    return (
        <div className="bg-blue-100/20 rounded-md w-full h-[54px] mt-8 flex items-center justify-center">
            <p className={`font-semibold text-sm duration-[300ms]  transition-all ${isMonthly ? "text-blue-400" : "text-gray-400"}`}>Monthly</p>

            <button type="button" onClick={toggleMonthly} className={`w-10 bg-blue-400 p-1 duration-[300ms]  transition-all rounded-[24px] flex mx-6 ${isMonthly ? "" : "justify-end"}`}>
                <div className="bg-white w-[14px] h-[14px] rounded-full">&nbsp;</div>
            </button>

            <p className={`font-semibold text-sm duration-[300ms]  transition-all ${isMonthly ? "text-gray-400" : "text-blue-400"}`}>Yearly</p>
        </div>
    );
};
