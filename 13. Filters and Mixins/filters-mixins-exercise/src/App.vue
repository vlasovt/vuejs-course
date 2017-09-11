<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <h3> Reverse with string length count:</h3>
                <p> {{reverseText | reverse | countChars }}</p>

                <h3> String length count with 'computed' property:</h3>
                <p> {{countChars}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        filters:{
            reverse(value){
                return value.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
