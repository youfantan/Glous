<template>
  <v-app>
    <v-app-bar
        app
        color="indigo lighten-3"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"><v-icon>menu</v-icon></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <h1
            style="margin-left: 20px"
        >Glous</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
          href="https://github.com/youfantan/youfantan.github.io"
          target="_blank"
          text
      >
        <span class="mr-2">View This page in Github</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>
      <v-container fluid style="margin-top: 70px">
        <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
            overlay-opacity="0.3"
        >
          <v-list
              nav
              dense
          >
            <v-list-item-group
                active-class="indigo lighten-4 text--accent-4"
            >
              <v-list-item @click="show(0)">
                <v-list-item-icon>
                  <v-icon>home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
              <v-list-item @click="show(1)">
                <v-list-item-icon>
                  <v-icon>code</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item>
              <v-list-item @click="show(2)">
                <v-list-item-icon>
                  <v-icon>article</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Articles</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <Home @loadmdview="loadmdview" v-if="index===0"></Home>
        <Projects  v-if="index===1"></Projects>
        <Articles @loadmdview="loadmdview" v-if="index===2"></Articles>
        <MarkdownViewer v-bind:style="{minHeight: min_height+'px'}" v-if="index===3" v-bind:md-src="data"></MarkdownViewer>
      </v-container>
    <v-footer
        color="blue-grey darken-4"
        padless
    >
      <v-row
          justify="space-around"
          no-gutters
          style="margin-bottom: 30px"
      >
        <v-col
            class=" py-4 text-center white--text"
            cols="12"
        >
          <v-btn icon color="white" target="_blank" href="https://github.com/youfantan">
            <v-icon>$githubicon</v-icon>
          </v-btn>
          <v-btn icon color="white" target="_blank" href="https://twitter.com/shandiankulishe">
            <v-icon>$twittericon</v-icon>
          </v-btn>
          <v-btn icon color="white" target="_blank" href="https://discord.gg/CuWGwqEWgv">
            <v-icon>$discordicon</v-icon>
          </v-btn>
          <div style="margin-top: 30px;">
            &copy; {{ new Date().getFullYear() }} — <strong>Glous.xyz</strong>
          </div>
          <div>
            Powered By Vue.js and Vuetify.js
          </div>
          <div style="margin-top: 20px">
            <a target="_blank" class="grey--text" style="text-decoration: none;" href="http://www.freecdn.pw/?zzwz" title="免费云加速（FreeCDN），为您免费提供网站加速和网站防御（DDOS、CC攻击）" alt="免费云加速（FreeCDN），为您免费提供网站加速和网站防御（DDOS、CC攻击）">本站由免费云加速（FreeCDN）提供网站加速和攻击防御服务</a>  ·
            <a target="_blank" class="grey--text" style="text-decoration: none;" href="https://www.github.com/">Static resources hosted by Github Pages</a>  ·
            <a target="_blank" class="grey--text" style="text-decoration: none;" href="https://www.vercel.com/">Oversea CDN acceleration by Vercel</a>  ·
            <a target="_blank" class="grey--text" style="text-decoration: none;" href="https://www.cloudflare.com/">DDoS Protection by Cloudflare</a>
          </div>
          <div>
          </div>
          <div>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import MarkdownViewer from "./components/MarkdownViewer";
export default {
  name: 'App',

  components: {
    Projects,
    Home,
    Articles,
    MarkdownViewer
  },

  data: () => ({
    drawer: false,
    index: 0,
    data: '',
    min_height: ''
  }),
  methods:{
    show(value){
      this.index=value;
      this.drawer=false;
    },
    loadmdview(data){
      console.log('Markdown View Prepared')
      this.index=3;
      this.data=data;
    },
  },
  created() {
    const build_info=require('./assets/build_info.json');
    console.log('  ________.__                       \n' +
        ' /  _____/|  |   ____  __ __  ______\n' +
        '/   \\  ___|  |  /  _ \\|  |  \\/  ___/\n' +
        '\\    \\_\\  \\  |_(  <_> )  |  /\\___ \\ \n' +
        ' \\______  /____/\\____/|____//____  >\n' +
        '        \\/                       \\/ ')
    console.log('Build ID      : '+build_info.commit_id)
    console.log('Build Time    : '+build_info.time)
    console.log('Build Version : '+build_info.version)
    console.log('Build On OS   : '+build_info.os)
    console.log('Build On Arch : '+build_info.arch)
    this.min_height = document.documentElement.clientHeight - 150;
    window.onresize = ()=> {this.min_height = document.documentElement.clientHeight -150}
  }
};
</script>
<style lang="scss">
body{
  #app{
    font-family: "Ubuntu","Noto Sans SC",sans-serif;
  }
}
</style>