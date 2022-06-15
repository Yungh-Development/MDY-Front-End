import React from "react";
import { HomePageMenu } from "../homePageMenu";
import { BobDylanLayout } from "./bobDylanLayout";

export const ExerciseSeven = () => {
  const tittleName = "Paul Mccartney";
  const description =
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter";

  const linkDescription = "https://en.wikipedia.org/wiki/Bob_Dylan";
  return (
    <div>
      <div>
        <HomePageMenu />
      </div>
      <BobDylanLayout
        tittle={tittleName}
        cardDescription={description}
        wikipediaLink={linkDescription}
      />
    </div>
  );
};
