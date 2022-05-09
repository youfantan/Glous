<template>
  <v-row dense>
    <v-col cols="4">
      <v-card
          outlined
      >
        <v-img
            src="https://proxy.glous.xyz/image/img-original/img/2022/04/20/04/21/54/97748736_p0.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
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
            <v-icon>mdi-github</v-icon>
          </v-btn>

          <v-btn icon href="https://www.zhihu.com/people/shan-dian-ku-li-she" target="_blank">
            <v-icon>$vuetify.icons.zhihuicon</v-icon>
          </v-btn>

          <v-btn icon href="https://space.bilibili.com/344835892?spm_id_from=333.1007.0.0" target="_blank">
            <v-icon>$vuetify.icons.bilibilicon</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="s6">
      <v-card>
        <v-card-title>About Me</v-card-title>
        <v-card-text>
          <h3 style="margin-top: 20px">👋Spare developer.Interested in develop works about Genshin Impact, Minecraft.</h3>
          <h3 style="margin-top: 20px">✍️This site will record some of my develop activities.For more information,please visit my github account.Most of my personal projects are hosted in github.</h3>
          <h3 style="margin-top: 20px">⌨️The language I am most familiar with is Java but I'm still a junior developer of Java</h3>
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
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>