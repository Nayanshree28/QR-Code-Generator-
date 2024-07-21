import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
      message: 'type your url there',
      name: 'Url'
    },
  ])
  .then((answers) => {
    const id = answers.Url;
    var ans = qr.image(id);
    ans.pipe(fs.createWriteStream('instagram.png'));
  });
