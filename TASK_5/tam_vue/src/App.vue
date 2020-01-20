<template>
    <div id="app">
        <div class="indicates-container">
            <Indicates
                :width="getHealth"
                class="indicates-container__health"
            />
            <Indicates
                :width="getTiredness"
                class="indicates-container__tiredness"
            />
            <Indicates
                :width="getHunger"
                class="indicates-container__hunger"
            />
            <Indicates
                :width="getThirst"
                class="indicates-container__thirst"
            />
        </div>
        <div class="indicate_buttons">
            <IndicateButtons @click="drink" buttonLabel="Пить" class="indicate_buttons__drink" />
            <IndicateButtons @click="eat" buttonLabel="Есть" class="indicate_buttons__eat" />
            <IndicateButtons @click="play" buttonLabel="Играть" class="indicate_buttons__play" />
            <IndicateButtons @click="sport" buttonLabel="Спорт" class="indicate_buttons__sport" />
        </div>
    </div>
</template>

<script>
    import IndicateButtons from "./components/IndicateButtons";
    import Indicates from "./components/Indicates";
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "app",
        components: {
            IndicateButtons: IndicateButtons,
            Indicates: Indicates
        },
        computed: mapGetters([
            "getHealth",
            "getTiredness",
            "getHunger",
            "getThirst"
        ]),
        methods: mapActions(["drink", "eat", "play", "sport"])
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .indicates-container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .indicates-container__health {
        background-color: #f00;
    }
    .indicates-container__tiredness {
        background-color: #ff0;
    }
    .indicates-container__hunger {
        background-color: #0ff;
    }
    .indicates-container__thirst {
        background-color: #f0f;
    }
</style>
