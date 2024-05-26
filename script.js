// Chart.register(Chart.Financial);

// const stuff = new Chart();

// console.log(stuff);

// const searchInput = document.getElementById("search-input");
// const tradingPairsList = document.getElementById("trading-pairs-list");
// const tradingPairs = tradingPairsList.getElementsByTagName("li");
const ctx = document.getElementById("candlestick-chart").getContext("2d");

// searchInput.addEventListener("input", function () {
//   const filter = searchInput.value.toUpperCase();
//   for (let i = 0; i < tradingPairs.length; i++) {
//     const pair = tradingPairs[i].textContent || tradingPairs[i].innerText;
//     if (pair.toUpperCase().indexOf(filter) > -1) {
//       tradingPairs[i].style.display = "";
//     } else {
//       tradingPairs[i].style.display = "none";
//     }
//   }
// });

const menuToggler = document.getElementById("menu_toggler");
const mobileNav = document.getElementById("header__nav");

menuToggler.addEventListener("click", () => {
  console.log("click");
  mobileNav.classList.toggle("active");
});

async function fetchCandlestickData() {
  const symbol = "BTCUSDT";
  const interval = "1d";
  const limit = 100;

  const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.map((candle) => ({
      time: candle[0],
      open: parseFloat(candle[1]),
      high: parseFloat(candle[2]),
      low: parseFloat(candle[3]),
      close: parseFloat(candle[4]),
    }));
  } catch (error) {
    console.error("Error fetching candlestick data:", error);
    return [];
  }
}

fetchCandlestickData().then((data) => {
  console.log(data);
});

const candlestickData = [
  { x: new Date("2022-05-01").getTime(), o: 100, h: 110, l: 90, c: 105 },
  { x: new Date("2022-05-02").getTime(), o: 105, h: 115, l: 95, c: 100 },
  { x: new Date("2022-05-03").getTime(), o: 100, h: 120, l: 85, c: 110 },
  { x: new Date("2022-05-04").getTime(), o: 110, h: 130, l: 105, c: 120 },
];

const candlestickChart = new Chart(ctx, {
  type: "candlestick",
  data: {
    datasets: [
      {
        label: "Candlestick Chart",
        data: candlestickData,
        borderColor: "#000",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  },
});

window.changeInterval = function (interval) {
  let unit;
  switch (interval) {
    case "1m":
      unit = "minute";
      break;
    case "5m":
      unit = "5minute";
      break;
    case "15m":
      unit = "15minute";
      break;
    case "1h":
      unit = "hour";
      break;
    default:
      unit = "day";
  }

  candlestickChart.options.scales.x.time.unit = unit;
  candlestickChart.update();
};

// function calculateTotal() {
//   const price = parseFloat(document.getElementById("price").value);
//   const amount = parseFloat(document.getElementById("amount").value);
//   const total = price * amount;
//   document.getElementById("total").value = isNaN(total) ? "" : total.toFixed(2);
// }
