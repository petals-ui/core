/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve: resolvePath } = require('path');

const ROOT_PATH = resolvePath(__dirname, '../');

const pkgRootPath = `${ROOT_PATH}/packages`;
const pkgSourceDirMap = {
  core: 'core',
  'adapter:antd': 'adapter-ant-design',
};

Object.values(pkgSourceDirMap).forEach(dirName => (pkgSourceDirMap[dirName] = dirName));

function getPkgPath(pkgName) {
  return `${pkgRootPath}/${pkgSourceDirMap[pkgName]}`;
}

module.exports = { ROOT_PATH, getPkgPath };
