<template>

  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <Brand @toggle="onToggleMenu"/>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" :class="{ in: isOpen }">

        <Left />
        <Right />

      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>

</template>

<script>
import Left from './left'
import Right from './right'
import Brand from './brand'

export default {
  name: 'spa-header',
  components: { Left, Brand, Right },
  data () {
    return { isOpen: false }
  },
  methods: {
    onToggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
