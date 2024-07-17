const gradients = [
    "linear-gradient(165deg, #B06AB3, #4568DC)",
    "linear-gradient(165deg, #191654, #43C6AC)",
    "linear-gradient(165deg, #ffc3a0, #FFAFBD)",
    "linear-gradient(165deg, #0052D4, #65C7F7, #9CECFB)",
    "linear-gradient(165deg, #EC6EAD, #3494E6)",
    "linear-gradient(165deg, #FDB99B, #CF8BF3, #A770EF)",
    "linear-gradient(165deg, #fc67fa, #f4c4f3)",
    "linear-gradient(165deg, #333399, #ff00cc)",
    "linear-gradient(165deg, #89fffd, #ef32d9)",
    "linear-gradient(165deg, #F56217, #0B486B)"
  ];
  
  const bodyGradients = [
    "linear-gradient(to right, #2196f3, #f44336)",
    "linear-gradient(to right, #16bffd, #cb3066)",
    "linear-gradient(to right, #eecda3, #ef629f)",
    "linear-gradient(to right, #ff4b1f, #1fddff)",
    "linear-gradient(to right, #ba5370, #f4e2d8)",
    "linear-gradient(to right, #4ca1af, #c4e0e5)"
  ];
  
  document.getElementById("bck-color").onclick = function () {
    const randomColor =
      bodyGradients[Math.floor(Math.random() * bodyGradients.length)];
    document.body.style.background = randomColor;
  };
  
  document.getElementById("cont-color").onclick = function () {
    const randomGradient =
      gradients[Math.floor(Math.random() * gradients.length)];
    document.querySelector(".frame").style.background = randomGradient;
  };
  
  document.getElementById("both-color").onclick = function () {
    const randomBodyGradient =
      bodyGradients[Math.floor(Math.random() * bodyGradients.length)];
    const randomContainerGradient =
      gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.background = randomBodyGradient;
    document.querySelector(".frame").style.background = randomContainerGradient;
  };
  