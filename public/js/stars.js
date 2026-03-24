const starCount = 200;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const size = Math.random() * 2;
  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";

  star.style.animationDuration = (Math.random() * 5 + 2) + "s";

  document.body.appendChild(star);
}