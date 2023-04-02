import * as React from "react";
import Link from "next/link";

export interface ButtonProps {
    label: string;
    nextStepId: number;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ label, nextStepId }) => {
    return (
        <Link href={`/step/${nextStepId}`} className="mt-auto ml-auto bg-blue-400 hover:bg-blue-400/80 transition-all duration-[300ms] active:translate-y-1 text-white font-semibold px-6 py-3 rounded-lg" type="submit">
            {label}
        </Link>
    );
};
