<template>
  <div class="portfolio">
    <div class="row">
      <template v-if="$q.screen.xs || $q.screen.sm">
        <div class="col-12 text-center">
          <q-avatar size="120px" class="q-mt-sm" rounded>
            <q-img
              :src="myImage"
              style="height:100%;width:100%"
              no-default-spinner
            />
          </q-avatar>
        </div>
      </template>
      <template v-else>
        <div class="col-6 text-center" :style="screenHeight">
          <q-img
            :src="myImage"
            style="height:100%;width:100%"
            no-default-spinner
          />
        </div>
      </template>
      <div :class="$q.screen.xs || $q.screen.sm ? 'col-12 q-mt-md' : 'col-6'">
        <q-scroll-area :style="screenHeight">
          <div class="q-my-md q-mx-lg">
            <div class="row text-h5 q-mb-sm text-weight-bold">About me</div>
            <div class="row text-body2 q-col-gutter-sm">
              <div class="col-12">Hello, My name is Jirakit Wattanapraphakorn (Jame)</div>
              <div class="col-12">I'm {{ yearsOld }} years old</div>
              <div class="col-12">Born in Nonthaburi, Thailand on Sunday, May 23, 1993</div>
              <div class="col-12">Live in Bangsare, Chonburi, Thailand 20250</div>
            </div>

            <div class="row text-h5 text-weight-bold q-mt-xl">Education</div>
            <q-timeline color="secondary">
              <q-timeline-entry title="Diploma/High Vocational Certificate"
                subtitle="May, 2011 - Mar, 2013">
                <div class="text-weight-bold text-body1">Thonburi Commercial College</div>
                <div class="text-caption">Business Computer - Web page Computer</div>
                <div class="text-caption">GPA 2.76</div>
              </q-timeline-entry>

              <q-timeline-entry title="Bachelor Degree"
                subtitle="Jun, 2013 - Aug, 2015">
                <div class="text-weight-bold text-body1">Rajamangala University of Technology Krungthep</div>
                <div class="text-caption">Business Administration - Information System</div>
                <div class="text-caption">GPA 2.53</div>
              </q-timeline-entry>
            </q-timeline>

            <div class="row text-h5 text-weight-bold q-mt-xl">Experience</div>
            <q-timeline color="secondary">
              <q-timeline-entry title="e-Office Online Co.,Ltd"
                subtitle="Sep, 2015 - Sep, 2016 (Bangkok, Thailand)">
                <div class="text-weight-bold text-body1">Web Programmer</div>
                <div class="text-caption">• Design database and User interface</div>
                <div class="text-caption">• Develop</div>
              </q-timeline-entry>

              <q-timeline-entry title="Taokaenoi Food and Marketing Co.,Ltd"
                subtitle="Oct, 2016 - Dec, 2017 (Phatum Thani, Thailand)">
                <div class="text-weight-bold text-body1">Applications Developer</div>
                <div class="text-caption">• Design database and system from SRS document</div>
                <div class="text-caption">• Develop</div>
                <div class="text-caption">• Maintain</div>
                <div class="text-caption">• Consult for team</div>
                <div class="text-caption">• Deploy system</div>
              </q-timeline-entry>

              <q-timeline-entry title="Fusion Solution Co.,Ltd"
                subtitle="Jan, 2018 - Sep, 2018 (Bangkok, Thailand)">
                <div class="text-weight-bold text-body1">Applications Technologies</div>
                <div class="text-caption">• Design database and system from SRS document</div>
                <div class="text-caption">• Develop</div>
                <div class="text-caption">• Maintain</div>
                <div class="text-caption">• Consult for team</div>
                <div class="text-caption">• Deploy system</div>
                <div class="text-caption">• Meeting user</div>
              </q-timeline-entry>

              <q-timeline-entry title="Nan Yang Textile Group Co.,Ltd"
                subtitle="Oct, 2018 - Present (Bangkok, Thailand)">
                <div class="text-weight-bold text-body1">Applications Developer</div>
                <div class="text-caption">• Design database, user interface and system</div>
                <div class="text-caption">• Develop</div>
                <div class="text-caption">• Maintain</div>
                <div class="text-caption">• Consult for team</div>
                <div class="text-caption">• Deploy system</div>
                <div class="text-caption">• System support</div>
                <div class="text-caption">• Meeting user</div>
              </q-timeline-entry>
            </q-timeline>

            <div class="row text-h5 text-weight-bold q-mt-lg">Languages</div>
            <div class="row">
              <template v-for="(item, index) in languages">
                <div :key="item" :class="index === 1 ? 'col-8' : 'col-4'">
                  <div class="q-py-sm text-body1">• {{ item }}</div>
                </div>
              </template>
            </div>

            <div class="row text-h5 text-weight-bold q-mt-xl">Technologies</div>
            <div class="row">
              <template v-for="(item, index) in technologies">
                <div :key="item" :class="index === 0 ? 'col-12' : 'col-6'">
                  <div class="q-py-sm text-body1">• {{ item }}</div>
                </div>
              </template>
            </div>

            <div class="row text-h5 text-weight-bold q-mt-xl">Interests</div>
            <div class="row ">
              <template v-for="item in interests">
                <div :key="item" class="col-6">
                  <div class="q-py-sm text-body1">• {{ item }}</div>
                </div>
              </template>
            </div>

            <div class="row q-col-gutter-sm text-caption q-mt-xl text-grey-7">
              <div class="col-12 text-center">
                <q-btn target="_blank" outline color="dark"
                  round flat icon="fab fa-facebook"
                  type="a" href="https://facebook.com/j4m3j4m3" />
                <q-btn target="_blank" outline color="dark"
                  round flat icon="fab fa-instagram"
                  type="a" href="https://instagram.com/jjinjjen" />
                <q-btn target="_blank" outline color="dark"
                  round flat icon="fab fa-github"
                  type="a" href="https://github.com/j-j-w" />
                <q-btn target="_blank" outline color="dark"
                  round flat icon="fab fa-linkedin"
                  type="a" href="https://www.linkedin.com/in/jirakit-wattanapraphakorn-5a8665156/" />
              </div>
              <div class="col-12 text-center">
                <span>(+66) 855529296</span>
                <span class="q-mx-sm">•</span>
                <span>jw.jirakit@gmail.com</span>
              </div>
              <div class="col-12 text-center">
                Copyright &copy; 2020
                <a class="text-grey-7" href="http://jamejirakit.me">jamejirakit.me</a>
              </div>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      myImage: require('@/assets/1.jpg'),
      images: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '15.jpg',
        '16.jpg',
        '17.jpg'
      ],
      languages: [
        'Thai (Native)',
        'English (Intermediate)'
      ],
      technologies: [
        'Javascript (vue, react, jquery, pure)',
        'Python',
        'PHP 5.x, 7.x',
        'C#',
        'Nodejs',
        'Oracle',
        'SQL Server',
        'MySQL',
        'XML',
        'JSON',
        'Restful Web Service',
        'HTML5',
        'CSS3',
        'Github',
        'Bitbucket',
        'Docker',
        'npm',
        'Composer',
        'Slack',
        'Trello'
      ],
      interests: [
        'Musics',
        'Gaming',
        'Traveling',
        'Photography',
        'Learning',
        'Technology & Innovation'
      ]
    }
  },
  methods: {
    startInterVal () {
      const _this = this
      setInterval(function () {
        _this.shuffleImages()
      }, 8989)
    },
    shuffleImages () {
      const _this = this
      const image = _this.images
      let index = image.sort(function (a, b) { return 0.5 - Math.random() })
      _this.myImage = require(`@/assets/${index[0]}`)
    }
  },
  created () {
    const _this = this
    _this.startInterVal()
  },
  computed: {
    yearsOld () {
      const currYear = new Date().getFullYear()
      return currYear - 1993
    },
    screenHeight () {
      return {
        height: this.$q.screen.xs || this.$q.screen.sm ? `${this.$q.screen.height - 145}px` : `${this.$q.screen.height}px`
      }
    }
  }
}
</script>
