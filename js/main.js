/* HEARTS */
const hearts = document.querySelector(".hearts");
if (hearts) {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random()*100+"vw";
    h.style.animationDuration = 4+Math.random()*4+"s";
    hearts.appendChild(h);
    setTimeout(()=>h.remove(),8000);
  },300);
}

/* QUIZ SAVE */
document.querySelectorAll(".quiz input").forEach(input=>{
  const id = input.dataset.q;
  input.value = localStorage.getItem("q"+id)||"";
  input.oninput = ()=>localStorage.setItem("q"+id,input.value);
});

/* MUSIC AUTOPLAY FIX */
const music = document.getElementById("bgMusic");
if (music) {
  document.addEventListener("click",()=>music.play(),{once:true});
}

/* SCROLL FADE */
const items = document.querySelectorAll(".timeline div");
if (items.length) {
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add("show");
    });
  });
  items.forEach(i=>obs.observe(i));
}
