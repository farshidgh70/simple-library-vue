<template>
    <div>
        <v-dialog v-model="dialog" scrollable max-width="400px">
            <template v-slot:activator="{ on }">
                <v-btn fab dark color="indigo" v-on="on" class="mx-2 filter_category_btn">
                    <v-icon>filter_alt</v-icon>
                </v-btn>
            </template>
            <v-card class="side-m">
                <v-btn @click="dialog = false" icon class="cat-close-btn"><v-icon>clear</v-icon></v-btn>
                <SideContent/>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import SideContent from './side/Content'
export default {
    components: {SideContent},
    data: ()=>({
        dialog: false,
    })
}
</script>
<style scoped>
.filter_category_btn {
    position: fixed;
    bottom: 10px;
    right: 10px;
}
.side-m {
    position: relative;
}
.cat-close-btn {
    position: absolute;
    left: 3px;
    top: 10px;
    z-index: 1;
}
@media only screen and (min-width: 768px) {
  .cat-close-btn {
      display: none;
  }
}
</style>