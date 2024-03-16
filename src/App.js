import React, { useState } from "react";
import sheep from "./assets/img/sheep.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2canvas from "html2canvas";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  // const [displayPopup, setDisplayPopup] = useState("none");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [labelTall, setLabelTall] = useState(false);
  const [articleName, setArticleName] = useState("");
  const [bgColor, setbgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [price, setprice] = useState(false);

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
      {/*
      <div
        id="popup"
        className="flex-col items-center justify-between absolute top-0 left-0 h-screen w-screen py-4 bg-black z-10 bg-opacity-90"
        style={{ display: displayPopup }}
      >
        <h1 className="text-2xl font-semibold text-white">Prévisualisation</h1>
        <div id="label" className="h-[5cm] w-[10cm]">
          <div
            className={`h-full w-full flex items-center justify-between overflow-hidden p-2 rounded`}
            style={{ backgroundColor: bgColor }}
          >
            <img src={sheep} className="object-fill h-4/6" alt="decoration" />
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
      */}
      <div className="h-screen w-screen bg-midnight-blue">
        <div className="h-1/3 flex flex-col justify-between pt-2 ">
          <div className="flex justify justify-between w-full mb-4">
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
                  className="w-full text-white p-1 border-none bg-transparent placeholder:italic focus:outline-none"
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
            {labelTall ? (
              <div className="h-full w-full flex flex-col items-center justify-evenly">
                <div className="w-2/4 transform border-b-2 bg-transparent text-sm duration-300 text-white focus-within:border-gray-500 focus-within:text-gray-500">
                  <label className="text-xs">option 1</label>
                  <input
                    type="text"
                    placeholder="Option 1"
                    value={opt1}
                    onChange={(e) => {
                      setOpt1(e.target.value);
                    }}
                    className="w-full text-white p-1 border-none bg-transparent placeholder:italic focus:outline-none"
                  />
                </div>
                <div className="w-2/4 transform border-b-2 bg-transparent text-sm duration-300 text-white focus-within:border-gray-500 focus-within:text-gray-500">
                  <label className="text-xs">Option 2</label>
                  <input
                    type="text"
                    placeholder="Option 2"
                    value={opt2}
                    onChange={(e) => {
                      setOpt2(e.target.value);
                    }}
                    className="w-full text-white p-1 border-none bg-transparent placeholder:italic focus:outline-none"
                  />
                </div>
                <div className="w-2/4 transform border-b-2 bg-transparent text-sm duration-300 text-white focus-within:border-gray-500 focus-within:text-gray-500">
                  <label className="text-xs">option 3</label>
                  <input
                    type="text"
                    placeholder="Option 3"
                    value={opt3}
                    onChange={(e) => {
                      setOpt3(e.target.value);
                    }}
                    className="w-full text-white p-1 border-none bg-transparent placeholder:italic focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className="h-full w-full flex flex-col items-center justify-evenly">
              <div className="w-2/4 transform border-b-2 bg-transparent text-sm duration-300 text-white focus-within:border-gray-500 focus-within:text-gray-500">
                <label className="text-xs">Prix de l'article</label>
                <input
                  type="number"
                  placeholder="Prix"
                  value={price}
                  onChange={(e) => {
                    setprice(e.target.value);
                    console.log(e.target.value);
                  }}
                  className=" w-full text-white p-1 border-none bg-transparent placeholder:italic focus:outline-none"
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
          <div className="w-full h-full  flex justify-evenly">
            <div class="flex items-center">
              <input
                checked={labelTall === false}
                id="5x7"
                type="radio"
                value=""
                name="default-radio"
                onChange={() => setLabelTall(false)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                for="5x7"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                5x7 cm
              </label>
            </div>
            <div class="flex items-center">
              <input
                checked={labelTall === true}
                id="7x10"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                onChange={() => setLabelTall(true)}
              />
              <label
                for="7x10"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                7x10 cm
              </label>
            </div>
          </div>
        </div>
        <div className=" relative w-full h-2/3  flex justify-center items-center">
          <button
            className="absolute bottom-4 right-4 text-white transition-all hover:scale-125"
            onClick={() => {
              download();
            }}
          >
            <FontAwesomeIcon icon={faDownload} size="xl" color="green" />
          </button>
          {labelTall ? (
            <div id="label" className="h-[7cm] w-[10cm]">
              <div
                className={`h-full w-full flex overflow-hidden p-1 `}
                style={{ backgroundColor: bgColor }}
              >
                <div className="w-3/4  h-full overflow-hidden  justify-around">
                  <div className="h-1/3 flex flex-col  justify-between">
                    <h1
                      className="text-xl font-semibold h-[12.5%]  "
                      style={{ color: textColor }}
                    >
                      Reflets Montagne
                    </h1>
                    <p
                      className="text-xl font-bold top-1/4"
                      style={{ color: textColor }}
                    >
                      {articleName}
                    </p>
                  </div>
                  <div
                    className="h-2/3  flex flex-col justify-evenly text-xl"
                    style={{ color: textColor }}
                  >
                    <p>{opt1}</p>   
                    <p>{opt2}</p>
                    <p>{opt3}</p>
                  </div>
                </div>
                <div className="w-1/4 flex flex-col justify-between items-center">
                  <img
                    src={sheep}
                    className="object-fill h-2/6"
                    alt="decoration"
                  />
                  <p className="">{price ? `${price} €` : ""}</p>
                </div>
              </div>
            </div>
          ) : (
            <div id="label" className="h-[5cm] w-[7cm]">
              <div
                className={`h-full w-full flex overflow-hidden p-1 `}
                style={{ backgroundColor: bgColor }}
              >
                <div className="relative w-3/4  h-full overflow-hidden">
                  <h1
                    className="text-lg font-semibold  "
                    style={{ color: textColor }}
                  >
                    Reflets Montagne
                  </h1>
                  <p
                    className="text-lg font-bold absolute top-1/3"
                    style={{ color: textColor }}
                  >
                    {articleName}
                  </p>
                </div>
                <div className="w-1/4 flex flex-col justify-between items-center">
                  <img
                    src={sheep}
                    className="object-fill h-2/6"
                    alt="decoration"
                  />
                  <p className="">{price ? `${price} €` : ""}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
