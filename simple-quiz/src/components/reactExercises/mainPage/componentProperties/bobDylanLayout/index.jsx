import React from "react";

export const BobDylanLayout = (layoutExport) => {
  return (
    <div className="flex justify-center items-center">
      <div className="card m-5 w-[350px] ">
        <img
          alt="Card cap"
          className="card-img-top w-30"
          src="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
        />
        <div className="card-body  m-2">
          <h5 className="card-title">{layoutExport.tittle}</h5>
          <p className="card-text">{layoutExport.cardDescription}</p>
          <a className="btn btn-primary" href={layoutExport.wikipediaLink}>
            Go to wikipedia
          </a>
        </div>
      </div>
    </div>
  );
};
