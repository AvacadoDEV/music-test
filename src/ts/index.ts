import { notesToPlayInOrder } from "./music-to-play";
import { MusicalNote } from "./musical-score";

function getAudioId(musicalNote: MusicalNote): string {
  const accidentalSuffix =
    musicalNote.accidental === undefined || musicalNote.accidental === "N"
      ? ""
      : musicalNote.accidental;

  return `${musicalNote.pitch}${musicalNote.octave}${accidentalSuffix}`;
}

function playAudioElement(elementId: string, beats: any): void {
  const audioElem = document.getElementById(elementId) as HTMLAudioElement;
  audioElem.play();

  setTimeout(() => {
    audioElem.pause();
  }, beats * 250);
}

// To check if the Chord has accidental note or note
export function playMusic() {
  const delayList = [];
  let currentDelay = 0;
  // Defining the Delay
  for (let i of notesToPlayInOrder) {
    if (i["accidental"]) {
      delayList.push({
        pitch: i["pitch"],
        octave: i["octave"],
        beats: i["beats"],
        accidental: i["accidental"],
        delay: currentDelay,
      });
    } else {
      delayList.push({
        pitch: i["pitch"],
        octave: i["octave"],
        beats: i["beats"],
        delay: currentDelay,
      });
    }
    currentDelay += i["beats"];
  }

  for (let i of delayList) {
    const audioId = getAudioId(i);

    setTimeout(() => {
      playAudioElement(audioId, i["beats"]);
    }, i["delay"] * 250);
  }

  console.log(delayList);
}

document.getElementById("start-playing")?.addEventListener("click", playMusic);
