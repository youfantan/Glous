<template>
<v-app>
  <v-list shaped tile flat>
    <v-list-item-group color="cyan">
      <v-list-item
          @click="loadMarkdownView(item.url)"
          v-for="(item, i) in articles_data"
          :key="i"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle>
            {{item.preview}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{item.time}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-app>
</template>

<script>
export default {
  name: "Articles",
  data: () =>({
    articles_data: [
    ]
  }),
  methods:{
    loadMarkdownView(url){
      this.$http.get(url).then((resp)=>{
        this.$emit('loadmdview',resp.data)
      })
    },
    initArticles:function () {
      this.$http.get('articles/articles.json').then((resp)=>{
        const data_articles=resp.data.articles;
        for (let i = 0; i < data_articles.length; i++) {
          const article=data_articles[i];
          this.articles_data[i]={
            title:article.title,
            url:article.url,
            preview:article.description,
            time:article.time
          }
        }
        this.$forceUpdate()
      })

    }
  },
  created() {
    this.initArticles()
  }
}
</script>

<style scoped>

</style>