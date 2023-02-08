/* eslint-disable @typescript-eslint/no-var-requires */

const { existsSync } = require('fs');
const { execSync } = require('child_process');

const { getPkgPath } = require('../helper');

function execute(pkg = 'core', ...args) {
  const pkgDirPath = getPkgPath(pkg);

  if (existsSync(pkgDirPath)) {
    execSync('npm run build', { stdio: 'inherit', cwd: pkgDirPath });
  }
}

module.exports = { execute };
