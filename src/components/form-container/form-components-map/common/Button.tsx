import * as React from "react";
import Link from "next/link";

export interface ButtonProps {
    prevStepId?: number;
    nextStepId?: number;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ prevStepId, nextStepId }) => {
    return (
        <div className="flex justify-between items-center mt-auto">
            {prevStepId ? (
                <Link href={`/step/${prevStepId}`} className="bg-white text-blue-400 transition-all duration-[300ms] active:translate-y-1 border border-white hover:border-blue-400 font-semibold px-6 py-3 rounded-lg" type="submit">
                    Go Back
                </Link>
            ) : null}

            {nextStepId ? (
                <Link href={`/step/${nextStepId}`} className=" ml-auto bg-blue-400 hover:bg-blue-400/80 transition-all duration-[300ms] active:translate-y-1 text-white font-semibold px-6 py-3 rounded-lg" type="submit">
                    Next Step
                </Link>
            ) : null}
        </div>
    );
};
