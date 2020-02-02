<template>
  <q-layout view="lHh Lpr lFf">
    <q-btn class="absolute-top-right q-mr-lg q-mt-sm" flat round color="black" icon="menu">
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <q-page-container class="bg-green-1">
      <transition name="fade" mode="in-out">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style scoped lang="css">
  body {
    font-family: 'Hack'
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
