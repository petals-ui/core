/* eslint-disable @typescript-eslint/no-var-requires */

const { existsSync } = require('fs');
const { execSync } = require('child_process');

const { getPkgPath } = require('../helper');

function publishPackage(pkgName) {
  const pkgDirPath = getPkgPath(pkgName);

  if (existsSync(pkgDirPath)) {
    execSync('npm run release', { stdio: 'inherit', cwd: pkgDirPath });
  }
}

function execute(pkg = 'core', ...args) {
  publishPackage(pkg);
}

module.exports = { execute };
