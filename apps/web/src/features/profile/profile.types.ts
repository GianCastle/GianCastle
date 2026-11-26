export type ProfileContent = {
  profile: { role: string; focus: string; description: string; knowsAbout: readonly string[] };
  toolbox: { label: string; groups: readonly { name: string; items: readonly string[] }[] };
};
