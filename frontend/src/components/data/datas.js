import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
   {
    url: "/books",
    text: "Books",
  },
   {
    url: "/readlist",
    text: "Readlist",
  },
     {
    url: "/review",
    text: "Review",
  },
    {
    url: "/score",
    text: "Score",
  },
  {
    url: "/register",
    text: "Register",
  },
 

]
const home = [
  {
    text: "Willkommen bei",
    name: "Literatur-Score",
    post: "Readinglists",
    design: "tracking your knowledge",
    desc: "Entdecke die Welt der Literatur neu.",
  },
];
export const about = [
  {
    desc: "Diese Website stellt unterschiedliche Bücher mit verschiedenen Genre zur Verfügung. Sie besitzen die Möglichkeit durch Bücher zu stöbern und interessante Literaturen in Ihre persönliche Leseliste hinzuzufügen.",
    desc1: "Ein Ziel unserer Website ist es nicht nur ihre Lesefreude zu festigen, sondern auch ihr Wissen zu erweitern. Es soll dazu ermutigt werden sich für diverse Kategoreien zu interessieren. Gelesene Bücher werden mit einem Score angezeigt: desto mehr Bücher Sie von einer Kategorien lesen, desto höher wird Ihr Score. ",
    desc2: "Somit besitzen Sie zu jeder Zeit einen Überblick über ihr Allgemeinwissen :)"
  },
]


export const score = [
  { desc: "Diese",
    desc2: "Ss",
    desc3: "wds",
  },
];



export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]