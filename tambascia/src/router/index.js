import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import En from '@/components/Containers/En.vue';
import ppalEn from '@/components/co-ppalEn.vue';
import chooseLanguage from '@/components/co-chooseLanguage.vue';
import categoriesEn from '@/components/co-articlesByCategoryEn.vue';
import notFoundEn from '@/components/co-notFoundEn.vue'
import oneArticleEn from '@/components/co-oneArticleEn.vue';
import search from '@/components/co-search.vue';
import myWeather from '@/components/co-myWeather.vue';
import forecastByLL from '@/components/co-forecastByLL.vue'

Vue.use(VueRouter);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chooseLanguage',
      component: chooseLanguage,
    },
    {
      path: '/en/',
      name: 'En',
      component: En,
      redirect: { name: 'ppalEn' },
      children: [
        {
          path: 'ppal',
          name: 'ppalEn',
          component: ppalEn
        },
        {
          path: 'category/:id',
          name: 'categoriesEn',
          component: categoriesEn
        },
        {
          path: 'article/:id',
          name: 'oneArticleEn',
          component: oneArticleEn
        },
        {
          path: 'search',
          name: 'search',
          component: search
        },
        {
          path: 'myWeather',
          name: 'myWeather',
          component: myWeather
        },
        {
          path: 'forecastByLL',
          name: 'forecastByLL',
          component: forecastByLL
        }
      ]
    },
    {
      path: '/de/',
      //component: ppalDe
    },
    {
      path: '/*',
      name: 'notFoundEn',
      component: notFoundEn
    },
    {
      path: '/*',
      name: 'notFoundRedirect',
      redirect: '/#/notFound'
    }
  ]
})
