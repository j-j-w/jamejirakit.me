<template>
  <div class="notfound">
    <div class="row items-center text-h4 text-weight-regular" :style="screenHeight">
      <div class="col-12 text-center q-px-sm">
        404 Not found.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notfound',
  computed: {
    screenHeight () {
      return {
        'height': `${this.$q.screen.height}px`
      }
    }
  }
}
</script>
