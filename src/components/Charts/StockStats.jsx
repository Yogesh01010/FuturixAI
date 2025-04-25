import React from 'react';
import clsx from 'clsx';

const StockStats = () => {
  const lastUpdated = 'Feb 15, 2025, 07:15 AM IST';

  const stats = [
    { label: 'Dividend Yield', value: '0.89', remark: 'Lower than Industry' },
    { label: 'Beta', value: '0.41', remark: 'Low Volatility' },
    { label: 'Debt To Equity', value: '0.41', remark: 'Low Volatility' },
    { label: 'Beta', value: '0.41', remark: 'Low Volatility' },
    { label: 'Debt To Equity', value: '0.41', remark: 'Low Volatility' },
    { label: 'Beta', value: '0.41', remark: 'Low Volatility' },
  ];

  const ranges = [
    {
      label: 'Day Range',
      low: 1420.00,
      high: 1450.00,
      current: 1438.75, // this is the current price
    },
    {
      label: '52 Week Range',
      low: 1300.00,
      high: 1500.00,
      current: 1438.75,
    },
  ];

  return (
    <div className="bg-black text-white p-6 rounded-xl max-w-4xl font-sans">
      <p className="text-xs text-gray-400 mb-4">
        Updated on {lastUpdated}
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-b border-gray-700 pb-6">
        {stats.map(({ label, value, remark }, idx) => (
          <div key={idx}>
            <p className="text-sm">{label}</p>
            <p className="text-lg">{value}</p>
            <p
              className={clsx(
                'text-xs',
                remark.toLowerCase().includes('lower') ? 'text-red-500' : 'text-green-500'
              )}
            >
              {remark}
            </p>
          </div>
        ))}
      </div>

      {/* Ranges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-sm">
        {ranges.map(({ label, low, high, current }, idx) => {
          const position =
            high !== low
              ? ((current - low) / (high - low)) * 100
              : 50; // fallback if high == low

          return (
            <div key={idx} className="text-center">
              <p className="mb-2 text-gray-300">{label}</p>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Lowest</span>
                <span>Highest</span>
              </div>
              <div className="relative w-full h-1 bg-gray-700 rounded-full my-1">
                <div
                  className="w-1 h-3 bg-yellow-400 absolute top-[-6px] rounded"
                  style={{ left: `${position}%` }}
                />
              </div>
              <div className="flex justify-between">
                <span>{low}</span>
                <span>{high}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StockStats;
