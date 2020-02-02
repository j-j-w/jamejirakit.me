<template>
  <div class="gallery">
    <div class="row items-center text-weight-regular" :style="screenHeight">
      <div class="col-6 text-center">
        Gallery
      </div>
      <div class="col-6 text-center text-body1">
        <div class="row">Hello, My name is Jirakit Wattanapraphakorn</div>
        <div class="row">Nickname: Jame</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'portfolio',
  data () {
    return {
    }
  },
  computed: {
    screenHeight () {
      return {
        'height': `${this.$q.screen.height}px`
      }
    }
  }
}
</script>
