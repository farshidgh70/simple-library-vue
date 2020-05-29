export const mixin = {
    data: () => ({}),
    methods: {
        author_name: function (id) {
            let result = this.$store.state.Author.filter(author => {return author.id === id});
            return result.length > 0 ? result[0].full_name : 'نامشخص';
        }
    }
}