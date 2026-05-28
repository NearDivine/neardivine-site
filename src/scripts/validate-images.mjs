import sharp from "sharp";
import fg from "fast-glob";
import fs from "node:fs";

const projectImagePatterns = [
  "public/images/projects/**/*.{jpg,jpeg,png,webp}",
  "public/projects/**/*.{jpg,jpeg,png,webp}",
];

const legacyAllowlistPath = "src/data/legacyProjectImages.json";

const legacyProjectImages = new Set(
  JSON.parse(fs.readFileSync(legacyAllowlistPath, "utf8"))
);

const standards = {
  hero: {
    name: "Hero image",
    ratio: 16 / 9,
    minWidth: 1400,
    minHeight: 780,
  },
  card: {
    name: "Card image",
    ratio: 4 / 3,
    minWidth: 800,
    minHeight: 600,
  },
  gallery: {
    name: "Gallery image",
    ratio: 4 / 3,
    minWidth: 1000,
    minHeight: 750,
  },
  technical: {
    name: "Technical image",
    ratio: 4 / 3,
    minWidth: 1000,
    minHeight: 750,
  },
  portrait: {
    name: "Portrait image",
    ratio: 3 / 4,
    minWidth: 700,
    minHeight: 900,
  },
};

const tolerance = 0.04;
let failed = false;
let checkedStandardImages = 0;
let allowedLegacyImages = 0;
let unclassifiedImages = 0;

const getNormalizedPath = (file) => file.replaceAll("\\", "/");

const getStandardFromFilename = (file) => {
  const filename = getNormalizedPath(file).split("/").at(-1) ?? "";
  const match = filename.match(/^(hero|card|gallery|technical|portrait)-/);
  return match?.[1] ?? null;
};

const files = await fg(projectImagePatterns, {
  onlyFiles: true,
  caseSensitiveMatch: false,
});

for (const file of files) {
  const normalizedFile = getNormalizedPath(file);
  const standardKey = getStandardFromFilename(normalizedFile);

  if (!standardKey) {
    if (legacyProjectImages.has(normalizedFile)) {
      allowedLegacyImages += 1;
      continue;
    }

    console.error(`\nUnstandardized project image found: ${normalizedFile}`);
    console.error(
      "New project images must start with one of: hero-, card-, gallery-, technical-, portrait-"
    );
    console.error(
      "If this is truly an old legacy image, add it to src/data/legacyProjectImages.json intentionally."
    );

    unclassifiedImages += 1;
    failed = true;
    continue;
  }

  const rule = standards[standardKey];
  checkedStandardImages += 1;

  const metadata = await sharp(normalizedFile).metadata();
  const width = metadata.width;
  const height = metadata.height;

  if (!width || !height) {
    console.error(`Could not read image size: ${normalizedFile}`);
    failed = true;
    continue;
  }

  const actualRatio = width / height;
  const ratioDelta = Math.abs(actualRatio - rule.ratio);

  const tooSmall = width < rule.minWidth || height < rule.minHeight;
  const wrongRatio = ratioDelta > tolerance;

  if (tooSmall || wrongRatio) {
    console.error(`\nImage failed: ${normalizedFile}`);
    console.error(`Rule: ${rule.name}`);
    console.error(`Actual: ${width}x${height}`);
    console.error(`Required minimum: ${rule.minWidth}x${rule.minHeight}`);
    console.error(`Expected ratio: ${rule.ratio.toFixed(3)}`);
    console.error(`Actual ratio: ${actualRatio.toFixed(3)}`);

    if (tooSmall) console.error("Problem: image is too small");
    if (wrongRatio) console.error("Problem: image aspect ratio is wrong");

    failed = true;
  }
}

console.log(`Standard images checked: ${checkedStandardImages}`);
console.log(`Legacy images allowed: ${allowedLegacyImages}`);

if (unclassifiedImages > 0) {
  console.log(`Unclassified new images: ${unclassifiedImages}`);
}

if (failed) {
  console.error("\nImage validation failed.");
  process.exit(1);
}

console.log("Image validation passed.");