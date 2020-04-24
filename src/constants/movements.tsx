export interface Movement {
  name: string;
  audio: HTMLAudioElement | any; // eslint-disable-line @typescript-eslint/no-explicit-any
  enabled?: boolean;
}

const AUDIO_DIR = `${process.env.PUBLIC_URL}/audio`;

export const enGarde: Movement = {
  name: "en garde!",
  audio: new Audio(`${AUDIO_DIR}/en-garde.mp3`)
};

export const steppingMovements: Movement[] = [
  {
    name: "shift",
    audio: new Audio(`${AUDIO_DIR}/shift.mp3`),
    enabled: true
  },
  {
    name: "switch",
    audio: new Audio(`${AUDIO_DIR}/switch.mp3`),
    enabled: true
  },
  {
    name: "forwards",
    audio: new Audio(`${AUDIO_DIR}/forwards.mp3`),
    enabled: true
  },
  {
    name: "backwards",
    audio: new Audio(`${AUDIO_DIR}/backwards.mp3`),
    enabled: true
  },
  {
    name: "inside",
    audio: new Audio(`${AUDIO_DIR}/inside.mp3`),
    enabled: false
  },
  {
    name: "outside",
    audio: new Audio(`${AUDIO_DIR}/outside.mp3`),
    enabled: false
  },
  {
    name: "turn-in",
    audio: new Audio(`${AUDIO_DIR}/turn-in.mp3`),
    enabled: false
  },
  {
    name: "turn-out",
    audio: new Audio(`${AUDIO_DIR}/turn-out.mp3`),
    enabled: false
  }
];
