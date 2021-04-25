import PIDELO_CONFIG from '@/config'
import axios from 'axios'
const {API_URL} = PIDELO_CONFIG;

export default{
  getDomiciliarios(){
    return axios.get(API_URL + 'employees', {
      headers: {
        'cache-control': "no-cache, private",
        'content-type': "application/json"
      }
    });
  },
  getDomiciliario(domiciliarioId){
    return axios.get(API_URL + `employees/${domiciliarioId}`, {
      headers: {
          'cache-control': "no-cache, private",
          'content-type': "application/json"
        }
      });
  },
}