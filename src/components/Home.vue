<template>
  <div>
    <v-row dense>
      <v-col cols="4">
        <v-card
            outlined
        >
          <v-skeleton-loader
              v-if="loading"
              :transition="transition"
              height="400"
              type="card"
          >
          </v-skeleton-loader>
          <v-img
              :src="avatar_src"
              v-show="!loading"
              class="grey-text align-end"
              height="400px"
          >
            <v-card-title>Glous</v-card-title>
            <v-card-text class="text--white">
              <div>业余开发者，初中学生。</div>
              <div>Spare Developer.Junior school student.</div>
            </v-card-text>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon href="https://github.com/youfantan" target="_blank">
              <v-icon>$vuetify.icons.githubicon</v-icon>
            </v-btn>

            <v-btn icon href="https://www.zhihu.com/people/shan-dian-ku-li-she" target="_blank">
              <v-icon>$vuetify.icons.zhihuicon</v-icon>
            </v-btn>

            <v-btn icon href="https://space.bilibili.com/344835892?spm_id_from=333.1007.0.0" target="_blank">
              <v-icon>$vuetify.icons.bilibilicon</v-icon>
            </v-btn>
            <v-btn icon >
              <v-icon class="material-symbols-outlined">
                rss_feed
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-skeleton-loader
            v-if="!article.loaded"
            :transition="transition"
            height="200"
            type="card"
        >
        </v-skeleton-loader>
        <v-card style="margin-top: 20px" @click="loadArticle" v-if="article.loaded">
          <v-card-title>
              推荐文章 | Daily Article
          </v-card-title>
          <v-card-subtitle>
            {{article.title}}
          </v-card-subtitle>
          <v-card-text>
            <p>{{article.description}}</p>
            <strong>阅读本文约需要 {{article.time_cost}} | 本文上传于 {{article.time}}</strong>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="s6">
        <v-card>
          <v-card-title>About Me</v-card-title>
          <v-card-text>
            <h3 style="margin-top: 20px">👋Spare developer.Interested in develop works about Genshin Impact, Minecraft.</h3>
            <h3 style="margin-top: 20px">✍️This site will record some of my develop activities.For more information,please visit my github account.Most of my personal projects are hosted in github.</h3>
            <h3 style="margin-top: 20px">⌨️The language I am most familiar with is Java but I'm still a junior developer of Java.</h3>
            <h3 style="margin-top: 20px">📄You can click the app bar to switch the pages.Now this site have page of Projects and Pages.</h3>
            <h3 style="margin-top: 20px">🏳️I'm developing KleeBot recently.KleeBot is a QQ bot that can post information of Genshin, Minecraft, Pixiv, Bilibili etc.The project is based on Mirai.</h3>
          </v-card-text>
        </v-card>
        <v-card style="margin-top: 20px">
          <v-card-title>关于我</v-card-title>
          <v-card-text>
            <h3 style="margin-top: 20px">👋业余开发者，对有关原神、Minecraft的开发感兴趣。</h3>
            <h3 style="margin-top: 20px">✍️这个网站将记录我的许多开发活动。对于更多信息，请在我的Github上查看。我的大多数项目都托管在Github。</h3>
            <h3 style="margin-top: 20px">⌨️我最熟悉的语言是Java，但我仍然是初学者。</h3>
            <h3 style="margin-top: 20px">📄你可以点击这个页面的应用栏以切换到其他页面。现在这个站点有关于我的项目和文章的页面。</h3>
            <h3 style="margin-top: 20px">🏳️我最近在开发KleeBot。KleeBot是一个可以推送有关原神、Minecraft、Pixiv、B站等的消息的QQ机器人。它基于Mirai项目开发。</h3>
            <h3></h3>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "Home",
  data:()=>({
    loading: true,
    transition: 'scale-transition',
    avatar_src: '',
    article:{
      loaded: false,
      url: '',
      title: '',
      time: '',
      time_cost: '',
      description: ''
    }
  }),
  methods:{
    arrayBufferToBase64 (buffer) {
      let binary = '';
      const bytes = new Uint8Array(buffer);
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i])
      }
      return window.btoa(binary)
    },
    init() {
      const chosen = Math.floor(Math.random() * 4);
      const url = "./image/" + chosen + ".b64";
      this.$http.get(url)
          .then(response => {
            this.avatar_src='data:image/jpg;base64,'+response.data
            this.loading=false;
      })
      this.$http.get('articles/articles.json').then((resp)=>{
        const data_articles=resp.data.articles;
        console.log(data_articles)
        const article_chosen=data_articles[Math.floor(Math.random()*data_articles.length)];
        this.article={
          loaded: true,
          url: article_chosen.url,
          title: article_chosen.title,
          time: article_chosen.time,
          time_cost: article_chosen.time_cost,
          description: article_chosen.description
        }
        this.$forceUpdate()
      })
    },
    loadArticle(){
      this.$http.get(this.article.url).then((resp)=>{
        this.$emit('loadmdview',resp.data)
      })
    }
  },
  created() {
    this.init()
  }
}
</script>

<style>
.material-symbols-outlined {
  font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 48
}
</style>