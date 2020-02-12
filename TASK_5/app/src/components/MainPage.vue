<template>
    <div class="main-container">
        <div class="control-container">
            <router-link tag="button" to="/add-new-post" class="add-post-button"
                >+ Добавить событие
            </router-link>
            <button @click="sortByDate" class="sort-button">
                Сортировать по: Дате
            </button>
        </div>
        <div class="posts-container">
            <div class="post" v-for="post in paginatedDate" :key="post.id">
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
        <button @click="prevPage">Previous</button>
        <span v-for="n in pageCount" :key="n">
            <button @click="currentPageDate(n)">{{ n }}</button>
        </span>
        <button @click="nextPage">Next</button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex"; //импортим эти объкты, чтобы получать доступ к методом стора через this
    // import PostForm from "./components/PostForm";

    export default {
        name: "app",
        data() {
            return {
                pageNumber: 0,
                size: 10
            };
        },
        computed: {
            ...mapGetters(["allPosts", "postsCount"]),
            pageCount() {
                let l = this.allPosts.length;
                let s = this.size;
                return Math.ceil(l / s);
            },
            paginatedDate() {
                const start = this.pageNumber * this.size,
                    end = start + this.size;
                return this.allPosts.slice(start, end);
            }
        },
        methods: {
            ...mapActions(["fetchPosts", "deletePost", "sortByDate"]),
            nextPage() {
                this.pageNumber++;
            },
            prevPage() {
                this.pageNumber--;
            },
            currentPageDate(pageNumber) {
                // const start = pageNumber * this.size,
                //     end = start + this.size;
                // return this.allPosts.slice(start, end);
                this.pageNumber = pageNumber;
            }
        },

        mounted() {
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
    .posts-container {
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        margin-left: 18%;
        margin-right: 18%;
    }
    .post {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        border-radius: 10px;
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
    .control-container {
        padding-top: 40px;
        padding-bottom: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 18%;
        margin-left: 18%;
    }
    .sort-button {
        height: 60px;
        width: 295px;
        background: #fff;
        border: 1px solid #000;
        border-radius: 30px;
        font-size: 24px;
    }
    .add-post-button {
        background: #19d94f;
        border-radius: 30px;
        font-size: 24px;
        color: #fff;
        border: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 40px;
        padding-right: 40px;
        cursor: pointer;
    }
</style>

