import type { DecalColor } from './decals';

export type RaceNumber = {
  sector: string;
  number: string;
  caption: string;
  title: string;
  body: string;
  color: DecalColor;
};

export type RaceNumberLabels = { turnOver: string; turnBack: string };

type Placement = { tilt: number; chevrons: string; dashes: string };

export const RACE_NUMBER_PLACEMENTS: readonly [Placement, ...Placement[]] = [
  {
    tilt: -2,
    chevrons: 'left:5%;top:9%;rotate:-8deg',
    dashes: 'right:5%;top:44%;rotate:6deg',
  },
  {
    tilt: 1.5,
    chevrons: 'right:5%;top:40%;rotate:12deg',
    dashes: 'left:5%;top:9%;rotate:-4deg',
  },
  {
    tilt: -1,
    chevrons: 'left:4%;top:42%;rotate:8deg',
    dashes: 'right:6%;top:26%;rotate:-10deg',
  },
  {
    tilt: 1,
    chevrons: 'right:5%;top:26%;rotate:-6deg',
    dashes: 'left:5%;top:44%;rotate:10deg',
  },
  {
    tilt: -1.5,
    chevrons: 'left:5%;top:40%;rotate:14deg',
    dashes: 'right:5%;top:10%;rotate:-8deg',
  },
  {
    tilt: 2,
    chevrons: 'right:4%;top:42%;rotate:-12deg',
    dashes: 'left:5%;top:9%;rotate:5deg',
  },
];

export const RACE_NUMBER_STAGGER_MS = 90;
export const RACE_NUMBER_ID = 'race-number';
