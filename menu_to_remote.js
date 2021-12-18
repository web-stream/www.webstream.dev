const fs = require('fs');
const https = require('https');

fs.readFile('./menu.json', 'utf8', (err, data) => {
  let list = '';

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
        if(typeof menu.remote === 'string') {
          //console.log(menu.remote);
          list += menu.remote + "\n";
          let url = menu.remote;
          let filename = menu.md;

          // Download the file
          https.get(url, (res) => {

            // Open file in local filesystem
            const file = fs.createWriteStream('md/' + filename);

            var marked = require('marked');
            console.log(marked(res));
            console.log(marked('#hello world of mark down!'));

            // Write data into local file
            res.pipe(file);

            // Close the file
            file.on('finish', () => {
              file.close();
              console.log("File downloaded!" + url);
            });

          }).on("error", (err) => {
            console.log("Error: ", err.message);
          });


        }
        //console.log(`${db.linkList}: ${db.type}`);
      });
    });


    fs.writeFile(
      `${process.cwd()}/menu_remote.txt`,
      list,
      (error, data) => {
        if (error) {
          console.error('Error creating the configuration file.', error);
        }
        console.log('Configuration created');
      }
    );
  }

});


