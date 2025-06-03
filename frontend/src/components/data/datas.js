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
   /* {
    url: "/score",
    text: "Score",
  }, */
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
    desc1: "Zusätzlich können persönliche Reviews zu den Büchern abgegeben werden und ebenfalls mit Sternen von 1-5 gerankt werden.",
    desc2: "Somit bekommen Sie als Nutzer unserer Website einen guten Überblick über die Bücher, die sie gelesen haben und welche Genre oder Autoren sie am liebsten Lesen"
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