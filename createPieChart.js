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
  let raidXP = 0;
  xpTypeArray.forEach((task) => {
    if (
      (task.object.type === "project" && task.amount > 9000) ||
      (task.object.type === "project" &&
        task.amount >= 5000 &&
        task.object.name !== "forum")
    ) {
      console.log("checking if it's project ---> ", task);
      projectXP += task.amount;
    } else if (task.object.type === "exercise") {
      exerciseXP += task.amount;
    } else if (task.object.type === "piscine") {
      piscineXP += task.amount;
    } else {
      raidXP += task.amount;
    }
  });

  let projectXPObject = {
    type: "project",
    amount: projectXP,
  };

  let exerciseXPObject = {
    type: "exercise",
    amount: exerciseXP,
  };

  let piscineXPObject = {
    type: "piscine",
    amount: piscineXP,
  };

  let raidXPObject = {
    type: "raid",
    amount: raidXP,
  };

  totalXpPerTypeArray.push(
    projectXPObject,
    exerciseXPObject,
    piscineXPObject,
    raidXPObject
  );

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
    let xpPercentage = (((100 / totalXPAmount) * elem.amount) / 100) * 31.42;
    totalPercentage += xpPercentage;

    let pieSlice = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    const labelText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    let proportion = (elem.amount / totalXPAmount) * 31.4;

    console.log({ xpPercentage });
    console.log({ index });

    pieSlice.setAttribute("r", "5");
    pieSlice.setAttribute("class", "pie-slice");

    pieSlice.setAttribute("fill", "transparent");

    pieSlice.setAttribute("cx", "10");
    pieSlice.setAttribute("cy", "10");
    pieSlice.setAttribute("stroke", CSS_COLOR_NAMES[i]);
    // if (i % 2 !== 0) pieSlice.setAttribute("stroke", CSS_COLOR_NAMES[i + 2]);
    pieSlice.setAttribute("stroke-width", "10");
    pieSlice.setAttribute("stroke-dasharray", `${xpPercentage} 31.42`);

    pieSlice.setAttribute("stroke-dashoffset", `${-sliceOffset}`);

    labelText.setAttribute("class", "pie-chart-text");

    labelText.innerHTML += `${elem.type} -> ${elem.amount / 1000}K`;

    // labelText.setAttribute("dx", "10");
    // labelText.setAttribute("dy", "10");
    if (elem.type === "project") {
      labelText.setAttribute("y", "15");
      labelText.setAttribute("x", "5");
    }
    if (elem.type === "exercise") {
      labelText.setAttribute("y", "5");
      labelText.setAttribute("x", "5");
    }
    if (elem.type === "piscine") {
      labelText.setAttribute("y", "12.5");
      labelText.setAttribute("x", "9 ");
      labelText.style.transform = `rotate(-19deg)`;
    }
    if (elem.type === "raid") {
      labelText.setAttribute("y", "12.2");
      labelText.setAttribute("x", "11.8");
      labelText.style.transform = `rotate(-10deg)`;
    }

    // labelText.setAttribute("y", "10");
    // labelText.setAttribute("x", "10");
    labelText.setAttribute("font-size", "1px");
    labelText.setAttribute("fill", "black");
    pieSlice.addEventListener("pointerover", function () {
      pieSlice.style.fill = "white";
      // pieSlice.appendChild(labelText);
    });
    pieSlice.addEventListener("pointerleave", function () {
      pieSlice.style.fill = "transparent";
    });

    pieChart.appendChild(pieSlice);
    pieChart.appendChild(labelText);
    i++;
    sliceOffset += proportion;

    graphDiv.appendChild(pieChart);
  });
  console.log({ totalPercentage });
};

const CSS_COLOR_NAMES = ["Yellow", "Green", "OrangeRed", "Gray"];

export { xpPieChart };
