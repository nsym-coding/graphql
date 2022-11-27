const xpPieChart = (xpPerTypeData) => {
  console.log({ xpPerTypeData });
  console.log(xpPerTypeData.data.user[0]);
  let xpTypeArray = [];
  xpPerTypeData.data.user[0].a.forEach((obj) => {
    xpTypeArray.push(obj);
  });
  xpPerTypeData.data.user[0].b.forEach((obj) => {
    xpTypeArray.push(obj);
  });
  xpPerTypeData.data.user[0].c.forEach((obj) => {
    xpTypeArray.push(obj);
  });
  xpPerTypeData.data.user[0].d.forEach((obj) => {
    xpTypeArray.push(obj);
  });
  xpPerTypeData.data.user[0].e.forEach((obj) => {
    xpTypeArray.push(obj);
  });

  console.log({ xpTypeArray });
  // let xpArray = totalXpData.data.user[0].transactions;
  let totalXPAmount = 0;

  xpTypeArray.forEach((elem) => {
    {
      totalXPAmount += elem.amount;
    }
  });

  console.log({ totalXPAmount });

  let totalXpPerTypeArray = [];

  let projectXP = 0;
  let exerciseXP = 0;
  let piscineXP = 0;
  let otherXP = 0;
  xpTypeArray.forEach((task) => {
    if (task.object.type === "project") {
      projectXP += task.amount;
    } else if (task.object.type === "exercise") {
      exerciseXP += task.amount;
    } else if (task.object.type === "piscine") {
      piscineXP += task.amount;
    } else {
      otherXP += task.amount;
    }
  });

  totalXpPerTypeArray.push(projectXP, exerciseXP, piscineXP, otherXP);
  let totale = 0;
  totalXpPerTypeArray.forEach((elem) => {
    totale += elem;
  });
  console.log({ totalXpPerTypeArray });
  console.log({ totale });

  console.log({ totalXPAmount });
  console.log(xpTypeArray[0].amount);

  console.log(xpTypeArray[0].object.type);
  console.log(xpTypeArray[0].object.name);

  let graphDiv = document.getElementById("graphs");

  let pieChart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  pieChart.setAttribute("id", "pie-chart");
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
  totalXpPerTypeArray.forEach((elem, index) => {
    let xpPercentage = (((100 / totalXPAmount) * elem) / 100) * 31.42;
    totalPercentage += xpPercentage;

    let pieSlice = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    let proportion = (elem / totalXPAmount) * 31.4;

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

    // pieSlice.innerText += `${elem.object.name}`;
    pieChart.appendChild(pieSlice);
    i++;
    sliceOffset += proportion;

    graphDiv.appendChild(pieChart);
  });
  console.log({ totalPercentage });
};

const CSS_COLOR_NAMES = ["Aqua", "Orange", "OrangeRed", "Green"];

export { xpPieChart };
