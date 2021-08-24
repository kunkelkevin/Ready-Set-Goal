export const homeObjOne = {
  id: "ready",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  darkText: true,
  topLine: "You are in control",
  headLine: 'Are you "READY!" to find games at ease?',
  description:
    ' "Set!" the time, date, and location and "SCORE!" a new group of friends to play Futbol with!',
  buttonLabel: "Learn More",
  imgStart: false,
  img: require("../../images/image-1.svg"),
  alt: "Soccer Ball",
  dark: false,
  primary: false,
  to: "set",
};

export const homeObjTwo = {
  id: "set",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  darkText: false,
  topLine: "Want additional practice for your club?",
  headLine: "Take advantage of free practice!",
  description:
    " Private training is great, but nothing gets you experiance like playing the game! Jump in, find a match, and get upgrade your skills.",
  buttonLabel: "Level Up",
  imgStart: true,
  img: require("../../images/svg-2.svg").default,
  alt: "Soccer Ball dribbling",
  dark: true,
  primary: true,
  to: "goal",
};

export const homeObjThree = {
  id: "goal",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  darkText: true,
  topLine: "Open to everyone!",
  headLine: "Find matches between all different kind of people!",
  description:
    ' "The best part of futbol is it brings together all different kinds of people around to world old and young. Go out and make new friends!',
  buttonLabel: "Cheers!",
  imgStart: false,
  img: require("../../images/svg-3.svg").default,
  alt: "friends on the couch",
  dark: true,
  primary: true,
  to: "score",
};
