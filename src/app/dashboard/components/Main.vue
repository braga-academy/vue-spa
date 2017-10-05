<template>
    <header class="page-header row">
      <h1>Olá</h1>
    </header>
</template>

<script>
import http from 'http'

export default {
  mounted () {
    http.get('http://pokeapi.co/api/v1/pokemon/1/')
    .then(response => response.data)
    .then(data => {
      console.log(data)
    })
  }
}
</script>
