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
/* HEARTS FOR LAST PAGE */
const heartContainer = document.querySelector(".hearts");

if (heartContainer) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 4 + "s";
    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
  }, 350);
}
const flowerBox = document.querySelector(".flowers");

if (flowerBox) {
  setInterval(() => {
    const f = document.createElement("div");
    f.className = "flower";
    f.style.left = Math.random() * 100 + "vw";
    f.style.animationDuration = 6 + Math.random() * 4 + "s";
    flowerBox.appendChild(f);

    setTimeout(() => f.remove(), 10000);
  }, 400);
}
/* ===== QUIZ LOGIC (PAGE 2) ===== */

const questions = [
  {
    q: "When did I propose to you?",
    a: [
      "That unexpected moment",
      "On a random normal day",
      "A moment we’ll never forget",
      "You remember better than me"
    ]
  },
  {
    q: "What incident made us close?",
    a: [
      "Late night talks",
      "That one misunderstanding",
      "Being there for each other",
      "It just happened naturally"
    ]
  },
  {
    q: "What do you love about us?",
    a: [
      "How we fight but stay",
      "How we understand each other",
      "The comfort we share",
      "All of it"
    ]
  },
  {
    q: "One thing you miss?",
    a: [
      "Your voice",
      "Your presence",
      "Our moments",
      "Everything"
    ]
  },
  {
    q: "How do you want our future?",
    a: [
      "Peaceful and loving",
      "Growing together",
      "Strong no matter what",
      "Always us"
    ]
  },
  {
    q: "Where do you see us in 3 years?",
    a: [
      "Still choosing each other",
      "More mature",
      "Stronger together",
      "Side by side"
    ]
  }
];

let current = 0;

const questionEl = document.getElementById("question");
const answersEl = document.querySelector(".answers");
const nextBtn = document.querySelector(".next-btn");

if (questionEl && answersEl && nextBtn) {
  nextBtn.addEventListener("click", () => {
    current++;

    if (current >= questions.length) {
      // GO TO NEXT PAGE
      window.location.href = "ship.html";
      return;
    }

    // Update question
    questionEl.textContent = questions[current].q;

    // Update answers
    answersEl.innerHTML = "";
    questions[current].a.forEach(ans => {
      const btn = document.createElement("button");
      btn.textContent = ans;
      answersEl.appendChild(btn);
    });
  });
}
const music = document.getElementById("bgMusic");
if (music) {
  document.addEventListener("click", () => {
    music.play();
  }, { once: true });
}
/* PAGE 4 LOVE FALL */
document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".love-fall");
  if (!box) return;

  setInterval(() => {
    const item = document.createElement("div");
    item.className = "love-item";
    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDuration = (6 + Math.random() * 4) + "s";
    box.appendChild(item);

    setTimeout(() => {
      if (item.parentNode) item.remove();
    }, 10000);
  }, 700);
});
