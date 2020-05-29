<template>
  <div class="home">
    <v-row>
      <v-col cols="12">
        <Banner/>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="3" sm="12" cols="12">
        <Side class="side"/>
      </v-col>
      <v-col md="9" sm="12" cols="12">
        <BookLists/>
      </v-col>
    </v-row>

    <SideMobile class="mobile-side"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import BookLists from '@/components/BookLists'
import Side from '@/components/Side'
import SideMobile from '@/components/SideMobile'

export default {
  name: 'Home',
  components: {
    Banner,
    BookLists,
    Side,
    SideMobile
  }
}
</script>
<style scoped>
/* For mobile phones: */
  .mobile-side {
    display: block;
  }
  .side {
    display: none;
  }

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .mobile-side {
    display: block;
  }
  .side {
    display: none;
  }
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .mobile-side {
    display: none;
  }
  .side {
    display: block;
  }
}
</style>
