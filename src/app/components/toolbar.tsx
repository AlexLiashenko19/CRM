import React from "react";

export interface ToolBarProps {
    children: React.ReactNode;
    actions?: React.ReactNode;
}

export default function ToolBar({ children, actions}: ToolBarProps) {
    return (
        <div className="flex items-center gap-7 py-8 px-10">
            <div className="flex-1">
                {children}
            </div>
            {actions}
        </div>
    )
}