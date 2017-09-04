<template>
    <li class="list-group-item" 
       @click="showDetails(server)">
        Server #{{ server.id }}: <span :style="{
            'font-weight': 'bold', 
            color: statusColor}">
            {{server.status}}</span> 
    </li>
</template>
<script>

 import {eventBus} from '../main';

export default {
  props: ['server'],
  computed:{
      statusColor(){
        var color = 'black';

          switch(this.server.status){
              case 'Critical':
                color = 'red';
                break;
              case 'Normal':
                color =  'green';
                break;
              case 'Unknown':
                color =  'orange';
                break;
          }

          return color;
      }
  },
  methods:{
      showDetails(server){
          eventBus.showServerDetails(server);
      }
  }
}
</script>

<style>
    li{
         cursor: pointer;
    }
</style>




