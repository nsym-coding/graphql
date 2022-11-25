const xpPieChart = (totalXpData) => {
  let xpArray = totalXpData.data.user[0].transactions;
  let totalXPAmount = 0;

  xpArray.forEach((elem) => {
    if (
      elem.amount > 100000 ||
      (elem.amount >= 5000 && elem.object.name !== "forum")
    ) {
      totalXPAmount += elem.amount;
    }
  });

  console.log({ totalXPAmount });

  let graphDiv = document.getElementById("graphs");

  let pieChart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  pieChart.setAttribute("id", "pie-chart");
  // pieChart.setAttribute("height", `${100}%`);
  // pieChart.setAttribute("width", `${50}%`);
  pieChart.setAttribute("viewBox", `0 0 20 20`);
  let backgroundCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );

  backgroundCircle.setAttribute("r", "10");
  backgroundCircle.setAttribute("fill", "white");
  backgroundCircle.setAttribute("cx", "10");
  backgroundCircle.setAttribute("cy", "10");

  pieChart.appendChild(backgroundCircle);
  let i = 0;
  let sliceOffset = 0;
  let totalPercentage = 0;
  xpArray.forEach((elem, index) => {
    let xpPercentage = (((100 / totalXPAmount) * elem.amount) / 100) * 31.42;
    totalPercentage += xpPercentage;
    if (
      elem.amount > 100000 ||
      (elem.amount >= 5000 && elem.object.name !== "forum")
    ) {
      let pieSlice = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      let proportion = (elem.amount / totalXPAmount) * 31.4;

      console.log({ xpPercentage });
      console.log({ index });

      pieSlice.setAttribute("r", "5");

      pieSlice.setAttribute("fill", "transparent");
      pieSlice.setAttribute("cx", "10");
      pieSlice.setAttribute("cy", "10");
      pieSlice.setAttribute("stroke", CSS_COLOR_NAMES[i]);
      // if (i % 2 !== 0) pieSlice.setAttribute("stroke", CSS_COLOR_NAMES[i + 2]);
      pieSlice.setAttribute("stroke-width", "10");
      pieSlice.setAttribute("stroke-dasharray", `${xpPercentage} 31.42`);

      pieSlice.setAttribute("stroke-dashoffset", `${-sliceOffset}`);
      //calc(${(elem.amount * 31.42) / 100} 31.42")
      // if (i === 0)

      pieSlice.innerText += `${elem.object.name}`;
      pieChart.appendChild(pieSlice);
      i++;
      sliceOffset += proportion;
    }
    graphDiv.appendChild(pieChart);
  });
  console.log({ totalPercentage });
};

const CSS_COLOR_NAMES = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
];

export { xpPieChart };
