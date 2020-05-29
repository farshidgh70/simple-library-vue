export const mixin = {
    data: () => ({}),
    methods: {
        author_name: function (id) {
            let result = this.$store.state.Author.filter(author => {return author.id === id});
            return result.length > 0 ? result[0].full_name : 'نامشخص';
        },
    },
    computed: {
        user_logged_in : function () {
            let id = localStorage.getItem('user');
            let result = this.$store.state.User.filter(user => {return parseInt(user.id) === parseInt(id)});
            return result.length > 0 ? result[0] : 'نامشخص';
        },
    }
}