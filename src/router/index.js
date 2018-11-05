import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DownPayment from '@/components/down-payment'
import Test from '@/components/down-payment.1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/downpayment',
      name: 'DownPayment',
      component: DownPayment
    },
    {
      path: '/test',
      name: 'DownPayment',
      component: Test
    }
  ]
})
