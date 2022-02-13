// file system module
const fs = require('fs');
// page-template.js link
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs; // basically the same as the next two lines
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

fs.writeFile('./index.html', generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see output!');
});
