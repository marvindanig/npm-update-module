function update(moduleName) {
  const exists = require('npm-exists');

  exists(moduleName).then(moduleExists => {
      if (moduleExists) {
        exec(`npm uninstall -g${moduleName}`);
        exec('npm cache clean');
        exec(`npm i -g${moduleName}`);
      } else {
          console.log('Gosh, you have unique package!');
      }
  });
}

module.exports.update = update;
