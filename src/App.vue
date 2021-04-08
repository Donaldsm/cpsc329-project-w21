<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav" class="text-left bg-yellow-300 p-5 font-fira font-medium mb-3">
      <router-link class="m-3 hover:text-blue-200" to="/">Home</router-link> 
      <router-link class="m-3 hover:text-blue-200" to="/about">About</router-link> 
      <router-link class="m-3 hover:text-blue-200" to="/quiz1">Quiz1</router-link>
=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/quiz1">Quiz</router-link>
>>>>>>> b1756424aae181d26861974e8d74c02c9277d32e
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #645a9e;
//     }
//   }
// }
</style>
