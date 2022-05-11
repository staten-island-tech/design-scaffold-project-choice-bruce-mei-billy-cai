import "./styles/style.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".header", delay: 0.1 });

tl.from(".title", { y: -500, duration: 1, ease: "ease-out" });

tl.from(".navbar", { y: -100, duration: 0.5, ease: "ease-out" });

tl.from(".navbar-btn", { x: -1500, duration: 0.5, ease: "ease-out", delay: 0 });
