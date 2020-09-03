<template>
  <div class="portfolio">
    <div class="row">
      <div class="col-12 text-center">
        <q-avatar size="160px" class="q-mt-lg" circle>
          <q-img
            :src="src"
            style="height:100%;width:100%"
            no-default-spinner
          />
        </q-avatar>
      </div>
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 q-mt-sm">
        <div class="q-my-md q-mx-lg">
          <div class="row text-body2 q-col-gutter-md text-center q-mb-xl">
            <div class="col-12 text-weight-bold text-body1">Jirakit Wattanapraphakorn (Jame)</div>
            <div class="col-12">Applications Developer with {{ experienceYear }} years of programming experience</div>
            <div class="col-12">Live in Chonburi, Thailand</div>
            <div class="col-12 q-mt-lg text-body2 text-bold">I am Senior Applications Developer
              <br />
              Working about Full Stack Web Application • Services API • Automation tasks • Analyst data • Design database relation and structure coding.
            </div>
          </div>

          <q-separator inset />

          <div class="row text-h4 text-weight-bold q-mt-xl">
            <div class="col-12 text-center">Education</div>
          </div>
          <q-timeline :layout="layout" color="green-8">
            <q-timeline-entry title="Diploma/High Vocational Certificate" icon="done_all"
              subtitle="May, 2011 - Mar, 2013 (Bangkok, Thailand)">
              <div class="text-weight-bold text-body1">Thonburi Commercial College</div>
              <div class="text-caption">Business Computer - Web page Computer</div>
              <div class="text-caption">GPA 2.76</div>
            </q-timeline-entry>

            <q-timeline-entry title="Bachelor Degree" icon="done_all"
              subtitle="Jun, 2013 - Aug, 2015 (Bangkok, Thailand)">
              <div class="text-weight-bold text-body1">Rajamangala University of Technology Krungthep</div>
              <div class="text-caption">Business Administration - Information System</div>
              <div class="text-caption">GPA 2.53</div>
            </q-timeline-entry>
          </q-timeline>

          <div class="row text-h4 text-weight-bold q-mt-xl">
            <div class="col-12 text-center">Experience</div>
          </div>
          <q-timeline :layout="layout">
            <template v-for="item in experiences">
              <q-timeline-entry :key="item.companyName" :title="item.companyName" :subtitle="item.timeline" :icon="item.icon" :color="item.color">
                <div class="text-weight-bold text-body1">{{ item.jobTitle }}</div>
                <div v-for="resItem in item.responsibilities" :key="resItem" class="text-caption">{{ resItem }}</div>
              </q-timeline-entry>
            </template>
          </q-timeline>

          <div class="row text-h4 text-weight-bold q-mt-xl q-mb-md">
            <div class="col-12 text-center">Abilities</div>
          </div>
          <div class="row">
            <template v-for="item in technologies">
              <div :key="item" class="col-12 text-center">
                <div class="q-py-sm text-body1">{{ item }}</div>
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
                type="a" href="https://www.instagram.com/jame.jirakit" />
              <q-btn target="_blank" outline color="dark"
                round flat icon="fab fa-github"
                type="a" href="https://www.github.com/j-j-w" />
              <q-btn target="_blank" outline color="dark"
                round flat icon="fab fa-linkedin"
                type="a" href="https://www.linkedin.com/in/jamejirakit" />
            </div>
            <div class="col-12 text-center">
              <span>+66855529296</span>
              <span class="q-mx-sm">•</span>
              <span>jirakit.wa@gmail.com</span>
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
      src: '',
      startWorking: 2015,
      experiences: [
        {
          companyName: 'Informatix Plus Co.,Ltd',
          timeline: 'Sep, 2015 - Sep, 2016 (Bangkok, Thailand)',
          jobTitle: 'Web Programmer',
          color: 'green-8',
          icon: 'done_all',
          responsibilities: [
            '• Design database and User interface',
            '• Develop web applications'
          ]
        },
        {
          companyName: 'Taokaenoi Food and Marketing Co.,Ltd',
          timeline: 'Oct, 2016 - Sep, 2018 (Pathum Thani, Thailand)',
          jobTitle: 'Applications Developer',
          color: 'green-8',
          icon: 'done_all',
          responsibilities: [
            '• Design database and system from SRS document',
            '• Develop web applications',
            '• Software maintain and testing',
            '• Consult for the team',
            '• Seminar and bring new technology adjust with project',
            '• Meeting users'
          ]
        },
        {
          companyName: 'Nan Yang Textile Group Co.,Ltd',
          timeline: 'Oct, 2018 - Mar, 2020 (Bangkok, Thailand)',
          jobTitle: 'Applications Developer',
          color: 'green-8',
          icon: 'done_all',
          responsibilities: [
            '• Design database and system from SRS document',
            '• Develop web applications from requirement',
            '• Software maintain and testing',
            '• Consult for the team',
            '• System support',
            '• Meeting users'
          ]
        },
        {
          companyName: 'Hosting-Group Co.,Ltd',
          timeline: 'April, 2020 - Present (Chonburi, Thailand)',
          jobTitle: 'Senior Applications Developer',
          color: 'blue-9',
          icon: 'done',
          responsibilities: [
            '• Develop web applications from requirements',
            '• Develop API service for automatic tasks',
            '• Software maintain and testing',
            '• Write a document development plan',
            '• Consult for the team',
            '• Develop product of company',
            '• Analyst tools for developing'
          ]
        }
      ],
      technologies: [
        'Javascript (Vue • jQuery • Pure)',
        'C# .Net (Standard • Framework • Core)',
        'Python (Flask)',
        'PHP (Slim • Yii2 • CodeIgniter)',
        'Oracle • SQL Server • MySQL',
        'Restful Service API',
        'HTML • CSS',
        'Nuget • npm • Composer',
        'Slack • Trello',
        'Git • Azure DevOps',
        'Postman • Swagger'
      ]
    }
  },
  methods: {
    images () {
      let _this = this
      let xhr = new XMLHttpRequest()
      xhr.open('GET', require('@/assets/profile.jpg'), true)
      xhr.responseType = 'blob'
      xhr.onload = function (e) {
        let reader = new FileReader()
        reader.onload = function (event) {
          const res = event.target.result
          _this.src = res
        }
        let file = this.response
        reader.readAsDataURL(file)
      }
      xhr.send()
    }
  },
  computed: {
    experienceYear () {
      const currYear = new Date().getFullYear()
      return currYear - this.startWorking
    },
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  mounted () {
    this.images()
  }
}
</script>
