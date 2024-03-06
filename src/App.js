import React, { useState } from "react";
import sheep from "./assets/img/sheep.png";
import { Download } from "react-basicons";
import html2canvas from "html2canvas";

const App = () => {
  const [articleName, setArticleName] = useState("Peau de mouton");
  const [bgColor, setbgColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#000");
  const [price, setprice] = useState(0);

  const download = () => {
    const label = document.getElementById("label");
    html2canvas(label).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = `${articleName}.png`;

      link.click();
    });
  };

  return (
    <div className="h-screen w-screen bg-midnight-blue">
      <div className="h-1/3 flex justify-between px-2 ">
        <div className="h-full w-full flex flex-col items-center justify-evenly">
          <div class="w-2/4 transform border-b-2 bg-transparent text-sm duration-300 text-white focus-within:border-gray-500 focus-within:text-gray-500">
            <label className="text-xs">Nom de l'article</label>
            <input
              type="text"
              placeholder="Article"
              value={articleName}
              onChange={(e) => {
                setArticleName(e.target.value);
              }}
              class=" text-white p-1 border-none bg-transparent placeholder:italic focus:outline-none"
            />
          </div>
          <div className="w-2/4  text-white focus-within:text-gray-500">
            <label className="text-xs">Couleur du texte</label>
            <input
              type="color"
              placeholder="Article"
              value={textColor}
              onChange={(e) => {
                setTextColor(e.target.value);
              }}
              class="  p-1 bg-transparent  w-full"
            />
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-center justify-evenly">
          <div class="w-2/4 transform border-b-2 bg-transparent text-sm duration-300 text-white focus-within:border-gray-500 focus-within:text-gray-500">
            <label className="text-xs">Nom de l'article</label>
            <input
              type="text"
              placeholder="Prix"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
              class=" text-white p-1 border-none bg-transparent placeholder:italic focus:outline-none"
            />
          </div>
          <div className="w-2/4 text-white focus-within:text-gray-500">
            <label className="text-xs">Couleur de l'arrière plan</label>
            <input
              type="color"
              placeholder="Article"
              value={bgColor}
              onChange={(e) => {
                setbgColor(e.target.value);
              }}
              class="p-1 bg-transparent  w-full"
            />
          </div>
        </div>
      </div>
      <div className=" relative w-full h-2/3 flex justify-center items-center">
        <button
          className="absolute bottom-4 right-4 text-white border-green-800 border-2 rounded"
          onClick={download}
        >
          <Download color="green" size={30} weight={2} />
        </button>
        <div id="label" className="h-[3cm] w-[5cm]">
          <div
            className={`h-full w-full flex items-center justify-between overflow-hidden p-2 rounded`}
            style={{ backgroundColor: bgColor }}
          >
            <img src={sheep} className="object-fill h-4/6" />
            <div
              className="h-4/5 flex flex-col justify-between items-end"
              style={{ color: textColor }}
            >
              <h1 id="title" className="text-sm font-semibold text-right">
                {articleName}
              </h1>
              <h2 className="text-sm font-bold">{price} €</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
