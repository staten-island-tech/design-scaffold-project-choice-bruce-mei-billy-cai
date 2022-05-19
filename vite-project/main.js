import "./styles/style.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".title", delay: 0.2 });

tl.from(".title", { opacity: 0, duration: 0.5 });

tl.from(".navbar", { y: -150, duration: 0.5, ease: "ease-out" });

tl.from(".navbar-btn", { opacity: 0, duration: 1 });

tl.from(".card", { x: -3000, duration: 0.5, ease: "ease-in" });
