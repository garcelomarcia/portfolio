"use client";
import { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Head from "next/head";
import Image from 'next/image'
import AboutMe from "./components/AboutMe"
import DemoAccount from "./components/DemoAccount"
import ScrollButton from "./components/ScrollButton"
import profile from "../../public/profile.jpeg"
import html5 from "../../public/html5.png"
import nodelogo from "../../public/node_logo.png";
import tools from "../../public/tools.png";
import {projectList as projects, text} from "./utils"
// import Menu from "../../public/menu.svg"

export default function Home() {
  const [darkMode, setDarkMode] = useState('hidden');
  const [menu,setMenu] = useState(true)
  const [english, setEnglish] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = window.localStorage.getItem('theme');
      setDarkMode(storedTheme || 'dark');
    }
  }, []);
  
  const handleMode = () => {
    
   if (darkMode === "dark"){
    window.localStorage.setItem("theme"," ")
    setDarkMode(" ")
   } else{
    window.localStorage.setItem("theme", "dark")
    setDarkMode("dark")
   }
  }

  return (
    <div className={darkMode}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="absolute bg-white px-0 dark:bg-gray-900 md:px-20 lg:px-40 scroll-smooth w-full">
      <ScrollButton/>
      <section className="min-h-screen">
        <nav className="p-5 flex justify-between items-center dark:text-white">
          <h1 className="font-burtons text-xl">garcelomarcia</h1>
          <div className="md:hidden" onClick={()=>setMenu(!menu)}>
            {menu ? <svg xmlns="http://www.w3.org/2000/svg" className="ionicon h-6 w-6" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" className="ionicon h-6 w-6" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>}
          </div>
          
          <ul className="hidden md:flex md:items-center md:space-between">
            <li>
              <a
                className="text-xl dark:text-white mx-4 hover:text-cyan-500 dark:hover:text-cyan-500 font-sans"
                href="#about"
              >
                {english ? text.english.about:text.spanish.about}
              </a>
            </li>
            <li>
              <a
                className="text-xl dark:text-white mx-4 hover:text-cyan-500 dark:hover:text-cyan-500 font-sans"
                href="#skills"
              >
                {english ? text.english.skills:text.spanish.skills}
              </a>
            </li>
            <li>
              <a
                className="text-xl dark:text-white mx-4 hover:text-cyan-500 dark:hover:text-cyan-500 font-sans"
                href="#projects"
              >
                {english ? text.english.portfolio:text.spanish.portfolio}
              </a>
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md mx-4 font-sans"
                href={english ? "https://drive.google.com/file/d/1w4erzAmUElALTmw2UbZv9L8FmGMxop82/view?usp=sharing" : "https://drive.google.com/file/d/1YcgODLvXZg4XohiMbY9LbwFg6RNjWdvT/view?usp=sharing"}
              >
                {english ? text.english.resume:text.spanish.resume}
              </a>
            </li>
            <li onClick={()=>{setEnglish(!english)}}>
                {english ? <p className="text-xl mx-4 cursor-pointer">🇬🇧 </p>: <p className="text-xl mx-4 cursor-pointer">🇪🇸</p> }              
            </li>
            <li>
              <BsFillMoonStarsFill
                onClick={handleMode}
                className=" cursor-pointer text-2xl mx-4"
              />
            </li>
          </ul>
        </nav>
        {!menu && (
        <div className="md:hidden flex justify-center items-center">
        <ul className="flex flex-col items-center">
            <li className="my-4">
              <a
                className="text-xl dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 font-sans"
                href="#about"
              >
                {english ? text.english.about:text.spanish.about}
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-xl dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 font-sans"
                href="#skills"
              >
                {english ? text.english.skills:text.spanish.skills}
              </a>
            </li>
            <li className="my-4">
              <a
                className="text-xl dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 font-sans"
                href="#projects"
              >
                {english ? text.english.portfolio:text.spanish.portfolio}
              </a>
            </li>
            <li className="my-4">
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md font-sans"
                href="https://drive.google.com/file/d/14LV0lzGcXQLP5ox-OzdnYqkldpykKlBQ/view?usp=sharing"
              >
                {english ? text.english.resume:text.spanish.resume}
              </a>
            </li>
            <li className="my-4" onClick={()=>{setEnglish(!english)}}>
                {english ? <p className="text-xl cursor-pointer">🇬🇧 </p>: <p className="text-xl cursor-pointer">🇪🇸</p> }              
            </li>
            <li className="my-4">
              <BsFillMoonStarsFill
               onClick={handleMode}
                className=" cursor-pointer text-2xl dark:fill-white"
              />
            </li>
          </ul>
          </div>)}
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-sans font-medium dark:text-teal-400 md:text-6xl">
            Marcelo Garcia
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl font-sans">
          {english ? text.english.title:text.spanish.title}
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl font-sans text-justify">
          {english ? text.english.description:text.spanish.description}
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href={"http://www.github.com/garcelomarcia"}>
              <AiFillGithub />
            </a>
            <a href={"https://www.linkedin.com/in/garcelomarcia/"}>
              <AiFillLinkedin />
            </a>
          </div>
          <div className="mx-auto relative justify-self-start bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 relative overflow-hidden mt-10 md:h-96 md:w-96">
            <Image src={profile} fill={true} objectFit="cover" alt={""}/>
          </div>
        </div>
      </section>
      <section id="about" className="mt-20">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 flex justify-start text-center md:text-left lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight dark:text-white sm:text-4xl md:mx-auto text-teal-600">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="27df4f81-c854-45de-942a-fe90f7a300f9"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">{english ? text.english.about:text.spanish.about}</span>
              </span>
            </h2>
          </div>
          <div className="flex lg:flex-row items-center justify-start flex-col">
            <div className="flex flex-col items-start basis-1/2">
              <AboutMe />
            </div>
            <p className="text-md p-4 leading-8 text-gray-800 dark:text-gray-200 text-justify basis-1/2">
            {english ? text.english.about_me:text.spanish.about_me}
            </p>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 flex justify-start text-center md:text-left lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight dark:text-white sm:text-4xl md:mx-auto text-teal-600">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="27df4f81-c854-45de-942a-fe90f7a300f9"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">{english ? text.english.skills:text.spanish.skills}</span>
              </span>
            </h2>
          </div>
          <div className="flex md:flex-row flex-col md:gap-8 justify-between">
            <div className="text-center shadow-lg p-10 rounded-xl my-4 dark:bg-white flex-1">
              <Image src={html5} width={100} height={100} alt={""} className="mx-auto"/>
              <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4">
                FrontEnd
              </h6>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">React-Native</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-4 dark:bg-white flex-1">
              <Image src={nodelogo} width={100} height={100} alt={""} className="mx-auto"/>
              <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4">
                BackEnd
              </h6>
              <p className="text-gray-800 py-1">NodeJS</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
              <p className="text-gray-800 py-1">Sequelize</p>
              <p className="text-gray-800 py-1">RestAPI</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Flask</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-4 dark:bg-white flex-1">
              <Image src={tools} width={100} height={100} alt={""} className="mx-auto"/>
              <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4">
              {english ? "Tools":"Herramientas"}
              </h6>
              <p className="text-gray-800 py-1">Git</p>
              <p className="text-gray-800 py-1">Github</p>
              <p className="text-gray-800 py-1">Docker</p>
              <p className="text-gray-800 py-1">Selenium</p>
              <p className="text-gray-800 py-1">Heroku</p>
              <p className="text-gray-800 py-1">VSCode</p>
              <p className="text-gray-800 py-1">Postman</p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 flex justify-start text-center md:text-left lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight dark:text-white sm:text-4xl md:mx-auto text-teal-600">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="27df4f81-c854-45de-942a-fe90f7a300f9"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">{english ? "Projects":"Proyectos"}</span>
              </span>
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-800 flex flex-col overflow-hidden transition-shadow duration-300 rounded shadow-md"
              >
                <Image
                  src={project.image}
                  className="object-cover w-full h-64"
                  alt=""
                />
                <div className="p-5 flex flex-col bg-white flex-1">
                  <h1 className="inline-block mb-3 text-2xl font-bold leading-5">
                    {project.title}
                  </h1>
                  <h2 className="inline-block text-gray-600 mb-3 text-xl font-bold leading-5">
                    {project.subTitle}
                  </h2>
                  <p className="mb-2 text-gray-700">{project.description}</p>
                  {project.demoAccount && (
                    <DemoAccount demoAccount={project.demoAccount} />
                  )}
                  <div className="flex flex-wrap space-x-2 mt-5">
                    <h2 className="inline-block text-gray-600 mb-3 text-xl font-bold leading-5">
                      Technologies:
                    </h2>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap space-x-2 mt-5">
                    {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label=""
                      className="inline-flex px-4 py-2 items-center transform font-semibold border transition duration-300 hover:scale-105 shadow hover:shadow-lg"
                    >
                     {project.live_btn}
                    </a>)}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label=""
                      className="inline-flex bg-blue-500 hover:bg-blue-700 shadow hover:shadow-lg px-4 py-2 items-center font-semibold transition duration-300 hover:scale-105 text-white"
                    >
                      {project.source_btn}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}
