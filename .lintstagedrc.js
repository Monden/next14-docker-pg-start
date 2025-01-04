const path = require('path');

const TARGET_PATHS = ['app'];

const buildEslintCommand = (fileNames) => {
  const targetFileNames = [];
  fileNames.forEach((f) => {
    const isTarget = TARGET_PATHS.some((d) => d === f);
    if (isTarget) {
      targetFileNames.push(f);
    }
  });

  if (!targetFileNames.length) {
    return '';
  }

  const fileOptionsStr = `--file ${targetFileNames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;
  const commandStr = `next lint --fix ${fileOptionsStr}`;

  return commandStr;
};

const buildStylelintCommand = (fileNames) => {
  const fileNamesStr = fileNames.map((f) => `'${path.relative(process.cwd(), f)}'`).join(' ');
  return `stylelint --fix ${fileNamesStr}`;
};

const buildPrettierCommand = (fileNames) => {
  const fileNamesStr = fileNames.map((f) => `'${path.relative(process.cwd(), f)}'`).join(' ');
  return `prettier --write ${fileNamesStr}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildStylelintCommand, buildPrettierCommand],
};

