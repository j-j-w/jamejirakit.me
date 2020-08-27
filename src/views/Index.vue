<template>
  <div class="portfolio">
    <div class="row">
      <div class="col-12 text-center">
        <q-avatar size="200px" class="q-mt-lg" rounded>
          <q-img
            :src="require('@/assets/Jirakit-Profile.jpg')"
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
            <div class="col-12 q-mt-lg text-body2 text-bold">I am application developer. Working on Fullstack Web Application, Service API, Automation tasks, Analyst, Design database relation and structure of coding, Guideline our team, etc.</div>
            <div class="col-12 q-mt-xs text-body2 text-bold">Feel proud of my past experiences but I have to keep in mind that working in the Technology way will never be a talent because Technology will be updated every day.</div>
          </div>

          <q-separator inset />

          <div class="row text-h4 text-weight-bold q-mt-xl">
            <div class="col-12 text-center">Education</div>
          </div>
          <q-timeline :layout="layout" color="green-8">
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
          <q-timeline :layout="layout" color="green-8">
            <template v-for="item in experiences">
              <q-timeline-entry :key="item.companyName" :title="item.companyName" :subtitle="item.timeline">
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
      startWorking: 2015,
      experiences: [
        {
          companyName: 'Informatix Plus Co.,Ltd',
          timeline: 'Sep, 2015 - Sep, 2016 (1 yr 1 mo)',
          jobTitle: 'Web Programmer',
          responsibilities: [
            '• Design database and User interface',
            '• Develop web applications'
          ]
        },
        {
          companyName: 'Taokaenoi Food and Marketing Co.,Ltd',
          timeline: 'Oct, 2016 - Sep, 2018 (2 yrs)',
          jobTitle: 'Applications Developer',
          responsibilities: [
            '• Design database and system from SRS document',
            '• Develop web applications',
            '• Software maintain and testing',
            '• Consult for the team',
            '• Seminar',
            '• Meeting user'
          ]
        },
        {
          companyName: 'Nan Yang Textile Group Co.,Ltd',
          timeline: 'Oct, 2018 - Mar, 2020 (1 yr 6 mos)',
          jobTitle: 'Applications Developer',
          responsibilities: [
            '• Design database and system from SRS document',
            '• Develop web applications from requirement',
            '• Software maintain and testing',
            '• Consult for the team',
            '• System support',
            '• Meeting user'
          ]
        },
        {
          companyName: 'Hosting-Group Co.,Ltd (Chonburi, Thailand)',
          timeline: 'April, 2020 - Present (5 mos)',
          jobTitle: 'Senior Applications Developer',
          responsibilities: [
            '• Develop web applications from requirements',
            '• Develop API service for automatic tasks',
            '• Software maintain and testing',
            '• Write a document development plan',
            '• Consult for the team',
            '• Develop product of company'
          ]
        }
      ],
      technologies: [
        'Javascript JSX (Vue • jQuery • Pure)',
        'C# .Net Standard • .Net Framework • .Net Core',
        'PHP (Slim • Yii2 • CodeIgniter)',
        'Python (Flask)',
        'Oracle • SQL Server • MySQL',
        'Restful Service API',
        'HTML • CSS',
        'Nuget • npm • Composer',
        'Slack • Trello',
        'Git • Azure DevOps'
      ]
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
  }
}
</script>
