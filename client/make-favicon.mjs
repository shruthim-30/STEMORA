// save as make-favicon.mjs
import sharp from "sharp";

await sharp("public/stemora.webp")
  .resize(512, 512, { fit: "cover" })
  .composite([{
    input: Buffer.from(
      '<svg width="512" height="512"><circle cx="256" cy="256" r="256" fill="white"/></svg>'
    ),
    blend: "dest-in",
  }])
  .png()
  .toFile("public/stemora-favicon.png");