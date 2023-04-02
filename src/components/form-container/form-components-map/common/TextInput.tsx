import * as React from "react";

export interface TextInputProps {
    type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "range" | "file" | "checkbox" | "radio" | "submit" | "image" | "reset" | "button";

    label: string;

    id: string;

    placeholder: string;
}

const HAS_ERROR = false;

export const TextInput: React.FunctionComponent<TextInputProps> = ({ type = "text", label, id, placeholder }) => {
    return (
        <div className="w-full mb-6">
            <label htmlFor={id} className="flex flex-col w-full">
                <span className="mb-1 text-sm flex justify-between">
                    <span>{label}</span>
                    {HAS_ERROR ? <span className="text-red-400 font-medium">{label}</span> : null}
                </span>
                <input
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    className="rounded-lg border border-gray-300 h-12 text-blue-400 font-medium focus:ring-transparent focus:border-blue-400 focus:border focus:shadow-none focus:outline-0 focus:outline-offset-0  placeholder:text-gray-400 placeholder:font-normal "
                />
            </label>
        </div>
    );
};
