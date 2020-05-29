<template>
    <div>
        <v-row>
            <v-col 
                v-for="(book, book_i) in $store.getters.bookLists"
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
    </div>
</template>
<script>
import {mixin} from '../mixin'
export default {
    mixins: [mixin]
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