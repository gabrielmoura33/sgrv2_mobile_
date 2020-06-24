import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sgr.hinova.com.br/sgr/',
}, {
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*', 
    'Content-Type': 'application/www-form-urlencoded',
    Cookie: 'PHPSESSID=gvgknl16hctf7cjni2l1d47dp5; Path=/; Domain=sgr.hinova.com.br;laravel_session=eyJpdiI6ImFkNCsxWU0yOWdSY0MwVVNoNm9jK3c9PSIsInZhbHVlIjoiVTVIblJUUkxqdTlyWVVvWmFQekpSdGQwY280eDJXRWNsVGVlTEpiNmk3UmdOaHp4RkoxNHZkUFF5azB0XC83dE5sZ2NiUTAyRFZ2cXVJQTVMM1pIY1J3PT0iLCJtYWMiOiI1NWMwOWU4NjdhNThiOTA3NzI3ZmVkMGZmMDg4NmEwNzc0ZjgyNmFmMTY3YmNjNTZjOTJhZTZmZDU1ODM4N2FhIn0%3D; Expires=Tue, 23 Jun 2020 19:43:24 GMT; Max-Age=14400; Path=/; HttpOnly; Domain=sgr.hinova.com.br'
  }
});

export default api;
