<template>
  <div id="app">
    <v-app id="inspire">
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