export const colors = {
  pageBackground: "bg-[#08090d]",
  surface: "bg-white/[0.03]",
  surfaceHover: "hover:bg-white/[0.05]",
  surfaceStrong: "bg-[#0c1018]",
  surfaceMuted: "bg-black/20",

  border: "border-white/10",
  borderHover: "hover:border-blue-400/40",

  textPrimary: "text-white",
  textSecondary: "text-zinc-400",
  textMuted: "text-zinc-500",

  accent: "text-blue-400",
  accentSoft: "text-blue-300",
  accentMuted: "text-blue-300/80",
  accentBackground: "bg-blue-500",
  accentPill: "bg-blue-500/15 text-blue-300",
} as const;

export const layout = {
  pageShell: "mx-auto max-w-6xl px-6 pt-32",
  navShell: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6",

  heroGrid:
    "grid gap-12 pb-20 lg:grid-cols-[1fr_0.8fr] lg:items-start",

  homeHeroGrid:
    "grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start",

  homeAboutGrid:
    "grid gap-12 border-t border-white/10 pt-20 lg:grid-cols-[1fr_0.42fr] lg:items-start",

  aboutHeroGrid:
    "grid gap-12 border-b border-white/10 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start",

  contactHeroGrid:
    "grid gap-12 border-b border-white/10 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end",

  dividerSection:
    "mt-20 border-t border-white/10 pt-12",

  section: "py-24",
  sectionTight: "py-16",
  sectionBottom: "pb-24",
  sectionBottomTight: "pb-20",

  cardGrid:
    "grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3",

  compactGrid:
    "grid gap-3 md:grid-cols-2",

  twoColumnGrid:
    "grid gap-6 pb-24 md:grid-cols-2",

  threeColumnGrid:
    "grid items-start gap-6 pb-24 lg:grid-cols-3",

  contentMeasure: "max-w-3xl",
  wideMeasure: "max-w-4xl",
} as const;

export const surfaces = {
  overlayBackdrop:
    "fixed inset-0 z-[100] hidden items-center justify-center bg-black/90 p-4 backdrop-blur-sm",

  overlayCloseButton:
    "absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20",

  expandFade:
    "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b0c10] to-transparent",

  navBar:
    "fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#08090d]/90 backdrop-blur-xl",

  navMenu:
    "absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-[#08090d] p-2 shadow-2xl shadow-black/50",

  navButton:
    "rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5",

  navActive:
    "bg-blue-500/15 text-blue-300",

  actionHover:
    "hover:text-blue-200",

  groupActionHover:
    "group-hover:text-blue-200",

  buttonPrimary:
    "rounded-full bg-white px-6 py-3 text-black transition hover:bg-blue-100",

  buttonSecondary:
    "rounded-full border border-white/10 px-6 py-3 text-white transition hover:bg-white/5",

  buttonSmallSecondary:
    "inline-flex w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5",

  buttonBlue:
    "rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400",

  profileCard:
    "rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.05]",

  smallPill:
    "rounded-full border border-white/10 px-2.5 py-1 text-[0.62rem] text-zinc-400",

  tagPill:
    "truncate rounded-full border border-white/10 px-2.5 py-1 text-center text-[0.68rem] text-zinc-500",

  card:
    "rounded-2xl border border-white/10 bg-white/[0.03]",

  cardInteractive:
    "rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.05]",

  panel:
    "rounded-[2rem] border border-white/10 bg-white/[0.04] p-6",

  panelStrong:
    "rounded-3xl border border-white/10 bg-[#0c1018] p-6 shadow-2xl shadow-black/30",

  stat:
    "rounded-xl border border-white/10 bg-black/20 p-4 text-sm font-semibold text-zinc-300",

  pill:
    "rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-400",

  activePill:
    "rounded-full bg-blue-500/15 px-3 py-1 text-sm font-semibold text-blue-300",
} as const;

export const media = {
  heroFrame:
    "aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-zinc-900 to-black",

  cardFrame:
    "aspect-[4/3] w-full shrink-0 overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-500/20 via-zinc-900 to-black",

  galleryFrame:
    "aspect-[4/3] overflow-hidden bg-zinc-950",

  portraitFrame:
    "aspect-[3/4] overflow-hidden bg-zinc-950",

  archiveFrame:
    "aspect-[4/3] w-full shrink-0 overflow-hidden bg-zinc-950",
} as const;