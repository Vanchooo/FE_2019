<template>
<div class="main-container">
    <div class="posts-container">
        
        <div class="post" v-for="post in allPosts" :key="post.id">
            <div class="post__header">
                <div class="post__title">{{ post.title }}</div>
                <div class="post__delete">
                    <button>Удалить</button>
                </div>
            </div>          
            <div class="post__description">{{ post.description }}</div>
            <div class="post__footer">
                <div class="post__date">Дата публикации: {{ post.createdAt }}</div>
                <div class="post__likes">Мне нравится: {{ post.likes }}</div>
            </div>
            
        </div>
    </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex"; //импортим эти объкты, чтобы получать доступ к методом стора через this
    // import PostForm from "./components/PostForm";

    export default {
        name: "app",
        computed: mapGetters(["allPosts", "postsCount"]),
        methods: mapActions(["fetchPosts"]),
        // components: { PostForm },
        async mounted() {
            // this.$store.dispatch('fetchPosts'); // Так можно получить доступ к экшену стора, а можно через mapActions
            this.fetchPosts();
        }
    };
</script>

<style>
    .main-container{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
    }
    .posts-container {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 63%;
    }

    .post {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 20px;
        box-shadow: 0 0 4px rgba(0,0,0,0.3);
        margin-bottom: 40px;
    }
    .post__header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 30px;
    }
    .post__title {
        text-align: left;
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
    }
    .post__description {
        text-align: left;
        line-height: 19px;
        font-size: 16px;
    }
    .post__footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 30px;
        color: #888;
        font-size: 16px;
        line-height: 19px;
    }
</style>
