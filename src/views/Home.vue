<template>
  <div class="home">
    <v-row>
      <v-col cols="12">
        <Banner/>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="3" cols="12">
        <Side/>
      </v-col>
      <v-col md="9" cols="12">
        <BookLists/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import BookLists from '@/components/BookLists'
import Side from '@/components/Side'

export default {
  name: 'Home',
  components: {
    Banner,
    BookLists,
    Side
  }
}
</script>
<style scoped>

</style>
