<template>
    <div class="header-container">
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
                <input type="text" v-model="searchWord" @keyup.enter="search(searchWord)" placeholder="Поиск..." />
            </div>
             
        </div>
        <!-- <keep-alive>  -->
        <router-view></router-view>
        <!-- </keep-alive> -->
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default{
    data(){
        return {
            searchWord: ''
        };
    },
    methods: {
        ...mapActions(["search"])
    }
}

</script>

<style>
    body {
        font-family: "Roboto", sans-serif;
       
    }
</style>

<style scoped>

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
   
</style>
