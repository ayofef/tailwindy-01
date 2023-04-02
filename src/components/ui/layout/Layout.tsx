import * as React from "react";

export interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return <main className="w-screen h-screen bg-blue-100/[0.2] flex justify-center items-center">{children}</main>;
};
