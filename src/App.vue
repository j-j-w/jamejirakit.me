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
    this.$router.replace('/')
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  .font-hack {
    font-family: 'Ubuntu', sans-serif;
  }
</style>
