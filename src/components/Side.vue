<template>
    <v-card outlined>
        <v-card-title class="cat-title-side">دسته بندی ها</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-checkbox
                v-for="(category, c_index) in $store.state.Category"
                :key="'category_'+c_index"
                v-model="selected_categories"
                :label="category.title"
                :value="category.id"
                hide-details
                style="padding:0; margin-top: 7px;"
            ></v-checkbox>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data: ()=>({
        selected_categories: [],
    }),

    watch: {
        selected_categories: function (val) {
            this.$store.commit('UPDATE_SELECTED_CATEGORY', val);
        }
    }
}
</script>
<style scoped>
.cat-title-side {
    text-align: center;
    background-color: pink;
    color: blueviolet;
    display: block;
}
</style>