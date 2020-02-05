<template>
    <div class="main-container">
        <div class="navigate">
            <ul class="menu">
                <li>
                    <a href="#">Прошедшие</a>
                </li>
                <li>
                    <a href="#">Текущие</a>
                </li>
                <li>
                    <a href="#">Ближайшие</a>
                </li>
            </ul>
            <div class="search">
                <input type="text" placeholder="Поиск..." />
            </div>
        </div>
        <div class="control-container">
            <!-- <button>+ Добавить событие</button> -->
            
            <router-link to="/add-new-post">+ Добавить событие </router-link>
            <router-view></router-view>
        </div>
        <div class="posts-container">
            <div class="post" v-for="post in allPosts" :key="post.id">
                <div class="post__header">
                    <div class="post__title">{{ post.title }}</div>
                    <div class="post__delete">
                        <button @click="deletePost(post)">Удалить</button>
                    </div>
                </div>
                <div class="post__description">{{ post.description }}</div>
                <div class="post__footer">
                    <div class="post__date">
                        Дата публикации: {{ post.createdAt }}
                    </div>
                    <div class="post__likes">
                        Мне нравится: {{ post.likes }}
                    </div>
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
        methods: mapActions(["fetchPosts", "deletePost"]),
        // components: { PostForm },
        async mounted() {
            // this.$store.dispatch('fetchPosts'); // Так можно получить доступ к экшену стора, а можно через mapActions
            this.fetchPosts();
        }
    };
</script>

<style>
    body {
        font-family: "Roboto", sans-serif;
       
    }
</style>

<style scoped>
    /* body {
        font-family: "Roboto", sans-serif;
        background: red;
    } */
    .posts-container {
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        margin-left: 18%;
        margin-right: 18%;
    }
    .navigate {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 18%;
        padding-right: 19%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .search {
        display: flex;
        align-items: center;
    }
    .search input {
        border-radius: 20px;
        height: 40px;
        width: 120px;
        font-size: 24px;
        line-height: 28px;
        border: 1px solid #808080;
        background-image: url(assets/search_icon.png);
        background-repeat: no-repeat;
        background-position: 11px 9px;
        padding-left: 35px;
        padding-right: 5px;
    }
    .menu {
        background-color: #fff;
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
    }
    .menu li {
        list-style-type: none;
        padding: 20px;
        font-size: 24px;
        line-height: 28px;
    }

    .menu li:hover {
        background-color: #f0eeee;
    }

    .menu a {
        color: #000;
        text-decoration: none;
    }
    .control-container {
        padding-left: 18%;
    }

    .post {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 20px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        margin-bottom: 40px;
    }
    .post__header {
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
    .post__delete button {
        border: 0;
        color: #ff2f2f;
        background: #fff;
        font-size: 16px;
        line-height: 19px;
        cursor: pointer;
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
