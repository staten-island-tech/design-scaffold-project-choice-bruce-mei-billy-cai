import "./styles/style.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".header", delay: 0.1 });

tl.from(".title", { y: -500, duration: 1, ease: "ease-out" });

tl.from(".navbar", { y: -200, duration: 0.5, ease: "ease-out" });

tl.from(".navbar-btn", { x: -1500, duration: 0.5, ease: "ease-out", delay: 0 });

tl.from(".theme", { x: -1500, duration: 0.5, ease: "ease-out", delay: 0 });

document.querySelector(".light").addEventListener("click", function () {
  {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    document.headbackground.classList.add("header-background");
    document.headbackground.classList.remove("header-background2");
  }
});

document.querySelector(".dark").addEventListener("click", function () {
  {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    document.headbackground.classList.add("header-background2");
    document.headbackground.classList.remove("header-background");
  }
});
