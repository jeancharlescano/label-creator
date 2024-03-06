import React from "react";

import sheep from "./assets/img/sheep.png";

const App = () => {
  return (
    <div className="h-screen w-screen bg-midnight-blue">
      <div className="h-1/3"></div>
      <div className="w-full h-2/3 flex justify-center items-center">
        <div
          id="label"
          className="h-[5cm] w-[10cm] bg-[#F0F8FF] flex items-center justify-between overflow-hidden p-2 rounded"
        >
          <img src={sheep} className="object-fill h-4/6" />
          <div className="h-4/5 flex flex-col justify-between items-end">
            <h1 id="title" className="text-2xl font-semibold">
              Peau de mouton
            </h1>
            <h2 className="text-xl font-bold">75 €</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
