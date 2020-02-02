<template>
  <div class="portfolio">
    <template v-if="$q.screen.xs || $q.screen.sm">
      <div class="col-12 text-center">
        <q-avatar size="120px" rounded class="q-mt-md">
          <q-img
            :src="require('@/assets/4.jpg')"
            style="height:100%;width:100%"
            no-default-spinner
          />
        </q-avatar>
      </div>
      <div class="col-12 q-mt-md">
        <q-scroll-area :style="screenHeight">
          <div class="q-my-md q-mx-lg">
            <div class="row text-h4 q-mb-sm text-weight-bold">Myself</div>
            <div class="row text-body2">
              <div class="col-12 q-mb-xs">Hello, My name is Jirakit Wattanapraphakorn (Jame)</div>
              <div class="col-12 q-mb-xs">I'm 26 years old</div>
              <div class="col-12 q-mb-xs">Born in Thailand at Sunday, May 23, 1993</div>
              <div class="col-12">Live in Bangkok, Thailand</div>
            </div>

            <div class="row text-h4 text-weight-bold q-mt-xl">Works Experience</div>
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

            <div class="row text-h4 text-weight-bold q-mt-xl">Educations</div>
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

            <div class="row text-h4 text-weight-bold q-mt-xl">Languages</div>
            <q-chip class="glossy" square color="positive" text-color="white">
              Thai (Native)
            </q-chip>
            <q-chip class="glossy" square color="orange" text-color="white">
              English (Intermediate)
            </q-chip>

            <div class="row text-h4 text-weight-bold q-mt-xl">Skills</div>
            <q-chip class="glossy" square color="dark" text-color="white">
              Javascript (vue, react, jquery, pure)
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
              PHP 5.x, 7.x
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
              C# .net
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            HTML
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            CSS
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Oracle
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            SQL Server
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            MySQL
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Python
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Slack
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Trello
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Github
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Bitbucker
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Nodejs
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Docker
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            npm
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Composer
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Restful API Service
            </q-chip>

            <div class="row text-h4 text-weight-bold q-mt-xl">Interests</div>
            <q-chip class="glossy" square color="dark" text-color="white">
              Musics
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
              Games
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
              Travel
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Concert
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Learning
            </q-chip>
            <q-chip class="glossy" square color="dark" text-color="white">
            Technology
            </q-chip>

            <div class="row text-h4 text-weight-bold q-mt-xl">Contact</div>
            <div class="text-body2 q-mt-sm">
              <q-icon name="fab fa-facebook fa-2x"></q-icon>
              <q-btn class="text-capitalize q-ml-xs" target="_blank" flat type="a" href="https://www.facebook.com/j4m3j4m3" label="Jame Jirakit" />
            </div>
            <div class="text-body2 q-mt-sm">
              <q-icon name="fab fa-instagram fa-2x"></q-icon>
              <q-btn class="text-lowercase q-ml-xs" target="_blank" flat type="a" href="https://www.instagram.com/jjinjjen" label="@jjinjjen" />
            </div>
            <div class="text-body2 q-mt-sm">
              <q-icon name="fab fa-line fa-2x"></q-icon>
              <q-btn class="text-lowercase q-ml-xs" target="_blank" flat type="a" href="http://line.me/ti/p/~mrj4m3" label="mrj4m3" />
            </div>
            <div class="text-body2 q-mt-sm">
              <q-icon name="fas fa-phone fa-2x"></q-icon>
              <q-btn class="text-lowercase q-ml-xs" target="_blank" flat type="a" href="tel:+66855529296" label="(+66)855529296" />
            </div>
          </div>
        </q-scroll-area>
      </div>
    </template>
    <template v-else>
      <div class="row items-center text-weight-regular">
        <div class="items-center col-6 text-center" :style="screenHeight">
          <q-img
            :src="require('@/assets/4.jpg')"
            style="height:100%;width:100%"
            no-default-spinner
          />
        </div>
        <div class="col-6">
          <q-scroll-area :style="screenHeight">
            <div class="q-my-md q-mx-lg">
              <div class="row text-h4 q-mb-sm text-weight-bold">Myself</div>
              <div class="row text-body2">
                <div class="col-12 q-mb-xs">Hello, My name is Jirakit Wattanapraphakorn (Jame)</div>
                <div class="col-12 q-mb-xs">I'm 26 years old</div>
                <div class="col-12 q-mb-xs">Born in Thailand at Sunday, May 23, 1993</div>
                <div class="col-12">Live in Bangkok, Thailand</div>
              </div>

              <div class="row text-h4 text-weight-bold q-mt-xl">Works Experience</div>
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

              <div class="row text-h4 text-weight-bold q-mt-xl">Educations</div>
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

              <div class="row text-h4 text-weight-bold q-mt-xl">Languages</div>
              <q-chip class="glossy" square color="positive" text-color="white">
                Thai (Native)
              </q-chip>
              <q-chip class="glossy" square color="orange" text-color="white">
                English (Intermediate)
              </q-chip>

              <div class="row text-h4 text-weight-bold q-mt-xl">Skills</div>
              <q-chip class="glossy" square color="dark" text-color="white">
                Javascript (vue, react, jquery, pure)
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
                PHP 5.x, 7.x
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
                C# .net
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              HTML
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              CSS
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Oracle
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              SQL Server
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              MySQL
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Python
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Slack
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Trello
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Github
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Bitbucker
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Nodejs
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Docker
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              npm
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Composer
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Restful API Service
              </q-chip>

              <div class="row text-h4 text-weight-bold q-mt-xl">Interests</div>
              <q-chip class="glossy" square color="dark" text-color="white">
                Musics
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
                Games
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
                Travel
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Concert
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Learning
              </q-chip>
              <q-chip class="glossy" square color="dark" text-color="white">
              Technology
              </q-chip>

              <div class="row text-h4 text-weight-bold q-mt-xl">Contact</div>
              <div class="text-body2 q-mt-sm">
                <q-icon name="fab fa-facebook fa-2x"></q-icon>
                <q-btn class="text-capitalize q-ml-xs" target="_blank" flat type="a" href="https://www.facebook.com/j4m3j4m3" label="Jame Jirakit" />
              </div>
              <div class="text-body2 q-mt-sm">
                <q-icon name="fab fa-instagram fa-2x"></q-icon>
                <q-btn class="text-lowercase q-ml-xs" target="_blank" flat type="a" href="https://www.instagram.com/jjinjjen" label="@jjinjjen" />
              </div>
              <div class="text-body2 q-mt-sm">
                <q-icon name="fab fa-line fa-2x"></q-icon>
                <q-btn class="text-lowercase q-ml-xs" target="_blank" flat type="a" href="http://line.me/ti/p/~mrj4m3" label="mrj4m3" />
              </div>
              <div class="text-body2 q-mt-sm">
                <q-icon name="fas fa-phone fa-2x"></q-icon>
                <q-btn class="text-lowercase q-ml-xs" target="_blank" flat type="a" href="tel:+66855529296" label="(+66)855529296" />
              </div>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
    }
  },
  computed: {
    screenHeight () {
      return {
        'height': `${this.$q.screen.height - 160}px`
      }
    }
  }
}
</script>
