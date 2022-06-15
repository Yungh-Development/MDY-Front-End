import React from "react";

export const JumbotronCard = (exportInfoCard) => {
  return (
    <div className="flex items-center justify-center mt-[10%]">
      <div className="jumbotron m-5 ">
        <h1 className="display-4">{exportInfoCard.tittle}</h1>
        <p className="lead">{exportInfoCard.description}</p>
        <a
          className="btn btn-primary btn-lg"
          href={exportInfoCard.buttonURL}
          role="button"
        >
          {exportInfoCard.buttonLabel}
        </a>
      </div>
    </div>
  );
};
