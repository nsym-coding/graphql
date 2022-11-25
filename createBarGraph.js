function createXpGraph(totalXpData) {
  let graphDiv = document.getElementById("graphs");
  let xpArray = totalXpData.data.user[0].transactions;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", `${100}%`);
  svg.setAttribute("width", `${70}%`);
  svg.setAttribute("id", "bar-chart");
  svg.setAttribute("viewBox", `0 0 1000 1000`);
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
      const labelText = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      g.setAttribute("class", "bar");
      bar.setAttribute("x", `${0}`);
      bar.setAttribute("y", `${yAxis}`);
      bar.setAttribute("width", `${(elem.amount / 1000) * 4}`);
      bar.setAttribute("height", ` ${1000 / xpArray.length}px`);

      labelText.setAttribute("class", "bar-chart-text");

      labelText.innerHTML += `${elem.object.name} -> ${
        elem.amount / 1000
      }KB</text>`;
      labelText.setAttribute("x", `${(elem.amount / 1000) * 4}`);
      labelText.setAttribute("y", `${yAxis + 30}`);
      labelText.setAttribute("dx", `${(elem.amount / 1000) * 4 + 10}`);

      g.appendChild(bar);
      g.appendChild(labelText);
      svg.appendChild(g);
      graphDiv.appendChild(svg);
      yAxis += 50;
    }
  });
}

export { createXpGraph };
