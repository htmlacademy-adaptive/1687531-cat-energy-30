var e=document.querySelector(".nav"),n=document.querySelector(".nav__toggle"),s=document.querySelector(".nav__list"),t=()=>{e.classList.contains("nav--closed")?(e.classList.remove("nav--closed"),e.classList.add("nav--opened"),s.style.display="block"):(e.classList.remove("nav--opened"),e.classList.add("nav--closed"),s.style.display="none")};n.addEventListener("click",t);
