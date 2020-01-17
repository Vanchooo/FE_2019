<template>
    <div id="app">
      <PostForm/>
      <h1>{{ postsCount }}</h1>
        <div class="post" v-for="post in allPosts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex"; //импортим эти объкты, чтобы получать доступ к методом стора через this
    import PostForm from './components/PostForm'

    export default {
        name: "app",
        computed: mapGetters(["allPosts", "postsCount"]),
        methods: mapActions(['fetchPosts']),
        components: { PostForm },
        async mounted() {
          // this.$store.dispatch('fetchPosts'); // Так можно получить доступ к экшену стора, а можно через mapActions
          this.fetchPosts();
        }
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        margin: 60px auto;
        width: 400px;
    }

    .post {
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
</style>
