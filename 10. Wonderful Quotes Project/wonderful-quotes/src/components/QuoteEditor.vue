<template>
    <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea class="form-control" v-model="quote" rows="5" id="comment"></textarea>
        <div class="addButton">
            <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
        </div>
        <app-quote v-for="(quote, index) in quotes" 
                   :key="index"
                   v-on:click.native="removeQuote(index)">
                   {{quote}}
                   </app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    
    props: ['quotes', 'maxQuotes'],
    data() {
        return {  
            quote:''
        }
    },
    methods:{
        addQuote(){
            this.$emit('quoteAdded', this.quote);
            this.quote = '';
        },
        removeQuote(index){
            this.$emit('quoteRemoved', index);
        }
    },
    components:{
        'app-quote': Quote
    }
}
</script>

<style>
    .addButton{
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
    }
</style>
