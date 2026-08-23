export const THEMES = [
{
    id: "founder-noir",
label: "Founder Noir",
},
{
id: "executive-light",
label: "Executive Light",
},
{
id: "ai-ember",
label: "AI Ember",
},
{
id: "research-blue",
label: "Research Blue",
},
{
id: "emerald-intelligence",
label: "Emerald Intelligence",
},
] as const;

export type ThemeId =
(typeof THEMES)[number]["id"];

export const DEFAULT_THEME: ThemeId =
"founder-noir";