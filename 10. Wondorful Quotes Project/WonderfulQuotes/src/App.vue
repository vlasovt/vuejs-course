<template>
    <div class="container">
        <app-header :quotesAdded="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-quote-editor :quotes="quotes"></app-quote-editor>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import QuoteEditor from './components/QuoteEditor.vue'

    export default {
        data(){
            return{
                quotes: [
                    "What a wonderful Quote..."
                ],
                maxQuotes: 10
            }
        },
        components:{
            'app-footer': Footer,
            'app-header': Header,
            'app-quote-editor': QuoteEditor
        }
    }
</script>

<style>
</style>
