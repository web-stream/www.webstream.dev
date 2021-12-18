const fs = require('fs');


fs.readFile('./menu.json', 'utf8', (err, data) => {

  if (err) {
    console.log(`Error reading file from disk: ${err}`);
  } else {

    // parse JSON string to JSON object
    const items = JSON.parse(data);
    //console.log(items.linkList);

    // print all databases
    items.linkList.forEach(db => {
      //console.log(typeof db.items , db.items);
      typeof db.items === 'object' && db.items.forEach(menu => {
        typeof menu.md === 'string' && console.log(menu.md);
        //console.log(`${db.linkList}: ${db.type}`);
      });
    });
  }

});


const configs = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
};

fs.writeFile(
  `${process.cwd()}/.prettierrc`,
  JSON.stringify(configs),
  (error, data) => {
    if (error) {
      console.error('Error creating the configuration file.', error);
    }
    console.log('Configuration created');
  }
);
