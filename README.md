![logo webstream](https://logo.webstream.dev/3/cover.png)

<img alt="open collective badge" src="https://opencollective.com/webstream/tiers/backer/badge.svg?label=backer&color=brightgreen" />
<img alt="open collective badge" src="https://opencollective.com/webstream/tiers/sponsor/badge.svg?label=sponsor&color=brightgreen" />
<object type="image/svg+xml" data="https://opencollective.com/webstream/tiers/backer.svg?avatarHeight=36&width=600"></object>

---
https://github.com/web-stream/www.webstream.dev

# [Web Stream Dev](https://www.webstream.dev/)

## Build Setup


### install dependencies
```bash
npm install
```

### serve with hot reload at localhost:3000
```bash
npm run dev
```

### build for production and launch server
```bash
npm run build
```
```bash
npm run start
```

### generate static project
```bash
npm run generate
```

## Issues:

```bash
npm audit fix
```


### install markdown
https://marked.js.org/
```bash
npm install marked --save
```

```bash [NPM]
npm install @nuxt/http
```


```bash [NPM]
npm install --save @docsearch/css @docsearch/js
```

```bash [NPM]
npm install --save vue-mq
```

```bash [NPM]
npm install --save @nuxt/content
```
nuxt.config.js

    modules: ["@nuxt/content"],

https://codesandbox.io/s/nuxtcontent-demo-l164h?


## Vue Plugins

If we want to use Vue plugins, like [v-tooltip](https://akryum.github.io/v-tooltip) to display tooltips in your application, we need to setup the plugin before launching the app.

First we need to install it

::code-group
```bash [Yarn]
yarn add v-tooltip
```
```bash [NPM]
npm install v-tooltip
```

Then we create the file `plugins/vue-tooltip.js`

```js{}[plugins/vue-tooltip.js]
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```


### When I run $ npm run dev nothing happens and I get the following message:
```
node: --openssl-legacy-provider is not allowed in NODE_OPTIONS
```
### Solution
```bash
brew update
brew upgrade
```

## npm

### If there is still any problem please contact us and show the version of npm
```bash
npm -v
```
remove old version:
```bash
sudo n
```
update
```bash
sudo npm install -g npm
```

---
## Python

```bash
pip install markdown-to-json
```
OR
```bash
git clone https://github.com/njvack/markdown-to-json.git
cd markdown_to_json
./setup.py install
```

```bash
py markdown-to-json/markdown_to_json/scripts/md_to_json.py -o ./static/md/docs.json ./static/md/docs.md
````

## About Nuxt framework

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).





# [About Web Stream Dev](https://www.webstream.dev/)

Streaming application/interface directly on frontend, without building backend side is part of [wapka ecosystem](https://docs.wapka.pl/) to build Application
based on PaaS infrastructure as Aplication Platform as a Service or (APaaS) Function as a Service (FaaS)

WebStream is a rapid prototyping, playing and learning environment for web development.
Extends the JavaScripts language with Stream Thinking and libraries for building asyncron, decentralized, modular applications.
Web Stream a continuous improving by a flowing stream;

## Czym jest Webstream?

Web Stream Dev jest modularnym standardem ładowania mediów, umożliwiającym implementację streamowania poprzez protokół HTTP dla aplikacji oraz stron internetowych w przeglądarce oraz dedykowanych platformach.

+ [About Webstream Modules ...](https://modules.webstream.dev)
+ [What is Hyper Modularity ?](https://www.hypermodularity.com/)


Supported media

Ładowanie mediów tekstowych, kodu aplikacji, filmów, głosu, itp.

+ html
+ js
+ json
+ css

```js
var mime = {
	'html': 'text/html',
	'json': 'application/json',
	'js': 'application/javascript',
	'css': 'text/css'
};
```

and others:
+ txt
+ markdown
+ mp3
+ wav
+ php
+ python

Learn More About Web Stream Dev

+ [about.webstream.dev](https://about.webstream.dev/)


## Webstream examples:

https://codepen.io/tom-sapletta-com/pen/xxLvmpB

https://github.com/web-stream/demo


## TODO:

+ jakie Wypełnienie pod modułami ?
+ Stopka - przykład
+ Menu - dodać dokumentacje


- 📘 Documentation: [https://docs.webstream.dev](https://docs.webstream.dev)
- 👥 Community: [GitHub discussions](https://github.com/web-stream/docs/discussions)


---

## About Tom Sapletta

+ [Contact on linkedin](https://www.linkedin.com/in/tom-sapletta-com/)
+ [Tom Sapletta Blog - Embedded System Software & Hardware Developer](https://tom.sapletta.com/)
+ [Softreck Company - Leadership Through Software Development](https://softreck.com/)


## Devops supported by [Api Foundation](https://www.apifoundation.com)

+ [.apicra](https://www.apicra.com) - bash scripts to prepare environment
+ [.apifunc](https://www.apifunc.com) - funkcje, implementacja apiunit
+ [.apiunit](https://www.apiunit.com) - metadane potrzebne do stworzenia aplikacji
+ [.apibuild](https://www.apibuild.com) - budowanie plaikacji, deployment
+ [.apiterminal](https://www.apiterminal.com) - devops terminal by web


## Substantively supported by:

+ [SaaS is King .com](https://www.saasisking.com/)
+ [hyper Modularity .com](https://www.hypermodularity.com/)


## Sponsored by:

+ [Softreck - Leadership Through Software Development](https://softreck.com/), Leadership through software development



---
+ [edit](https://github.com/web-stream/www.webstream.dev/edit/main/README.md)
+ [web-stream/www.webstream.dev](https://github.com/web-stream/www.webstream.dev)
```
https://github.com/web-stream/www.webstream.dev.git
```

