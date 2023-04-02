"use client";

import * as React from "react";
import Image from "next/image";
import { ADD_ONS, AddOnsId } from "./add-ons";

export interface AddOnsProps {}

export const AddOns: React.FunctionComponent<AddOnsProps> = () => {
    const [selectedAddOns, setSelectedAddOns] = React.useState<AddOnsId[]>([]);

    const handleToggleAddOn = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { id } = e.currentTarget;

        if (selectedAddOns.includes(id as AddOnsId)) {
            setSelectedAddOns((prev) => prev.filter((addOn) => addOn !== id));
        } else {
            setSelectedAddOns((prev) => [...prev, id as AddOnsId]);
        }
    };

    return (
        <>
            {ADD_ONS.map((addOn, index) => {
                const isFirst = index === 0;

                const isSelected = selectedAddOns.includes(addOn.id);

                return (
                    <button
                        type="button"
                        key={addOn.id}
                        id={addOn.id}
                        onClick={handleToggleAddOn}
                        className={`${isFirst ? "" : "mt-4"} ${isSelected ? "border-blue-300 bg-blue-100/20" : "border-gray-400"} border  hover:border-blue-300 transition-all duration-[300ms] rounded-lg flex items-center p-4 hover:bg-blue-100/20`}
                    >
                        <div className={`w-6 h-6 border rounded flex items-center justify-center ${isSelected ? "bg-blue-300 border-blue-300" : "bg-white border-gray-300"}`}>{isSelected ? <Image src="/icon-checkmark.svg" alt="check" width={16} height={16} /> : null}</div>
                        <div className={`ml-6 flex flex-col items-start`}>
                            <p className="text-blue-400 font-medium">{addOn.label}</p>
                            <p className="text-gray-400">{addOn.description}</p>
                        </div>

                        <div className={`ml-auto`}>
                            <p className="text-blue-300">{addOn.price}</p>
                        </div>
                    </button>
                );
            })}
        </>
    );
};
