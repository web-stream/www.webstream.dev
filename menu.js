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
