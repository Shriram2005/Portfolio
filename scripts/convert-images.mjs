// scripts/convert-images.mjs
// Converts public/profile-pic.png → optimized WebP + JPEG for OG image use
import sharp from 'sharp'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(__dirname, '../public')
const src = resolve(publicDir, 'profile-pic.png')

// WebP — for <picture> element in HTML (modern browsers, best compression)
await sharp(src)
  .resize(800, 800, { fit: 'cover', position: 'top' })
  .webp({ quality: 85, effort: 6 })
  .toFile(resolve(publicDir, 'profile-pic.webp'))
console.log('✓ profile-pic.webp  (800×800, WebP q85)')

// NOTE: og-image.jpg is a branded card — do NOT auto-generate from profile photo.
//       Replace public/og-image.jpg manually when branding changes.

// Small PNG for favicon (32×32)
await sharp(src)
  .resize(32, 32, { fit: 'cover', position: 'top' })
  .png({ compressionLevel: 9 })
  .toFile(resolve(publicDir, 'favicon-32.png'))
console.log('✓ favicon-32.png     (32×32, PNG)')

// Apple touch icon (180×180)
await sharp(src)
  .resize(180, 180, { fit: 'cover', position: 'top' })
  .png({ compressionLevel: 9 })
  .toFile(resolve(publicDir, 'apple-touch-icon.png'))
console.log('✓ apple-touch-icon.png (180×180, PNG)')
