<template>
  <div class="home">
    <vue-typer
      :text="texts"
    />
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'home',
  components: {
    VueTyper
  },
  data () {
    return {
      texts: []
    }
  }
}
</script>
