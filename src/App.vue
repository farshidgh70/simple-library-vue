<template>
  <div id="app">
    <v-app id="inspire" :style="$route.name === 'Login' ? {'background-image' : 'url(' + require('@/assets/bg-login.jpg') + ') !important' } : ''">
      <v-content>
        <v-container>
          <Navigation/>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios'
import Navigation from './components/Navigation'
export default {
  components: {Navigation},
  mounted() {
    this.fetch_authors();
    this.fetch_categories();
    this.fetch_books();
  },
  methods: {
    fetch_authors : async function () {
      let vm = this;
      await axios.get('/Authors.json')
        .then(res=>{
            vm.$store.state.Author = res.data;
      });
    },
    fetch_categories : async function () {
      let vm = this;
      await axios.get('/Categories.json')
        .then(res=>{
            vm.$store.state.Category = res.data;
      });
    },
    fetch_books : async function () {
      let vm = this;
      await axios.get('/Books.json')
        .then(res=>{
            vm.$store.state.Book = res.data;
      });
    },
  }
}
</script>
<style scoped>
#inspire {
  font-family: tahoma !important;
}
</style>