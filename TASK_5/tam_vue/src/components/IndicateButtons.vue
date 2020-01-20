<template>
    <button @click="doEmit">
        {{ buttonLabel }}
    </button>
</template>

<script>
    export default {
        props: {
            buttonLabel: String,
        },
        methods: {
            doEmit() {
                this.$emit("click");
            }
        }
    };
</script>

<style>
</style>