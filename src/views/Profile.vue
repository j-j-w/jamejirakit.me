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
        <q-scroll-area :style="$q.screen.xs || $q.screen.sm ? screenSmHeight : screenHeight">
          <div class="q-my-md q-mx-lg">
            <div class="row text-h4 q-mb-sm text-weight-bold">About me</div>
            <div class="row text-body2 q-col-gutter-sm">
              <div class="col-12">Hello, My name is Jirakit Wattanapraphakorn (Jame)</div>
              <div class="col-12">I'm {{ yearsOld }} years old</div>
              <div class="col-12">Born in Nonthaburi, Thailand on Sunday, May 23, 1993</div>
              <div class="col-12">Live in Bangsare, Chonburi, Thailand 20250</div>
            </div>

            <div class="row text-h4 text-weight-bold q-mt-xl">Education</div>
            <q-timeline color="secondary">
              <q-timeline-entry title="Diploma/High Vocational Certificate"
                subtitle="May, 2011 - Mar, 2013">
                <div class="text-weight-bold">Thonburi Commercial College</div>
                <div class="text-caption">Business Computer - Web page Computer</div>
                <div class="text-caption">GPA 2.76</div>
              </q-timeline-entry>

              <q-timeline-entry title="Bachelor Degree"
                subtitle="Jun, 2013 - Aug, 2015">
                <div class="text-weight-bold">Rajamangala University of Technology Krungthep</div>
                <div class="text-caption">Business Administrator College - Information System</div>
                <div class="text-caption">GPA 2.53</div>
              </q-timeline-entry>
            </q-timeline>

            <div class="row text-h4 text-weight-bold q-mt-xl">Work Experience</div>
            <q-timeline color="secondary">
              <q-timeline-entry title="e-Office Online Co.,Ltd"
                subtitle="Sep, 2015 - Sep, 2016 (Bangkok, Thailand)">
                <div class="text-weight-bold">Web Programmer</div>
                <div class="text-caption">- Design database and User interface</div>
                <div class="text-caption">- Develop</div>
              </q-timeline-entry>

              <q-timeline-entry title="Taokaenoi Food and Marketing Co.,Ltd"
                subtitle="Oct, 2016 - Dec, 2017 (Phatum Thani, Thailand)">
                <div class="text-weight-bold">Applications Developer</div>
                <div class="text-caption">- Design database and system from SRS document</div>
                <div class="text-caption">- Develop</div>
                <div class="text-caption">- Maintain</div>
                <div class="text-caption">- Consult for team</div>
                <div class="text-caption">- Deploy system</div>
              </q-timeline-entry>

              <q-timeline-entry title="Fusion Solution Co.,Ltd"
                subtitle="Jan, 2018 - Sep, 2018 (Bangkok, Thailand)">
                <div class="text-weight-bold">Applications Technologies</div>
                <div class="text-caption">- Design database and system from SRS document</div>
                <div class="text-caption">- Develop</div>
                <div class="text-caption">- Maintain</div>
                <div class="text-caption">- Consult for team</div>
                <div class="text-caption">- Deploy system</div>
                <div class="text-caption">- Meeting user</div>
              </q-timeline-entry>

              <q-timeline-entry title="Nan Yang Textile Group Co.,Ltd"
                subtitle="Oct, 2018 - Present (Bangkok, Thailand)">
                <div class="text-weight-bold">Applications Developer</div>
                <div class="text-caption">- Design database and system from SRS document</div>
                <div class="text-caption">- Develop</div>
                <div class="text-caption">- Maintain</div>
                <div class="text-caption">- Consult for team</div>
                <div class="text-caption">- Deploy system</div>
                <div class="text-caption">- Meeting user</div>
              </q-timeline-entry>
            </q-timeline>

            <div class="row text-h4 text-weight-bold q-mt-lg">Languages</div>
            <q-chip class="glossy" square color="positive" text-color="white">
              Thai (Native)
            </q-chip>
            <q-chip class="glossy" square color="orange" text-color="white">
              English (Intermediate)
            </q-chip>

            <div class="row text-h4 text-weight-bold q-mt-xl">Skills</div>
            <template v-for="item in skills">
              <q-chip :key="item" class="glossy" square color="dark" text-color="white">
                {{ item }}
              </q-chip>
            </template>

            <div class="row text-h4 text-weight-bold q-mt-xl">Interests</div>
            <template v-for="item in interests">
              <q-chip :key="item" class="glossy" square color="dark" text-color="white">
                {{ item }}
              </q-chip>
            </template>

            <div class="row text-h4 text-weight-bold q-mt-xl">Follow on</div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div class="text-body2 q-mt-sm">
                  <q-icon name="fab fa-facebook" size="sm"></q-icon>
                  <q-btn class="text-capitalize q-ml-xs text-blue-8" target="_blank" flat type="a" href="https://www.facebook.com/j4m3j4m3" label="Jame Jirakit" />
                </div>
              </div>
              <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div class="text-body2 q-mt-sm">
                  <q-icon name="fab fa-instagram" size="sm"></q-icon>
                  <q-btn class="text-lowercase q-ml-xs text-blue-8" target="_blank" flat type="a" href="https://www.instagram.com/jjinjjen" label="@jjinjjen" />
                </div>
              </div>
              <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div class="text-body2 q-mt-sm">
                  <q-icon name="fab fa-github" size="sm"></q-icon>
                  <q-btn class="text-lowercase q-ml-xs text-blue-8" target="_blank" flat type="a" href="https://www.github.com/j-j-w" label="j-j-w" />
                </div>
              </div>
            </div>

            <div class="row text-h4 text-weight-bold q-mt-xl">Contact</div>
            <div class="row q-col-gutter-xs">
              <div class="col-12">
                <div class="text-body2 q-mt-sm">
                  <q-icon name="fas fa-envelope" size="xs"></q-icon>
                  <q-btn class="text-lowercase q-ml-xs text-blue-8" target="_blank" flat type="a" href="https://mail.google.com/" label="jw.jirakit@gmail.com" />
                </div>
              </div>
              <div class="col-12">
                <div class="text-body2 q-mt-sm">
                  <q-icon name="fas fa-phone" size="xs"></q-icon>
                  <q-btn class="text-lowercase q-ml-xs text-blue-8" target="_blank" flat type="a" href="tel:+66855529296" label="(+66)855529296" />
                </div>
              </div>
            </div>

            <div class="row text-caption q-mt-xl text-grey-7">
              <div class="col-12 text-center">
                Copyright &copy; 2020 - Present, Jirakit Wattanapraphakorn
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
      skills: [
        'Javascript (vue, react, jquery, pure)',
        'PHP 5.x, 7.x',
        'C#',
        'HTML',
        'CSS',
        'Oracle',
        'SQL Server',
        'MySQL',
        'Python',
        'Slack',
        'Trello',
        'Github',
        'Bitbucket',
        'Nodejs',
        'Docker',
        'npm',
        'Composer',
        'Restful Service'
      ],
      interests: [
        'Musics',
        'Games',
        'Travels',
        'Concerts',
        'Learning',
        'New Technology & Innovation'
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
    _this.shuffleImages()
  },
  mounted () {
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
        height: `${this.$q.screen.height}px`
      }
    },
    screenSmHeight () {
      return {
        height: `${this.$q.screen.height - 145}px`
      }
    }
  }
}
</script>
