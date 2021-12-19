// npm install --save md-2-json
var md2json = require('md-2-json');
var mdContent = `
# Name
My name

# Attributes
- Color Vision
- Hair on Head

# MDCode
      My name __is__ md:
      - A
      - B
      - C

# End Tag
Text

# Empty
`

var json = md2json.parse(mdContent);
console.log(json);

var md2json = require('md-2-json');

var json = {
  "Heading 1": {
    raw: "This is a para\n",
  }
}

md = md2json.toMd(json);
console.log(md);
