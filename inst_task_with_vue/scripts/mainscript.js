new Vue({
    el: '#app',
    data: {
        url: 'http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1',
        posts: null,
        loading: true
        // lastPost: 5,
        // lastPostInBlock: 10,
    },
    methods: {
        showMainInfo(user_data) {
            let username = document.querySelector('div.user-info__username');
            let photoQuantity = document.querySelector('div.user-info__photo-quantity');
            //username.innerHTML = '<div>"' + user_data.name + '"</div>';
            let avatar = document.querySelector('div.user-info__photo');

            username.innerHTML = user_data.name;
            photoQuantity.innerHTML = 'Posts quantity:' + Object.keys(user_data.posts).length;
            avatar.innerHTML = '<img src=' + user_data.avatar + ' alt=""></img>';
        },

        showPosts(user_data, lastPost, lastPostInBlock) { // https://ru.vuejs.org/v2/guide/list.html
            let mainContainer = document.querySelector('div.main-container');

            for (lastPost; lastPost < lastPostInBlock; lastPost++) {
                mainContainer.innerHTML += '<div class="post">'
                    + '<div class="post__photo">'
                    + '<img src=' + user_data.posts[lastPost].image + ' alt="" />'
                    + '</div>'
                    + '<div class="post__description">' + user_data.posts[lastPost].description + '</div>'
                    + '<div class="post__footer">'
                    + '<div class="post__likes">Likes: ' + user_data.posts[lastPost].likes + '</div>'
                    + '<div class="post__date-publish">Published: ' + (user_data.posts[lastPost].createdAt).slice(0, 10) + ' </div>'
                    + '</div>'
                    + '</div>';
            }
            // this.lastPost = lastPost + 5;
            // this.lastPostInBlock = lastPostInBlock + 5;
        }
        // showPosts() {
        //     let mainContainer = document.querySelector('div.main-container');

        //     for (this.lastPost; this.lastPost < this.lastPostInBlock; this.lastPost++) {
        //         mainContainer.innerHTML += '<div class="post">'
        //             + '<div class="post__photo">'
        //             + '<img src=' + this.posts.posts[this.lastPost].image + ' alt="" />'
        //             + '</div>'
        //             + '<div class="post__description">' + this.posts.posts[this.lastPost].description + '</div>'
        //             + '<div class="post__footer">'
        //             + '<div class="post__likes">Likes: ' + this.posts.posts[this.lastPost].likes + '</div>'
        //             + '<div class="post__date-publish">Published: ' + (this.posts.posts[this.lastPost].createdAt).slice(0, 10) + ' </div>'
        //             + '</div>'
        //             + '</div>';
        //     }
        //     this.lastPost = this.lastPost + 5;
        //     this.lastPostInBlock = this.lastPostInBlock + 5;
        // },
        // showPosts1: function(){
        //     alert('its work');
        // }

    },
    mounted() {
        axios.get(this.url).then((response) => {
            this.posts = response.data; // сюда положить посты
            debugger
            this.loading = false
        }).then(() => {
            this.showMainInfo(this.posts);
            this.showPosts(this.posts, 0, 5); // выносим в переменные компонента

            let lastPost = 5;
            let lastPostInBlock = 10;

            // elem.onclick = function () {
            //     this.showPosts(this.posts, lastPost, lastPostInBlock);
            //     lastPost = lastPost + 5;
            //     lastPostInBlock = lastPostInBlock + 5;
            //     // alert('priem');

            // };
            // elem.onclick = this.showPosts();
            // elem.onclick = this.showPosts(this.posts, lastPost, lastPostInBlock)


        });
    }
});






