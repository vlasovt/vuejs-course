<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <div class="well" v-when:click="clicked">Click Me</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            clicked(){
                alert('v-when directive worked!');
            }
        },
        directives:{
            'when': {
                bind(el, binding, vnode){
                    if(binding.arg){
                        el.addEventListener(binding.arg, binding.value);
                    }
                }
            }
        }
    }
</script>
<style>
 .well{
     text-align: center;
     font-weight: bold;
     font-size: 20px;
     background-color:lightgreen
 }
 .well:hover{
     cursor: pointer;
 }
</style>

    

