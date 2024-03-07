import React, { useState } from "react";
import sheep from "./assets/img/sheep.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import html2canvas from "html2canvas";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [displayPopup, setDisplayPopup] = useState("none");
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
    <>
      <div
        id="popup"
        className="flex-col items-center justify-between absolute top-0 left-0 h-screen w-screen py-4 bg-black z-10 bg-opacity-90"
        style={{ display: displayPopup }}
      >
        <h1 className="text-2xl font-semibold text-white">Prévisualisation</h1>
        <div id="label" className="h-[3cm] w-[5cm]">
          <div
            className={`h-full w-full flex items-center justify-between overflow-hidden p-2 rounded`}
            style={{ backgroundColor: bgColor }}
          >
            <img src={sheep} className="object-fill h-4/6" alt="decoration"/>
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
        <div className=" w-1/4 flex justify-between">
          <button
            className="min-w-20 py-1 px-2 border rounded border-red-700 text-red-700 hover:bg-red-700 hover:text-white"
            onClick={() => {
              setDisplayPopup("none");
            }}
          >
            Annuler
          </button>
          <button
            className="min-w-20 py-1 px-2 border rounded border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
            onClick={download}
          >
            Valider
          </button>
        </div>
      </div>
      <div className="h-screen w-screen bg-midnight-blue">
        <div className="h-1/3 flex justify-between px-2 ">
          <div className="h-full w-full flex flex-col items-center justify-evenly">
            <div className="w-2/4 transform border-b-2 bg-transparent text-sm duration-300 text-white focus-within:border-gray-500 focus-within:text-gray-500">
              <label className="text-xs">Nom de l'article</label>
              <input
                type="text"
                placeholder="Article"
                value={articleName}
                onChange={(e) => {
                  setArticleName(e.target.value);
                }}
                className=" text-white p-1 border-none bg-transparent placeholder:italic focus:outline-none"
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
                className="  p-1 bg-transparent  w-full"
              />
            </div>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-evenly">
            <div className="w-2/4 transform border-b-2 bg-transparent text-sm duration-300 text-white focus-within:border-gray-500 focus-within:text-gray-500">
              <label className="text-xs">Nom de l'article</label>
              <input
                type="text"
                placeholder="Prix"
                value={price}
                onChange={(e) => {
                  setprice(e.target.value);
                }}
                className=" text-white p-1 border-none bg-transparent placeholder:italic focus:outline-none"
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
                className="p-1 bg-transparent  w-full"
              />
            </div>
          </div>
        </div>
        <div className=" relative w-full h-2/3 flex justify-center items-center">
          <button
            className="absolute bottom-4 right-4 text-white transition-all hover:scale-125"
            onClick={() => {
              setDisplayPopup("flex")
            }}
          >
            <FontAwesomeIcon icon={faDownload} size="xl" color="green" />
          </button>
          <div id="label" className="h-[5cm] w-[10cm]">
            <div
              className={`h-full w-full flex items-center justify-between overflow-hidden p-2 rounded`}
              style={{ backgroundColor: bgColor }}
            >
              <img src={sheep} className="object-fill h-4/6" alt="decoration"/>
              <div
                className="h-4/5 flex flex-col justify-between items-end"
                style={{ color: textColor }}
              >
                <h1 id="title" className="text-xl font-semibold text-right">
                  {articleName}
                </h1>
                <h2 className="text-lg font-bold">{price} €</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
