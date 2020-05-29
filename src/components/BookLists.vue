<template>
    <div>
        <v-row>
            <v-col 
                v-for="(book, book_i) in paginated_lists"
                :key="'book'+book_i"
                md="3" sm="6" cols="12" 
                class="book"
            >
                <v-card class="book-card" tile elevation="20">
                    <img :src="require('@/assets/'+book.image)"/>
                </v-card>
                <figcaption>
                    <strong>{{book.title}}</strong>
                    <div class="author">{{author_name(book.author_id)}}</div>
                </figcaption>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-pagination
                    v-model="page"
                    class="my-4"
                    :length="length"
                    :total-visible="5"
                ></v-pagination>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import {mixin} from '../mixin'
export default {
    mixins: [mixin],
    data: ()=>({
        page: 1,
        
    }),
    computed: {
        paginated_lists: function () {
            let vm = this;
            let book_per_page = parseInt(vm.$store.state.book_per_page);
            return this.$store.getters.bookLists.filter((book, index) => {
                return index < parseInt(vm.page)*book_per_page && index > ((parseInt(vm.page)-1)*book_per_page)-1
            });
        },
        length: function () {
            let book_per_page = parseInt(this.$store.state.book_per_page);
            return Math.ceil(this.$store.getters.bookLists.length/book_per_page)
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
.book {
    .book-card {
        height: 300px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    figcaption {
        height: 90px;
        padding: 20px;
        text-align: center;
        .author {
            font-size: 13px;
            color: #666;
        }
    }
}
@media only screen and (max-width: 600px) {
  .book {
      padding: 0 60px;
  }
}
</style>