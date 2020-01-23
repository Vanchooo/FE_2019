<template>
    <div :style="styles"></div>
</template>

<script>
    export default {
        props: {
            width: Number
        },
        computed: {
            styles: function() {
                return {
                    width: this.width + "px",
                    height: "7px"
                };
            }
        }
    };
</script>

<style>
</style>