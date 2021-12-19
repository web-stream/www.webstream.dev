let marked = require('marked');
// https://www.npmjs.com/package/marked
// https://marked.js.org/
// npm install marked
// https://www.npmjs.com/package/md-to-json

function Renderer(options){
  this.options = options || {};
  this.firstHeader = true;
}

Renderer.prototype.code = function(code,lang,escaped){
  return JSON.stringify(code);
},

  Renderer.prototype.blockquote = function(quote){
    return quote;
  },

  Renderer.prototype.heading = function(text,level,raw){
    if (this.firstHeader){
      this.firstHeader = false;
      return text.replace(/\s/g, '_') + ':';
    } else {
      return ',' + text.replace(/\s/g, '_') + ':';
    }
  },

  Renderer.prototype.hr = function(){
    return "";
  },

  Renderer.prototype.list = function(body, ordered){
    return "[" + body.replace(/,\s*$/, "").replace(/\n/g, "") + "]";
  },

  Renderer.prototype.listitem = function(text){
    return text+",";
  },

  Renderer.prototype.paragraph = function(text){
    return text;
  },

  Renderer.prototype.table = function(header, body){
    return;
  },

  Renderer.prototype.tablerow = function(content){
    return text;
  },

  Renderer.prototype.tablecell = function(content, flags){
    return text;
  },

  Renderer.prototype.strong = function(text){
    return text;
  },

  Renderer.prototype.em = function(text){
    return text;
  },

  Renderer.prototype.codespan = function(text){
    return text;
  },

  Renderer.prototype.br = function(text){
    return text;
  },

  Renderer.prototype.del = function(text){
    return text;
  },

  Renderer.prototype.link = function(href, title, text){
    return '"' + text + '"';
  },

  Renderer.prototype.image = function(href, title, text){
    return text;
  },

  Renderer.prototype.text = function(text){
    return '"' + text + '"';
  };

let renderer = new Renderer();

marked.setOptions({
  renderer: renderer
});

function parse( text ){
  renderer.firstHeader = true;
  var json = '{' + marked.parse( text ) + '}';
  json = json.replace(/""/g, '').replace(/:,/g, ':"",');
  json = JSON.parse(json);
  json = JSON.stringify(json, null, 2);

  return json;
}

this.parse = parse;

module.exports = parse;
