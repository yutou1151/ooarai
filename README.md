# About Project
Ooarai Girls' Academy Project
A Web Project to commemorate GuP

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
Now, We depoly them on WordPress.

### Architecture
`www.ooarai.jp` and `www.ooarai.cn` were serve by Tencent CVM in HongKong, main work is response all http and https request. FOR less delay.

`cdn.ooarai.jp` and `cdn.ooarai.cn` were serve by DigitalOcean Droplet in Singapore, domains are acessed in cdn by KDUN, It's also help to decrese delay and bigger speed.
About web serve, All server used Tengine, A kind of third party `NGINX`.

### API Included
Included a Weather API to Observatory Oarai, Ibaraki, Japan. API by qWeather.

### Futrue
Do not use WordPress or else CMS, font-end rear-end detach. It will be static page.
- html
- css
- js
- vue

