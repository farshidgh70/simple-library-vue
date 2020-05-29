<template>
    <div>
        <v-row>
            <v-col 
                v-for="(book, book_i) in paginated_lists"
                :key="'book'+book_i"
                md="3" sm="6" cols="12" 
                class="book"
            >
                <v-card class="book-card" tile elevation="20" @click="show_detail_book(book)">
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

        <!-- dialog detail book -->
        <v-dialog v-model="dialog_detail_book" width="700px">
            <v-card class="mid-description-card">
                <v-btn @click="dialog_detail_book = false" icon class="mid-description-close-btn"><v-icon>clear</v-icon></v-btn>
                <v-card-text v-if="selected_book !== null">
                    <v-row>
                        <v-col md="4" sm="6" cols="12">
                            <img :src="require('@/assets/'+selected_book.image)"/>
                        </v-col>
                        <v-col md="8" sm="6" cols="12">
                            <div class="mid-description">
                                <strong class="m-book-title">{{selected_book.title}} | {{author_name(selected_book.author_id)}}</strong>
                                <div class="m-book-author">
                                    <span>نویسنده: </span>
                                    <span>{{author_name(selected_book.author_id)}}</span>
                                </div>
                                <div class="m-book-translator">
                                    <span>مترجم: </span>
                                    <span>{{selected_book.translator}}</span>
                                </div>
                                <div class="mid-desc-tt">بخشی از {{selected_book.title}}</div>
                                <p class="m-summary">{{selected_book.summary}}</p>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import {mixin} from '../mixin'
export default {
    mixins: [mixin],
    data: ()=>({
        page: 1,
        selected_book: null,
        dialog_detail_book: false,
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
        show_detail_book: function (book) {
            this.selected_book = book;
            this.dialog_detail_book = true;
        }
    }
}
</script>
<style lang="scss" scoped>
.mid-description-card {
    position: relative;
}
.mid-description-close-btn {
    position: absolute;
    top: 5px;
    left: 5px;
}
.mid-description {
    .m-book-author {
        margin-top: 15px;
        padding-right: 12px;
    }
    .m-book-translator {
        padding-right: 12px;
    }
    .mid-desc-tt {
        margin-top: 15px;
    }
    .m-summary {
        margin-top: 15px;
    }
}
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