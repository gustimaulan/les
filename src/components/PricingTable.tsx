import React from "react";

const PricingTable: React.FC = () => {
  return (
    <div className="overflow-x-auto py-8 border-t">
      <h2 className="text-3xl font-bold py-4">Harga / 1 Pertemuan</h2>
      <table className="min-w-full ">
        <thead className="bg-gray-500 text-white text-center">
          <tr>
            <th className="px-4 py-2 border-r border-gray-300">TK</th>
            <th className="px-4 py-2 border-r border-gray-300">SD</th>
            <th className="px-4 py-2 border-r border-gray-300">SMP</th>
            <th className="px-4 py-2">SMA</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200 even:bg-blue-200 text-center">
            <td className="px-4 py-2 border-r border-gray-300">40 Ribu</td>
            <td className="px-4 py-2 border-r border-gray-300">40 Ribu</td>
            <td className="px-4 py-2 border-r border-gray-300">50 Ribu</td>
            <td className="px-4 py-2">65 Ribu</td>
          </tr>
        </tbody>
      </table>
        <div className="text-sm p-4 rounded-b-lg bg-orange-50 border w-full">
        <p className="text-xl pb-2 font-semibold">Yang didapatkan:</p>
        <ul>
          <li>✅ Durasi les 90 menit (khusus Calistung 60-75 menit)</li>
          <li>
            ✅ Sudah termasuk transport tutor PP{" "}
            <span className="text-sm text-red-600">(*S&K berlaku)</span>
          </li>
          <li>✅ Sudah termasuk print catatan / worksheet / bahan ajar, dll</li>
        </ul>
        </div>
    </div>
  );
};

export default PricingTable;
