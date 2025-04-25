export const chartConfig = {
    type: 'line',
    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2024', '2025'],
        datasets: [{
            label: 'Stock Value',
            data: [65, 59, 70, 67, 77, 73, 83, 80, 86, 84, 90, 70, 95, 80, 100, 85, 110, 100, 120, 105,65, 59, 70, 67, 77, 73],
            fill: false,
            borderColor: '#00FF7F', // light green line
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { display: false },
            y: { display: false }
        },
        plugins: {
            legend: { display: false },
            tooltip: { mode: 'index', intersect: false }
        },
        layout: {
            padding: 10,
        }
    },
    plugins: [{
        id: 'lineShadow',
        beforeDraw: (chart) => {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
            ctx.save();

            chart.data.datasets.forEach((dataset, i) => {
                const meta = chart.getDatasetMeta(i);
                meta.dataset.draw = function () {
                    ctx.shadowColor = '#00FF7F';
                    ctx.shadowBlur = 10;
                    ctx.lineJoin = 'round';
                    ctx.lineCap = 'round';
                    Chart.helpers.canvasHelpers.drawLine.call(this, ctx);
                    ctx.shadowColor = 'transparent'; // reset
                };
            });

            ctx.restore();
        }
    }]
};