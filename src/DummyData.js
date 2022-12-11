import SRK from "./images/srk.png";
import Rock from "./images/rock.jpg";
import Vidyut from "./images/vidyut.jpg";
import Messi from "./images/messi.jpg";
import Usama from "./images/usama2.jpg";
import Messi2 from "./images/messi2.jpg";
import Usama3 from "./images/usama3.jpg";

export const users = [
  {
    id: 1,
    profilePicture: SRK,
    userName: "Shah Rukh Khan",
  },
  {
    id: 2,
    profilePicture: Rock,
    userName: "Dewayn Johnson",
  },
  {
    id: 3,
    profilePicture: Vidyut,
    userName: "Vidyut Jamwaal",
  },
  {
    id: 4,
    profilePicture: Messi,
    userName: "Lionel Messi",
  },
  {
    id: 5,
    profilePicture: SRK,
    userName: "Shah Rukh Khan",
  },
  {
    id: 6,
    profilePicture: Messi2,
    userName: "Ankara Messi",
  },
];

//////

export const posts = [
  {
    id: 1,
    userID: 1,
    date: "Yesterday at 06:00 PM",
    description: "The King of BollyWood SRK",
    photo: Usama,
    like: 14,
    comment: 10,
  },
  {
    id: 2,
    userID: 2,
    date: "Today at 06:00 PM",
    description: "Love You My Fans",
    photo: Rock,
    like: 10,
    comment: 8,
  },
  {
    id: 3,
    userID: 3,
    date: "10 mins ago",
    description:
      "Fitness Freak!  Trust me, your favorite player never reached this level and never will.",
    photo: Vidyut,
    like: 3,
    comment: 1,
  },
  {
    id: 4,
    userID: 4,
    date: "4 hrs ago",
    description:
      " Antara Messi!  Trust me, your favorite player never reached this level and never will. Trust me, your favorite player never reached this level and never will. Trust me, your favorite player never reached this level and never will.",
    photo: Messi,
    like: 9,
    comment: 2,
  },
  {
    id: 5,
    userID: 5,
    date: "1 hr ago",
    description: "Love You My Fans",
    photo: Usama,
    like: 20,
    comment: 8,
  },
  {
    id: 6,
    userID: 6,
    date: "2 days ago",
    description: "The Last of Stars!",
    photo: Messi2,
    like: 20,
    comment: 12,
  },
  {
    id: 7,
    userID: 3,
    date: "10 mins ago",
    description:
      "Fitness Freak!  Trust me, your favorite player never reached this level and never will.",
    photo: Usama3,
    like: 15,
    comment: 10,
  },
];
