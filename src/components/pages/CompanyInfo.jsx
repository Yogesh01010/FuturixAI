import React from "react";

export default function CompanyPage() {
  return (
    <div className="bg-[#0f172a] p-8 text-white font-sans">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Side - About the Company */}
        <div className="col-span-2 bg-[#111827] rounded-md p-6">
          <h2 className="text-sm font-semibold mb-4">
            About the Company Cipla
          </h2>

          {/* Top Row */}
          <div className="grid grid-cols-4 gap-4 mb-4 text-sm">
            <div>
              <p className="text-gray-400">Industry</p>
              <p className="text-white">Tech</p>
            </div>
            <div>
              <p className="text-gray-400">ISIN</p>
              <p className="text-white">123</p>
            </div>
            <div>
              <p className="text-gray-400">BSE Code</p>
              <p className="text-white">123</p>
            </div>
            <div>
              <p className="text-gray-400">NSE Code</p>
              <p className="text-white">123</p>
            </div>
          </div>

          {/* Description Paragraph */}
          <p className="text-sm text-gray-300 leading-relaxed">
            Cipla Limited is an India-based global pharmaceutical company. The
            Company is engaged in manufacturing, developing and marketing a wide
            range of branded and generic formulations and Active Pharmaceutical
            Ingredients (APIs). The Company operates through two segments:
            Pharmaceuticals and New ventures. The Pharmaceuticals segment is
            engaged in developing, manufacturing, selling, and distributing
            generic or branded generic medicines, as well as Active
            Pharmaceutical Ingredients (API). The New ventures segment includes
            the operations of the Company, a consumer healthcare, Biosimilars
            and specialty business. Its product portfolio spans complex
            generics, as well as drugs in the respiratory, anti-retroviral,
            urology, cardiology, anti-infective and central nervous system
            (CNS). Its geographical segments include India, the United States,
            South Africa, and the Rest of the World. It has its network of
            manufacturing, trading and other incidental operations in India and
            International markets.
          </p>
        </div>

        {/* Right Side - Management Info */}
        <div className="bg-[#111827] rounded-md p-6">
          <h2 className="text-sm font-semibold mb-4">Management Info</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Cipla Limited is an India-based global pharmaceutical company. The
            Company is engaged in manufacturing, developing and marketing a wide
            range of branded and generic formulations and Active Pharmaceutical
            Ingredients (APIs). The Company operates through two segments:
            Pharmaceuticals and New ventures. The Pharmaceuticals segment is
            engaged in developing, mStates, South Africa, and the Rest of the
            World. It has its network of manufacturing, trading
          </p>
        </div>
      </div>
    </div>
  );
}
