<template>
  <header class="header">
    <h1> Recipes </h1>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'special' }"> Add Special </router-link>
    </nav>
  </header>
</template>
<style scoped lang="scss">
#nav {
  padding: 30px;

  a {
    padding: 0 10px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
