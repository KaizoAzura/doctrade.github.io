// Data for chart
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Sales",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "#fab12f",
      borderColor: "#fab12f",
      borderWidth: 1,
    },
  ],
};

// Custom plugin to show message
const noDataPlugin = {
  id: "noDataPlugin",
  beforeDraw: (chart) => {
    const { datasets } = chart.data;
    const hasData = datasets.some((dataset) =>
      dataset.data.some((value) => value !== 0)
    );

    if (!hasData) {
      const ctx = chart.ctx;
      const width = chart.width;
      const height = chart.height;

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "20px Mabry Pro";
      ctx.fillStyle = "#888";
      ctx.fillText("You haven't made any sales yet", width / 2, height / 2);
      ctx.restore();
    }
  },
};

// Config for chart
const config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false, // Hide the entire Y-axis
      },
      x: {
        grid: {
          display: false, // Optional: Hide grid lines on X-axis
        },
      },
    },
  },
  plugins: [noDataPlugin],
};

// Render chart
const ctx = document.getElementById("chartSale").getContext("2d");
new Chart(ctx, config);
