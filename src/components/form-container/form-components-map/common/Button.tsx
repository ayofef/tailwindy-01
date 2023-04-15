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
                <Link href={`/step/${prevStepId}`} className="btn btn-secondary hover:text-blue-400">
                    Go Back
                </Link>
            ) : null}

            {nextStepId ? (
                <Link href={`/step/${nextStepId}`} className="btn btn-primary hover:bg-blue-400/80">
                    Next Step
                </Link>
            ) : null}

            {children}
        </div>
    );
};
