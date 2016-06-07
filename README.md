Command your global CLI module to update itself.

For example:

```
  const program = require('commander');    Reference: [Commander](https://www.npmjs.com/package/commander) 
  const package = require(path.join('npm-update-module'));


  program
    .command('update')
    .alias('u')
    .description('Update moduleName')
    .action(() => {
      package.update('moduleName');              # Pass module name as string. 
    }).on('--help', () => {
      console.log('  Example: $ moduleName update');
    });
```