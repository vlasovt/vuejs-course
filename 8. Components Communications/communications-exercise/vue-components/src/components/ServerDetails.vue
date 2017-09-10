<template>
    <div class="col-xs-12 col-sm-6">
        <div>Server Details</div>
        <div v-if="server">
            <p>Server ID: {{server.id}}</p>
            <p>Server Status: {{server.status}}</p>
            <button @click="resetStatus(server.id - 1)">Change Status to Normal</button>
        </div>
    </div>
</template>

<script>

 import {eventBus} from '../main';

export default {
    data(){
        return {
            server: null
        }; 
    },
    methods:{
        resetStatus(){
            this.server.status = 'Normal';
        }
    },
    created() {
        eventBus.$on('showServerDetails', (server) => { this.server = server });
    }
}
</script>
