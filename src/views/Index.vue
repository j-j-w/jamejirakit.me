<template>
  <div class="portfolio">
    <div class="row">
      <div class="col-12 text-center">
        <q-avatar size="150px" class="q-mt-sm" rounded>
          <q-img
            :src="require('@/assets/1.jpg')"
            style="height:100%;width:100%"
            no-default-spinner
          />
        </q-avatar>
      </div>
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 q-mt-md">
        <div class="q-my-md q-mx-lg">
          <div class="row text-body2 q-col-gutter-md text-center">
            <div class="col-12 text-weight-bold text-body1">Jirakit Wattanapraphakorn (Jame)</div>
            <div class="col-12">Web Applications Developer with 4 years of programming experience</div>
            <div class="col-12">Live in Bangsare, Chonburi, Thailand 20250</div>
          </div>

          <div class="row text-h4 text-weight-bold q-mt-xl">
            <div class="col-12 text-center">Education</div>
          </div>
          <q-timeline :layout="layout" color="secondary">
            <q-timeline-entry title="Diploma/High Vocational Certificate"
              subtitle="May, 2011 - Mar, 2013 (Bangkok, Thailand)">
              <div class="text-weight-bold text-body1">Thonburi Commercial College</div>
              <div class="text-caption">Business Computer - Web page Computer</div>
              <div class="text-caption">GPA 2.76</div>
            </q-timeline-entry>

            <q-timeline-entry title="Bachelor Degree"
              subtitle="Jun, 2013 - Aug, 2015 (Bangkok, Thailand)">
              <div class="text-weight-bold text-body1">Rajamangala University of Technology Krungthep</div>
              <div class="text-caption">Business Administration - Information System</div>
              <div class="text-caption">GPA 2.53</div>
            </q-timeline-entry>
          </q-timeline>

          <div class="row text-h4 text-weight-bold q-mt-xl">
            <div class="col-12 text-center">Experience</div>
          </div>
          <q-timeline :layout="layout" color="secondary">
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

          <div class="row text-h4 text-weight-bold q-mt-xl q-mb-md">
            <div class="col-12 text-center">Technologies</div>
          </div>
          <div class="row">
            <template v-for="(item, index) in technologies">
              <div :key="item" :class="index === 0 ? 'col-12' : 'col-6'">
                <div class="q-py-sm text-body1">• {{ item }}</div>
              </div>
            </template>
          </div>

          <div class="row text-h4 text-weight-bold q-mt-xl q-mb-md">
            <div class="col-12 text-center">Interested</div>
          </div>
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
                type="a" href="https://www.facebook.com/j4m3j4m3" />
              <q-btn target="_blank" outline color="dark"
                round flat icon="fab fa-instagram"
                type="a" href="https://www.instagram.com/jjinjjen" />
              <q-btn target="_blank" outline color="dark"
                round flat icon="fab fa-github"
                type="a" href="https://www.github.com/j-j-w" />
              <q-btn target="_blank" outline color="dark"
                round flat icon="fab fa-linkedin"
                type="a" href="https://www.linkedin.com/in/jirakit-wattanapraphakorn-5a8665156/" />
            </div>
            <div class="col-12 text-center">
              <span>(+66)855529296</span>
              <span class="q-mx-sm">•</span>
              <span>jw.jirakit@gmail.com</span>
            </div>
            <div class="col-12 text-center">
              <a class="text-grey-7" href="http://www.jamejirakit.me">jamejirakit.me</a> &copy; 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      technologies: [
        'Javascript (Vue, React, jQuery, Node, Pure)',
        'Python (Flask)',
        'PHP >= 5',
        'C# .Net',
        'Node js',
        'Oracle',
        'SQL Server',
        'MySQL',
        'XML',
        'JSON',
        'Restful Service',
        'HTML5',
        'CSS3',
        'Git',
        'Docker',
        'NPM',
        'Composer',
        'Slack',
        'Trello'
      ],
      interests: [
        'Musics',
        'Traveling',
        'Photography',
        'Learning',
        'Technology'
      ]
    }
  },
  computed: {
    yearsOld () {
      const currYear = new Date().getFullYear()
      return currYear - 1993
    },
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>
