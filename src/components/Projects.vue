<template>
<v-app>
  <v-row>
    <v-col cols="8">
      <v-skeleton-loader v-if="loading" :transition="transition" height="400" type="card"></v-skeleton-loader>
      <v-card v-show="!loading">
        <v-img :src="kleebot.background_img_src" height="200px" position="center center" v-show="!loading"></v-img>
        <v-card-title>
          KleeBot
        </v-card-title>
        <v-card-text>
          <h3 class="badge">{{ kleebot.readme }}</h3>
          <img class="badge" src="https://img.shields.io/github/issues/youfantan/KleeBot?style=for-the-badge">
          <img class="badge" src="https://img.shields.io/github/stars/youfantan/KleeBot?style=for-the-badge">
          <img class="badge" src="https://img.shields.io/github/forks/youfantan/KleeBot?style=for-the-badge">
          <img class="badge" src="https://img.shields.io/github/license/youfantan/KleeBot?style=for-the-badge">
          <v-divider></v-divider>
            <v-card outlined>
              <v-card-title>Development Info</v-card-title>
              <v-card-text>
                <v-list shaped tile flat>
                  <v-list-item-group color="teal">
                    <v-list-item
                        :key='i'
                        v-for="(info,i) in kleebot.buildInfo"
                    >
                      <v-list-item-content v-if="info">
                        <v-list-item-title v-text="info.key"></v-list-item-title>
                        <v-list-item-subtitle v-text="info.value"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>
        </v-card-text>
        <v-card-actions>
          <v-btn icon :href=kleebot.build_url>
            <v-icon>build</v-icon>
          </v-btn>
          <v-btn icon :href=kleebot.clone_url>
            <v-icon>content_copy</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-app>
</template>

<script>
export default {
  name: "Projects",
  data: () =>({
    loading: true,
    transition: 'scale-transition',
    kleebot:{
      background_img_src:'',
      clone_url: '',
      build_url: '',
      readme: 'KleeBot是一个使用Java及C++混合编写的，适用于QQ的机器人。',
      buildInfo: []
    }
  }),
  methods:{
    initInfo:async function () {
      await this.$http.get('https://static-1258092949.cos.ap-nanjing.myqcloud.com/image/kleebot.b64').then(async (resp)=>{
        this.kleebot.background_img_src='data:image/jpg;base64,'+await resp.data;
      })
    },
    asyncInit:async function(){
      await this.$http.get('https://api.github.com/repos/youfantan/KleeBot').then(async (resp)=>{
        let json=await resp.data;
        this.kleebot.buildInfo[0]={
          key:"Language",
          value:json.language
        }
        this.kleebot.buildInfo[1]={
          key:"Default Branch",
          value:json.default_branch
        }
        this.kleebot.buildInfo[3]={
          key:"Clone Url",
          value:json.clone_url
        }
        this.kleebot.clone_url=json.clone_url
      })
      await this.$http.get('https://api.github.com/repos/youfantan/KleeBot/commits').then(async (resp)=>{
        let json=await resp.data;
        this.kleebot.buildInfo[2]={
          key:"Latest Commit",
          value:json[0].sha
        }
        this.kleebot.build_url="https://github.com/youfantan/KleeBot/actions"
      })
    }
  },
  async created() {
    this.asyncInit();
    await this.initInfo();
    this.loading=false;
  }
}
</script>

<style scoped>
.badge{
  margin-right: 20px;
}
</style>