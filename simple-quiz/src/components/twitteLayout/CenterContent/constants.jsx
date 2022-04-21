//HOME POST ICONS fill="#4BAFF3" width="20"
import { ReactComponent as SendPicture } from "../../../public/icons/image.svg";
import { ReactComponent as SendGif } from "../../../public/icons/gifIcon.svg";
import { ReactComponent as SendGraph } from "../../../public/icons/barsGraph.svg";
import { ReactComponent as SendEmoji } from "../../../public/icons/emoji.svg";
import { ReactComponent as SendDate } from "../../../public/icons/calendar.svg";
import { ReactComponent as SendLocation } from "../../../public/icons/locationIcon.svg";

import Dog from "../../../public/imgs/Dog.JPG";
import UserPostedField from "../../../public/imgs/Post.JPG";

export const HomeMiddleContainerIcons = {
  SendPicture: SendPicture,
  SendGif: SendGif,
  SendGraph: SendGraph,
  SendEmoji: SendEmoji,
  SendDate: SendDate,
  SendLocation: SendLocation,
};

export const CenterContainerImgs = {
    Dog: Dog,
}

// MIDDLE CONTAINER
export const Posts = [
    {
      UserImg: Dog,
      Name: "Farofa",
      Account: "@fafa",
      Posted: UserPostedField,
    },
    {
      UserImg: Dog,
      Name: "Bacon",
      Account: "@BaconDelicious",
      Posted: UserPostedField,
    },
  ];
  