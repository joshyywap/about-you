/* ── Poem editor ── */
const defaultPoem =
`A Quiet Song About You


In quiet streets the echoes play,
Soft whispers linger, fade away.
A melody of nights we knew,
The city hums a song about you.

Beneath the lights, your shadow drifts,
Through crowded rooms, through empty rifts.
A fleeting smile, a fleeting hue,
Every note is a thought of you.

Time bends and sways in gentle tune,
The heart recalls the half-lit moon.
Moments replay, both false and true,
Every chord still hums of you.

And when the dawn breaks soft and slow,
The streets remember what we know.
Though seasons pass, the music stays,
A quiet song, in endless ways.`;

const poemDisplay = document.getElementById("poemDisplay");
const poemEditor = document.getElementById("poemEditor");

function renderPoem(val) {
  poemDisplay.textContent = val;
}

// seed both on load
poemEditor.value = defaultPoem;
renderPoem(defaultPoem);

// live update on every keystroke
poemEditor.addEventListener("input", () => {
  renderPoem(poemEditor.value);
});
// Toggle editor on button click
const editBtn = document.getElementById("editPoemBtn");
const editorSection = document.getElementById("editorSection");

editBtn.addEventListener("click", () => {
  const isHidden = editorSection.classList.contains("hidden");
  editorSection.classList.toggle("hidden");
  editBtn.textContent = isHidden ? "Close Editor" : "Edit your own Poem?";
});


const text = "Every line is meant to be read gently, as these words carry something meaningful that the writer chose to express through poetry instead of voice.";
const el = document.getElementById("typing");
let i = 0, deleting = false;

function loop() {
  el.textContent = deleting ? text.slice(0, i--) : text.slice(0, i++);
  if (!deleting && i > text.length) { deleting = true; setTimeout(loop, 1200); return; }
  if (deleting && i === 0) { deleting = false; }
  setTimeout(loop, deleting ? 35 : 60);
}
loop();

/* ── Music player ── */
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playpause");
const progress = document.getElementById("progress");
const vinyl = document.querySelector(".vinyl");

playBtn.onclick = () => {
  if (audio.paused) { audio.play(); playBtn.textContent = "❚❚"; }
  else { audio.pause(); playBtn.textContent = "►"; }
};

audio.addEventListener("timeupdate", () => {
  progress.style.width = (audio.currentTime / audio.duration * 100) + "%";
});
audio.addEventListener("play", () => vinyl.style.animationPlayState = "running");
audio.addEventListener("pause", () => vinyl.style.animationPlayState = "paused");
audio.addEventListener("ended", () => vinyl.style.animationPlayState = "paused");
