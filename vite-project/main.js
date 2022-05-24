import "./styles/style.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import "./styles/var.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//GSAP SCROLLTRIGGER
const tl = gsap.timeline({ scrollTrigger: ".card", delay: 0.2 });

tl.from(".card", { x: -3000, duration: 2, ease: "ease-in" });

//THEMES
document.querySelector(".light").addEventListener("click", function () {
  {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

document.querySelector(".dark").addEventListener("click", function () {
  {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});
