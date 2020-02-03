<template>
    <div class="wrapper-container" id="app">
        <h1>Instagram 2.0</h1>
        <div class="top-container">
            <div v-if="userData" class="user-info">
                <div class="user-info__photo">
                    <img :src="userData.avatar" alt />
                </div>
                <div class="user-info__main-info">
                    <div class="user-info__username">{{ userData.name }}</div>
                    <div class="user-info__photo-quantity">
                        Количество постов: {{ postsLength }}
                    </div>
                </div>
            </div>

            <div class="show-posts-button"></div>
        </div>

        <div v-if="userData" class="main-container">
            <div v-for="(post, index) in posts" :key="index" class="post">
                <div class="post__photo">
                    <img :src="post.image" alt />
                </div>
                <div class="post__description">{{ post.description }}</div>
                <div class="post__footer">
                    <div class="post__likes">{{ post.likes }}</div>
                    <div class="post__date-publish">
                        {{ slicePublishDate(post.createdAt) }}
                    </div>
                </div>
            </div>
        </div>

        <div class="download-button-container">
            <input
                @click="showNextPosts"
                :disabled="loading"
                id="elem"
                type="button"
                value="Загрузить больше постов"
            />
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "app",
        data() {
            return {
                url: "http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1",
                loading: true,
                postCount: 5,
                userData: null
            };
        },
        methods: {
            slicePublishDate(date) {
                return date.slice(0, 10);
            },
            showNextPosts() {
                if (this.postsLength > this.postCount) {
                    this.postCount = this.postCount + 5;
                }
            }
        },
        computed: {
            postsLength() {
                return this.userData ? this.userData.posts.length : 0;
            },
            posts() {
                return this.userData.posts.slice(0, this.postCount);
            }
        },
        mounted() {
            axios.get(this.url).then(response => {
                this.userData = response.data;
                this.loading = false;
            });
        }
    };
</script>

<style>
    body {
        background-color: #ffb6c1;
        font-family: Arial, Helvetica, sans-serif;
    }
    h1 {
        text-align: center;
        font-size: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .top-container {
        display: flex;
        padding-left: 35%;
        padding-right: 35%;
    }
    .main-container {
        display: flex;
        flex-direction: column;
        padding-left: 35%;
        padding-right: 35%;
        padding-top: 15px;
    }
    .user-info {
        display: flex;
        flex-direction: row;
    }
    .user-info__main-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        font-size: 25px;
    }
    .post {
        background: #fff;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
    .post__photo img {
        width: 100%;
    }
    .post__description {
        padding-bottom: 10px;
    }
    .post__footer {
        display: flex;
        justify-content: space-between;
    }
    .download-button-container {
        padding-left: 35%;
        padding-right: 35%;
    }
</style>
