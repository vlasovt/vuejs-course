<template>
    <div class="container">
        <app-header 
           :quotesAdded="quotes.length"        :maxQuotes="maxQuotes"></app-header>
        <app-quote-editor 
           :quotes="quotes" 
           @quoteAdded="addQuote"
           @quoteRemoved="removeQuote"></app-quote-editor>
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
        },
        methods:{
              addQuote(quote){

                if(!quote){
                    return;
                }

                if(this.quotes.length >= this.maxQuotes){
                     return alert('You have reached the limit of '+ this.maxQuotes +' quotes. Please remove some items from the list before adding more.');
                }

                 this.quotes.push(quote);
            },
            removeQuote(index){
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
