import "./styles/style.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".card", delay: 0.2 });

tl.from(".card", { x: -3000, duration: 2, ease: "ease-in" });
