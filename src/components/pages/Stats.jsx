import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Stats = () => {
  // Example data
  const monthlyData = {
    Janvier: {
      labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '19 Jan', '20 Jan', '21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan', '31 Jan'],
      data: [120, 150, 200, 170, 210, 180, 220, 190, 250, 270, 300, 220, 180, 210, 230, 240, 250, 220, 210, 260, 270, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380]
    },
    Février: {
      labels: ['1 Févr', '2 Févr', '3 Févr', '4 Févr', '5 Févr', '6 Févr', '7 Févr', '8 Févr', '9 Févr', '10 Févr', '11 Févr', '12 Févr', '13 Févr', '14 Févr', '15 Févr', '16 Févr', '17 Févr', '18 Févr', '19 Févr', '20 Févr', '21 Févr', '22 Févr', '23 Févr', '24 Févr', '25 Févr', '26 Févr', '27 Févr', '28 Févr'],
      data: [130, 160, 210, 180, 200, 190, 230, 200, 260, 280, 310, 230, 190, 220, 240, 250, 260, 230, 220, 270, 280, 300, 310, 320, 330, 340, 350, 360]
    },
    Mars: {
      labels: ['1 Mar', '2 Mar', '3 Mar', '4 Mar', '5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar', '10 Mar', '11 Mar', '12 Mar', '13 Mar', '14 Mar', '15 Mar', '16 Mar', '17 Mar', '18 Mar', '19 Mar', '20 Mar', '21 Mar', '22 Mar', '23 Mar', '24 Mar', '25 Mar', '26 Mar', '27 Mar', '28 Mar', '29 Mar', '30 Mar', '31 Mar'],
      data: [140, 170, 220, 190, 210, 200, 240, 210, 270, 290, 320, 240, 200, 230, 250, 260, 270, 240, 230, 280, 290, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400]
    },
    Avril: {
      labels: ['1 Avr', '2 Avr', '3 Avr', '4 Avr', '5 Avr', '6 Avr', '7 Avr', '8 Avr', '9 Avr', '10 Avr', '11 Avr', '12 Avr', '13 Avr', '14 Avr', '15 Avr', '16 Avr', '17 Avr', '18 Avr', '19 Avr', '20 Avr', '21 Avr', '22 Avr', '23 Avr', '24 Avr', '25 Avr', '26 Avr', '27 Avr', '28 Avr', '29 Avr', '30 Avr'],
      data: [150, 180, 230, 200, 220, 210, 250, 220, 280, 300, 330, 250, 210, 240, 260, 270, 280, 250, 240, 290, 300, 320, 330, 340, 350, 360, 370, 380, 390, 400]
    },
    Mai: {
      labels: ['1 Mai', '2 Mai', '3 Mai', '4 Mai', '5 Mai', '6 Mai', '7 Mai', '8 Mai', '9 Mai', '10 Mai', '11 Mai', '12 Mai', '13 Mai', '14 Mai', '15 Mai', '16 Mai', '17 Mai', '18 Mai', '19 Mai', '20 Mai', '21 Mai', '22 Mai', '23 Mai', '24 Mai', '25 Mai', '26 Mai', '27 Mai', '28 Mai', '29 Mai', '30 Mai', '31 Mai'],
      data: [160, 190, 240, 210, 230, 220, 260, 230, 290, 310, 340, 260, 220, 250, 270, 280, 290, 260, 250, 300, 310, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420]
    },
    Juin: {
      labels: ['1 Juin', '2 Juin', '3 Juin', '4 Juin', '5 Juin', '6 Juin', '7 Juin', '8 Juin', '9 Juin', '10 Juin', '11 Juin', '12 Juin', '13 Juin', '14 Juin', '15 Juin', '16 Juin', '17 Juin', '18 Juin', '19 Juin', '20 Juin', '21 Juin', '22 Juin', '23 Juin', '24 Juin', '25 Juin', '26 Juin', '27 Juin', '28 Juin', '29 Juin', '30 Juin'],
      data: [170, 200, 250, 220, 240, 230, 270, 240, 300, 320, 350, 270, 230, 260, 280, 290, 300, 270, 260, 310, 320, 340, 350, 360, 370, 380, 390, 400, 410, 420]
    },
    Juillet: {
      labels: ['1 Juil', '2 Juil', '3 Juil', '4 Juil', '5 Juil', '6 Juil', '7 Juil', '8 Juil', '9 Juil', '10 Juil', '11 Juil', '12 Juil', '13 Juil', '14 Juil', '15 Juil', '16 Juil', '17 Juil', '18 Juil', '19 Juil', '20 Juil', '21 Juil', '22 Juil', '23 Juil', '24 Juil', '25 Juil', '26 Juil', '27 Juil', '28 Juil', '29 Juil', '30 Juil', '31 Juil'],
      data: [180, 210, 260, 230, 250, 240, 280, 250, 310, 330, 360, 280, 240, 270, 290, 300, 310, 280, 270, 320, 330, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440]
    },
    Août: {
      labels: ['1 Août', '2 Août', '3 Août', '4 Août', '5 Août', '6 Août', '7 Août', '8 Août', '9 Août', '10 Août', '11 Août', '12 Août', '13 Août', '14 Août', '15 Août', '16 Août', '17 Août', '18 Août', '19 Août', '20 Août', '21 Août', '22 Août', '23 Août', '24 Août', '25 Août', '26 Août', '27 Août', '28 Août', '29 Août', '30 Août', '31 Août'],
      data: [190, 220, 270, 240, 260, 250, 290, 260, 320, 340, 370, 290, 250, 280, 300, 310, 320, 290, 280, 330, 340, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450]
    },
    Septembre: {
      labels: ['1 Sep', '2 Sep', '3 Sep', '4 Sep', '5 Sep', '6 Sep', '7 Sep', '8 Sep', '9 Sep', '10 Sep', '11 Sep', '12 Sep', '13 Sep', '14 Sep', '15 Sep', '16 Sep', '17 Sep', '18 Sep', '19 Sep', '20 Sep', '21 Sep', '22 Sep', '23 Sep', '24 Sep', '25 Sep', '26 Sep', '27 Sep', '28 Sep', '29 Sep', '30 Sep'],
      data: [200, 230, 280, 250, 270, 260, 300, 270, 330, 350, 380, 300, 260, 290, 310, 320, 330, 300, 290, 340, 350, 370, 380, 390, 400, 410, 420, 430, 440, 450]
    },
    Octobre: {
      labels: ['1 Oct', '2 Oct', '3 Oct', '4 Oct', '5 Oct', '6 Oct', '7 Oct', '8 Oct', '9 Oct', '10 Oct', '11 Oct', '12 Oct', '13 Oct', '14 Oct', '15 Oct', '16 Oct', '17 Oct', '18 Oct', '19 Oct', '20 Oct', '21 Oct', '22 Oct', '23 Oct', '24 Oct', '25 Oct', '26 Oct', '27 Oct', '28 Oct', '29 Oct', '30 Oct', '31 Oct'],
      data: [210, 240, 290, 260, 280, 270, 310, 280, 340, 360, 390, 310, 270, 300, 320, 330, 340, 310, 300, 350, 360, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470]
    },
    Novembre: {
      labels: ['1 Nov', '2 Nov', '3 Nov', '4 Nov', '5 Nov', '6 Nov', '7 Nov', '8 Nov', '9 Nov', '10 Nov', '11 Nov', '12 Nov', '13 Nov', '14 Nov', '15 Nov', '16 Nov', '17 Nov', '18 Nov', '19 Nov', '20 Nov', '21 Nov', '22 Nov', '23 Nov', '24 Nov', '25 Nov', '26 Nov', '27 Nov', '28 Nov', '29 Nov', '30 Nov'],
      data: [220, 250, 300, 270, 290, 280, 320, 290, 350, 370, 400, 320, 280, 310, 330, 340, 350, 320, 310, 360, 370, 390, 400, 410, 420, 430, 440, 450, 460]
    },
    Décembre: {
      labels: ['1 Déc', '2 Déc', '3 Déc', '4 Déc', '5 Déc', '6 Déc', '7 Déc', '8 Déc', '9 Déc', '10 Déc', '11 Déc', '12 Déc', '13 Déc', '14 Déc', '15 Déc', '16 Déc', '17 Déc', '18 Déc', '19 Déc', '20 Déc', '21 Déc', '22 Déc', '23 Déc', '24 Déc', '25 Déc', '26 Déc', '27 Déc', '28 Déc', '29 Déc', '30 Déc', '31 Déc'],
      data: [230, 260, 310, 280, 300, 290, 330, 300, 360, 380, 410, 330, 290, 320, 340, 350, 360, 330, 320, 370, 380, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490]
    }
  };
  

  const totalMonthlyViews = {
    Janvier: 2199,
    Février: 2900,
    Mars: 3200,
    Avril: 1300,
    Mai: 3400,
    Juin: 3500,
    Juillet: 3600,
    Août: 3700,
    Septembre: 6800,
    Octobre: 2900,
    Novembre: 9340,
    Décembre: 5109
  };
  

  const [selectedMonth, setSelectedMonth] = useState(null);

  // Data for the chart
  const data = selectedMonth ? {
    labels: monthlyData[selectedMonth].labels,
    datasets: [
      {
        label: 'Daily Site Views',
        data: monthlyData[selectedMonth].data,
        backgroundColor: '#f0f8ff',
        borderColor: '#3e86d4',
        borderWidth: 1,
      },
    ],
  } : {
    labels: Object.keys(totalMonthlyViews),
    datasets: [
      {
        label: 'Monthly Site Views',
        data: Object.values(totalMonthlyViews),
        backgroundColor: '#f0f8ff',
        borderColor: '#3e86d4',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Views: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          maxRotation: 90,
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {/* <h2 className="main-title">Site Views Statistics</h2> */}
      <div className="month-buttons">
      <button onClick={() => setSelectedMonth(null)} className='btn-principal'>
          Monthly
        </button>
        {Object.keys(totalMonthlyViews).map((month) => (
          
          <button className='btn-principal'
            key={month}
            onClick={() => setSelectedMonth(month)}
          >
            {month}
          </button>
        ))}
        
      </div>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Stats;
