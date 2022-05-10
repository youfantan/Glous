<template>
  <v-app>
    <v-app-bar
        app
        color="indigo lighten-3"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
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
        <span class="mr-2">view This page in Github</span>
        <v-icon>mdi-open-in-new</v-icon>
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
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
              <v-list-item @click="show(1)">
                <v-list-item-icon>
                  <v-icon>mdi-code-tags</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item>
              <v-list-item @click="show(2)">
                <v-list-item-icon>
                  <v-icon>mdi-file-document</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Articles</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <Home v-show="index===0"></Home>
        <Projects v-show="index===1"></Projects>
        <Articles @loadmdview="loadmdview" v-show="index===2"></Articles>
        <MarkdownViewer v-show="index===3" v-bind:md-src="data"></MarkdownViewer>
      </v-container>
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
    data: ''
  }),
  methods:{
    show(value){
      this.index=value;
      this.drawer=false;
    },
    loadmdview(data){
      this.index=3;
      this.data=data;
    },
  },
  created() {
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