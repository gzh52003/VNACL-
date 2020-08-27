import axios from 'axios';
// import { url } from 'inspector';
// import { config } from 'process';

// 上线时要做的事：改地址：
// const baseURL = process.env.NODE_EVN === 'production' ? 'http://线上地址' : 'http://localhost:2003/api'


const request = axios.create({
    baseURL:'http://localhost:2003/api'
    // baseURL:baceUrl +'/api'
});


// export const nsg = axios.create({
//     baseURL:'http://www.nsg.com'
// });

// axios.get(url,config)
// axios.poat(url,data,config)

export default request;