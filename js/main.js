document.addEventListener("DOMContentLoaded", () => {
  console.log("Main JS loaded");

  /* =====================================================
     PAGE 2 — QUIZ (Answer Bank)
     ===================================================== */
  if (document.body.classList.contains("page2")) {
    const questionEl = document.getElementById("question");
    const answersEl = document.querySelector(".answers");
    const nextBtn = document.querySelector(".next-btn");

    if (!questionEl || !answersEl || !nextBtn) {
      console.error("Quiz elements missing");
      return;
    }

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
          "Late night chats",
          "Being there for each other",
          "That one emotional moment",
          "It just happened naturally"
        ]
      },
      {
        q: "What do you love about us?",
        a: [
          "How we fight but stay",
          "The comfort we share",
          "How we understand each other",
          "Everything"
        ]
      },
      {
        q: "One thing you miss?",
        a: [
          "My voice",
          "My presence",
          "Our moments",
          "All of it"
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
      }
    ];

    let current = 0;

    function renderQuestion() {
      questionEl.textContent = questions[current].q;
      answersEl.innerHTML = "";

      questions[current].a.forEach(text => {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.className = "answer-btn";
        answersEl.appendChild(btn);
      });
    }

    // 🔑 THIS PREVENTS “STUCK”
    renderQuestion();

    nextBtn.addEventListener("click", () => {
      current++;
      if (current >= questions.length) {
        window.location.href = "ship.html";
      } else {
        renderQuestion();
      }
    });
  }

  /* =====================================================
     PAGE 3 — SHIP MUSIC
     ===================================================== */
  if (document.body.classList.contains("page3")) {
    const music = document.getElementById("bgMusic");
    if (music) {
      document.addEventListener("click", () => {
        music.play().catch(() => {});
      }, { once: true });
    }
  }

  /* =====================================================
     PAGE 4 — LOVE FALL (LIGHT & SAFE)
     ===================================================== */
  if (document.body.classList.contains("page4")) {
    const box = document.querySelector(".love-fall");
    if (box) {
      setInterval(() => {
        const item = document.createElement("div");
        item.className = "love-item";
        item.style.left = Math.random() * 100 + "vw";
        item.style.animationDuration = (8 + Math.random() * 4) + "s";
        box.appendChild(item);

        setTimeout(() => item.remove(), 12000);
      }, 1200); // slow = smooth
    }
  }

  /* =====================================================
     PAGE 5 — HEARTS (LIGHT & SAFE)
     ===================================================== */
  if (document.body.classList.contains("page5")) {
    const heartBox = document.querySelector(".hearts");
    if (heartBox) {
      setInterval(() => {
        const h = document.createElement("div");
        h.className = "heart";
        h.style.left = Math.random() * 100 + "vw";
        h.style.animationDuration = (8 + Math.random() * 4) + "s";
        heartBox.appendChild(h);

        setTimeout(() => h.remove(), 12000);
      }, 1200);
    }
  }
});
 
