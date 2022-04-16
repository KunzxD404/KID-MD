const axios = require('axios')
const cheerio = require('cheerio')

function wallpaper(title, page = '1') {
return new Promise((resolve, reject) => {
axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('div.grid-item').each(function (a, b) {
hasil.push({
title: $(b).find('div.info > a > h3').text(),
type: $(b).find('div.info > a:nth-child(2)').text(),
image: $(b).find('img').attr('data-src')
})
})
resolve(hasil)
})
})
}

function wikimedia(title) {
return new Promise((resolve, reject) => {
axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
.then((res) => {
let $ = cheerio.load(res.data)
let hasil = []
$('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
hasil.push({
title: $(b).find('img').attr('alt'),
source: $(b).attr('href'),
image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
})
})
resolve(hasil)
})
})
}

function porno() {
return new Promise((resolve, reject) => {
axios.get('https://tikporntok.com/?random=1')
.then((res) => {
const $ = cheerio.load(res.data)
const hasil = {}
hasil.title = $('article > h1').text()
hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
hasil.desc = $('article > div.intro').text()
hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
hasil.tags = $('article > div.post-tags').text()
hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
resolve(hasil)
})
})
}

function quotesAnime() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 184)
axios.get('https://otakotaku.com/quote/feed/'+page)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('div.kotodama-list').each(function(l, h) {
hasil.push({
link: $(h).find('a').attr('href'),
gambar: $(h).find('img').attr('data-src'),
karakter: $(h).find('div.char-name').text().trim(),
anime: $(h).find('div.anime-title').text().trim(),
episode: $(h).find('div.meta').text(),
up_at: $(h).find('small.meta').text(),
quotes: $(h).find('div.quote').text().trim()
})
})
resolve(hasil)
}).catch(reject)
})
}

const jadwalbola = () => {
return new Promise((resolve, reject) => {
axios.get('https://m.bola.net/jadwal_televisi/')
.then(({
data
}) => {
const $ = cheerio.load(data)
const hasil = [];
$('#main_mid_headline_sub_topic').each(function(a, b) {
result = {
status: 200,
author: "#𝑿𝑭𝒂𝒓",
jadwal: $(b).find(' > div.main_mid_headline_topic > div > a').text(),
tanggal: $(b).find(' > div.main_mid_headline_topic_grouped_time_list').text().split('\n')[1].split('                            ')[1],
jam: $(b).find(' > div.main_mid_headline_topic > span').text(),
url: $(b).find(' > div.main_mid_headline_topic > div > a').attr('href'),
thumb: $(b).find(' > div.main_mid_headline_topic > img').attr('src')
}
hasil.push(result)
})
resolve(hasil)
})            
.catch(reject)
})
}

const jadwaltv = () => {
return new Promise((resolve, reject) => {
axios.get('http://www.dokitv.com/jadwal-acara-tv')
.then(({
data
}) => {
const $ = cheerio.load(data)
const hasil = [];
$('#tabeljadwaltv > tbody > tr ').each(function(a, b) {
result = {
status: 200,
author: "#𝑿𝑭𝒂𝒓",
acara: $(b).find('> td:nth-child(2)').text(),
channel: $(b).find('> td > a').text(),
jam: $(b).find('> td.jfx').text(),
source: $(b).find('> td > a').attr('href')
}
hasil.push(result)
})
resolve(hasil)
})
.catch(reject)
})
}
const jadwalsholat = (query) => {
return new Promise((resolve, reject) => {
axios.get(`https://umrotix.com/jadwal-sholat/${query}`)
.then(({
data
}) => {
const $ = cheerio.load(data)
$('body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ').each(function(a, b) {   
result = {
status: 200,
author: "#𝑿𝑭𝒂𝒓",
tanggal: $(b).find('> div:nth-child(2)').text(),
imsyak: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)').text(),
subuh: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)').text(),
dzuhur: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)').text(),
ashar: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)').text(),
maghrib: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)').text(),
isya: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)').text()
}
resolve(result)
})
})
.catch(reject)
})
}

const youtube = (link) => {
return new Promise((resolve, reject) => {
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
if (ytIdRegex.test(link)) {
let url =  ytIdRegex.exec(link)
let config = {
'url': 'https://www.youtube.be/' + url,
'q_auto': 0,
'ajax': 1
}
let headerss = 	{
"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"Cookie": 'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}'
}
axios('https://www.y2mate.com/mates/en68/analyze/ajax',{
method: 'POST',
data: new URLSearchParams(Object.entries(config)),
headers: headerss
})
.then(({ data }) => {
const $ = cheerio.load(data.result)
let img = $('div.thumbnail.cover > a > img').attr('src');
let title = $('div.thumbnail.cover > div > b').text();
let size = $('#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
let size_mp3 = $('#audio > table > tbody > tr:nth-child(1) > td:nth-child(2)').text()
let id = /var k__id = "(.*?)"/.exec(data.result)[1]
let configs = {
type: 'youtube',
_id: id,
v_id: url[1],
ajax: '1',
token: '',
ftype: 'mp4',
fquality: 480
  }
axios('https://www.y2mate.com/mates/en68/convert',{
method: 'POST',
data: new URLSearchParams(Object.entries(configs)),
headers: headerss 
})
.then(({data}) => {
const $ = cheerio.load(data.result)
let link = $('div > a').attr('href')
let configss = {
type: 'youtube',
_id: id,
v_id: url[1],
ajax: '1',
token: '',
ftype: 'mp3',
fquality: 128
  }
axios('https://www.y2mate.com/mates/en68/convert',{
method: 'POST',
data: new URLSearchParams(Object.entries(configss)),
headers: headerss 
})
.then(({ data }) => {
const $ = cheerio.load(data.result)
let audio = $('div > a').attr('href')
resolve({
id: url[1],
title: title,
size: size,
quality: '480p',
thumb: img,
link: link,
size_mp3: size_mp3,
mp3: audio
})

})
})
})
.catch(reject)
}else reject('link invalid')
})
}

const igstalk = (query) => {
return new Promise((resolve,reject) => {
axios.get('https://www.instagram.com/'+ query +'/?__a=1',{
method: 'GET',
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
"cookie": "mid=XBXl1AALAAEbFoAEfNjZlMMG9dwX; ig_did=91E66A48-5AA2-445D-BFE6-84DC4456DE8F; fbm_124024574287414=base_domain=.instagram.com; ig_nrcb=1; shbid=\"12737\0544008624962\0541656157971:01f72a5102dc07af6845adf923ca70eb86e81ab95fa9dbfdaf157c9eef0e82fd1f10fe23\"; shbts=\"1624621971\0544008624962\0541656157971:01f74841fba8e77a0066b47ea891dec8fba6fdf9216c0816f9fb3532292f769828800ae2\"; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; csrftoken=PpiPMEl0R2pAwThsw4NXynO6cVIXHZDo; ds_user_id=38316792800; sessionid=38316792800:rQj5Tr3g5zkg7b:4; rur=\"RVA\05438316792800\0541656158332:01f759cf624bef147397144805bb4c26f6c8b36a232e0f5738c570ee492f6b629f84f6e5\""
}
})
.then(({ data }) => {
const user = data.graphql.user
let result = {
id: user.id,
biography: user.biography,
followers: user.edge_followed_by.count,
following: user.edge_follow.count,
fullname: user.full_name,
highlightCount: user.highlight_reel_count,
isBusinessAccount: user.is_business_account,
isRecentUser: user.is_joined_recently,
accountCategory: user.business_category_name,
linkedFacebookPage: user.connected_fb_page,
isPrivate: user.is_private,
isVerified: user.is_verified,
profilePicHD: user.profile_pic_url_hd,
username: user.username,
posts: user.edge_owner_to_timeline_media.count
}
resolve(result)
})
.catch(reject)
})
}

const dl = (url) => {
return new Promise(async (resolve, reject) => {
let host = 'https://aiovideodl.ml/'
let form = { data: { 'url': url, 'token': (await _token(host)) } }
axios.post(host + 'wp-json/aio-dl/video-data/', qs.stringify(form.data), { headers: is.headers })
.then(({ data }) => {
if (data == 'error') return resolve({ message: 'Error!' })
resolve(data)
console.log(data)
})
})
}

const mediafire = (url) => {
const res = axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}

module.exports = { wallpaper, wikimedia, porno, quotesAnime , jadwalbola, jadwaltv, jadwalsholat, youtube, igstalk, mediafire}