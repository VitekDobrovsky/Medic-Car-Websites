const audio = document.querySelector(".audio-player__audio");
const playPauseBtn = document.querySelector(".audio-player__button");
const seekBar = document.querySelector(".audio-player__timeline");
const timeLabel = document.querySelector(".audio-player__time");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
  <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
</svg>`;
  } else {
    audio.pause();
    playPauseBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polygon points="6,4 20,12 6,20" fill="currentColor"/></svg>`;
  }
});
audio.volume = 0.5;
audio.addEventListener("timeupdate", () => {
  const current = Math.floor(audio.currentTime);
  const minutes = Math.floor(current / 60);
  const seconds = String(current % 60).padStart(2, "0");
  timeLabel.textContent = `${minutes}:${seconds}`;
  seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
});

seekBar.addEventListener("input", () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});
