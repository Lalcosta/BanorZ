const chartData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        data: [2000, 4000, 6000, 8000, 10000, 24000],
        color: (opacity = 1) => `rgba(249, 19, 58, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Aportaciones"] // optional
  };

export default chartData;