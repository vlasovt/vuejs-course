<template>
    <div>
        <div class="title">
          <slot name="title"></slot>
          <span style="color: #ccc"><slot name="subtitle">Subtitle</slot></span>
        </div>
        <div>
             <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2{
        color:blue;
    }

    .title{
        font-style: italic;
    }
</style>
