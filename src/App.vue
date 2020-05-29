<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container>
          <nav v-if="$store.getters.isAuthenticated"><v-btn @click="logout"> خروج</v-btn></nav>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  methods: {
    logout: function () {
      let vm = this;
      this.$store.dispatch('AUTH_LOGOUT')
      .then(() => {
        vm.$router.push('/login')
      });
    }
  }
}
</script>