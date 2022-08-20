function toggleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");

  video.currentTime = 0;
  trailer.classList.toggle("active");

  const active = document.querySelector(".active");
  if (active != null) {
    video.play();
  } else {
    video.pause();
  }
}
