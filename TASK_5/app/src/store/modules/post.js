import axios from "axios";

export default {
    actions: {
        fetchPosts(context, limit = 40) {
            axios.get('http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1/posts?page=1&limit=' + limit)
                .then(response => {
                    const posts = response.data;
                    context.commit('updatePosts', posts);
                })
        },
        createPost(context, newPost) {
            axios.request({
                method: 'post',
                url: 'http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1/posts',
                data: newPost
            })
        },
        deletePost(context, postNumber) {
            axios.delete('http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1/posts/' + postNumber.id);
            context.commit('deletePost', postNumber)
        },
        sortByDate(context, limit = 40) {
            axios.get('http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1/posts?sortBy=createAt?page=1&limit=' + limit)
            .then(response => {
                const posts = response.data;
                context.commit('updatePosts', posts);
            })
        },
        // search(context, searchWord, limit = 40) {
        //     axios.get('http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1/posts?search='+ searchWord +'?page=1&limit=' + limit)
        //     .then(response => {
        //         const posts = response.data;
        //         context.commit('updatePosts', posts);
        //     })
        // },
        search(context, searchWord) {
            axios.get('http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1/posts')
                .then(response => {
                    const posts = response.data;

                    var searchedPost =  posts.filter(function(post) {
                        return post.title == searchWord;
                    });

                    context.commit('updatePosts', searchedPost);
                })
        },

    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        deletePost(state, postNumber) {
            state.posts.splice(state.posts.indexOf(postNumber), 1);

        }
    },
    state: {
        posts: []
    },
    getters: {
        validPosts(state) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        },
        allPosts(state) {
            return state.posts;
        },
        postsCount(state) {
            return state.posts.length;
        }
    },
}