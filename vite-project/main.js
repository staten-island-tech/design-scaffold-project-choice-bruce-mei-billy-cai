import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".header", delay: 0.2 });

tl.from(".navbar", {
  x: -2000,
  duration: 0.4,
});

tl.from(".title", { opacity: 0, duration: 0.6, ease: "ease-out" });

`tl.from(".header-background", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 0.5,
  ease: "ease-out",
});`;
