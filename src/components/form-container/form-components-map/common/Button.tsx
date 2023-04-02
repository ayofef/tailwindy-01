import * as React from "react";
import Link from "next/link";
export interface ButtonProps {
    prevStepId?: number;
    nextStepId?: number;
    children?: React.ReactNode;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ prevStepId, nextStepId, children }) => {
    return (
        <div className="flex justify-between items-center mt-auto">
            {prevStepId ? (
                <Link href={`/step/${prevStepId}`} className="bg-white text-gray-400 transition-all duration-[300ms] active:translate-y-1  hover:text-blue-400 font-medium px-6 py-3 rounded-lg">
                    Go Back
                </Link>
            ) : null}

            {nextStepId ? (
                <Link href={`/step/${nextStepId}`} className=" ml-auto bg-blue-400 hover:bg-blue-400/80 transition-all duration-[300ms] active:translate-y-1 text-white font-medium px-6 py-3 rounded-lg">
                    Next Step
                </Link>
            ) : null}

            {children}
        </div>
    );
};
