'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ExchangeForm, } from "./forms";

export default function Exchange() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [token, setToken] = useState();
    const [address, setAddress] = useState("0x0000000000");

    return (
        <div className="my-auto">
            <div className="w-96 my-auto mx-4">
                <div className="w-xl p-6 text-left rounded-3xl shadow-lg backdrop-blur-3xl bg-gray-600/25">
                    <ExchangeForm
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
}