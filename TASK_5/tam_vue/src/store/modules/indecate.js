export default{
    actions:{
        drink(context){
            context.commit('drink');
        },
        eat(context){
            context.commit('eat');
        },
        play(context){
            context.commit('play');
        },
        sport(context){
            context.commit('sport');
        }

    },
    mutations: {
        drink(state) {
            state.thirst -= 10;
            state.health -= 1;
        },
        eat(state) {
            state.hunger -= 10;
            state.health -= 2;
        },
        play(state) {
            state.thirst += 30;
            state.hungry += 10;
        },
        sport(state) {
            state.health += 10;
            state.hungry += 10;
            state.thirst += 10;
        }
    },
    state: {
        healthColor: "yellow",
        health: 100,
        tiredness: 100,
        tirednessColor: 'orange',
        hunger: 100,
        hungerColor: 'red',
        thirst: 100,
        thirstColor: 'black'
    },
    getters: {
        getHealthColor(state){
            return state.healthColor;
        },
        getHealth(state){
            return state.health;
        },
        getTiredness(state){
            return state.tiredness;
        },
        getTirednessColor(state){
            return state.tirednessColor;
        },
        getHunger(state){
            return state.hunger;
        },
        getHungerColor(state){
            return state.hungerColor;
        },
        getThirst(state){
            return state.thirst;
        },
        getThirstColor(state){
            return state.thirstColor;
        },
        
    }
}