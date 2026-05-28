import fg from "fast-glob";
import fs from "node:fs";

const files = await fg(["src/**/*.{astro,ts,tsx,jsx}"], {
  onlyFiles: true,
  ignore: [
    "src/styles/siteStyles.ts",
    "src/styles/typography.ts",
  ],
});

const forbiddenPatterns = [
  {
    name: "Raw color utility outside style standards",
    regex: /#[0-9a-fA-F]{3,8}|bg-white\/\[|bg-black\/|text-blue-|bg-blue-|border-white\//,
  },
  {
    name: "Manual typography drift outside typography standard",
    regex: /font-black|font-bold|text-7xl|tracking-tight/,
  },
];

let failed = false;

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);

  if (
    file.startsWith("src/pages/work/") &&
    file.endsWith(".astro") &&
    (text.includes("gallery.map(") || text.includes('title="Build Gallery"'))
  ) {
    failed = true;
    console.error(`\nStyle validation failed: ${file}`);
    console.error("Rule: Manual project gallery renderer is not allowed. Use EvidenceGallery.");
  }

  lines.forEach((line, index) => {
    for (const rule of forbiddenPatterns) {
      if (rule.regex.test(line)) {
        failed = true;
        console.error(`\nStyle validation failed: ${file}:${index + 1}`);
        console.error(`Rule: ${rule.name}`);
        console.error(line.trim());
      }
    }
  });

  // Page-level eyebrow enforcement:
  // Top-level pages should use PageEyebrow instead of ad hoc accent labels above h1s.
  if (
    file.startsWith("src/pages/") &&
    !file.includes("[slug]") &&
    !file.includes("[profile]") &&
    text.includes("<h1") &&
    text.includes("PageEyebrow") === false
  ) {
    failed = true;
    console.error(`\nStyle validation failed: ${file}`);
    console.error("Rule: Top-level pages with h1 must use PageEyebrow for eyebrow labels.");
  }
}

if (failed) {
  console.error("\nStyle standard validation failed.");
  process.exit(1);
}

console.log("Style standard validation passed.");