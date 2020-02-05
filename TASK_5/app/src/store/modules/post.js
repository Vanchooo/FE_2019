export default {
    actions: {
        async fetchPosts(ctx, limit = 10){
            const res = await fetch('http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1/posts?page=1&limit=' + limit);
            const posts = await res.json();

            ctx.commit('updatePosts', posts)
        },
        deletePost(context, postNumber){
            context.commit('deletePost', postNumber)
        }
    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        },    
        deletePost(state, postNumber){
            state.posts.splice(state.posts.indexOf(postNumber), 1);
        }
    },
    state: {
        posts: []
    },
    getters: {
        validPosts(state) {
            return state.posts.filter(p =>{
                return p.title && p.body
            })
        },
        allPosts(state){
            return state.posts;
        },
        postsCount(state){
            return state.posts.length;
        }
    },
}