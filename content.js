var image = document.createElement('img');
image.src ="https://raw.githubusercontent.com/yuwukii/NecoArcBuddy/master/assets/images/neco-arc-dance.gif"
image.style.height = "200px";
image.style.width = "auto";
image.style.position = "fixed";
image.style.bottom = "20px";
image.style.right = "20px";
image.style.zIndex = "9999";
document.body.appendChild(image);

const music = new Audio('https://raw.githubusercontent.com/yuwukii/NecoArcBuddy/master/assets/musci/bgm.ogg');
music.volume = 20;
music.play();