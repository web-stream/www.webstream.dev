<template>
  <SubPage/>

</template>

<script lang="ts">
import Vue from 'vue'
import Vuex from 'vuex'
import VScrollLock from 'v-scroll-lock'
import 'animate.css';

Vue.use(Vuex)
Vue.use(VScrollLock)

export default Vue.extend({});

/*
export default {
  async asyncData() {
    const mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then((res) => res.json())

    return { mountains }
  }
}
/*
export default {
  async asyncData({ params, redirect }) {
    const mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then((res) => res.json())

    const filteredMountain = mountains.find(
      (el) =>
        el.continent.toLowerCase() === params.continent &&
        el.slug === params.mountain
    )
    if (filteredMountain) {
      return {
        continent: filteredMountain.continent,
        mountain: filteredMountain.title
      }
    } else {
      redirect('/')
    }
  }
}

/*
import axios from "axios";

export default {
  data() {
    return {
      menu: require("../menu.json"),
      dataToRender: "123"
    };
  },
  mounted() {
    //console.log(this.linkList[0].items[0].title);
    //console.log(this.linkList[0].items[0].html);
    //this.getHtmlToRender("../html/showcases.html")

    //axios
      //.get("/html/showcases.html")
      //.then((response: any) => console.log(response.data));
  },
  methods: {
    getHtmlToRender(filePath: any) {
      axios.get(filePath).then((response: any) => this.dataToRender = response);
    },
  },
*/
  /*

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


  */

</script>
