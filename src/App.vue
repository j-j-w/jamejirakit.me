<template>
  <q-layout view="lHh Lpr lFf" class="font-hack bg-grey-2">
    <q-img
      v-if="$route.name === 'home'"
      no-default-spinner
      class="absolute-top-left q-ml-lg q-mt-sm cursor-pointer"
      @click="$router.replace('/')"
      :src="require('@/assets/jamejirakit.png')"
      style="height: 40px; max-width: 130px"
    />
    <q-btn class="absolute-top-right z-index-forward q-mr-lg q-mt-sm"
      flat round color="black" icon="menu">
      <q-menu>
        <q-list class="font-hack">
          <q-item router :to="{ name: 'home' }">
            <q-item-section class="text-dark">Home</q-item-section>
          </q-item>
          <q-item router :to="{ name: 'profile' }">
            <q-item-section class="text-dark">Profile</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
      <q-page-container>
        <router-view />
      </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  .font-hack {
    font-family: 'Ubuntu', sans-serif;
  }
  .z-index-forward {
    z-index: 9999 !important;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
