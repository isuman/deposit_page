import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)

const URL = 'http://venus.nopadol.com'

export default {
  loginAX (user, pwd, success, error) {
    Vue.axios.get(URL + ':9000/login?access_token=aaaa&usercode=' + user + '&password=' + pwd + '&appid=6').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  }
}