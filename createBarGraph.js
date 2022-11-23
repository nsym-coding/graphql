function createXpGraph(totalXpData) {
  let graphDiv = document.getElementById("graphs");
  let xpArray = totalXpData.data.user[0].transactions;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", `${70}%`);
  svg.setAttribute("width", `${50}%`);
  svg.setAttribute("id", "bar-chart");
  svg.setAttribute("viewBox", `0 0 500 500`);
  let yAxis = 0;
  xpArray.forEach((elem) => {
    if (
      elem.amount > 9000 ||
      (elem.amount >= 5000 && elem.object.name !== "forum")
    ) {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      const bar = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      const labelText = document.createElement("text");
      g.setAttribute("class", "bar");
      bar.setAttribute("x", `${yAxis}`);
      bar.setAttribute("y", `${10}`);
      bar.setAttribute("width", `${1000 / xpArray.length}px`);
      bar.setAttribute("height", `${(elem.amount / 1000) * 4}`);
      bar.innerHTML = `${elem.object.name}`;

      console.log("checking name is working --> ", elem.object.name);
      labelText.innerText = `${elem.object.name}`;
      labelText.setAttribute("x", `${0}`);
      labelText.setAttribute("y", `${10}`);
      labelText.setAttribute("dx", `${0.35}em`);

      console.log(elem.amount);

      g.appendChild(bar);
      g.appendChild(labelText);
      svg.appendChild(g);
      graphDiv.appendChild(svg);
      yAxis += 50;
    }
  });
}

export { createXpGraph };
