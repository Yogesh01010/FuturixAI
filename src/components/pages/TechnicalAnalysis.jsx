import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const TechnicalAnalysis = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#000',
      },
      grid: {
        vertLines: { color: '#e1e1e1' },
        horzLines: { color: '#e1e1e1' },
      },
      crosshair: {
        mode: 0,
      },
      rightPriceScale: {
        borderColor: '#ccc',
      },
      timeScale: {
        borderColor: '#ccc',
      },
    });

    const candlestickSeries = chart.addCandlestickSeries();

    // Dummy data
    candlestickSeries.setData([
      { time: '2022-04-11', open: 100, high: 110, low: 90, close: 105 },
      { time: '2022-04-12', open: 106, high: 112, low: 101, close: 108 },
      { time: '2022-04-13', open: 109, high: 115, low: 108, close: 114 },
      { time: '2022-04-14', open: 115, high: 118, low: 110, close: 113 },
      { time: '2022-04-15', open: 114, high: 116, low: 112, close: 115 },
    ]);

    // Clean up on unmount
    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Technical Analysis</h2>
      <div ref={chartContainerRef} className="w-full h-[400px]" />
    </div>
  );
};

export default TechnicalAnalysis;
