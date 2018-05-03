<template>
    <div class="header-box">
        logo
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../assets/style/theme";
    @import "../assets/style/mixin";

    .header-box {
        width: 100%;
        background-color: $main-col;
        @include hc(50px);
        font-size: 18px;
        color: $cf;
        padding: 0 20px;
    }
</style>