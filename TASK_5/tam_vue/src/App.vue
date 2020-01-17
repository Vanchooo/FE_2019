<template>
    <div id="app">
        <div class="tamagochi-container">
            <obertka :value="getHealth" :color="getHealthColor" buttonLabel="Пить" @click='drink' />
            <obertka :value="getTiredness" :color="getTirednessColor" button-label="Есть" @click='eat' />
            <obertka :value="getHunger" :color="getHungerColor" button-label="Играть" @click='play' />
            <obertka :value="getThirst" :color="getThirstColor" button-label="Спорт" @click='sport' />
        </div>
    </div>
</template>

<script>
    import Obertka from './components/Obertka'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "app",
        components:{
          obertka: Obertka
        },
        computed: mapGetters([
          "getHealthColor",
          "getHealth",
          "getTiredness",
          "getTirednessColor",
          "getHunger",
          "getHungerColor",
          "getThirst",
          "getThirstColor"
        ]),
        data() {
            return {
                // healthColor: "yellow",
                // health: 100,
                // tiredness: 100,
                // tirednessColor: 'orange',
                // hunger: 100,
                // hungerColor: 'red',
                // thirst: 100,
                // thirstColor: 'black'
            };
        },
        methods: mapActions(['drink','eat','play','sport'])
        
    };
</script>

<style>
    #app {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tamagochi-container {
        display: flex;
        align-items: center;
    }
    .health {
        background-color: #f00;
        width: 30px;
    }
    .tiredness {
        background-color: #ff0;
        width: 30px;
    }
    .hunger {
        background-color: #0ff;
        width: 30px;
    }
    .thirst {
        background-color: #f0f;
        width: 30px;
    }
</style>
