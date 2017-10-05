<template>
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" @click="toggle">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <router-link :to="{ name: 'dashboard.main' }" class="navbar-brand">2ts Comunicação</router-link>
  </div>
</template>
<script>
export default {
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>
