<template>
    <header>
        <h3>Quotes Added</h3>
        <div class="progress">
            <div class="progress-bar" :style="{width: progress}">
                {{quotesAdded}} / {{maxQuotes}}
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ['quotesAdded', 'maxQuotes'],
    data() {
        return {
        }
    },
    computed:{
        progress(){
            return  (this.quotesAdded * 10) + '%';
        }
    }
}
</script>

<style>
header {
    margin-top: 30px;
}

</style>
