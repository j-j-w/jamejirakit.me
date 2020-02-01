<template>
  <div class="home bg-green-1">
    <q-btn class="absolute-top-right q-mr-lg q-mt-sm" flat round color="black" icon="menu" />
    <div class="row items-center text-h3 text-weight-regular" :style="screenHeight">
      <div class="col-12 text-center">
        <vue-typer
          :text='texts'
          repeat='Infinity'
          shuffle
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :pre-erase-delay='2500'
          :erase-delay='45'
          erase-style='backspace'
          :erase-on-complete='false'
          caret-animation='blink'
        />
      </div>
    </div>
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
      texts: [
        'Hi, I\'m Jame.',
        'Jirakit Wattanapraphakorn',
        'I love coding.',
        'I\'m Fullstack Developer.',
        'I\'m a slave cat & dog.',
        'EDM Addicts.',
        'Liverpool is the real champion. (lol)',
        'Since 2017.',
        'Everyday is happy :)',
        'Live in Thailand.',
        'Human is amazing.',
        '26 year\'s old.',
        'Learning is important.',
        'I love to eat buffet.',
        'When the Avatar 2 will be released.',
        'The sea make me happy.',
        'Parents have given me today.',
        'I have two brothers.',
        'I want to master degree.',
        'Girlfriend is the best girl.',
        'I love fashion.',
        'github.com/j-j-w',
        'Tomorrow must better.',
        'Thanks to everyone that\'s good with me.',
        'facebook.com/j4m3j4m3',
        'IG: @jjinjjen',
        'I want to travel around the world'
      ]
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
