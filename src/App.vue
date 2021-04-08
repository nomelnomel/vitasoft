<template>
  <div id="app">
    <main>
      <header class="nav">
        <router-link to="/" class="nav-link nav-main">Все посты</router-link>
        <router-link to="/add-new-post" class="nav-link nav-new">Добавить новый пост</router-link>
      </header>
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.nav{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.nav-link{
  font-size: 20px;
  color: black;
  text-decoration: none;
}

.router-link-exact-active {
  text-decoration: underline;
}

.nav-new{
  margin-left: 30px;
  padding-left: 30px;
  border-left: 1px solid black;
}
</style>
