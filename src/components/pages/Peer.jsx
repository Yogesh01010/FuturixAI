import React from 'react';
import { ChevronDown } from 'lucide-react';

const data = Array(8).fill({
  name: 'Sun Pharma',
  rating: 'Berish',
  price: 1980,
  change: -2.4,
  pe: 1980,
  pb: 1980,
  yield: 1980,
  debt: 1980,
});

export default function PeersComparison() {
  return (
    <div className="bg-[#111827] p-6 rounded-md">
      <h2 className="text-white text-lg font-semibold mb-4">Peers Comparison</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="px-4 py-2 font-medium">Names</th>
              <th className="px-4 py-2 font-medium">Technical Rating</th>
              <th className="px-4 py-2 font-medium">Price</th>
              <th className="px-4 py-2 font-medium">%Change</th>
              <th className="px-4 py-2 font-medium">P/E</th>
              <th className="px-4 py-2 font-medium">P/B</th>
              <th className="px-4 py-2 font-medium">Dividend Yield</th>
              <th className="px-4 py-2 font-medium">Debt to Equity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="text-white">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3 flex items-center gap-1">
                  <ChevronDown size={14} className="text-green-400" />
                  {row.rating}
                </td>
                <td className="px-4 py-3">{row.price}</td>
                <td className="px-4 py-3 text-red-500">{row.change.toFixed(2)}</td>
                <td className="px-4 py-3">{row.pe}</td>
                <td className="px-4 py-3">{row.pb}</td>
                <td className="px-4 py-3">{row.yield}</td>
                <td className="px-4 py-3">{row.debt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
