<template>
    <div>
      <header class="page-header row">
        <h1>Olá [AUTH]</h1>
      </header>

      <Login />

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from './Forms/Login'

export default {
  name: 'auth',
  components: { Login },
  computed: {
    ...mapGetters(['isLogged'])
  }
}
</script>
