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
import Navigation from './components/Navigation'
export default {
  components: {Navigation}
}
</script>
<style scoped>
#inspire {
  font-family: tahoma !important;
}
</style>