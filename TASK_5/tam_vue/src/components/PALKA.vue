<template>
    <div v-bind:style="styles"></div>
</template>

<script>
    export default {
        name: "palka",
        props: {
            height: Number,
            color: String
        },
        computed: {
            styles: function() {
                return {
                    height: this.height + "px",
                    width: '10px',
                    backgroundColor: this.color,
                };
            }
        }
    };
</script>

<style>
</style>