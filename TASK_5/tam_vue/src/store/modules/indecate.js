export default {
    actions: {
        drink(context) {
            context.commit('drink');
        },
        eat(context) {
            context.commit('eat');
        },
        play(context) {
            context.commit('play');
        },
        sport(context) {
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
        },
        // actionPlus(prop){
        //     state[`${prop}`] += 10; 
        // }
    },
    state: {
        health: 100,
        tiredness: 100,
        hunger: 100,
        thirst: 100,
    },
    getters: {
        getHealth(state) {
            return state.health;
        },
        getTiredness(state) {
            return state.tiredness;
        },
        getHunger(state) {
            return state.hunger;
        },
        getThirst(state) {
            return state.thirst;
        }
    }
}