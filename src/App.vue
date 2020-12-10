<template>
<main>
    <div>
      <span style="padding: 0 10px; font-size: 2em">
        <router-link :to="{name: 'landingPage'}">
          Home
        </router-link>
      </span>
      <span style="padding: 0 10px; font-size: 2em">
        <router-link :to="{name: 'form'}">
          Form
        </router-link>
      </span>
    </div>
    <router-view></router-view>
</main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
