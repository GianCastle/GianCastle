export const STAGE_OWNER = {
  shared: 'shared',
  person: 'person',
  agents: 'agents',
  mixed: 'mixed',
} as const;

export type StageOwner = (typeof STAGE_OWNER)[keyof typeof STAGE_OWNER];

export const STAGE_OWNER_FILL: Record<StageOwner, string> = {
  [STAGE_OWNER.shared]: 'var(--pink)',
  [STAGE_OWNER.person]: 'var(--orange)',
  [STAGE_OWNER.agents]: 'var(--teal)',
  [STAGE_OWNER.mixed]: 'linear-gradient(135deg, var(--teal) 0 50%, var(--orange) 50% 100%)',
};

export type Stage = { title: string; body: string; tag: string; owner: StageOwner };
