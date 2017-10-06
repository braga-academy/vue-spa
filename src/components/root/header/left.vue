<template>
  <ul class="nav navbar-nav" v-if="isLogged">
    <router-link :to="{ name: 'dashboard.main' }" tag="li" exact>
      <a>Home</a>
    </router-link>
    <router-link :to="{ name: 'dashboard.about' }" tag="li" exact>
      <a>Sobre</a>
    </router-link>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLogged'])
  }
}
</script>
