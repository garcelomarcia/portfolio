import TMDB from "../../../public/tmdb.png";
import Ecommerce from "../../../public/ecommerce.png";
import LinkBase from "../../../public/linkbase.png";
import FastDelivery from "../../../public/FastDelivery.png";
import Tradingview from "../../../public/Tradingview.png";
import Binance from "../../../public/Binance.jpeg"
import Dashboard from "../../../public/dashboard.png"
export const projectList = [
  {
    title: "Crypto Dashboard",
    subTitle: "Finance",
    description:
    "A Dashboard with Live Market Data and Statistical Data to assist with financial and investment decisions. This dashboard has a notification feature, so that the user doesn't miss an opportunity. ",
    image: Dashboard,
    technologies: ["Python", "SocketIO", "Toastify", "Express", "Sequelize", "SQL", "Psycopg2"],
    github: "https://github.com/garcelomarcia/crypto-dashboard-back/",
    live: "https://crypto-dashboard-garcelomarcia.vercel.app/",
    live_btn: "Live Demo",
    source_btn: "Source Code",
  },
  {
    title: "Fast Delivery",
    subTitle: "Utility",
    description:
    "Fast Delivery is a Web application designed to keep track of package deliveries. It features navigation options with GoogleMaps API.",
    image: FastDelivery,
    technologies: [
      "NextJs",
      "Redux",
      "Tailwind CSS",
      "TypeScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    github: "https://github.com/FasterDelivery",
    live: "https://fast-delivery-garcelomarcia.vercel.app/",
    demoAccount: {
      username: "user@user.com / admin@admin.com",
      password: "123456 / admin",
    },
    live_btn: "Live Demo",
    source_btn: "Source Code",
  },
  {
    title: "Binance Trading Bot",
    subTitle: "Finance",
    description:
      "A Bot that uses Python's Flask to create an API that recieves Tradingview's Webhook alerts and transforms them to Stop Market Orders using BinanceAPI. This bot also uses a websocket service to listen to filled orders so that exit orders (Take Profit and Stop Loss) can be placed in less than a second.",
    image: Binance,
    technologies: ["Python", "Flask", "Pandas", "Numpy", "Binance Client", "SQL", "Psycopg2"],
    github: "https://github.com/garcelomarcia/Bot-Websockets/",
    source_btn: "Source Code",
  },
  {
    title: "Tradingview Strategy Backtester",
    subTitle: "Finance",
    description:
      "A script that uses Selenium Webdriver to scrape the data and find a Strategy's optimal settings by iterating through its specified parameters",
    image: Tradingview,
    technologies: ["Python", "Selenium", "Pandas", "Numpy"],
    github: "https://github.com/garcelomarcia/tradingview-strategy-backtester",
    live: "https://www.loom.com/share/5ac4bbd752da462c9e6f15672d5574e2?sid=7a3bf57a-a8f3-4eba-a8fa-fad91984e201",
    live_btn: "Video Sample",
    source_btn: "Source Code",
  },
  {
    title: "LinkBase",
    subTitle: "Social Media",
    description:
      "LinkBase is a A React-Native application developed for Net Global that provides a platform for businesses' employees to create reviews on other businesses. The application is designed to streamline the review process and make it easy for users to share their experiences with other businesses.",
    image: LinkBase,
    technologies: [
      "React Native",
      "Redux",
      "Nativebase",
      "TypeScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    github: "https://github.com/LinkBase2-0",
    live: "https://tmdb-back-w5b3.onrender.com/api/videos/linkbase",
    demoAccount: null,
    live_btn: "Video Sample",
    source_btn: "Source Code",
  },
  {
    title: "Custom T-Shirts",
    subTitle: "E-commerce",
    description:
      "This Website is an E-Commerce site with a full customer experience, including registering users, browsing & customizing products, adding products to cart and checking out. It also allows an admin login to manage products and user priviliges",
    image: Ecommerce,
    technologies: [
      "ReactJS",
      "Redux",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    github: "https://github.com/julian-rinaudo/ecommerce",
    live: "https://ecommerce-garcelomarcia.vercel.app/",
    demoAccount: {
      username: "demo@mail.com / admin@mail.com",
      password: "password",
    },
    live_btn: "Live Demo",
    source_btn: "Source Code",
  },
  {
    title: "TMDB",
    subTitle: "Entertainment",
    description:
    "Website to browse Movies and TV Series by many categories and create a Favorites list",
    image: TMDB,
    technologies: [
      "ReactJS",
      "Redux",
      "CSS",
      "JavaScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    github: "https://github.com/garcelomarcia/TMDB",
    live: "https://tmdb-front-garcelomarcia.vercel.app/",
    demoAccount: {
      username: "demo",
      password: "password",
    },
    live_btn: "Live Demo",
    source_btn: "Source Code",
  },
];

export const text = {
  english: {
    title: "Fullstack Javascript Developer",
    description:
      "Freelancer providing Fullstack Development services for Web and Mobile Applications. Scroll down to get to know me and what I've been working on!",
    about: "About",
    skills: "Skills",
    portfolio: "Portfolio",
    resume: "Resume",
    about_me:
    "As an industrial engineer with a manufacturing background, I have always been passionate about solving complex problems and optimizing processes. Recently, I have expanded my skillset by completing a fullstack JavaScript coding bootcamp and honing my programming skills. I am excited to take on new challenges and use my diverse background to contribute to a dynamic team as a developer. With my strong foundation in engineering and newfound coding abilities, I am conﬁdent that I can bring a unique perspective and innovative solutions to any project.",
  },
  
  spanish: {
    title: "Desarrollador Fullstack en Javascript",
    description:
    "Proveo desarrollos Fullstack en Web y de Aplicaciones. Dale hacia abajo para conocer más sobre mí, mis habilidades y los proyectos que he desarrollado!",
    about: "Sobre mí",
    skills: "Habilidades",
    portfolio: "Portafolio",
    resume: "Currículum",
    about_me:
    "Como ingeniero industrial con experiencia en manufactura, siempre me ha apasionado resolver problemas complejos y optimizar procesos. Recientemente, he ampliado mis habilidades al completar un bootcamp de programación fullstack en JavaScript y perfeccionar mis habilidades de programación. Estoy emocionado de enfrentar nuevos desafíos y utilizar mi experiencia diversa para contribuir a un equipo dinámico como desarrollador. Con mi sólida base en ingeniería y mis habilidades recién adquiridas en programación, tengo confianza en que puedo aportar una perspectiva única y soluciones innovadoras a cualquier proyecto.",
  },
};
