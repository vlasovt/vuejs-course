<template>
  <ul class="nav nav-pills">
      <!-- 'exact' property is to say : make it active only when the whole route matches the 'to' property-->
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/user" tag="li" active-class="active" exact><a>User</a></router-link>
 </ul>
</template>
