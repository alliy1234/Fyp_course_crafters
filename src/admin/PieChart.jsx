import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (data) {
      const ctx = document.getElementById('pie-chart');
      const pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Registered Users', 'Unregistered Users'],
          datasets: [{
            label: 'Users',
            data: [data.registeredUsers, data.totalUsers - data.registeredUsers],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
          }]
        }
      });
      setChart(pieChart);
    }
  }, [data]);

  return (
    <div>
      <canvas id="pie-chart"></canvas>
    </div>
  );
}

export default PieChart;
