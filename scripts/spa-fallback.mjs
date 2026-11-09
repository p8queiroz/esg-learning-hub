import { cpSync } from 'node:fs'

cpSync('dist/index.html', 'dist/404.html')
console.log('Copied dist/index.html to dist/404.html for GitHub Pages deep links.')
