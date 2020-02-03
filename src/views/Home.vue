<template>
  <div class="home">
    <div class="row items-center text-h4 text-weight-regular" :style="screenHeight">
      <div class="col-12 text-center q-px-sm">
        <vue-typer
          :text='texts'
          :repeat='Infinity'
          shuffle
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :pre-erase-delay='2500'
          :erase-delay='43'
          erase-style='clear'
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
        'I\'m fine.',
        'I love coding.',
        'I\'m ready. Are you ready ?',
        'I\'m Fullstack Developer.',
        'I\'m a slave cat & dog.',
        'How are you ?',
        'Genius is 1 inspiration and 99 perspiration.',
        'EDM Addicts.',
        'Liverpool is the real champion. (lol)',
        'Since 2017',
        'Be somebody nobody thought you could be.',
        'Everyday is happy :)',
        'Live in Bangsare, Chonburi, Thailand.',
        'Human is amazing.',
        '26 year\'s old.',
        'Learning is important.',
        'I love to eat buffet.',
        'When the Avatar 2 will be released.',
        'The sea make me happy.',
        'Parents have given me today.',
        'I have two brothers.',
        'I want to master degree.',
        'I love fashion.',
        'github.com/j-j-w',
        'Tomorrow must better.',
        'Thanks to everyone that\'s good with me.',
        'facebook.com/j4m3j4m3',
        'instagram.com/jjinjjen',
        'I want to travel around the world.',
        'Worry less, Smile more.',
        'What\'s past is past. Time to move on.',
        'Have a nice day.',
        'Hey, you. Don’t give up, okay ?',
        'It\'s never too late to start again.',
        'Don’t let your dreams be dreams.',
        'I don\'t want a perfect life. I want a happy life.',
        'Never let go of your dream.',
        'Don’t look for happiness, Creat it.',
        'You can’t win unless you learn how to lose.'
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
