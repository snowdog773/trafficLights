// FORK THIS PEN

// 1. Wire up the buttons to the lights

// You'll have to select and store the lights as a variable (although it may help you later to have a reference to all of them at once via the 'light' class)

// You'll have to select and store the buttons as separate variables

// then, add an event listener to each of the buttons

// in the 'handler' (the function you give to the listener) you add a class of 'on' to the relevant light

// Also make the lights go on and off on hover (of the light!!)

// 2. (Extra credit): Have a go at making it so that only one light can be on at one time

// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)

const { log } = console;

document.addEventListener("DOMContentLoaded", () => {
  const stopButton = document.getElementById("stop");
  const stopLight = document.querySelector(".light.stop");
  const cautionButton = document.getElementById("caution");
  const cautionLight = document.querySelector(".light.caution");
  const goButton = document.getElementById("go");
  const goLight = document.querySelector(".light.go");
  const clearButton = document.getElementById("clear");
  const lights = [...document.querySelectorAll(".light")];
  const seqOn = document.getElementById("seqOn");
  const seqOff = document.getElementById("seqOff");

  // Manual light control buttons

  function stopInit() {
    log("evt ibj");
    stopLight.classList.add("on");
    cautionLight.classList.remove("on");
    goLight.classList.remove("on");
  }

  stopButton.addEventListener("click", (e) => {
    stopInit();
  });

  cautionButton.addEventListener("click", (e) => {
    log("evt ibj", e);
    stopLight.classList.remove("on");
    cautionLight.classList.add("on");
    goLight.classList.remove("on");
  });

  goButton.addEventListener("click", (e) => {
    log("evt ibj", e);
    stopLight.classList.remove("on");
    cautionLight.classList.remove("on");
    goLight.classList.add("on");
  });

  clearButton.addEventListener("click", (e) => {
    log("evt ibj", lights);
    lights.forEach((e) => e.classList.remove("on"));
  });

  // Mouse over lights code

  lights.forEach((e) =>
    e.addEventListener("mouseover", () => {
      console.log("mouse", e);
      e.classList.add("on");
    })
  );
  lights.forEach((e) =>
    e.addEventListener("mouseout", () => {
      console.log("mouse out", e);
      e.classList.remove("on");
    })
  );

  // Auto light sequence code

  function startSequence() {
    const sequence = ["stop", "caution", "go", "caution"];
    let seqIndex = 0;
    const run = setInterval(() => {
      lights.forEach((e) => {
        if (e.classList.contains(sequence[seqIndex])) {
          e.classList.add("on");
        } else {
          e.classList.remove("on");
        }
      });
      seqIndex === sequence.length - 1 ? (seqIndex = 0) : (seqIndex += 1);
    }, 1000);
    //event listener to stop the sequence
    seqOff.addEventListener("click", () => clearInterval(run));
  }

  seqOn.addEventListener("click", () => startSequence());

  // ...
});
