var image = document.createElement('img');
image.src = browser.runtime.getURL("assets/images/neco-arc-dance.gif");
image.style.height = "200px";
image.style.width = "auto";
image.style.position = "fixed";
image.style.bottom = "20px";
image.style.right = "20px";
image.style.zIndex = "9999";

const music = document.createElement("iframe");
music.src = browser.runtime.getURL("assets/music/bgm.ogg");
music.allow = "autoplay 'src'";
music.style.display = "none";

document.body.appendChild(image);
document.body.appendChild(music);