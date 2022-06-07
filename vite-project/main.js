import "./styles/style.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import "./styles/var.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//GSAP SCROLLTRIGGER
const tl = gsap.timeline({ scrollTrigger: ".card-1", delay: 0.2 });
tl.from(".card-1", { x: -250, duration: 0.5, ease: "ease-in" });

const tl2 = gsap.timeline({ scrollTrigger: ".card-2", delay: 0.1 });
tl2.from(".card-2", { x: -250, duration: 0.5, ease: "ease-in" });

const tl3 = gsap.timeline({ scrollTrigger: ".card-3", delay: 0.1 });
tl3.from(".card-3", { x: 250, duration: 0.5, ease: "ease-in" });

const tl4 = gsap.timeline({ scrollTrigger: ".card-4", delay: 0.1 });
tl4.from(".card-4", { x: -250, duration: 0.5, ease: "ease-in" });

const tl5 = gsap.timeline({ scrollTrigger: ".card-5", delay: 0.1 });
tl5.from(".card-5", { x: 250, duration: 0.5, ease: "ease-in" });

const tl6 = gsap.timeline({ scrollTrigger: ".card-6", delay: 0.1 });
tl6.from(".card-6", { x: -250, duration: 0.5, ease: "ease-in" });

const tl7 = gsap.timeline({ scrollTrigger: ".card-7", delay: 0.1 });
tl7.from(".card-7", { x: 250, duration: 0.5, ease: "ease-in" });

const tl8 = gsap.timeline({ scrollTrigger: ".card-8", delay: 0.1 });
tl8.from(".card-8", { x: -250, duration: 0.5, ease: "ease-in" });

const tl9 = gsap.timeline({ scrollTrigger: ".card-9", delay: 0.1 });
tl9.from(".card-9", { x: 250, duration: 0.5, ease: "ease-in" });

const tl10 = gsap.timeline({ scrollTrigger: ".card-10", delay: 0.1 });
tl10.from(".card-10", { x: -250, duration: 0.5, ease: "ease-in" });

const tl11 = gsap.timeline({ scrollTrigger: ".card-11", delay: 0.1 });
tl11.from(".card-11", { x: 250, duration: 0.5, ease: "ease-in" });

const tl12 = gsap.timeline({ scrollTrigger: ".card-12", delay: 0.1 });
tl12.from(".card-12", { x: -250, duration: 0.5, ease: "ease-in" });

const tl13 = gsap.timeline({ scrollTrigger: ".card-13", delay: 0.1 });
tl13.from(".card-13", { x: 250, duration: 0.5, ease: "ease-in" });

const tl14 = gsap.timeline({ scrollTrigger: ".card-14", delay: 0.1 });
tl14.from(".card-14", { x: -250, duration: 0.5, ease: "ease-in" });

const tl15 = gsap.timeline({ scrollTrigger: ".card-15", delay: 0.1 });
tl15.from(".card-15", { x: 250, duration: 0.5, ease: "ease-in" });

const tl16 = gsap.timeline({ scrollTrigger: ".card-16", delay: 0.1 });
tl16.from(".card-16", { x: -250, duration: 0.5, ease: "ease-in" });

const tl17 = gsap.timeline({ scrollTrigger: ".card-17", delay: 0.1 });
tl17.from(".card-17", { x: 250, duration: 0.5, ease: "ease-in" });

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
