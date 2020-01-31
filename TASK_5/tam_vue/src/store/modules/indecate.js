export default {
    actions: {
        change(context, { action, prop }) {
            context.commit(action, prop);
        },
    },
    mutations: {
        drink(state, tamName) {
            state.tams[tamName].thirst += 15;
            state.tams[tamName].health -= 5;
        },
        eat(state, tamName) {
            state.tams[tamName].hunger += 15;
            state.tams[tamName].health -= 5;
        },
        play(state, tamName) {
            state.tams[tamName].thirst -= 15;
            state.tams[tamName].health += 10;
        },
        sport(state, tamName) {
            state.tams[tamName].health += 15;
            state.tams[tamName].hunger -= 10;
            state.tams[tamName].thirst -= 10;
        },
        die(state, tamName) {
            state.tams[tamName].health -= 5;
            state.tams[tamName].hunger -= 5;
            state.tams[tamName].thirst -= 5;
            state.tams[tamName].tiredness -= 5;
        }
        // actionPlus(prop){
        //     state[`${prop}`] += 10; 
        // }
    },
    state: {
        tams: {
            pika: {
                health: 100,
                tiredness: 100,
                hunger: 100,
                thirst: 100,
            },
            ray: {
                health: 50,
                tiredness: 50,
                hunger: 50,
                thirst: 50,
            },
        }
    },
    getters: {
        tams: state => {
            return state.tams;
        }
    }
}