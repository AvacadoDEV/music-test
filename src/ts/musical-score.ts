export enum Pitch {
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
    A = 'A',
    B = 'B',
};

export enum Accidental {
    SHARP = 'S',
    FLAT = 'F',
    NATURAL = 'N',
};

export interface MusicalNote {
    pitch: Pitch;
    octave: number;
    accidental?: Accidental;
    beats: number;
};

export const BEATS_PER_MINUTE = 240;