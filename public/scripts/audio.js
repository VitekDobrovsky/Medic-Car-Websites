const audio = document.querySelector(".audio-player__audio");
const playPauseBtn = document.querySelector(".audio-player__button");
const seekBar = document.querySelector(".audio-player__timeline");
const timeLabel = document.querySelector(".audio-player__time");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
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
