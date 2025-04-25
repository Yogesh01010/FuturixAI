import React, { useState } from 'react';

const Financials = () => {
  const [activeIncomeTab, setActiveIncomeTab] = useState('Income');
  const [activeDetailTab, setActiveDetailTab] = useState('Financial');

  const financialData = {
    Income: [
      { year: 'Mar 2021', value: '18.00K', growth: '+0.27%', height: 60 },
      { year: 'Mar 2022', value: '18.00K', growth: '+0.27%', height: 100 },
      { year: 'Mar 2023', value: '18.00K', growth: '+0.27%', height: 70 },
      { year: 'Mar 2024', value: '18.00K', growth: '+0.27%', height: 80 },
    ],
    Balance: [
      { year: 'Mar 2021', value: '10.00K', growth: '+0.12%', height: 40 },
      { year: 'Mar 2022', value: '14.00K', growth: '+0.14%', height: 80 },
      { year: 'Mar 2023', value: '13.00K', growth: '+0.16%', height: 75 },
      { year: 'Mar 2024', value: '16.00K', growth: '+0.20%', height: 90 },
    ],
    CashFlow: [
      { year: 'Mar 2021', value: '9.00K', growth: '+0.10%', height: 35 },
      { year: 'Mar 2022', value: '12.00K', growth: '+0.15%', height: 65 },
      { year: 'Mar 2023', value: '15.00K', growth: '+0.25%', height: 85 },
      { year: 'Mar 2024', value: '11.00K', growth: '+0.13%', height: 55 },
    ],
  };

  const financialInsights = {
    Financial: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'It has survived not only five centuries, but also the leap into electronic typesetting.',
      'It was popularised in the 1960s with the release of Letraset sheets.',
      'More recently with desktop publishing software like Aldus PageMaker.',
      'It remains essentially unchanged.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'It has survived not only five centuries, but also the leap into electronic typesetting.',
      'It was popularised in the 1960s with the release of Letraset sheets.',
      'More recently with desktop publishing software like Aldus PageMaker.',
      'It remains essentially unchanged.',
    ],
    Valuation: [
        
      'Valuation metrics such as P/E and P/B are crucial.',
      'Consider both absolute and relative valuation methods.',
      'Discounted cash flow is a strong fundamental approach.',
      'Market sentiment can significantly affect valuation.',
      'Always compare with industry peers.',
      'Valuation metrics such as P/E and P/B are crucial.',
      'Consider both absolute and relative valuation methods.',
      'Discounted cash flow is a strong fundamental approach.',
      'Market sentiment can significantly affect valuation.',
      'Always compare with industry peers.',
    ],
  };

  return (
    <div className="bg-[#0f172a] text-white p-8">
      <h2 className="text-xl font-bold mb-6">Financials</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Panel */}
        <div>
          {/* Tabs */}
          <div className="flex space-x-6 border-b border-gray-700 mb-6">
            {['Income', 'Balance', 'CashFlow'].map(tab => (
              <span
                key={tab}
                className={`cursor-pointer pb-2 ${
                  activeIncomeTab === tab
                    ? 'text-white font-semibold border-b-2 border-white'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveIncomeTab(tab)}
              >
                {tab.replace('CashFlow', 'Cash Flow')}
              </span>
            ))}
          </div>

          {/* Chart */}
          <div className="flex items-end justify-between w-[607px] h-[391px] bg-[#1e293b] rounded-lg p-6">
            {financialData[activeIncomeTab].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2">
                <div className="text-sm text-white">{item.value}</div>
                <div className="text-xs bg-green-700 text-white px-2 py-0.5 rounded-full">
                  ▲ {item.growth}
                </div>
                <div className="w-6 bg-blue-500 rounded-full" style={{ height: `${item.height}px` }}></div>
                <div className="text-sm text-gray-300 mt-2">{item.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div>
          {/* Tabs */}
          <div className="flex space-x-6 border-b border-gray-700 mb-6">
            {['Financial', 'Valuation'].map(tab => (
              <span
                key={tab}
                className={`cursor-pointer pb-2 ${
                  activeDetailTab === tab
                    ? 'text-white font-semibold border-b-2 border-white'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveDetailTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className=' w-[607px] h-[391px] bg-[#1e293b] rounded-lg p-8'>
            {financialInsights[activeDetailTab].map((text, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <div className="w-2 h-2 mt-1 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;
