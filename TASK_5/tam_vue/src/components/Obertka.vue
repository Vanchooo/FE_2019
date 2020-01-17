<template>
    <div class="div">
        <palka :height="value" :color="color"/>
        <button @click='doEmit'> {{ buttonLabel }}  </button>
    </div>
</template>

<script>
import PALKA from './PALKA'
import { mapActions } from 'vuex';

export default {
    components: {
        palka: PALKA,
    },
    props: {
        value: Number,
        color: String,
        buttonLabel: String
    },
    methods:{ 
        ...mapActions(['drink','eat','play','sport']),
        doEmit(){
            this.$emit('click')
        }
    }
}
</script>

<style>

</style>