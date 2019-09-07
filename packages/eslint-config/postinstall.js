const chalk = require('chalk');
const package = require('./package.json')

const dependencies = Object.keys(package.peerDependencies).map((dependency) => {
  return `'${dependency}@${package.peerDependencies[dependency]}'`;
}).join(' ');

const octopus = chalk.blue(`
                        ___
                     .-'   \`'.
                    /         \\
                    |         ;
                    |         |           ___.--,
           _.._     |0) ~ (0) |    _.---'\`__.-( (_.
    __.--'\`_.. '.__.\\    '--. \\_.-' ,.--'\`     \`""\`
   ( ,.--'\`   ',__ /./;   ;, '.__.'\`    __
   _\`) )  .---.__.' / |   |\\   \\__..--""  """--.,_
  \`---' .'.''-._.-'\`_./  /\\ '.  \\ _.-~~~\`\`\`\`~~~-._\`-.__.'
        | |  .' _.-' |  |  \\  \\  '.               \`~---\`
         \\ \\/ .'     \\  \\   '. '-._)
          \\/ /        \\  \\    \`=.__\`~-.
          / /\\         \`) )    / / \`"".\`\\
    , _.-'.'\\ \\        / /    ( (     / /
     \`--~\`   ) )    .-'.'      '.'.  | (
            (/\`    ( (\`          ) )  '-;
             \`      '-;         (-'
`);

console.log(`${octopus}

Thanks for installing ${chalk.blue('@octopusthink/eslint-config')}

Please run:

${chalk.red(`npm install --save-dev ${dependencies}`)}

For everything to work well.`);
