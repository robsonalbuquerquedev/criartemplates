// src/app/confra-cm-pg/layout.tsx

import React from "react";

export default function ConfraLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className="
                min-h-screen w-full
                bg-gradient-to-b from-sky-100 via-blue-50 to-sky-200
                px-4 md:px-10
                py-8 md:py-14
                flex justify-center
            "
        >
            <div
                className="
                    w-full
                    max-w-4xl
                    bg-white/60 backdrop-blur-xl
                    shadow-xl
                    rounded-2xl
                    border border-white/30
                    p-6 md:p-10
                    flex flex-col gap-6
                "
            >
                {children}
            </div>
        </div>
    );
}
