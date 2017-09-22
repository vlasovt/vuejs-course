<template>
  <div>
    <h3>Some User Details</h3>
    <p>User ID: {{id}}</p>
    <router-link class="btn btn-primary" tag="button" :to="link">Edit User</router-link>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      link: {
        name: 'userEdit',
        params: {
          id: this.id
        },
        query: {
          locale: 'en',
          q: 100
        },
        hash: '#data'
      },
      //route guard on the component level
      beforeRouteEnter(to, from, next) {
        if (true) {
          next();
        } else {
          next(false);
        }
      }
    }
  }
}
</script>
