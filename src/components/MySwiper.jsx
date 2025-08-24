import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/effect-cards";

import "./MySwiper.css";


import ProjectCard from "./ProjectCard";

export default function MySwiper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const swiperParameters = {
    modules: [A11y, Keyboard, EffectCards],
    grabCursor: true,
    loop: false,
    effect: "cards",
    keyboard: { enabled: true },
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
  };

  const projects = [
    {
      img: "/img/aplicacion-music.png",
      title: "Mis Bandas Favoritas",
      link: "https://rockpulse.netlify.app/",
      tech: [
        { src: "/img/astro-icon-light-gradient.webp", alt: "Astro" },
        { src: "/img/React js.png", alt: "React Js" },
        { src: "/img/js.png", alt: "JavaScript" },
        { src: "/img/tailwindcss.png", alt: "Tailwind-css" },
        { src: "/img/swiper-logo.png", alt: "Swiper" },
      ],
    },
    {
      img: "/img/viajero-solitario.png",
      title: "Bienvenido a conocer un poco de Argentina",
      link: "https://argentinamitierra.netlify.app/",
      tech: [
        { src: "/img/astro-icon-light-gradient.webp", alt: "Astro" },
        { src: "/img/html.png", alt: "HTML" },
        { src: "/img/Typescript-logo.png", alt: "Typescript" },
        { src: "/img/tailwindcss.png", alt: "Tailwind-css" },
        { src: "/img/swiper-logo.png", alt: "Swiper" },
      ],
    },
    {
      img: "/img/iconosalem.png",
      title: "Salem Energias Positivas",
      link: "https://salemenergiaspositias.netlify.app/",
      tech: [
        { src: "/img/React js.png", alt: "React Js" },
        { src: "/img/js.png", alt: "JavaScript" },
        { src: "/img/tailwindcss.png", alt: "Tailwind-css" },
        { src: "/img/Vite.js.png", alt: "Vitejs" },
        { src: "/img/swiper-logo.png", alt: "Swiper" },
        { src: "/img/firebase.png", alt: "Firebase" },
      ],
    },
    {
      img: "/img/guitarrista.png",
      title: "Casa de las Guitarras (ecommerce)",
      link: "https://tiendademusica.netlify.app/",
      tech: [
        { src: "/img/html.png", alt: "HTML" },
        { src: "/img/css-3.png", alt: "CSS" },
        { src: "/img/js.png", alt: "JavaScript" },
      ],
    },
    {
      img: "/img/panaderia.png",
      title: "Pasteleria Roma",
      link: "https://paseteleriaroma.netlify.app",
      tech: [
        { src: "/img/html.png", alt: "HTML" },
        { src: "/img/css-3.png", alt: "CSS" },
        {
          src: "/img/icons8-sass-a-style-sheet-professional-grade-css-extension-language-96.png",
          alt: "Sass",
        },
        { src: "/img/bootstrap.png", alt: "Bootstrap" },
      ],
    },
    {
      img: "/img/persona-de-libre-dedicacion.png",
      title: "Mi Pagina Web v.1",
      link: "https://hectoremanueldiazochoadev.netlify.app",
      tech: [
        { src: "/img/html.png", alt: "HTML" },
        { src: "/img/css-3.png", alt: "CSS" },
        { src: "/img/js.png", alt: "JavaScript" },
      ],
    },
  ];

  return (
    <section id="portfolio">
      {isClient && (
        <Swiper {...swiperParameters}>
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="swiper-slide-828e">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.img}
                technologies={project.tech}
                projectUrl={project.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
