<template>
    <div id="app">
        <img :src="picture" alt="" />
        <h1>My little tamagochi</h1>
        <div class="top-container">
            <div class="labels-container">
                <div>Здоровье</div>
                <div>Усталость</div>
                <div>Голод</div>
                <div>Жажда</div>
            </div>
            <div class="indicates-container">
                <Indicates
                    :width="tams.pika.health"
                    class="indicates-container__health"
                />
                <Indicates
                    :width="tams.pika.tiredness"
                    class="indicates-container__tiredness"
                />
                <Indicates
                    :width="tams.pika.hunger"
                    class="indicates-container__hunger"
                />
                <Indicates
                    :width="tams.pika.thirst"
                    class="indicates-container__thirst"
                />
            </div>
        </div>
        <div class="indicate_buttons">
            <IndicateButtons
                @click="change({ action: 'drink', prop: 'pika' })"
                buttonLabel="Пить"
                class="indicate_buttons__drink"
            />
            <IndicateButtons
                @click="change({ action: 'eat', prop: 'pika' })"
                buttonLabel="Есть"
                class="indicate_buttons__eat"
            />
            <IndicateButtons
                @click="change({ action: 'play', prop: 'pika' })"
                buttonLabel="Играть"
                class="indicate_buttons__play"
            />
            <IndicateButtons
                @click="change({ action: 'sport', prop: 'pika' })"
                buttonLabel="Спорт"
                class="indicate_buttons__sport"
            />
            <!-- <button @click="checkState">click me</button> -->
        </div>
    </div>
</template>

<script>
    import IndicateButtons from "./components/IndicateButtons";
    import Indicates from "./components/Indicates";
    import { mapActions, mapGetters } from "vuex";
    import tamOk from "./assets/pikachu-happy.jpg";
    import tamNotOk from "./assets/pikachu-angry.jpg";

    export default {
        name: "app",
        data() {
            return {
                show: false,
                timer: null,
                          
            };
        },
        mounted() {
            this.startTimer()
        },
        destroyed() {
            this.stopTimer()
        },
        components: {
            IndicateButtons: IndicateButtons,
            Indicates: Indicates
        },
        computed: {
            ...mapGetters(["tams"]),

            picture() {
                if (this.isDie) {                                      
                    return tamNotOk;
                } else {
                    return tamOk;
                }
            },
            isDie(){
                return this.tams.pika.health <= 0 ||
                    this.tams.pika.tiredness <= 0 ||
                    this.tams.pika.hunger <= 0 ||
                    this.tams.pika.thirst <= 0
            }
        },
        methods: {
            ...mapActions(["change"]),
            startTimer() {
                this.timer = setInterval(() => {
                    this.change({ action: "die", prop: "pika" });
                }, 1000);
            },
            stopTimer(){
                clearTimeout(this.timer)
            }
        },
        watch: {
            isDie(value){
                if(value){
                    this.stopTimer();
                }
            }            
        }
    };
</script>

<style>
    #app {
    font-family: Bradley Hand, cursive;
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
.top-container {
    display: flex;
    height: 300px;
    width: 600px;
    border: 2px groove #000;
    border-radius: 16px;
    padding: 16px;
}
.labels-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 15px;
}
.indicates-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
}
.indicates-container__health {
    background: linear-gradient(to right, #fa8072, #f00);
    max-width: 490px;
    transition: width 0.3s;
}
.indicates-container__tiredness {
    background: linear-gradient(to right, #98fb98, #32cd32);
    max-width: 490px;
    transition: width 0.3s;
}
.indicates-container__hunger {
    background: linear-gradient(to right, #cd853f, #8b4513);
    max-width: 490px;
    transition: width 0.3s;
}
.indicates-container__thirst {
    background: linear-gradient(to right, #00ffff, #00ced1);
    background-color: #0ff;
    max-width: 490px;
    transition: width 0.3s;
}
.indicate_buttons {
    display: flex;
    width: 400px;
    justify-content: space-between;
    margin-top: 20px;
}
.indicate_buttons button {
    color: #000;
    padding: 19px;
    background: #fff;
    border: 2px solid #000;
    border-radius: 10px;
    font-family: Bradley Hand, cursive;
    cursor: pointer;
}
</style>
