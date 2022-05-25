import "./styles/style.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import "./styles/var.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//GSAP SCROLLTRIGGER
const tl = gsap.timeline({ scrollTrigger: ".card-1", delay: 0.2 });

tl.from(".card-1", { x: -3000, duration: 0.5, ease: "ease-in" });

const t2 = gsap.timeline({ scrollTrigger: ".card-2", delay: 0.2 });

t2.from(".card-2", { x: -3000, duration: 0.5, ease: "ease-in" });

const t3 = gsap.timeline({ scrollTrigger: ".card-3", delay: 0.2 });

t3.from(".card-3", { x: 3000, duration: 0.5, ease: "ease-in" });

const t4 = gsap.timeline({ scrollTrigger: ".card-4", delay: 0.2 });

t4.from(".card-4", { x: -3000, duration: 0.5, ease: "ease-in" });

const t5 = gsap.timeline({ scrollTrigger: ".card-5", delay: 0.2 });

t5.from(".card-5", { x: 3000, duration: 0.5, ease: "ease-in" });

const t6 = gsap.timeline({ scrollTrigger: ".card-6", delay: 0.2 });

t6.from(".card-6", { x: -3000, duration: 0.5, ease: "ease-in" });

const t7 = gsap.timeline({ scrollTrigger: ".card-7", delay: 0.2 });

t7.from(".card-7", { x: 3000, duration: 0.5, ease: "ease-in" });

const t8 = gsap.timeline({ scrollTrigger: ".card-8", delay: 0.2 });

t8.from(".card-8", { x: -3000, duration: 0.5, ease: "ease-in" });

const t9 = gsap.timeline({ scrollTrigger: ".card-9", delay: 0.2 });

t9.from(".card-9", { x: 3000, duration: 0.5, ease: "ease-in" });

const t10 = gsap.timeline({ scrollTrigger: ".card-10", delay: 0.2 });

t10.from(".card-10", { x: -3000, duration: 0.5, ease: "ease-in" });

const t11 = gsap.timeline({ scrollTrigger: ".card-11", delay: 0.2 });

t11.from(".card-11", { x: 3000, duration: 0.5, ease: "ease-in" });

const t12 = gsap.timeline({ scrollTrigger: ".card-12", delay: 0.2 });

t12.from(".card-12", { x: -3000, duration: 0.5, ease: "ease-in" });

const t13 = gsap.timeline({ scrollTrigger: ".card-13", delay: 0.2 });

t13.from(".card-13", { x: 3000, duration: 0.5, ease: "ease-in" });

const t14 = gsap.timeline({ scrollTrigger: ".card-14", delay: 0.2 });

t14.from(".card-14", { x: -3000, duration: 0.5, ease: "ease-in" });

const t15 = gsap.timeline({ scrollTrigger: ".card-15", delay: 0.2 });

t15.from(".card-15", { x: 3000, duration: 0.5, ease: "ease-in" });

const t16 = gsap.timeline({ scrollTrigger: ".card-16", delay: 0.2 });

t16.from(".card-16", { x: -3000, duration: 0.5, ease: "ease-in" });

const t17 = gsap.timeline({ scrollTrigger: ".card-17", delay: 0.2 });

t17.from(".card-17", { x: 3000, duration: 0.5, ease: "ease-in" });

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
