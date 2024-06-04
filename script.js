let i = 1; 
const pix = ["1.jpg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

function show() {
  const img = document.getElementById("p1");
  img.classList.add("fade-out");
  
  setTimeout(() => {
    const ipath = "photos/" + pix[i++ % pix.length];
    img.src = ipath;
    img.classList.remove("fade-out");
  }, 1000);
}

setInterval(show, 3000);