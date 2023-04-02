import * as React from "react";

export interface FormWrapperProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

export const FormWrapper: React.FunctionComponent<FormWrapperProps> = ({ children, title, description }) => {
    return (
        <form className="pt-10 pb-4 flex justify-center w-full">
            <div className="w-full max-w-md flex flex-col">
                <div className="mb-9">
                    <h1 className="text-3xl font-bold text-blue-400 mb-2">{title}</h1>
                    <p className="text-gray-400">{description}</p>
                </div>

                {children}
            </div>
        </form>
    );
};
