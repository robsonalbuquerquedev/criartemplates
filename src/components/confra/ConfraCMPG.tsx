"use client";

import { people } from "@/data/pessoas";


export default function ConfraCMPG() {
    // --- Counters ---
    const totalParticipants = people.length;

    const totalPaid = people.filter((p) => p.paid === "Sim").length;

    const totalValue = people
        .filter((p) => p.value !== "-")
        .reduce((sum, p) => {
            const num = Number(p.value.replace("R$", "").replace(",", "."));
            return sum + num;
        }, 0);

    return (
        <section className="flex flex-col gap-6">

            {/* Title */}
            <h2 className="text-2xl font-bold text-center">
                Confra CM PG — Participantes
            </h2>

            {/* Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/80 border text-center shadow">
                    <h3 className="text-sm text-slate-500">Total</h3>
                    <p className="text-xl font-bold">{totalParticipants}</p>
                </div>

                <div className="p-4 rounded-xl bg-green-100/80 border border-green-300 text-center shadow">
                    <h3 className="text-sm text-green-700">Pago</h3>
                    <p className="text-xl font-bold text-green-800">{totalPaid}</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-100/80 border border-blue-300 text-center shadow">
                    <h3 className="text-sm text-blue-700">Total Coletado</h3>
                    <p className="text-xl font-bold text-blue-800">
                        R$ {totalValue.toFixed(2).replace(".", ",")}
                    </p>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white/70">
                <table className="w-full text-sm">
                    <thead className="bg-slate-200/70">
                        <tr>
                            <th className="p-2 text-left">Nome Completo</th>
                            <th className="p-2 text-left">Idade</th>
                            <th className="p-2 text-left">Cidade</th>
                            <th className="p-2 text-left">WhatsApp</th>
                            <th className="p-2 text-left">Pago (Pix)</th>
                            <th className="p-2 text-left">Valor</th>
                        </tr>
                    </thead>

                    <tbody>
                        {people.map((p, index) => {
                            const isPaid = p.paid === "Sim";

                            return (
                                <tr
                                    key={index}
                                    className="border-b border-slate-300/40 odd:bg-white even:bg-slate-100/40"
                                >
                                    <td className="p-2 font-medium">{p.name}</td>
                                    <td className="p-2">{p.age}</td>
                                    <td className="p-2">{p.city}</td>
                                    <td className="p-2">{p.phone}</td>

                                    {/* Badge */}
                                    <td className="p-2">
                                        <span
                                            className={`
                                                px-2 py-1 rounded-full text-xs font-semibold
                                                ${isPaid
                                                    ? "bg-green-200 text-green-800 border border-green-300"
                                                    : "bg-red-200 text-red-800 border border-red-300"
                                                }
                                            `}
                                        >
                                            {isPaid ? "Pago" : "Não Encontrado"}
                                        </span>
                                    </td>

                                    {/* Value */}
                                    <td className="p-2">
                                        {isPaid ? (
                                            <span className="font-semibold text-green-700">
                                                {p.value}
                                            </span>
                                        ) : (
                                            <span className="text-red-600">-</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
