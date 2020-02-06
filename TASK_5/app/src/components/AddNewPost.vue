<template>
    <div class="main-container">
        <router-link tag="button" class="back-button" to="/">Назад</router-link>
        <form @submit.prevent="submit" class="add-post">
            <h1>Создание мероприятия</h1>
            <h2>Заголовок</h2>
            <input
                type="text"
                class="add-post__title"
                placeholder="Placeholder..."
                v-model="title"
            />
            <h2>Описание</h2>
            <textarea
                type="text"
                class="add-post__description"
                placeholder="Placeholder..."
                v-model="description"
            />
            <h2>Дата</h2>
            <input
                type="text"
                class="add-post__date"
                placeholder="01.07.1970"
                v-model="date"
            />
            <button class="add-post__create" type="submit">Create Post</button>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    export default {
        data() {
            return {
                title: "",
                description: "",
                date: "",
            };
        },
        computed: {
            ...mapGetters(['allPosts'])
        },
        methods: {
            ...mapActions(["createPost"]),
            submit() {
                this.createPost({
                    title: this.title,
                    description: this.description,
                    date: this.date,
                    id: Date.now()
                });
                this.title = this.description = "";
            }
        }
    };
</script>

<style>
    body * {
        font-family: "Roboto", sans-serif;
    }
</style>

<style scoped>
    .main-container {
        color: #2c3e50;
        margin-top: 41px;
        margin-left: 18%;
        margin-right: 18%;
    }
    .add-post {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 1;
    }
    .add-post h1 {
        margin-top: 40px;
        margin-bottom: 47px;
    }
    .add-post h2 {
        margin-bottom: 15px;
        margin-top: 20px;
    }
    .add-post__title {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        height: 44px;
        padding-left: 20px;
        font-size: 16px;
    }
    .add-post__description {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        height: 187px;
        padding-left: 20px;
        font-size: 16px;
        padding-top: 13px;
        resize: none;
    }
    .add-post__date {
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        height: 44px;
        padding-left: 20px;
        font-size: 16px;
        width: 100px;
        margin-bottom: 15px;
    }
    .add-post__create {
        background: #19D94F;
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
    .back-button {
        font-size: 18px;
        color: #888;
        background: #fff;
        border: 0;
        cursor: pointer;
    }
</style>