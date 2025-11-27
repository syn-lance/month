/* TYPEWRITER */
const text = "Happy Monthsary, My Babyy! ❤️";
let i = 0;

function typeWriter() {
    if (i === 0) document.getElementById("typewriter").innerHTML = "";
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}
window.onload = typeWriter;

/* FLOATING HEARTS */
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("absolute", "text-2xl");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.animation = `floatUp ${3 + Math.random() * 3}s linear`;
    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 600);

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(style);

/* ---------------------------
   GALLERY POPUP
---------------------------- */
const galleryBtn = document.getElementById("openGalleryBtn");
const galleryModal = document.getElementById("galleryModal");
const galleryCard = document.getElementById("galleryCard");
const closeGallery = document.getElementById("closeGallery");

galleryBtn.addEventListener("click", () => {
    galleryModal.classList.remove("hidden");
    galleryCard.classList.add("fade-in");
});

closeGallery.addEventListener("click", () => {
    galleryCard.classList.remove("fade-in");
    galleryCard.classList.add("fade-out");
    setTimeout(() => {
        galleryModal.classList.add("hidden");
        galleryCard.classList.remove("fade-out");
    }, 300);
});

galleryModal.addEventListener("click", (e) => {
    if (e.target === galleryModal) closeGallery.click();
});

/* ---------------------------
   IMAGE ZOOM
---------------------------- */
const zoomModal = document.getElementById("imageZoomModal");
const zoomedImage = document.getElementById("zoomedImage");

document.querySelectorAll("#galleryModal img").forEach(img => {
    img.addEventListener("click", () => {
        zoomedImage.src = img.src;
        zoomModal.classList.remove("hidden");
        zoomedImage.classList.add("fade-in");
    });
});

zoomModal.addEventListener("click", () => zoomModal.classList.add("hidden"));

/* ---------------------------
   VIDEO POPUP
---------------------------- */
const videoBtn = document.getElementById("playVideoBtn");
const videoModal = document.getElementById("videoModal");
const videoCard = document.getElementById("videoCard");
const videoPlayer = document.getElementById("videoPlayer");
const closeVideo = document.getElementById("closeVideo");

videoBtn.addEventListener("click", () => {
    videoModal.classList.remove("hidden");
    videoCard.classList.add("fade-in");
    videoPlayer.play();
});

closeVideo.addEventListener("click", () => {
    videoCard.classList.remove("fade-in");
    videoCard.classList.add("fade-out");
    setTimeout(() => {
        videoModal.classList.add("hidden");
        videoCard.classList.remove("fade-out");
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }, 300);
});

videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) closeVideo.click();
});

/* ---------------------------
   QR POPUP
---------------------------- */
const openQRBtn = document.getElementById("openQRBtn");
const qrModal = document.getElementById("qrModal");
const qrCard = document.getElementById("qrCard");
const closeQR = document.getElementById("closeQR");

openQRBtn.addEventListener("click", () => {
    qrModal.classList.remove("hidden");
    qrCard.classList.add("fade-in");
});

closeQR.addEventListener("click", () => {
    qrCard.classList.remove("fade-in");
    qrCard.classList.add("fade-out");
    setTimeout(() => {
        qrModal.classList.add("hidden");
        qrCard.classList.remove("fade-out");
    }, 300);
});

qrModal.addEventListener("click", (e) => {
    if (e.target === qrModal) closeQR.click();
});
