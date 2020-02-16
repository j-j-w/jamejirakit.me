<template>
  <q-layout view="lHh Lpr lFf" class="font-hack bg-grey-2">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'app',
  created () {
    // eslint-disable-next-line handle-callback-err
    this.$router.replace('/').catch(err => {})
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  .font-hack {
    font-family: 'Ubuntu', sans-serif;
  }
</style>
