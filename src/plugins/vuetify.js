import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ZhihuSvg from '@/components/zhihu.vue';
import BilbiliSvg from '@/components/bilbili.vue'
import VueResource  from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuetify);

export default new Vuetify({
    theme:{},
    icons:{
        values:{
            zhihuicon:{
                component: ZhihuSvg
            },
            bilibilicon:{
                component: BilbiliSvg
            }
        }
    }
});
