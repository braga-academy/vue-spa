<template>
  <div id="app">
    <RootHeader></RootHeader> // RootHeader

    <div class="container">
      <header class="page-header row">
        <h1>Olá</h1>
      </header>
    </div>

  </div>
</template>

<script>
import RootHeader from './components/root/Header'

export default {
  name: 'app',
  components: {
    RootHeader
  }
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
