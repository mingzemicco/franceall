const { readFileSync, existsSync, writeFileSync } = require('node:fs');

const [ lang ] = process.argv.slice(2);

let template = readFileSync('./template.html', 'utf8');

const i18npath = `./lang/${lang}.json`;

if (!existsSync(i18npath)) {
  console.error('i18n file not found');
  process.exit(1);
}

const configScript = readFileSync('./config.js', 'utf8');

template = template.replace('{{configScript}}', `<script>${configScript}</script>`);

const i18nConfig = JSON.parse(readFileSync(i18npath, 'utf8'));

if (i18nConfig && typeof i18nConfig === 'object') {
  for (const [k, v] of Object.entries(i18nConfig)) {
    template = template.replaceAll(`{{${k}}}`, v);
  }

  writeFileSync(`./dist/${lang}.html`, template);
} else {
  console.error('i18n config not found');
  process.exit(1);
}

