const xpPieChart = (totalXpData) => {
  let xpArray = totalXpData.data.user[0].transactions;

  let graphDiv = document.getElementById("graphs");

  let pieChart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  pieChart.setAttribute("id", "pie-chart");
  pieChart.setAttribute("height", `${100}%`);
  pieChart.setAttribute("width", `${50}%`);
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

  for (let i = 0; i < xpArray.length; i++) {
    if (
      xpArray[i].amount > 9000 ||
      (xpArray[i].amount >= 5000 && xpArray[i].object.name !== "forum")
    ) {
      let pieSlice = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      let xpPercentage = ((100 / 585000) * xpArray[i].amount * 31.42) / 31.42;
      pieSlice.setAttribute("r", "5");
      pieSlice.setAttribute("fill", "transparent");
      pieSlice.setAttribute("cx", "10");
      pieSlice.setAttribute("cy", "10");
      pieSlice.setAttribute("stroke-dasharray", `${xpPercentage} 31.42`);

      //calc(${(xpArray[i].amount * 31.42) / 100} 31.42")
      pieSlice.setAttribute("stroke-width", "10");
      // pieSlice.setAttribute("transform", "rotate(-90) translate(-20)");
      // pieSlice.setAttribute("stroke", "blue");
      pieChart.appendChild(pieSlice);
      if (i % 2 === 0) pieSlice.setAttribute("stroke", "blue");
      if (i % 2 !== 0) pieSlice.setAttribute("stroke", "green");
      graphDiv.appendChild(pieChart);
    }
  }
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
