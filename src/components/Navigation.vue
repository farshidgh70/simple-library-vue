<template>
    <v-toolbar
        v-if="$store.getters.isAuthenticated"
        color="white"
        elevation="0"
    >
        <v-app-bar-nav-icon class="app-bar-nav"></v-app-bar-nav-icon>

        <v-toolbar-title class="nav-toolbar-title">
            <v-avatar>
            <img alt="respina logo" src="@/assets/logo.png">
            </v-avatar>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
            <div class="avatar" v-on="on">
                <v-avatar>
                  <v-icon>person</v-icon>
                </v-avatar>
                <span>user name</span>
            </div>
            </template>
            <v-list>
            <v-list-item @click="logout">
                <v-list-item-title>خروج</v-list-item-title>
            </v-list-item>
            </v-list>
        </v-menu>
        </v-toolbar>
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
<style scoped>
.avatar {
  cursor: pointer;
}
.nav-toolbar-title {
  padding-right: 0 !important;
}
/* For mobile phones: */
.app-bar-nav {
  display: block;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .app-bar-nav {
    display: block;
  }
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .app-bar-nav {
    display: none;
  }
}
</style>
<style>
.v-toolbar__content {
  padding: 0;
}
</style>