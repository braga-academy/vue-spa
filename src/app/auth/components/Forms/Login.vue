<template>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="">Email</label>
        <input v-model="user.email" type="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input v-model="user.password" type="password" class="form-control">
      </div>
      <button type="submit" class="btn btn-info" @click="doLogin" :disabled="!isValid">Login</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['attemptLogin']),
    doLogin () {
      const user = this.user
      this.attemptLogin({...user})
      .then(() => {
        this.$router.push('/')
      })
    }
  },
  computed: {
    isValid () {
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password)
    }
  }
}
</script>
