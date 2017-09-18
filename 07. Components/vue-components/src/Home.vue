<template>
  <div>
    <app-server-status v-for="server in 5" :key="server"></app-server-status>
  </div>
</template>

<script>

import Status from './ServerStatus.vue'

export default {
  components:{
    //appServerStatus: Status
    //Status
    'app-server-status': Status
  }
}
</script>




