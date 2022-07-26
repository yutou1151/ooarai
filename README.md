# Project
Ooarai Girls' Academy Project
2022-07-26
```
https://www.ooarai.jp/
https://www.ooarai.cn/
https://cdn.ooarai.jp/
https://cdn.ooarai.cn/
```
# Ooarai Girl's Academy

### What is this?
They're a backup and build on our web (https://www.ooarai.jp) and external link call response.
We depoly them on wordpress.

### Architecture
`www.ooarai.jp` and `www.ooarai.cn` were serve by Tencent CVM in HongKong, main work is response all http and https request. FOR less delay.
`cdn.ooarai.jp` and `cdn.ooarai.cn` were serve by DigitalOcean Droplet in Singapore, domains are acessed in cdn by KDUN, It's also help to decrese delay and bigger speed.
About web serve, All server used Tengine, A kind of third party `NGINX`.

### API
Included a Weather API to OBS Oarai, Ibaraki, Japan. API by qWeather.
