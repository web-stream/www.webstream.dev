const fs = require('fs');
const https = require('https');
const marked = require('marked');
//import { marked } from 'marked';

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

            var { statusCode } = res;
            var contentType = res.headers['content-type'];

            let error;
/*
            if (statusCode !== 200) {
              error = new Error('Request Failed.\n' +
                `Status Code: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
              error = new Error('Invalid content-type.\n' +
                `Expected application/json but received ${contentType}`);
            }
*/
            if (error) {
              console.error(error.message);
              // consume response data to free up memory
              res.resume();
            }

            res.setEncoding('utf8');
            let rawData = '';

            res.on('data', (chunk) => {
              rawData += chunk;

              // HTML
              // Open file in local filesystem
              const html_file = './static/html/' + filename + '.html';
              // render markdown to html file
              let html = marked.parse(rawData);
              // Write data into local file
              fs.writeFile(html_file, html, function (err) {
                if (err) throw err;
                console.log("File saved!" + html_file);
              });

            });

            // MARKDOWN
            // Open file in local filesystem
            const md_file = fs.createWriteStream('md/' + filename);
            // Write data into local file
            res.pipe(md_file);
            // Close the file
            md_file.on('finish', () => {
              md_file.close();
              console.log("File MD saved!" + url);
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


