<template>
    <div  class="well well-small">
        {{quote}}
    </div>
</template>

<script>
export default {
    props:['quote'],
    data() {
        return {
        }
    }
}
</script>

<style scoped>
    .well{
        background-color: white;
        font-family: Arizonia;
        font-size: 22px;
        width:200;
         
    }

    .well:hover{
        background-color: lightgreen;
        cursor: pointer;
    }
</style>
