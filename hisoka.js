require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const xfar = require('xfarr-api')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const hxz = require("hxz-api");
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { wallpaper, wikimedia, quotesAnime, jadwalbola, jadwaltv, jadwalsholat } = require('./lib/scraper')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const { addBalance, kurangBalance, getBalance} = require("./lib/balance");
const { addEmas, sellEmas, getEmas, addDiamond, sellDiamond, getDiamond, addBesi, sellBesi, getBesi, addKayu, sellKayu, getKayu, addDaun, sellDaun, getDaun, addSampah, sellSampah, getSampah, addMonyet, sellMonyet, getMonyet, addGorilla, sellGorilla, getGorilla, addAnjing, sellAnjing, getAnjing, addHarimau, addMacan, addKuda, addZebra, addRusa, addKerbau, addSapi, addBabi, addGaruda, addDomba, addKelelawar, sellHarimau, sellMacan, sellKuda, sellZebra, sellRusa, sellKerbau, sellSapi, sellBabi, sellGaruda, sellDomba, sellKelelawar, checkPetualangUser, addInventory, addIkan, sellIkan, getIkan } = require('./lib/rpgfunction')
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

global.db = JSON.parse(fs.readFileSync('./dataB/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let tebakbendera = db.game.tebakbendera = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
let balance = JSON.parse(fs.readFileSync('./dataB/balance.json'));
let _RPG = JSON.parse(fs.readFileSync('./dataB/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./dataB/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./dataB/inventori.json'))
let vo = JSON.parse(fs.readFileSync('./dataB/viewonce.json'))
let daftaruser = JSON.parse(fs.readFileSync('./dataB/User.json'))

module.exports = hisoka = async (hisoka, m, chatUpdate) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const isCreator = [hisoka.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == hisoka.user.id ? true : false
const text = q = args.join(" ")
const from = m.key.remoteJid
const sender = mek.key.fromMe // Fix Bug by Pebri
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isVO = m.isGroup ? vo.includes(from) : false
const isUser = daftaruser.includes(m.sender)
const limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
const isPetualang = checkPetualangUser(m.sender)
const createMessage = async (jidnya, kontennya, optionnya) => {
return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: hisoka.authState.creds.me.id,upload: hisoka.waUploadToServer})}
const reply = (teks) => { hisoka.sendMessage(from, teks, text, {quoted:m})}
const mentions = (teks, memberr, id) => { (id == null || id == undefined || id == false) ? hisoka.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hisoka.sendMessage(from, teks.trim(), extendedText, { quoted: m, contextInfo: { "mentionedJid": memberr } })}
const sendFileFromUrl = async (from, url, caption, mek, men) => {
const sendMess = (from, teks) => {
return hisoka.sendMessage(from, { text: teks })}
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return hisoka.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
}
if(mime.split("/")[0] === "image"){
return hisoka.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
}
if(mime.split("/")[0] === "video"){
return hisoka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
if(mime.split("/")[0] === "audio"){
return hisoka.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mp4'}, {quoted: m })
}
}
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}
if (!hisoka.public) {
if (!m.key.fromMe) return
}
if (isCmd && !isUser) {
daftaruser.push(m.sender)
fs.writeFileSync('./dataB/user.json', JSON.stringify(daftaruser, null, 2))
}
if (m.message) {
hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.users[m.sender].limit -= 1 // -1 limit
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: hisoka.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
hisoka.ev.emit('messages.upsert', msg)
}
async function sendPlay(from, query) {
var url = await yts(query)
url = url.videos[0].url
hxz.youtube(url).then(async(data) => {
const buttonsDefault = [
{ urlButton: { displayText: `🔗 Url Youtube`, url : `https://youtu.be/${data.id}` } },
{ quickReplyButton: { displayText: `🎥 Video`, id: `${prefix}ytmp4 ${url}` } },
{ quickReplyButton: { displayText: `🎵 Audio`, id: `${prefix}ytmp3 ${url}` } },
{ quickReplyButton: { displayText: `🔍 YT-Search`, id: `${prefix}yts ${q}` } },
]
var teks = `*Judul :* *${data.title}*\n*Size mp4 :* *${data.size}*\n*Size mp3 :* *${data.size_mp3}*`
hisoka.sendMessage(from, { caption: teks, location: { jpegThumbnail: await getBuffer(data.thumb) }, templateButtons: buttonsDefault, footer: `${namebot}`, mentions: [m.sender] })
}).catch((e) => {
hisoka.sendMessage(from, { text: mess.error.api }, { quoted: m })
owner.map( i => hisoka.sendMessage(from, { text: `Send Play Error : ${e}` }))
})
}
const sendButton5 = async (id, text1, desc1, yo) => {
var buatpesan = await generateWAMessageFromContent(from, {
"templateMessage": {
"hydratedTemplate": {
...yo.message,
"hydratedContentText": text1,
"hydratedFooterText": desc1,
"hydratedButtons": [
{
"urlButton": {
"displayText": "My Group",
"url": "https://chat.whatsapp.com/GDZOBuMkFSCKw6mzDUDoPd"
}
},
{
"urlButton": {
"displayText": "My Youtube",
"url": "https://youtube.com/channel/UCUzeU3gvoQPV1joakMUOTtg"
}
},
{
"quickReplyButton": {
"displayText": "Status Bot",
"id": `${prefix}botstatus`
}
},
{
"quickReplyButton": {
"displayText": "Owner",
"id": `${prefix}owner`,
}
},
{
"quickReplyButton": {
"displayText": "Script",
"id": `${prefix}sc`
}
}
]
}
}
}, {})
hisoka.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${namebot}`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${namebot}`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${namebot}`, m)
delete tebakbendera[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${namebot}`, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, `${namebot}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${namebot}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${namebot}`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${namebot}`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
let buttonspetualang = [{buttonId: `.joinrpg`, buttonText: {displayText: 'Mulai Petualang'}, type: 1}]
let buttonpetualang = {
text: `Maaf kak *${pushname}*, anda bukan seorang petualang!!\nUntuk menjadi petualang silahkan ketik :\nJoinrpg`,
footer: 'klik tombol dibawah untuk jadi petalang',
buttons: buttonspetualang,
headerType: 2
}
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
function monospace(string) {
return '```' + string + '```'
}
var premi = 'No Premium User'
if (isPremium) {
premi = 'Premiun User'
} 
if (isCreator) {
premi = 'This Is Owner'
}
var elit = 'Petualang Biasa'
if (isPremium) {
elit = 'Petualang Pro'
} 
if (isCreator) {
elit = 'GM in GAME'
}
const levelRole = getLevelingLevel(m.sender)
var role = 'Bronze 1'
if (levelRole <= 2) {
role = 'Bronze 1'
} else if (levelRole <= 10) {
role = 'Bronze 2'
} else if (levelRole <= 20) {
role = 'Bronze 3'
} else if (levelRole <= 30) {
role = 'Bronze 4'
} else if (levelRole <= 40) {
role = 'Bronze 5'
} else if (levelRole <= 70) {
role = 'Silver 1'
} else if (levelRole <= 85) {
role = 'Silver 2'
} else if (levelRole <= 95) {
role = 'Silver 3'
} else if (levelRole <= 105) {
role = 'Silver 4'
} else if (levelRole <= 125) {
role = 'Silver 5'
} else if (levelRole <= 150) {
role = 'Gold 1'
} else if (levelRole <= 170) {
role = 'Gold 2'
} else if (levelRole <= 190) {
role = 'Gold 3'
} else if (levelRole <= 210) {
role = 'Gold 4'
} else if (levelRole <= 230) {
role = 'Gold 5'
} else if (levelRole <= 260) {
role = 'Platinum 1'
} else if (levelRole <= 290) {
role = 'Platinum 2'
} else if (levelRole <= 320) {
role = 'Platinum 3'
} else if (levelRole <= 350) {
role = 'Platinum 4'
} else if (levelRole <= 380) {
role = 'Platinum 5'
} else if (levelRole <= 410) {
role = 'Diamond 1'
} else if (levelRole <= 450) {
role = 'Diamond 2'
} else if (levelRole <= 500) {
role = 'Diamond 3'
} else if (levelRole <= 550) {
role = 'Diamond 4'
} else if (levelRole <= 600) {
role = 'Diamond 5'
} else if (levelRole <= 700) {
role = 'Master'
} else if (levelRole <= 800) {
role = 'Master ✩'
} else if (levelRole <= 900) {
role = 'Master ✩✩'
} else if (levelRole <= 1000) {
role = 'Master ✩✩✩'
} else if (levelRole <= 1100) {
role = 'Master ✯'
} else if (levelRole <= 1225) {
role = 'Master ✯✯'
} else if (levelRole <= 1340) {
role = 'Master ✯✯✯'
} else if (levelRole <= 1400) {
role = 'GrandMaster'
} else if (levelRole <= 1555) {
role = 'GrandMaster ✩'
} else if (levelRole <= 1660) {
role = 'GrandMaster ✩✩'
} else if (levelRole <= 1710) {
role = 'GrandMaster ✩✩✩'
} else if (levelRole <= 1825) {
role = 'GrandMaster ✯'
} else if (levelRole <= 1950) {
role = 'GrandMaster ✯✯'
} else if (levelRole <= 2000) {
role = 'GrandMaster ✯✯✯'
} else if (levelRole <= 2220) {
role = 'Legends'
} else if (levelRole <= 2500) {
role = 'Legends 2'
} else if (levelRole <= 2700) {
role = 'Legends 3'
} else if (levelRole <= 2900) {
role = 'Legends 4'
} else if (levelRole <= 3100) {
role = 'Legends 5'
} else if (levelRole <= 3300) {
role = 'Legends 6'
} else if (levelRole <= 3600) {
role = 'Legends 7'
} else if (levelRole <= 3900) {
role = 'Legends 8'
} else if (levelRole <= 4200) {
role = 'Legends 9'
} else if (levelRole <= 4450) {
role = 'Legends 10'
} else if (levelRole <= 4700) {
role = 'Legends 忍'
} else if (levelRole <= 4900) {
role = 'Legends 忍¹'
} else if (levelRole <= 5100) {
role = 'Legends 忍²'
} else if (levelRole <= 5600) {
role = 'Legends 忍³'
} else if (levelRole <= 6100) {
role = 'Legends 忍⁴'
} else if (levelRole <= 7000) {
role = 'GrandLegends'
} else if (levelRole <= 10000) {
role = 'GrandLegends 1'
} else if (levelRole <= 20000) {
role = 'GrandLegends 2'
} else if (levelRole <= 30000) {
role = 'GrandLegends 3'
} else if (levelRole <= 40000) {
role = 'GrandLegends 4'
} else if (levelRole <= 50000) {
role = 'GrandLegends 忍¹'
} else if (levelRole <= 60000) {
role = 'GrandLegends 忍²'
} else if (levelRole <= 70000) {
role = 'GrandLegends 忍³'
} else if (levelRole <= 80000) {
role = 'GrandLegends 忍⁴'
} else if (levelRole <= 90000) {
role = 'Pro 숒'
} else if (levelRole <= 99999999999999) {
role = 'Pro × GrandLegends 숒'
}
var reqXp= 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
if (isPetualang) {
const currentLevel = getLevelingLevel(m.sender)
const checkId = getLevelingId(m.sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
const amountXp = Math.floor(Math.random() * 10) + 180
const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
var getLevel = getLevelingLevel(m.sender)
addLevelingXp(m.sender, amountXp)
if (requiredXp <= getLevelingXp(m.sender)) {
addLevelingLevel(m.sender, 1)
var lvlup = monospace(`╭───「 🎉 Level Up 🎉」
│
├ ➤ Nama : ${pushname}
├ ➤ Nomer : @${m.sender.split("@")[0]}
├ ➤ Rank : ${role}
├ ➤ Status : ${elit}
├ ➤ Xp : ${getLevelingXp(m.sender)}
├ ➤ Level : ${getLevel} --> ${getLevelingLevel(m.sender)}
│
╰───「 ${namebot} 」`)
const butlvlup = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: `${lvlup}`,
Message: { 
jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') },
hydratedFooterText: 'Selamat anda naik level',
hydratedButtons: [
{
 quickReplyButton: {
displayText: 'Profil',
id: '.profil',
 }
},
{
 quickReplyButton: {
displayText: 'menu rpg',
id: '.menurpg',
 }
},
{
 quickReplyButton: {
displayText: 'Mulai Misi',
id: '.misi',
}
}]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butlvlup.message, { messageId: butlvlup.key.id}, { quoted: m })
}
} catch (err) {
console.error(err)
}
}

var ikan = ['🐡 Buntal','🐠 Dory','🐟 Ikan','🐬 Lumba²','🐳 Paus','🐋 Orca','🦈 Hiu','🦭 Anjinglaut','🦀 Kepiting','🦞 Udang','🦑 Cumi²','🐢 Kura²']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎','🐺']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
var pohon = ['🌲','🌳','🎄','🌴','🎋']
var mati = ['1 tahun lagi','2 tahun lagi','3 tahun lagi','4 tahun lagi','5 tahun lagi','1 haru lagi','7 hari lagi','1 bulan lagi','7 tahun lagi','bentar lagi','Gak akan mati','1 jam lagi','1 menit lagi']
walruan = await getBuffer(`https://images.app.goo.gl/FtiBTNRQMBfcuzom9`)
walbang = await getBuffer(`https://images.app.goo.gl/FtiBTNRQMBfcuzom9`)
wallung = await getBuffer(`https://images.app.goo.gl/FtiBTNRQMBfcuzom9`)
gammoth = await getBuffer(`https://images.app.goo.gl/ZLwambzqnsHD7kQW8`)
gamning = await getBuffer(`https://images.app.goo.gl/WgaoHWq95FCtjkEUA`)
mothumb = await getBuffer(`https://telegra.ph/file/2c3606d58879cf9efa96f.jpg`)
blinthumb = await getBuffer(`https://telegra.ph/file/da824d340a60ad55b57c3.jpg`)
monthumb = await getBuffer(`https://telegra.ph/file/c63d4eb8731290ae2abde.jpg`)
vilthumb = await getBuffer(`https://telegra.ph/file/3e1e27da647e60feaa112.jpg`)
kingthumb = await getBuffer(`https://telegra.ph/file/90ddf5a6a486e0e59e572.jpg`)
limethumb = await getBuffer(`https://telegra.ph/file/119e269dd63adf84cffc3.jpg`)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)

menunya = `
╭ *Hy Kak ${pushname} Saya Kid*

╰ *Prefix* - 《${prefix}》

《 *Anime Menu* 》
*♟${prefix}kusonime*
*♟${prefix}nekopoion*
*♟${prefix}getnekopoi*
*♟${prefix}neonimeon*
*♟${prefix}otakudesu*
*♟${prefix}storyanime*
*♟${prefix}randomnhentai*
*♟${prefix}nhentaisearch*
*♟${prefix}loli*
*♟${prefix}waifu*
*♟${prefix}ero*
*♟${prefix}pussy*
*♟${prefix}yuri*
*♟${prefix}kuni*
*♟${prefix}tits*
*♟${prefix}bj*
*♟${prefix}poke*
*♟${prefix}avatar*
*♟${prefix}hentai*
*♟${prefix}lesbian*
*♟${prefix}baka*
*♟${prefix}hug*
*♟${prefix}kiss*
*♟${prefix}smug*
*♟${prefix}lizard*
*♟${prefix}meow*
*♟${prefix}neko*
*♟${prefix}feed*
*♟${prefix}cuddle*
*♟${prefix}keta*
*♟${prefix}kitsune*

《 *Group Menu* 》
*♟${prefix}linkgroup*
*♟${prefix}act viewonce*
*♟${prefix}deact viewonce*
*♟${prefix}revoke*
*♟${prefix}listonline*
*♟${prefix}ephemeral <option>*
*♟${prefix}infochat <reply pesan bot>*
*♟${prefix}setpp <reply gambar>*
*♟${prefix}setname <text>*
*♟${prefix}group <option>*
*♟${prefix}add @user*
*♟${prefix}kick @user*
*♟${prefix}promote @user*
*♟${prefix}demote @user*
*♟${prefix}hidetag <text>*
*♟${prefix}tagall <text>*
*♟${prefix}getpp <reply gambar>*
*♟${prefix}vote <text>*
*♟${prefix}devote*
*♟${prefix}upvote*
*♟${prefix}cekvote*
*♟${prefix}hapusvote*

《 *Photo Oxy Menu* 》
*♟${prefix}sertitolol <text>*
*♟${prefix}silverplaybutton <text>*
*♟${prefix}goldplaybutton <text>*
*♟${prefix}hartatahta <text>*
*♟${prefix}naruto <text>*
*♟${prefix}matrix <text>*
*♟${prefix}breakwall <text>*
*♟${prefix}dropwater <text>*
*♟${prefix}wolflogo <text>*
*♟${prefix}watercolour <text>*
*♟${prefix}nulis <text>*
*♟${prefix}shadow <text>*
*♟${prefix}romantic <text>*
*♟${prefix}smoke <text>*
*♟${prefix}burnpapper <text>*
*♟${prefix}lovemsg <text>*
*♟${prefix}grassmsg <text>*
*♟${prefix}lovetext <text>*
*♟${prefix}coffecup <text>*
*♟${prefix}butterfly <text>*
*♟${prefix}harrypotter <text>*
*♟${prefix}retrolol <text>*

《 *Text Pro Menu* 》
*♟${prefix}3dchristmas <text>*
*♟${prefix}3ddeepsea <text>*
*♟${prefix}americanflag <text>*
*♟${prefix}3dscifi <text>*
*♟${prefix}3drainbow <text>*
*♟${prefix}3dwaterpipe <text>*
*♟${prefix}halloweenskeleton <text>*
*♟${prefix}sketch <text>*
*♟${prefix}bluecircuit <text>*
*♟${prefix}space <text>*
*♟${prefix}metallic <text>*
*♟${prefix}fiction <text>*
*♟${prefix}greenhorror <text>*
*♟${prefix}transformer <text>*
*♟${prefix}berry <text>*
*♟${prefix}thunder <text>*
*♟${prefix}magma <text>*
*♟${prefix}3dcrackedstone <text>*
*♟${prefix}3dneonlight <text>*
*♟${prefix}impressiveglitch <text>*
*♟${prefix}naturalleaves <text>*
*♟${prefix}fireworksparkle <text>*
*♟${prefix}matrix <text>*
*♟${prefix}dropwater <text>*
*♟${prefix}harrypotter <text>*
*♟${prefix}foggywindow <text>*
*♟${prefix}neondevils <text>*
*♟${prefix}christmasholiday <text>*
*♟${prefix}3dgradient <text>*
*♟${prefix}blackpink <text>*
*♟${prefix}gluetext <text>*
*♟${prefix}rainbow <text>*
*♟${prefix}scfi <text>*
*♟${prefix}blue <text>*
*♟${prefix}juice <text>*
*♟${prefix}purple <text>*
*♟${prefix}toxic <text>*
*♟${prefix}peridot <text>*
*♟${prefix}metal <text>*
*♟${prefix}realistic <text>*
*♟${prefix}impressive <text>*
*♟${prefix}cracked <text>*
*♟${prefix}magma <text>*
*♟${prefix}thunder <text>*
*♟${prefix}berry <text>*
*♟${prefix}transformer <text>*
*♟${prefix}horror <text>*
*♟${prefix}metallic <text>*
*♟${prefix}circuit <text>*
*♟${prefix}sketch <text>*
*♟${prefix}halloween <text>*

《 *Ephoto Menu* 》
*♟${prefix}ffcover <text>*
*♟${prefix}crossfire <text>*
*♟${prefix}galaxy <text>*
*♟${prefix}glass <text>*
*♟${prefix}neon <text>*
*♟${prefix}beach <text>*
*♟${prefix}blackpink <text>*
*♟${prefix}igcertificate <text>*
*♟${prefix}ytcertificate <text>*

《 *Downloader Menu* 》
*♟${prefix}twitter <url>*
*♟${prefix}play <url>*
*♟${prefix}ytmp4 <url>*
*♟${prefix}ytmp3 <url>*
*♟${prefix}instagram <url>*
*♟${prefix}facebook <url>*
*♟${prefix}likee <url>*
*♟${prefix}tiktok <url>*
*♟${prefix}tiktoknowm <url>*
*♟${prefix}tiktokmp3 <url>*

《 *Anonymous Menu* 》
*♟${prefix}anonymous*
*♟${prefix}start*
*♟${prefix}next*
*♟${prefix}keluar*
*♟${prefix}sendkontak*

《 *Search Menu* 》
*♟${prefix}play <query>*
*♟${prefix}ytsearch <query>*
*♟${prefix}brainly <quey>*
*♟${prefix}wikipedia <query>*
*♟${prefix}google <query>*
*♟${prefix}playstore <query>*
*♟${prefix}pinterest <query>*
*♟${prefix}resepmakanan <query>*
*♟${prefix}shopee <query>*
*♟${prefix}amazon <query>*
*♟${prefix}linkgrup <query>*
*♟${prefix}film <query>*
*♟${prefix}wattpad <query>*
*♟${prefix}wattpaduser <query>*
*♟${prefix}wallpaper <query>*
*♟${prefix}wikimedia <query>*
*♟${prefix}manga <query>*
*♟${prefix}anime <query>*
*♟${prefix}character <query>*
*♟${prefix}webtoon <query>*
*♟${prefix}joox <query>*
*♟${prefix}liriklagu <query>*
*♟${prefix}chordlagu <query>*
*♟${prefix}translate <query>*
*♟${prefix}get <url>*
*♟${prefix}ssweb <url>*

《 *Info Menu* 》
*♟${prefix}jadwalbola*
*♟${prefix}jadwaltv*
*♟${prefix}jadwalsholat*
*♟${prefix}kompas*
*♟${prefix}inews*
*♟${prefix}merdeka*
*♟${prefix}jaminternational*

《 *Game Menu* 》
*♟${prefix}halah/hilih/huluh/heleh/holoh*
*♟${prefix}jadian*
*♟${prefix}jodohku*
*♟${prefix}tictactoe*
*♟${prefix}delttc*
*♟${prefix}suitpvp <tag>*
*♟${prefix}tebak <option>*
*♟${prefix}slot*
*♟${prefix}family100*

《 *Rpg Menu* 》
*♟${prefix}rpgmenu*
*♟${prefix}joinrpg*
*♟${prefix}mining*
*♟${prefix}miningxp*
*♟${prefix}mancing*
*♟${prefix}adventure*
*♟${prefix}berburu*
*♟${prefix}menebang*
*♟${prefix}mulung*
*♟${prefix}myinventori*
*♟${prefix}leaderboard*
*♟${prefix}killslime*
*♟${prefix}killgoblin*
*♟${prefix}killdevil*
*♟${prefix}killbehemoth*
*♟${prefix}killdemond*
*♟${prefix}killdemondking*
*♟${prefix}sellbesi*
*♟${prefix}sellemas*
*♟${prefix}selldiamond*
*♟${prefix}sellkayu*
*♟${prefix}selldaun*
*♟${prefix}sellhewan monyet*
*♟${prefix}sellhewan gorilla*
*♟${prefix}sellhewan harimau*
*♟${prefix}sellhewan macan*
*♟${prefix}sellhewan kuda*
*♟${prefix}sellhewan zebra*
*♟${prefix}sellhewan rusa*
*♟${prefix}sellhewan kerbau*
*♟${prefix}sellhewan sapi*
*♟${prefix}sellhewan babi*
*♟${prefix}sellhewan garuda*
*♟${prefix}sellhewan domba*
*♟${prefix}sellhewan kelelawar*
*♟${prefix}sellhewan ikan*
 
《 *Random Menu* 》
*♟${prefix}quotesanime*
*♟${prefix}darkjoke*
*♟${prefix}meme*
*♟${prefix}nickff*
*♟${prefix}cekmati*
*♟${prefix}readmore*
*♟${prefix}pantunpakboy*
*♟${prefix}couple*
*♟${prefix}ceritasex*
*♟${prefix}ceritahoror*
*♟${prefix}ceritaperjuangan*
*♟${prefix}qrcode*
*♟${prefix}cecan*
*♟${prefix}wallpaperneon*
*♟${prefix}wallpaperrandom*

《 *Islamic Menu* 》
*♟${prefix}iqra*
*♟${prefix}hadist*
*♟${prefix}alquran*
*♟${prefix}juzamma*
*♟${prefix}tafsirsurah*
*♟${prefix}kisahnabi*

《 *Voice Changer* 》
*♟${prefix}bass*
*♟${prefix}blown*
*♟${prefix}deep*
*♟${prefix}earrape*
*♟${prefix}fast*
*♟${prefix}fat*
*♟${prefix}nightcore*
*♟${prefix}reverse*
*♟${prefix}robot*
*♟${prefix}slow*
*♟${prefix}tupai*

《 *Primbon Menu* 》
*♟${prefix}nomorhoki*
*♟${prefix}artimimpi*
*♟${prefix}artinama*
*♟${prefix}ramaljodoh*
*♟${prefix}ramaljodohbali*
*♟${prefix}suamiistri*
*♟${prefix}ramalcinta*
*♟${prefix}cocoknama*
*♟${prefix}pasangan*
*♟${prefix}jadiannikah*
*♟${prefix}sifatusaha*
*♟${prefix}rezeki*
*♟${prefix}pekerjaan*
*♟${prefix}nasib*
*♟${prefix}penyakit*
*♟${prefix}tarot*
*♟${prefix}fengshui*
*♟${prefix}haribaik*
*♟${prefix}harisangar*
*♟${prefix}harisial*
*♟${prefix}nagahari*
*♟${prefix}arahrezeki*
*♟${prefix}peruntungan*
*♟${prefix}weton*
*♟${prefix}karakter*
*♟${prefix}keberuntungan*
*♟${prefix}memancing*
*♟${prefix}masasubur*
*♟${prefix}zodiak*
*♟${prefix}shio*

《 *Convert Menu* 》
*♟${prefix}toimage*
*♟${prefix}sticker*
*♟${prefix}stickerwm*
*♟${prefix}tovideo*
*♟${prefix}togif*
*♟${prefix}tourl*
*♟${prefix}tomp3*
*♟${prefix}tovn*
*♟${prefix}removebg*
*♟${prefix}emojimix*
*♟${prefix}styletext*

《 *Database Menu* 》
*♟${prefix}setcmd*
*♟${prefix}delcmd*
*♟${prefix}listcmd*
*♟${prefix}lockcmd*

《 *Main Menu* 》
*♟${prefix}carabuatbot*
*♟${prefix}botstatus*
*♟${prefix}runtime*
*♟${prefix}speed*
*♟${prefix}owner*
*♟${prefix}menu / ${prefix}help / ${prefix}?*
*♟${prefix}script*
*♟${prefix}afk <alasan>*
*♟${prefix}tqtq*

《 *Owner Menu* 》
*♟${prefix}chat <option>*
*♟${prefix}join <link>*
*♟${prefix}leave*
*♟${prefix}block @user*
*♟${prefix}unblock @user*
*♟${prefix}sendsesi*
*♟${prefix}setppbot*
*♟${prefix}bc*
*♟${prefix}bcgc*
*♟${prefix}delete*
*♟${prefix}setexif*
*♟${prefix}quoted*
*♟${prefix}eval*
*♟${prefix}$, >, => <code>*

*Note : Bot Masih Dalam Tahap Pengembangan Jika Ada Yang Error Mohon Segera Hubungi Ke Owner*`

switch(command) {
case 'thanksto': case 'tqtq': case 'thanks': {
m.reply(`*---Big Thanks To---*
*Adiwajshing (penyedia module)*
*DikaArdnt (penyedia base)*
*Febriansyah (penyedia rpg fitur)*

*Zenz (penyedia api (zenzapi.xyz))*
*Zeks (penyedia api(zeks.me))*
*Anto (penyedia api(hardianto.xyz))* 
*Adiixyz (penyedia api(adiixyzapi.herokuapp.com))*
*Rimuru (penyedia api(myselfff.herokuapp.com))*
*Farhan (penyedia api(api-xcoders.xyz))*

*Xfar (penyedia module api(Xfarr-api))*
*Hxz (penydia module api(hxz-api))*`)
}
break
case 'menu': case '?': case 'help': case 'allmenu': case 'menuall': case 'semuamenu': {
if(menutype == 'gif'){
sendButton5(from, menunya, `${namebot}`, await createMessage(from, {video: {url: "./lib/kidvid.mp4", caption: menunya}, gifPlayback: true}))}
}
if(menutype == 'location'){
hisoka.sendMessage(from, { caption: menunya, location: { jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') }, templateButtons: buttonsDefault, footer: `${namebot}`, mentions: [m.sender] })
}
if(menutype == 'image'){
hisoka.sendMessage(from, { caption: menunya, image: { jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') }, templateButtons: buttonsDefault, footer: `${namebot}`, mentions: [m.sender] })
} 
break
case 'carabuatbot': case 'tutorial': case 'cbb': case 'buatbot': case 'jadibot': {
caption = (`*🌠Tutorial Membuat Bot Whatsapp*

*Siapkan Apk :*
*Termux*
*Wa Untuk Bot*
*2 Hp*

*Masuk Ke Apk Termux Dan Ketikan Command Dibawah Ini*
*$pkg update && pkg upgrade*
*$pkg install nodejs*
*&pkg install git*

*Dengan Git*
*$git clone https://github.com/KunzxD404/V2*
*$npm install*
*$npm start*

*Dengan File SDcard*
*$termux-setup-storage*
*$cd /sdcard/V2 (sesuaikan file)*
*yarn*

*Jika Error Npm Install* :
*$pkg install yarn*
*$yarn*
*$npm start*

*NOTE : Tanda $ Jangan Diikuti*

*Jika Sudah npm start Ke Apk Whatsapp Ketuk Titik Tiga Atas Kanan Dan Pilih Perangkat Tertaut Dan Tautkan Perangkat*
*Dan Foto Qr Di Termux (hp 1) Dengan Hp Yg Ke 2 Dan Hp 1 Scan Yang Di Hp 2*

*Semoga Berhasil Dan Jika Tidak Mengerti Bisa Hubungi Saya Di Whatsapp Berikut* :
)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: caption,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') },
hydratedFooterText: `${namebot}`,
hydratedButtons: [
{
"urlButton": {
"displayText": "Chat Me",
"url": "wa.me/6287778886786"
}
},
{
"urlButton": {
"displayText": "My Group",
"url": "https://chat.whatsapp.com/GDZOBuMkFSCKw6mzDUDoPd"
}
},
{
"quickReplyButton": {
"displayText": "Menu Bot",
"id": `${prefix}menu`
}
},
{
"quickReplyButton": {
"displayText": "Script",
"id": `${prefix}sc`
}
}
]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m })}
break
case 'sc': case 'sourcecode': case 'script': {
m.reply('Script : https://github.com/DikaArdnt/Hisoka-Morou\n\n Dont Forget Give Star')}
break
case 'afk': {
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)}
break
case 'getdatanekopoi': case 'nekopoidetail': case 'getnekopoi': {
if (!q) throw mess.q
if (!isUrl(q)) throw (mess.wrongFormat)
if (!q.includes('nekopoi.care')) throw mess.wrongFormat
m.reply(mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/anime/getnekopoi?url=${q}&apikey=${apikey.xkey}`)
txt = `*Title* : ${anu.result.title}
*Duration* : ${anu.result.meta[3].duration}
*Size* : ${anu.result.meta[4].size}
*Link* :
*Droplink* : ${anu.result.linkDownload[0].drop}
*Zippylink* : ${anu.result.linkDownload[5].zippyshare}`
hisoka.sendMessage(m.chat, { image: { url: `https://images.app.goo.gl/i1mBaGUcvXBrTJ928` }, caption: txt }, { quoted: m })}
break
case 'randomnhentai': case 'nhentairandom': {
anu = await fetchJson(`https://api-xcoders.xyz/api/anime/randomnhentai?apikey=${apikey.xkey}`)
txt = `*TitleID* : ${anu.result.titleID}
*TitleJP* : ${anu.result.titleJP}
*Code* : ${anu.result.code}
*Artists* : ${anu.result.meta[7].Categories}`
hisoka.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/55df6aebcf00f207ea53f.jpg` }, caption: txt }, { quoted: m })}
break
case 'nekopoion': case 'nekopoilatest': {
m.reply(mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/anime/latestnekopoi?apikey=${apikey.xkey}`)
txt = `*Title* : *${anu.result[0].title}*
*Link* : *${anu.result[0].url}*

*Title* : *${anu.result[0].title}*
*Link* : *${anu.result[0].url}*

*Title* : *${anu.result[0].title}*
*Link* : *${anu.result[0].url}*

*Title* : *${anu.result[0].title}*
*Link* : *${anu.result[0].url}*

*Title* : *${anu.result[0].title}*
*Link* : *${anu.result[0].url}*`
hisoka.sendMessage(m.chat, { image: { url: `https://images.app.goo.gl/i1mBaGUcvXBrTJ928` }, caption: txt }, { quoted: m })}
break
case 'otaku': case 'otakudesu': {
if (!q) throw mess.q
m.reply(mess.wait)
let anu = await fetchJson(`https://hardianto.xyz/api/anime/otakudesu?title=${q}&apikey=${apikey.harkey}`)
textnya = `*Title : ${anu.judul}*
*Episode : ${anu.episode}*
*Rilis : ${anu.rilis}*
*Genre : ${anu.genre}*
*Link : ${anu.batch}*
*Sinopsis* : ${anu.desc}

*Title : ${anu.judul}*
*Episode : ${anu.episode}*
*Rilis : ${anu.rilis}*
*Genre : ${anu.genre}*
*Link : ${anu.batch}*
*Sinopsis* : ${anu.desc}

*Title : ${anu.judul}*
*Episode : ${anu.episode}*
*Rilis : ${anu.rilis}*
*Genre : ${anu.genre}*
*Link : ${anu.batch}*
*Sinopsis* : ${anu.desc}

*Title : ${anu.judul}*
*Episode : ${anu.episode}*
*Rilis : ${anu.rilis}*
*Genre : ${anu.genre}*
*Link : ${anu.batch}*
*Sinopsis* : ${anu.desc}

*Title : ${anu.judul}*
*Episode : ${anu.episode}*
*Rilis : ${anu.rilis}*
*Genre : ${anu.genre}*
*Link : ${anu.batch}*
*Sinopsis* : ${anu.desc}
`
hisoka.sendMessage(m.chat, { image: { url: anu[0].image }, caption: `${textnya}` }, { quoted: m })
}
break
case 'kusonime': {
if (!q) throw mess.q
m.reply(mess.wait)
let anu = await fetchJson(`https://hardianto.xyz/api/anime/kusonime?search=${q}&apikey=${apikey.harkey}`)
textnya = `*Title* : *${anu.result.title}*
*Genre* : *${anu.result.genre}*
*Season* : *${anu.result.season}*
*Producer* : *${anu.result.producer}*
*Status* : *${anu.result.status}*
*Total Eps* : *${anu.result.total_episode}*
*Duration* : *${anu.result.duration}*
*Released* : *${anu.result.released_on}*

*Sinopsis* : *${anu.result.description}*

*Download Link* : 
${anu.result.download[0].download_list[0].downloader} =
${anu.result.download[0].download_list[0].download_link}

${anu.result.download[0].download_list[1].downloader} =
${anu.result.download[0].download_list[1].download_link}

${anu.result.download[0].download_list[2].downloader} =
${anu.result.download[0].download_list[2].download_link}

${anu.result.download[0].download_list[3].downloader} =
${anu.result.download[0].download_list[3].download_link}

${anu.result.download[0].download_list[4].downloader} =
${anu.result.download[0].download_list[4].download_link}`
hisoka.sendMessage(m.chat, { image: { url: anu.result.thumbs }, caption: `${textnya}` }, { quoted: m })
}
break
case 'nhentaisearch': case 'nhentai': {
if (!q) throw mess.q
m.reply(mess.wait)
let anu = await fetchJson(`https://adiixyzapi.herokuapp.com/api/nHentaiSearch?query=gotoubun`)
textnya = `*Title* : *${anu.result[0].title}*
*Id* : *${anu.result[0].id}*
*Languange* : *${anu.result[0].language}*

*Title* : *${anu.result[1].title}*
*Id* : *${anu.result[1].id}*
*Languange* : *${anu.result[1].language}*

*Title* : *${anu.result[2].title}*
*Id* : *${anu.result[2].id}*
*Languange* : *${anu.result[2].language}*

*Title* : *${anu.result[3].title}*
*Id* : *${anu.result[3].id}*
*Languange* : *${anu.result[3].language}*

*Title* : *${anu.result[4].title}*
*Id* : *${anu.result[4].id}*
*Languange* : *${anu.result[1].language}*
`
hisoka.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/55df6aebcf00f207ea53f.jpg` }, caption: `${textnya}` }, { quoted: m })
}
break
case 'randomanime': case 'storyanime': {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { video: { url: `https://kunz-gans.herokuapp.com/anime/storyanime` }, caption: mess.succ }, { quoted: m})}
break
case 'hentai': case 'lesbian': case 'ero': case 'pussy': case 'yuri': case 'kuni': case 'tits': case 'bj': case 'kitsune': case 'keta': {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://hardianto.xyz/api/anime/random?nsfw=${command}&apikey=${apikey.harkey}` }, caption: mess.succ }, { quoted: m})
}
break
case 'loli': {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://hardianto.xyz/api/anime/loli?apikey=${apikey.harkey}` }, caption: mess.succ }, { quoted: m})
}
break
case 'baka': case 'hug': case 'kiss': case 'smug': case 'lizard': case 'neko': case 'meow': case 'feed': case 'cuddle': case 'waifu': case 'poke': case 'avatar': {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://hardianto.xyz/api/anime/random?nsfw=${command}&apikey=${apikey.harkey}` }, caption: mess.succ }, { quoted: m})
}
break
case 'vote': {
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [ {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1}, {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1} ]
let buttonMessageVote = {
text: teks_vote,
footer: `${namebot}`,
buttons: buttonsVote,
headerType: 1
}
hisoka.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [ {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1}, {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}]
let buttonMessageUpvote = {
text: teks_vote,
footer: `${namebot}`,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
 }
hisoka.sendMessage(m.chat, buttonMessageUpvote)
}
 break
case 'devote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [ {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1}, {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1} ]
let buttonMessageDevote = {
text: teks_vote,
footer: `${namebot}`,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
hisoka.sendMessage(m.chat, buttonMessageDevote)
}
break
 
case 'cekvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)}
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
if (!text) throw 'Text ?'
await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'revoke': case 'resetlink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
json = ['action', 'inviteReset', from]
hisoka.query({json, expect200: true})
m.reply('Sukses Mereset Link Group')
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'getpp': {
if (!m.quoted) return m.reply('Balas target yg ingin di ambil!')
anu = await hisoka.profilePictureUrl(m.quoted.sender, 'image')
hisoka.sendMessage(from, { image: { url: anu, caption: mess.succ, quoted: m}})
}
break
case 'ff': {
anu = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=${apikey.zekskey}&text=vinz%20gaming`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, m)
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isGroupAdmins) throw mess.admin
var value = body.slice(9)
var group = await hisoka.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: m
}
hisoka.sendMessage(from, options, text)
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isGroupAdmins && !isGroupOwner) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
if (!text) throw 'Masukkan value open/close'
if (args[0].toLowerCase() === 'close') {
await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open') {
await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
let response = await hisoka.groupInviteCode(m.chat)
hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
 case 'listonline': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), hisoka.user.id]
hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'act': {
if (!isCreator) throw mess.owner
if (!isGroupAdmins) throw mess.admin
if (args[0].toLowerCase() === 'viewonce'){
if (isVO) return reply('*Viewonce sudah aktif di grup ini*')
vo.push(from)
fs.writeFileSync('./dataB/viewonce.json', JSON.stringify(vo))
m.reply(`*Anti Viewonce Act*`)
}}
break
case 'deact' :{
if (!isCreator) throw mess.owner
if (!isGroupAdmins) throw mess.admin
if (args[0].toLowerCase() === 'viewonce'){
vo.splice(from, 1)
fs.writeFileSync('./dataB/viewonce.json', JSON.stringify(vo))
m.reply(`*Viewonce Deact*`)
}}
case 'video': {
if (!q) throw mess.q
if (!isUrl(q)) throw (mess.wrongFormat)
hisoka.sendMessage(from, { video: { url: `${q}` }}, { quoted: m })}
break
case 'audio': {
if (!q) throw mess.q
if (!isUrl(q)) throw (mess.wrongFormat)
hisoka.sendMessage(from, { audio: { url: `${q}` }}, { quoted: m })}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'stickerwm': case 'swm': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* packname|author`)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './dataB/remobg-'+getRandom('')
localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './dataB/hremo-'+getRandom('.png')
m.reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${`${namebot}`}.mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'emojimix': {
if (!text) throw `Example : ${prefix + command} 😅+🤔`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'style': case 'styletext': {
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}
m.reply(Object.entries(await stylizeText(text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text)).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`)
}
break
case 'pinterest': {
if (!q) throw mess.q
await m.reply(mess.wait)
xfar.Pinterest(q).then(async data => {
hisoka.sendMessage(m.chat, { image: { url: data.url }, caption: `*Media Url* : ${data.url}` }, { quoted: m})
})}
break
case 'wallpaper': {
if (!q) throw mess.q
m.reply(mess.wait)
wallpaper(text).then( async anu =>{
result = anu[Math.floor(Math.random(), anu.length)]
let gam = await getBuffer(result.image[0])
hisoka.sendMessage(m.chat, { image: { url: gam }, caption: `*Media Url : *${result.image}` }, { quoted: m})
})
.catch((err) => {
m.reply(mess.error)
})
}
break
case 'wikimedia': {
if (!q) throw mess.q
m.reply(mess.wait)
wikimedia(text).then( async anu =>{
result = anu[Math.floor(Math.random(), anu.length)]
let gam = await getBuffer(result.image[0])
hisoka.sendMessage(m.chat, { image: { url: gam }, caption: `*Media Url : *${result.image}` }, { quoted: m})
})
.catch((err) => {
m.reply(mess.error)
})
}
break
case 'manga': {
if (!q) throw mess.q
await m.reply(mess.wait)
xfar.Manga(q).then(async data => {
let txt = `*------「 MANGA-SEARCH 」------*\n\n`
for (let i of data) {
txt += `*Title :* *${i.judul}*\n`
txt += `*Url :* *${i.link}*\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].thumbnail }, caption: `${txt}` }, { quoted: m})
})}
break
case 'anime': {
if (!q) throw mess.q
await m.reply(mess.wait)
xfar.Anime(q).then(async data => {
let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
for (let i of data) {
txt += `*Title :* *${i.judul}*\n`
txt += `*Url :* *${i.link}*\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].thumbnail }, caption: `${txt}` }, { quoted: m})
})}
break
case 'char': case 'character': {
if (!q) throw mess.q
await m.reply(mess.wait)
xfar.Character(q).then(async data => {
let txt = `*-------「 CHARACTER-SEARCH 」-------*\n\n`
for (let i of data) {
txt += `*Name :* *${i.character}*\n`
txt += `*Link :* *${i.link}*\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].thumbnail }, caption: `${txt}` }, { quoted: m})
})}
break
case 'film': {
if (!q) throw mess.q
await m.reply(mess.wait)
xfar.Film(q).then(async data => {
let txt = `*-------「 FILM-SEARCH 」-------*\n\n`
for (let i of data) {
txt += `*Title :* *${i.judul}*\n`
txt += `*Quality :* *${i.quality}*\n`
txt += `*Type :* *${i.type}*\n`
txt += `*Link :* *${i.link}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].thumb }, caption: `${txt}` }, { quoted: m})
})}
break
case 'wattpad': {
if (!q) throw mess.q
await m.reply(mess.wait)
xfar.Wattpad(q).then(async data => {
let txt = `*-------「 WATTPAD-SEARCH 」-------*\n\n`
for (let i of data) {
txt += `*Judul :* *${i.judul}*\n`
txt += `*Dibaca :* *${i.dibaca}*\n`
txt += `*Divote :* *${i.divote}*\n`
txt += `*Link :* *${i.link}*\n`
txt += `*Sinopsis* : *${i.description}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].thumb }, caption: `${txt}` }, { quoted: m})
})}
break
case 'wattpaduser': {
if (!q) throw mess.q
await m.reply(mess.wait)
xfar.WattpadUser(q).then(async data => {
let txt = `*-------「 WATTPADUSER-SEARCH 」-------*\n\n`
for (let i of data) {
txt += `*Username :* *${i.username}*\n`
txt += `*Works :* *${i.works}*\n`
txt += `*Reading :* *${i.reading_list}*\n`
txt += `*Followers :* *${i.followers}*\n`
txt += `*Joined* : *${i.joined}*\n`
txt += `*About* : *${i.about}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].pp_picture }, caption: `${txt}` }, { quoted: m})
})}
break
case 'webtonsearch': case 'webtoon': {
if (!q) throw mess.q
await m.reply(mess.wait)
xfar.Webtoons(q).then(async data => {
let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
for (let i of data) {
txt += `*Title :* *${i.judul}*\n`
txt += `*Like :* *${i.like}*\n`
txt += `*Creator :* *${i.creator}*\n`
txt += `*Genre :* *${i.genre}*\n`
txt += `*Url :* *${i.url}*\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].thumbnail }, caption: `${txt}` }, { quoted: m})
})}
break
case 'joox': case 'jooxdl': {
if (!q) throw mess.q
m.reply(mess.wait)
let anu = await fetchJson(`https://api-xcoders.xyz/api/download/joox?query=${q}&apikey=${apikey.xkey}`)
let msg = await hisoka.sendImage(m.chat, anu.result.thumbnail, `*------「 JOOX-SEARCH 」------*

*Title* : *${anu.result.judul}*
*Album* : *${anu.result.album}*
*Singer* : *${anu.result.artist}*
*Size* : *${anu.result.size}*`, m)
hisoka.sendMessage(m.chat, { audio: { url: anu.result.link }, mimetype: 'audio/mpeg', fileName: anu.result.judul+'.m4a' }, { quoted: m })
}
break
case 'liriklagu': case 'lagu': {
if (!q) throw mess.q
m.reply(mess.wait)
anu = await fetchJson(`https://hardianto.xyz/api/info/lirik?query=${q}&apikey=${apikey.harkey}`)
m.reply(`*Title* : *${q}*\n*Lirik* : ${anu.lirik}`)
}
break
case 'chordlagu': case 'chord': {
if (!q) throw mess.q
m.reply(mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/search/chordlagu?query=${q}&apikey=${apikey.xkey}`)
m.reply(`*Title* : *${anu.result.title}*\n*Chord* : ${anu.result.chord}`)
}
break
case 'tr': case 'translate': {
if (!q) throw mess.q
m.reply(mess.wait)
anu = await fetchJson(`https://hardianto.xyz/api/translate?kata=${q}&apikey=${apikey.harkey}`)
m.reply(`*From* : *${anu.result.from}*\n*To* : *${anu.result.to}*\n*Hasil* : *${anu.result.text}*`)
}
break
case 'ssweb': {
if (!q.includes('http://') && !q.includes('https://')) throw (`*Format salah kak, ${prefix}ssweb https://LINKNYA*`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://hardianto.xyz/api/tools/ssweb?url=${q}&apikey=${apikey.harkey}` }, caption: mess.succ }, { quoted: m })
}
break
case 'get': case 'inspect': {
if(!q) return reply('linknya?')
fetch(q).then(res => res.text())
.then(bu =>{
m.reply(bu)
})  
}
break
case 'brainly': {
if (!q) return reply("Masukkan pertanyaan")
m.reply(mess.wait)
brainly(q).then(async res => {
let txt = `*------「 BRAINLY-SEARCH 」------*\n\n`
for (let p of res.data) {
txt += `*Pertanyaan* : ${p.pertanyaan}\n*Jawaban* : ${p.jawaban[0].text}\n\n`
}
m.reply(txt)
}).catch(e => m.reply(e))}
break
case 'wikipedia': case 'wiki': {
if (!q) throw mess.q
m.reply (mess.wait)
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/random/wikipedia?query=${q}`)
m.reply(`*------「 WIKIPEDIA-SEARCH 」------*

*Soal* : ${q}
*Jawaban* :
${anu.result.list}`)}
break
case 'resep': case 'resepmakanan': {
if (!q) throw mess.q
m.reply (mess.wait)
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/random/resepmasakan?query=${q}`)
m.reply(`*------「 RESEPMAKANAN-SEARCH 」------*\n\n

*Membuat* : ${q}
*Caranya* :
${anu.result.list}`)}
break
case 'grupwa': case 'linkgrup': {
if (!q) throw mess.q
m.reply (mess.wait)
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/search/grubwa?query=${q}`)
m.reply(`*Name* : ${anu.result.judul}
*Link* : ${anu.result.link}`)
.catch((err) => {
m.reply(`Grup tidak ditemukan coba query lain`)})}
break
case 'shopee': case 'shopeesearch': {
if (!q) throw mess.q
m.reply (mess.wait)
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/search/shopee?query=${q}`)
m.reply(`*Nama barang* : ${anu.result.judul}
*Stok* : ${anu.result.stock}
*Dilihat* : ${anu.result.views}
*Suka* : ${anu.result.like}
*Terjual* : ${anu.result.terjual}
*Harga* : ${anu.result.harga}`)}
break
case 'amazon': case 'amazonsearch': {
if (!q) throw mess.q
m.reply (mess.wait)
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/search/amazon?query=${q}`)
m.reply(`*Nama barang* : ${anu.result.item}
*Dilihat* : ${anu.result.review}
*Rating* : ${anu.result.rating}
*Score* : ${anu.result.score}
*Harga* : ${anu.result.price}
*Link* : ${anu.result.url}`)}
break
case 'yts': case 'ytsearch': {
if (!q) throw mess.q
await m.reply(mess.wait)
srch = `${q}`
var aramas = await yts(srch);
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '*----「 YOUTUBE-SEARCH 」----*\n\n'
aramas.all.map((video) => {
ytresult += '*Title:* ' + video.title + '\n'
ytresult += '*Link:* ' + video.url + '\n'
ytresult += '*Durasi:* ' + video.timestamp + '\n'
ytresult += '*Views:* ' + video.views + '\n'
ytresult += '*Upload:* ' + video.ago + '\n\n'
})
hisoka.sendMessage(from, {image: tbuff, caption: ytresult}, {quoted:m})}
break
case 'google': {
if (!q) throw mess.q
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `*----「 GOOGLE-SEARCH 」----*\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'playstore': {
if(!q) throw mess.q
let play = await hxz.playstore(q)
let store = '*----「 PLAYSTORE-SEARCH 」----*\n\n'
for (let i of play){
store += `*Nama* : ${i.name}
*Link* : ${i.link}\n`
}
m.reply(store)}
break
case 'play': {
if (!q) throw mess.wrongFormat
m.reply(mess.wait)
await sendPlay(from, q)}
break
case 'jadwalbola': {
jadwalbola().then(async data => {
let txt = "*Jadwal Bola*\n\n"
for (let res of data) {
txt += `• *Jadwal* : ${res.jadwal}\n`
txt += `• *Tanggal* : ${res.tanggal}\n`
txt += `• *Jam* : ${res.jam}\n`
txt += `• *Link* : ${res.url}\n\n`
}
m.reply(txt)
}).catch(e => m.reply(e))}
break
case 'jadwaltv': {
jadwaltv().then(async data => {
let txt = "*Jadwal Acara Televisi*\n\n"
for (let res of data) {
txt += `• *Acara* : ${res.acara}\n`
txt += `• *Channel* : ${res.channel}\n`
txt += `• *Jam* : ${res.jam}\n`
txt += `• *Source* : ${res.source}\n\n`
m.reply(txt)
}
}).catch(e => m.reply(e))}
break
case 'jadwalsholat': case 'jadwalsolat': {
if (!q) return reply(mess.wrongFormat)
jadwalsholat(q).then(async res => {
let txt = "*Jadwal Sholat*\n\n"
txt += `• *Tanggal* : ${res.tanggal}\n\n`
txt += `• *Imsyak* : ${res.imsyak}\n`
txt += `• *Subuh* : ${res.subuh}\n`
txt += `• *Dzuhur* : ${res.dzuhur}\n`
txt += `• *Ashar* : ${res.ashar}\n`
txt += `• *Maghrib* : ${res.maghrib}\n`
txt += `• *Isya* : ${res.isya}\n`
m.reply(txt)
}).catch(e => m.reply(e))}
break
case 'kompas': case 'kompasnews': {
kompas().then(async data => {
let txt = `Kompas News\n\n`
for (let res of data) {
txt += `• *Judul*: ${res.berita}\n`
txt += `• *Di upload*: ${res.upload_time}\n`
txt += `• *Type*: ${res.type_berita}\n`
txt += `• *Link*: ${res.link}\n\n`
}
m.reply(txt)
}).catch(e => m.reply(e))}
break
case 'inews': {
inews().then(async data => {
let txt = `I News\n\n`
for (let res of data) {
txt += `• *Judul*: ${res.berita}\n`
txt += `• *Info*: ${res.info_berita}\n`
txt += `• *Di upload*: ${res.upload_time}\n`
txt += `• *Link*: ${res.link}\n\n`
}
m.reply(txt)
}).catch(e => m.reply(e))}
break
case 'infomerdeka': case 'merdeka': {
anu = await fetchJson(`https://kunz-gans.herokuapp.com/other/merdeka`)
txt = `Merdeka\n\n`
txt += `• *Judul* : ${anu.result[0].title}\n`
txt += `• *Upload* : ${anu.result[0].upload_date}\n`
txt += `• *Link* : *${anu.result[0].link}\n`
txt += `• *Judul* : ${anu.result[0].title}\n`
txt += `• *Upload* : ${anu.result[0].upload_date}\n`
txt += `• *Link* : *${anu.result[0].link}\n`
txt += `• *Judul* : ${anu.result[0].title}\n`
txt += `• *Upload* : ${anu.result[0].upload_date}\n`
txt += `• *Link* : *${anu.result[0].link}\n`
txt += `• *Judul* : ${anu.result[0].title}\n`
txt += `• *Upload* : ${anu.result[0].upload_date}\n`
txt += `• *Link* : *${anu.result[0].link}\n`
txt += `• *Judul* : ${anu.result[0].title}\n`
txt += `• *Upload* : ${anu.result[0].upload_date}\n`
txt += `• *Link* : *${anu.result[0].link}\n`
m.reply(txt)
.catch(e => m.reply(e))}
break
case 'quotesanime': case 'quoteanime': {
anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
m.reply(`${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`)
}
break
case 'joke': case 'darkjoke': {
m.reply(mess.wait)
anu = await getBuffer(`https://api-xcoders.xyz/api/random/darkjoke?apikey=${apikey.xkey}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'meme': case 'memeindo': {
m.reply(mess.wait)
anu = await getBuffer(`https://api-xcoders.xyz/api/random/meme?apikey=${apikey.xkey}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'nickepep': case 'nickff': {
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=${apikey.zekskey}`)
m.reply(anu.result)
}
break
case 'cekmati': case 'maticek': {
if (!text) throw (`Siapa yg mau dicek?`)
anu = mati[Math.floor(Math.random() * mati.length)]
m.reply(`${text} Mati Dalam ${anu}\n\n\n*Note* : *Ini Hanya Main Main*`)
}
break
case 'pantunpakboy': {
anu = await fetchJson(`https://api.zeks.me/api/pantun?apikey=${apikey.zekskey}&=`)
m.reply(anu.result.pantun)
}
break
case 'cersex': case 'ceritasex' :{
anu = await fetchJson(`https://api-xcoders.xyz/api/random/cersex?apikey=${apikey.xkey}`)
txt = `*Judul* : ${anu.result.title}\n*Cerita* : \n${anu.result.cerita}`
hisoka.sendMessage(m.chat, { image: { url: anu.result.thumbnail }, caption: txt }, { quoted: m })
}
break
case 'cerhoror': case 'ceritahoror': {
anu = await fetchJson(`https://api-xcoders.xyz/api/random/cerpen/horor?apikey=${apikey.xkey}`)
txt = `*Judul* : ${anu.result.tile}\n*Cerita* : \n${anu.result.story}`
hisoka.sendMessage(m.chat, { image: { url: `https://images.app.goo.gl/3fWHrdCMAxEqEUzF9` }, caption: txt }, { quoted: m })
}
break
case 'cerperjuangan': case 'ceritaperjuangan': {
anu = await fetchJson(`https://api-xcoders.xyz/api/random/cerpen/perjuangan?apikey=${apikey.xkey}`)
txt = `*Judul* : ${anu.result.title}\n*Cerita* : \n${anu.result.story}`
hisoka.sendMessage(m.chat, { image: { url: `https://images.app.goo.gl/abimQuzvydcEeBBcA` }, caption: txt }, { quoted: m })
}
break
case 'couple': case 'ppcp': {
m.reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'cecan': case 'randomcecan': {
hisoka.sendMessage(from, { image: { url: `http://hadi-api.herokuapp.com/api/randomImage/cecan`, caption: mess.succ }}, { quoted: m })}
break
case 'wallneon': case 'wallpaperneon': {
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/wallneon`)
hisoka.sendMessage(from, { image: { url: anu.list.gambar }}, { quoted: m })}
break
case 'wallpaperrandom': {
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/wallrandom`)
hisoka.sendMessage(from, { image: { url: anu.list.gambar }}, { quoted: m })}
break
case 'jamdunia': case 'jaminternational': {
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jamdunia`)
m.reply(`*Wib* : ${anu.result.wib}
*Wita* : ${anu.result.wita}
*Wit* : ${anu.result.wit}
*Matahatari* : ${anu.result.matahari}
*Tanggal* : ${anu.result.tanggal}
*Detail* : ${anu.result.detail}`)}
break
case 'qrcode': case 'qr': {
if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} gwibu`)
m.reply(mess.wait)
hisoka.sendMessage(from, {caption: `*QR CODE*`, image: {url: `https://tyz-api.herokuapp.com/other/qrcode?text=${q}`}}, {quoted: m})
}
break
case 'readmore': case 'more': {
m.reply('‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎')
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}}
break
case 'nomerhoki':case 'nomorhoki': {
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (!text) throw `Example : ${prefix + comman} Dika Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Example : ${prefix + comman} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Example : ${prefix + command} Dika|Novia`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendImage(m.chat, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!ext)throw `Example : ${ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (!text) throw `Example : ${ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
case 'runtime': {
m.reply(`*${runtime(process.uptime())}*`)}
break
case 'speed': case 'ping': {
m.reply(`*Merespon dalam ${latensi.toFixed(4)} _Second_, ${oldd - neww} _miliseconds_*`)}
break
case 'tes': case 'bot': {
m.reply(`Iya ada apa kak Kid disini😼`)}
break
case 'botstatus': case 'statusbot': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'owner': case 'creator': {
let vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'N:;KunzxD;;;'
+ 'FN:Owner Kid\n'
+ 'ORG:KunzxD;\n'
+ 'TEL;type=CELL;type=VOICE;waid=6287778886786:+6287778886786\n'
+ 'END:VCARD'
hisoka.sendMessage(m.chat, { contacts: { displayName: 'KunzxD', contacts: [{ vcard }] } }, { quoted: m })
}
break
case 'twtdl': case 'twt': case 'twitterdl': case 'twitter': {
if (!q) throw mess.q
if (!isUrl(q)) throw (mess.wrongFormat)
if (!q.includes('twitter.com')) throw (mess.wrongFormat)
await m.reply(mess.wait)
xfar.Twitter(args[1]).then(async data => {
let txt = `*----「 TWITTER-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${data.title}*\n`
txt += `*Quality :* *${data.medias[1].quality}*\n`
txt += `*Size :* *${data.medias[1].formattedSize}*\n`
txt += `*Url :* *${data.url}*\n`
sendFileFromUrl(from,data.medias[1].url,txt,m)
})
.catch((err) => {
for (let x of owner) {
hisoka.sendMessage(x, `${command.split(prefix)[1]} Error: \n\n` + err)
}
m.reply(mess.error)
})}
break
case 'mp4': case 'ytmp4': {
if (!q) throw mess.q
if (!isUrl(q)) throw (mess.wrongFormat)
if (!q.includes('youtu.be') && !q.includes('youtube.com')) throw m.reply(mess.wrongFormat)
m.reply(mess.wait)
xfar.Youtube(text).then(async (data) => {
let txt = `*----「 YOUTUBE-VIDEO 」----*\n\n`
txt += `*Quality :* *${data.medias[1].quality}*\n`
txt += `*Type :* *${data.medias[1].extension}*\n`
txt += `*Size :* *${data.medias[1].formattedSize}*\n`
txt += `*Url Source :* *${data.url}*\n\n`
txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
hisoka.sendMessage(from, { video: { url: data.medias[1].url }}, { quoted: m })
})}
break
case 'mp3': case 'ytmp3': {
if (!q) throw mess.q
if (!isUrl(q)) throw (mess.wrongFormat)
if (!q.includes('youtu.be') && !q.includes('youtube.com')) throw m.reply(mess.wrongFormat)
m.reply(mess.wait)
xfar.Youtube(q).then(async (data) => {
let txt = `*----「 YOUTUBE-AUDIO 」----*\n\n`
txt += `*Quality :* *${data.medias[7].quality}*\n`
txt += `*Type :* *${data.medias[7].extension}*\n`
txt += `*Size :* *${data.medias[7].formattedSize}*\n`
txt += `*Url Source :* *${data.url}*\n\n`
txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
hisoka.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mpeg', fileName: `audio.mp3` }, { quoted: m })
})}
break
case 'instagram': case 'igdl': case 'ig': {
if (!q) throw 'No Query Url!'
if (!q.includes('instagram.com')) throw m.reply(mess.wrongFormat)
m.reply(mess.wait)
xfar.Instagram(q).then(async (data) => {
let txt = `*----「 INSTAGRAM-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${data.title}*\n`
txt += `*Type :* *${data.medias[0].extension}*\n`
txt += `*Size :* *${data.medias[0].formattedSize}*\n`
txt += `*Url Source :* *${data.url}*\n\n`
txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
sendFileFromUrl(m.chat, data.medias[0].url, mess.succ, m)
})}
break
case 'fb': case 'fbdl': case 'facebookdl': {
if (!q) throw 'No Query Url!'
if (!q.includes('facebook.com')) throw m.reply(mess.wrongFormat)
anu = await fetchJson(`https://kunz-gans.herokuapp.com/downloader/fbdl?link=${q}`)
let txt = `*----「 FACEBOOK-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${anu.title}*\n`
txt += `*Type :* *${data.medias[1].extension}*\n`
txt += `*Size :* *${data.medias[1].formattedSize}*\n`
txt += `*Url Source :* *${data.url}*\n\n`
txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
sendFileFromUrl(m.chat, anu.thumbnail, txt, m)
sendFileFromUrl(m.chat, anu.medias[1].url, mess.succ, m)}
break
case 'like': case 'likee': case 'likedl': {
if (!q) throw 'No Query Url!'
if (!q.includes('likee')) throw m.reply(mess.wrongFormat)
anu = await fetchJson(`https://kunz-gans.herokuapp.com/downloader/likeedl?link=${q}`)
let txt = `*----「 LIKEE-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${anu.title}*\n`
txt += `*Type :* *${anu.medias[1].extension}*\n`
txt += `*Size :* *${anu.medias[1].formattedSize}*\n`
txt += `*Url Source :* *${q}*\n\n`
txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
sendFileFromUrl(m.chat, anu.thumbnail, txt, m)
sendFileFromUrl(m.chat, anu.medias[1].url, mess.succ, m)}
break
case 'tiktokmp3': {
if (!q) throw mess.q
if (!q.includes('tiktok')) throw mess.wrongFormat
await m.reply(mess.wait)
xfar.Tiktok(q).then(async data => {
let txt = `*----「 TIKTOK-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${data.title}*\n`
txt += `*Format :* *${data.medias[3].extension}*\n`
txt += `*Quality :* *${data.medias[3].quality}*\n`
txt += `*Size :* *${data.medias[3].formattedSize}*\n`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
hisoka.sendMessage(m.chat, { audio: { url: `${data.medias[0].url}` }, caption: `${mess.succ}` }, { quoted: m})
})}
break
case 'tiktokwm': case 'tiktok': {
if (!q) throw mess.q
if (!q.includes('tiktok')) throw mess.wrongFormat
await m.reply(mess.wait)
xfar.Tiktok(q).then(async data => {
let txt = `*----「 TIKTOK-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${data.title}*\n`
txt += `*Format :* *${data.medias[0].extension}*\n`
txt += `*Quality :* *${data.medias[0].quality}*\n`
txt += `*Size :* *${data.medias[0].formattedSize}*\n`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
hisoka.sendMessage(m.chat, { video: { url: `${data.medias[0].url}` }, caption: `${mess.succ}` }, { quoted: m})
})}
break
case 'tiktoknowm': {
if (!q) throw mess.q
if (!q.includes('tiktok')) throw mess.wrongFormat
await m.reply(mess.wait)
xfar.Tiktok(q).then(async data => {
let txt = `*----「TIKTOK-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${data.title}*\n`
txt += `*Format :* *${data.medias[2].extension}*\n`
txt += `*Quality :* *${data.medias[2].quality}*\n`
txt += `*Size :* *${data.medias[2].formattedSize}*\n`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
hisoka.sendMessage(m.chat, { video: { url: `${data.medias[0].url}` }, caption: `${mess.succ}` }, { quoted: m})
})}
break
case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'sertitolol': case 'sertifikattolol': {
if (!q) throw mess.q
m.reply(mess.wait)
anu = await getBuffer(`https://api-xcoders.xyz/api/maker/sertitolol?text=${q}&apikey=${apikey.xkey}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'silverplaybutton': case 'gplaybutton': {
if (!q) throw mess.q
m.reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=${apikey.zekskey}&text=${q}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'goldplaybutton': case 'gplaybutton': {
if (!q) throw mess.q
m.reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=${apikey.zekskey}&text=${q}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'hartatahta': case 'naruto': case 'matrix': case 'breakwall': case 'dropwater': case 'wolflogo': case 'watercolour': {
if (!q) throw mess.q
m.reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${apikey.zekskey}&text=${q}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
if (!q) throw mess.q
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://zenzapi.xyz/photooxy/${command}?text=${q}&apikey=${apikey.zenzkey}` }, caption: mess.succ }, { quoted: m })
}
break
case 'nulis': case 'tulis': {
if (!q) throw mess.q
m.reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/nulis?apikey=${apikey.zekskey}&text=${q}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
if (!q) throw mess.q
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://zenzapi.xyz/ephoto/${command}?text=${q}&apikey=${apikey.zenzkey}` }, caption: mess.succ }, { quoted: m })
}
break
case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater': case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
if (!q) throw mess.q
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://zenzapi.xyz/textpro/${command}?text=${q}&apikey=${apikey.zenzkey}` }, caption: mess.succ }, { quoted: m})
}
break
case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween': {
if (!q) throw mess.q
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://myselfff.herokuapp.com/docs/textpro/${command}?text=${text}` }, caption: mess.succ }, { quoted: m})
}
break
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
case 'juzamma': {
if (args[0] === 'pdf') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/dataB/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/dataB/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/dataB/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/dataB/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tafsirsurah': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `ã€Œ *Tafsir Surah* ã€

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
}
break
case 'kisahnabi': {
if (!q) throw mess.q
anu = await fetchJson(`https://hardianto.xyz/api/muslim/kisahnabi?nabi=${q}&apikey=${apikey.harkey}`)
m.reply(`*Nama* : ${anu.result.name}\n*Kelahiran* : *${anu.result.kelahiran}*\n*Wafat usia* : *${anu.result.wafat_usia}*\n*Tempat* : *${anu.result.singgah}*\n\n*Kisah* : \n${anu.result.kisah}`)
}
break
case 'anonymous': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, `${namebot}`, m)
}
break
case 'keluar': case 'leave': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
throw false
}
m.reply('Ok')
let other = room.other(m.sender)
if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'mulai': case 'start': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, `${namebot}`, m)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `${namebot}`, m)
room.b = m.sender
room.state = 'CHATTING'
await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `${namebot}`, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, `${namebot}`, m)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
throw false
}
let other = romeo.other(m.sender)
if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `${namebot}`, m)
room.b = m.sender
room.state = 'CHATTING'
await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `${namebot}`, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, `${namebot}`, m)
}}
break
case 'sendkontak': case 'sendcontact': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
throw false
}
let profile = await hisoka.profilePictureUrl(room.b)
let status = await hisoka.fetchStatus(room.b)
let msg = await hisoka.sendImage(room.a, profile, `Nama : ${await hisoka.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
hisoka.sendContact(room.a, [room.b.split("@")[0]], msg)
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang JadianðŸ’– Jangan lupa pajak jadiannyaðŸ¤

@${orang.split('@')[0]} â¤ï¸ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, jawab, `${namebot}`, m, {mentions: menst})
}
break
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `ðŸ‘«Jodoh mu adalah

@${me.split('@')[0]} â¤ï¸ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, jawab, `${namebot}`, m, {mentions: ments})
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'tebak': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban: ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${namebot}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'bendera') {
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/dataB/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMedia(m.chat, result.img, '', m, { caption: `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : 60s` }).then(() => {
console.log("Jawaban: " + result.name)
tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], "Waktu Habis\nJawaban: " + result.name , `${namebot}`, m)
delete tebakbendera[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/dataB/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban: ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${namebot}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/dataB/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban: ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${namebot}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/dataB/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban: ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${namebot}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/dataB/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban: ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${namebot}`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/dataB/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban: ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${namebot}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'slot': {
const one = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍐',
'?? : 🍋 : 🔔', //Arasya
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🔔',    
'🍐 : 🍒 : 🍋',
'🍐 : 🍒 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍌 : 🔔',
'🥑 : 🥑 : 🥑 Win👑',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🌶️ : 🌶️ : 🌶️ Win👑',
'🍋 : 🍋 : 🍋 Win👑',
'🔔 : 🔔 : 🍇',
'🔔 : 🍇 : 🍇', 
'🔔 : 🍐 : 🔔',
'🍌 : 🍌 : 🍌 Win👑'
]
const two = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍐',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🔔',    
'🍐 : 🍒 : 🍋',
'🍐 : 🍒 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍌 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🔔 : 🔔 : 🍇',
'🔔 : 🍇 : 🍇', 
'🔔 : 🍐 : 🔔',
]
 const three = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍐',
'🍊 : ?? : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🔔',    
'🍐 : 🍒 : 🍋',
'🍐 : 🍒 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍌 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🔔 : 🔔 : 🍇',
'🔔 : 🍇 : 🍇', 
'🔔 : 🍐 : 🔔',
]
const selot = one[Math.floor(Math.random() * pepekk.length)]
const kalahnya = two[Math.floor(Math.random() * kalah.length)]
const kalahnya2 = three[Math.floor(Math.random() * kalah2.length)]
var slotnya = `*[ 🎰 | SLOTS ]*

${kalahnya}
${selot}
${kalahnya2}

*Jika Kamu Mendapatkan Item Yang Sama, Kamu Menang!*`
m.reply(`${slotnya}`)}
break
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/dataB/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await hisoka.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'profile': case 'profil': case 'rpgmenu': case 'menurpg':;{
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pp = monospace(`📍 Profile Player
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 Inventory :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Berlian : ${getDm(sender)}
 • Kayu : ${getKayu(sender)}
 • Daun : ${getDaun(sender)}
 • Sampah : ${getSampah(sender)}
 
🐨 Hewan :
 • Monyet : ${getMonyet(sender)}
 • Gorilla : ${getGorilla(sender)}
 • Harimau : ${getHarimau(sender)}
 • Macan : ${getMacan(sender)}
 • Kuda : ${getKuda(sender)}
 • Zebra : ${getZebra(sender)}
 • Rusa : ${getSRusa(sender)}
 • Kerbau : ${getKerbau(sender)}
 • Sapi : ${getSapi(sender)}
 • Babi : ${getBabi(sender)}
 • Garuda : ${getGaruda(sender)}
 • Domba : ${getDomba(sender)}
 • Kelelawar : ${getKelelawar(sender)}
 • Ikan : ${getFish(sender)}
             
🏔️ Menu RPG
 • joinrpg
 • mining
 • miningxp
 • mancing
 • adventure
 • berburu
 • menebang
 • mulung
 • myinventori
 • topleaderboard
 
⚔️ Farming RPG
 • killslime
 • killgoblin
 • killdevil
 • killbehemoth
 • killdemond
 • killdemondking 
 
🛒 Sell Inventory
 • sellbesi <jumlah>
 • sellemas <jumlah>
 • selldiamond <jumlah>
 • sellkayu <jumlah>
 • selldaun <jumlah>
 • sellhewan monyet <jumlah>
 • sellhewan gorilla <jumlah>
 • sellhewan harimau <jumlah>
 • sellhewan macan <jumlah>
 • sellhewan kuda <jumlah>
 • sellhewan zebra <jumlah>
 • sellhewan rusa <jumlah>
 • sellhewan kerbau <jumlah>
 • sellhewan sapi <jumlah>
 • sellhewan babi <jumlah>
 • sellhewan garuda <jumlah>
 • sellhewan domba <jumlah>
 • sellhewan kelelawar <jumlah>
 • sellhewan ikan <jumlah>
`)
const dafpetualang = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
 hydratedContentText: `${pp}`,
 Message: { 
 jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') },
 hydratedFooterText: `${namebot}`,
 hydratedButtons: [{
 urlButton: {
 displayText: 'website',
 url: 'https://github.com/kunzxd404',
 }
 },
 {
 quickReplyButton: {
 displayText: 'My Inventory',
 id: '.mybag',
 }
 },
 {
 quickReplyButton: {
 displayText: '📍 Credits',
 id: '.tqtq',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Adventure',
 id: '.adventure',
 }
 }]
 }
 }
 }), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, dafpetualang.message, { messageId: dafpetualang.key.id}, { quoted: m })}
break
case 'mybag': case 'inventori': case 'cekinven': case 'myinventori': {
done = monospace(`📍 Profile Player
• Nama : ${pushname}
• Rank : ${role}
• Status : ${elit}
• Xp : ${getLevelingXp(sender)}/${reqXp}
• Level : ${getLevelingLevel(sender)}

🎒 Inventory :
• Emas : ${getEmas(sender)}
• Uang : $${(getBalance(sender, balance))}
• Besi : ${getBesi(sender)}
• Berlian : ${getDm(sender)}
• Ikan : ${getFish(sender)}
• Kayu : ${geKayu(sender)}
• Daun : ${getFish(sender)}
• Sampah : ${getSampah(sender)}

🐨 Hewan :
 • Monyet : ${getMonyet(sender)}
 • Gorilla : ${getGorilla(sender)}
 • Harimau : ${getHarimau(sender)}
 • Macan : ${getMacan(sender)}
 • Kuda : ${getKuda(sender)}
 • Zebra : ${getZebra(sender)}
 • Rusa : ${getSRusa(sender)}
 • Kerbau : ${getKerbau(sender)}
 • Sapi : ${getSapi(sender)}
 • Babi : ${getBabi(sender)}
 • Garuda : ${getGaruda(sender)}
 • Domba : ${getDomba(sender)}
 • Kelelawar : ${getKelelawar(sender)}
 • Ikan : ${getIkan(sender)}`)
let buttons = [
{buttonId: `.adventure`, buttonText: {displayText: 'Adventure'}, type: 1}
]
let button = {
text: `${done}`,
footer: `${namebot}`,
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, button, { quoted: m })
}
break
case 'joinrpg': {
if (isPetualang) return reply('Kamu sudah menjadi petualang')
_petualang.push(sender)
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_petualang))
capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!`
const dafpetualang = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
 hydratedContentText: capt,
 Message: { 
 jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') },
 hydratedFooterText: `${namebot}`,
 hydratedButtons: [{
 urlButton: {
 displayText: 'website',
 url: 'https://github.com/kunzxd404',
 }
 },
 {
 quickReplyButton: {
 displayText: 'My profil',
 id: '.profile',
 }
 },
 {
 quickReplyButton: {
 displayText: '📍 Credits',
 id: '.infobot',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Adventure',
 id: '.adventure',
 }
 }]
 }
 }
 }), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, dafpetualang.message, { messageId: dafpetualang.key.id}, { quoted: m })
}
addInventori(sender)
addLevelingId(sender)
break
case 'mancing': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
ikanno = Math.ceil(Math.random() * 13)
setTimeout( () => {
caption = monospace(`「 Memancing 」

 • Tangkapan : ${ikannya}

 • Mendapatkan : ${ikanno} ${ikannya}
 • Exp : ${xp}Xp`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: caption,
locationMessage: { 
jpegThumbnail: gammoth },
hydratedFooterText: `${namebot}`,
hydratedButtons: [ 
{
quickReplyButton: {
displayText: 'Mancing lagi',
id: '.mancing',
}
},
{
quickReplyButton: {
displayText: 'Cek Inventori',
id: '.myinventori',
}
},
{
quickReplyButton: {
displayText: 'Myprofile',
id: '.profil',
}
}]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
}, 11000)
setTimeout( () => {
hisoka.sendText(from, '*Selesai memancing*. . .') 
}, 7000) ,
setTimeout( () => {
hisoka.sendText(from, '*Menemukan ikan*. . .') 
}, 4000) ,
setTimeout( () => {
hisoka.sendText(from, '🎣 *Mulai memancing*. . .') 
}, 1500) ,
addIkan(sender, ikanno)
addLevelingXp(sender, xp)}
break
case 'mining': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
xp = Math.ceil(Math.random() * 350)
done = monospace(`「 Mining 」\n • Emas : ${emas}🪙\n • Uang : $${pp}💰\n • Besi : ${besi}⛓️\n • Berlian : ${dm}💎\n• Exp : ${xp}Xp💫`)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
addLevelingXp(sender, xp)
mining = ('Waitt sedang menggali . . .')
setTimeout( () => {
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 hydratedContentText: done,
 locationMessage: { 
 jpegThumbnail: gamning },
 hydratedFooterText: `${namebot}`,
 hydratedButtons: [ 
 {
 quickReplyButton: {
 displayText: 'Mining lagi',
 id: '.mining',
 }

 },
 {
 quickReplyButton: {
 displayText: 'Cek Inventori',
 id: '.myinventori',
 }

 },
 {
 quickReplyButton: {
 displayText: 'Myprofile',
 id: '.profil',
 }
 }]
 }
 }
 }), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
}, 9000) ,
setTimeout( () => {
hisoka.sendText(from, '*Selesai menggali*. . .') 
}, 7000) ,
setTimeout( () => {
hisoka.sendText(from, '*Menemukan bebatuan*. . .') 
}, 4000) ,
setTimeout( () => {
hisoka.sendText(from, '⛏ *Mulai menambang*. . .') 
}, 1500) ,
setTimeout( () => {
hisoka.sendText(from, mining, m) 
}, 0)}
break	
case 'menebang': case 'nebang': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pohonnya = Math.ceil(Math.random() * 10)
xp = Math.ceil(Math.random() * 350)
daun = Math.ceil(Math.random() * 120)
kayu = Math.ceil(Math.random() * 50)
setTimeout( () => {
caption = monospace(`「 Menebang 」\n\n • Mendapatkan : ${pohonnya}🌴\n • Kayu : ${kayu}🪓\n • Daun : ${daun}🍃\n • Exp : ${xp}Xp💫`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: caption,
locationMessage: { 
jpegThumbnail: walbang },
hydratedFooterText: `${namebot}`,
hydratedButtons: [ 
{
quickReplyButton: {
displayText: 'Menebang lagi',
id: '.nebang',
}
},
{
quickReplyButton: {
displayText: 'Cek Inventori',
id: '.myinventori',
}
},
{
quickReplyButton: {
displayText: 'Myprofile',
id: '.profil',
}
}]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
}, 11000)
setTimeout( () => {
hisoka.sendText(from, '*Selesai menebang*. . .') 
}, 7000) ,
setTimeout( () => {
hisoka.sendText(from, '*Menebang pohon*. . .') 
}, 4000) ,
setTimeout( () => {
hisoka.sendText(from, '🪓 *Mencari pohon*. . .') 
}, 1500) ,
addKayu(sender, kayu)
addDaun(sender, daun)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance)}
break
case 'mulung': case 'memulung': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
uang = Math.ceil(Math.random() * 150)
xp = Math.ceil(Math.random() * 350)
sampah = Math.ceil(Math.random() * 120)
setTimeout( () => {
caption = monospace(`「 Mulung 」

Kamu Telah Sampai Di f
Mendapatkan :
 • Uang : ${uang}💰
 • Sampah : ${sampah}🩲
 • Exp : ${xp}Xp💫
`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: caption,
locationMessage: { 
jpegThumbnail: walruan },
hydratedFooterText: `${namebot}`,
hydratedButtons: [ 
{
quickReplyButton: {
displayText: 'Mulung lagi',
id: '.mulung',
}
},
{
quickReplyButton: {
displayText: 'Cek Inventori',
id: '.myinventori',
}
},
{
quickReplyButton: {
displayText: 'Myprofile',
id: '.profil',
}
}]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
}, 11000)
addBalance(sender, uang)
addSampah(sender, sampah)
addLevelingXp(sender, xp)}
break
case 'kolam': case 'kolamikan': {
if (!isPremium) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
txt = `「 Kolam 」

*Kolam* : *${pushname}*

*Jenis Jenis*
🐡 Buntal : ${getBuntal(sender)}
🐠 Dory : ${getDory(sender)}
🦢 Angsa : ${getAngsa(sender)}
🐟 Ikan : ${getIkan(sender)}
🐬 Lumba² : ${getLumba(sender)}
`}
break
case 'berburu': case 'buru': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
monyet = Math.ceil(Math.random() * 10)
gorilla = Math.ceil(Math.random() * 5)
harimau = Math.ceil(Math.random() * 3)
macan = Math.ceil(Math.random() * 4)
kuda = Math.ceil(Math.random() * 5)
zebra = Math.ceil(Math.random() * 5)
rusa = Math.ceil(Math.random() * 7)
kerbau = Math.ceil(Math.random() * 2)
sapi = Math.ceil(Math.random() * 3)
babi = Math.ceil(Math.random() * 8)
anjing = Math.ceil(Math.random() * 8)
garuda = Math.ceil(Math.random() * 1)
domba = Math.ceil(Math.random() * 8)
kelelawar = Math.ceil(Math.random() * 15)
uang = Math.ceil(Math.random() * 10)
xp = Math.ceil(Math.random() * 70)
setTimeout( () => {
caption = monospace(`「 Berburu 」
 • Mendapatkan : 
 
🐒 = ${monyet}          🦍=  ${gorilla}
🐅 = ${harimau}           🦇 = ${kelelawar}
🐆 = ${macan}          🐎 = ${kuda}
🦓 = ${zebra}          🦌 = ${rusa}
🐃 = ${kerbau}          🐄 = ${sapi}
🐖 = ${babi}          🦅 = ${garuda}
🐑 = ${domba}          Xp = ${xp}💫
`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: caption,
locationMessage: { 
jpegThumbnail: walruan },
hydratedFooterText: `${namebot}`,
hydratedButtons: [ 
{
quickReplyButton: {
displayText: 'Berburu lagi',
id: '.buru',
}
},
{
quickReplyButton: {
displayText: 'Cek Inventori',
id: '.myinventori',
}
},
{
quickReplyButton: {
displayText: 'Myprofile',
id: '.profil',
}
}]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
}, 11000)
setTimeout( () => {
hisoka.sendText(from, '*KPUMNN*') 
}, 7000) ,
setTimeout( () => {
hisoka.sendText(from, '*DOR DOR*') 
}, 7000) ,
setTimeout( () => {
hisoka.sendText(from, '*Menemukan hewan*. . .') 
}, 4000) ,
setTimeout( () => {
hisoka.sendText(from, '🏹 *Mulai berburu*. . .') 
}, 1500) ,
addMonyet(sender, monyet)
addGorilla(sender, gorilla)
addHarimau(sender, harimau)
addMacan(sender, macan)
addKuda(sender, kuda)
addZebra(sender, zebra)
addRusa(sender, rusa)
addKerbau(sender, kerbau)
addSapi(sender, sapi)
addBabi(sender, babi)
addGaruda(sender, garuda)
addDomba(sender, domba)
addKelelawar(sender, kelelawar)
addLevelingXp(sender, xp)
addBalance(sender, uang, balance)}
break
case 'miningexp': case 'cariexp': case 'miningxp': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
xp = Math.ceil(Math.random() * 150)
m.reply(`*Selamat ${pushname} Kamu Mendapatkan ${xp}Xp💫*`)}
break
case 'adventure': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon','Beberapa Hewan']
const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
const matigak = ['Death','Menang']
const matilah = matigak[Math.floor(Math.random()* matigaklength)]
anu = fs.readFileSync('./dataB/dungeon.js');
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)
const adven = Math.ceil(Math.random() * 1000)
const money = Math.ceil(Math.random() * 300)						
setTimeout( () => {		
caption = monospace(`「 *${matilah}* 」\n\n • Tempat${ad}\n • Uang : $${money}💰\n • Exp : ${adven}Xp💫`)
but = [
{ buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
let buttoncekinvenyory = {
text: `${caption}`,
footer: `${namebot}`,
buttons: but,
headerType: 2
}
hisoka.sendMessage(m.chat, buttoncekinvenyory, { quoted: m })
}, 7000)
setTimeout( () => {
hisoka.sendText(m.chat, `Awass`)
}, 5000),
setTimeout( () => {
hisoka.sendText(m.chat, `Tiba tiba ada ${sesuatu}`) 
}, 3000) ,
setTimeout( () => {
hisoka.sendText(m.chat, `${pushname} sedang bertualang`) 
}, 1500) ,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)}
break
case 'sellhewan': case 'jualhewan': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
if (!args[0]) throw `1. monyet\n2. gorilla\n3. \n4. harimau\n5. macan\n6. kuda\n7. zebra\n8. rusa\n9. kerbau\n10. aapi\n11.babi\n12. garuda\n13. domba\n14. kelelawar\n15. ikan\n\nContoh penggunaan:\n${prefix + command} domba 12`
if (!args[1]) throw `1. monyet\n2. gorilla\n3. \n4. harimau\n5. macan\n6. kuda\n7. zebra\n8. rusa\n9. kerbau\n10. aapi\n11.babi\n12. garuda\n13. domba\n14. kelelawar\n15. ikan\n\nContoh penggunaan:\n${prefix + command} domba 12`
jmlh = body.slice(10)
rp = `${args[1]}` * jmlh
if (args[0] === 'monyet') {
if (getMonyet(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellMonyet(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getMonyet(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'gorilla') {
if (getGorilla(sender) < jmlh) return m.reply(`Besi Kamu Tidak Cukup`)
sellGorilla(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getMonyet(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'harimau') {
if (getHarimau(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellHarimau(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getHarimau(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'macan') {
if (getMacan(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellMacan(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getMacan(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'kuda') {
if (getKuda(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellKuda(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getKuda(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'zebra') {
if (getZebra(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellZebra(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getZebra(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'rusa') {
if (getRusa(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellRusa(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getRusa(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'kerbau') {
if (getKuda(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellKuda(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getKuda(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'sapi') {
if (getSapi(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellSapi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getSapi(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'babi') {
if (getBabi(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellBabi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getBabi(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'garuda') {
if (getGaruda(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellGaruda(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getGaruda(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'domba') {
if (getDomba(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellDomba(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getDomba(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'kelelawar') {
if (getKelelawar(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellKelelawar(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getKelelawar(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'ikan') {
if (getIkan(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellIkan(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getIkan(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: `${namebot}`, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
}}
break
case 'sellbesi': case 'jualbesi': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
if (!q) return m.reply(`Masukan jumlah yang ingin dijual\ncontoh Jualbesi 10`)
jmlh = body.slice(10)
rp = `${q}` * jmlh
if (getBesi(sender) < jmlh) return m.reply(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : ${q}\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = {
text: `${capti}`,
footer: `${namebot}`,
buttons: but,
headerType: 2
}
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })}
break
case 'sellemas': case 'jualemas': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
if (!q) return m.reply(`Masukan jumlah yang ingin dijual\ncontoh Jualemas 10`)
ttl = body.slice(10)
var etoo = `${q}` * ttl
if (getEmas(sender) < ttl) return m.reply(`Emas Kamu Tidak Cukup`)
sellEmas(sender, ttl)
addBalance(sender, etoo, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : ${q}\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyoryi = {
text: `${capti}`,
footer: `${namebot}`,
buttons: but,
headerType: 2
}
hisoka.sendMessage(m.chat, buttoncekinvenyoryi, { quoted: m })}
break 
case 'selldiamond': case 'jualdiamond': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
if (!q) return m.reply(`Masukan jumlah yang ingin dijual\ncontoh Jualdiamond 10`)
ttl = body.slice(10)
var etoo = `${q}` * ttl
if (getDm(sender) < ttl) return m.reply(`Diamond Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : ${q}\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyoryy = {
text: `${capti}`,
footer: `${namebot}`,
buttons: but,
headerType: 2
}
hisoka.sendMessage(m.chat, buttoncekinvenyoryy, { quoted: m })}
break 
case 'sellkayu': case 'jualkayu': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
if (!q) return m.reply(`Masukan jumlah yang ingin dijual\ncontoh Jualkayu 10`)
ttl = body.slice(10)
var etoo = `${q}` * ttl
if (getKayu(sender) < ttl) return m.reply(`Kayu Kamu Tidak Cukup`)
sellKayu(sender, ttl)
addBalance(sender, etoo, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Kayu : ${q}\n • Status : Sukses\n • Sisa Kayu : ${getKayu(sender)}\n • Hasil Penjualan : $${etoo}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyoryy = {
text: `${capti}`,
footer: `${namebot}`,
buttons: but,
headerType: 2
}
hisoka.sendMessage(m.chat, buttoncekinvenyoryy, { quoted: m })}
break 
case 'selldaun': case 'jualdaun': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
if (!q) return m.reply(`Masukan jumlah yang ingin dijual\ncontoh Jualkayu 10`)
ttl = body.slice(10)
var etoo = `${q}` * ttl
if (getDaun(sender) < ttl) return m.reply(`Daun Kamu Tidak Cukup`)
sellDaun(sender, ttl)
addBalance(sender, etoo, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Daun : ${q}\n • Status : Sukses\n • Sisa Kayu : ${getKayu(sender)}\n • Hasil Penjualan : $${etoo}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyoryy = {
text: `${capti}`,
footer: `${namebot}`,
buttons: but,
headerType: 2
}
hisoka.sendMessage(m.chat, buttoncekinvenyoryy, { quoted: m })}
break 
case 'leaderboard': case 'lb': case 'topleaderboard': {
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = ' > TOP LEADERBOARD <\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
}
await m.reply(leaderboardlvl)
} catch (err) {
console.error(err)
await m.reply(`minimal 10 user untuk bisa mengakses database`)
}}
break
case 'slime': case 'killslime': case 'bunuhslime': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pp = randomNomor(300)
emas = randomNomor(40)
dm = randomNomor(20)
besi = randomNomor(50)
xp = Math.ceil(Math.random() * 1000)
done = monospace(`☠ Misi membunuh slime

🎁 Hadiah membunuh slime
 • Uang : ${pp}💰
 • Besi : ${besi}⛓️
 • Emas : ${emas}🌟
 • Diamond : ${dm}💎
 • Exp : ${xp}Xp💫`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 hydratedContentText: done,
 locationMessage: { 
 jpegThumbnail: limethumb },
 hydratedFooterText: `${namebot}`,
 hydratedButtons: [ 
 {
 quickReplyButton: {
 displayText: 'Bunuh slime lagi',
 id: '.slime',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Cek Inventori',
 id: '.myinventori',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Myprofile',
 id: '.profil',
 }
 }]
 }
 }
 }), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
addLevelingXp(sender, xp)}
break
case 'goblin': case 'killgoblin': case 'bunuhgoblin': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pp = randomNomor(300)
emas = randomNomor(40)
dm = randomNomor(20)
besi = randomNomor(50)
xp = Math.ceil(Math.random() * 1000)
done = monospace(`☠ Misi membunuh goblin

🎁 Hadiah membunuh goblin
 • Uang : ${pp}💰
 • Besi : ${besi}⛓️
 • Emas : ${emas}🌟
 • Diamond : ${dm}💎
 • Exp : ${xp}Xp💫`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 hydratedContentText: done,
 locationMessage: { 
 jpegThumbnail: blinthumb },
 hydratedFooterText: `${namebot}`,
 hydratedButtons: [ 
 {
 quickReplyButton: {
 displayText: 'Bunuh goblin lagi',
 id: '.goblin',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Cek Inventori',
 id: '.myinventori',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Myprofile',
 id: '.profil',
 }
 }]
 }
 }
 }), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
addLevelingXp(sender, xp)}
break
case 'devil': case 'killdevil': case 'bunuhdevil': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pp = randomNomor(300)
emas = randomNomor(40)
dm = randomNomor(20)
besi = randomNomor(50)
xp = Math.ceil(Math.random() * 1000)
done = monospace(`☠ Misi membunuh devil

🎁 Hadiah membunuh devil
 • Uang : ${pp}💰
 • Besi : ${besi}⛓️
 • Emas : ${emas}🌟
 • Diamond : ${dm}💎
 • Exp : ${xp}Xp💫`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 hydratedContentText: done,
 locationMessage: { 
 jpegThumbnail: vilthumb },
 hydratedFooterText: `${namebot}`,
 hydratedButtons: [ 
 {
 quickReplyButton: {
 displayText: 'Bunuh devil lagi',
 id: '.devil',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Cek Inventori',
 id: '.myinventori',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Myprofile',
 id: '.profil',
 }
 }]
 }
 }
 }), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
addLevelingXp(sender, xp)}
break
case 'behemoth': case 'killbehemoth': case 'bunuhbehemoth': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pp = randomNomor(300)
emas = randomNomor(40)
dm = randomNomor(20)
besi = randomNomor(50)
xp = Math.ceil(Math.random() * 1000)
done = monospace(`☠ Misi membunuh behemoth

🎁 Hadiah membunuh behemoth
 • Uang : ${pp}💰
 • Besi : ${besi}⛓️
 • Emas : ${emas}🌟
 • Diamond : ${dm}💎
 • Exp : ${xp}Xp💫`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 hydratedContentText: done,
 locationMessage: { 
 jpegThumbnail: mothumb },
 hydratedFooterText: `${namebot}`,
 hydratedButtons: [ 
 {
 quickReplyButton: {
 displayText: 'Bunuh behemoth lagi',
 id: '.behemoth',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Cek Inventori',
 id: '.myinventori',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Myprofile',
 id: '.profil',
 }
 }]
 }
 }
 }), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
addLevelingXp(sender, xp)}
break
case 'demon': case 'killdemon': case 'bunuhdemon': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pp = randomNomor(300)
emas = randomNomor(40)
dm = randomNomor(20)
besi = randomNomor(50)
xp = Math.ceil(Math.random() * 1000)
done = monospace(`☠ Misi membunuh demon

🎁 Hadiah membunuh demon
 • Uang : ${pp}💰
 • Besi : ${besi}⛓️
 • Emas : ${emas}🌟
 • Diamond : ${dm}💎
 • Exp : ${xp}Xp💫`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 hydratedContentText: done,
 locationMessage: { 
 jpegThumbnail: monthumb },
 hydratedFooterText: `${namebot}`,
 hydratedButtons: [ 
 {
 quickReplyButton: {
 displayText: 'Bunuh demon lagi',
 id: '.demon',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Cek Inventori',
 id: '.myinventori',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Myprofile',
 id: '.profil',
 }
 }]
 }
 }
 }), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
addLevelingXp(sender, xp)}
break
case 'demonking': case 'killdemonking': case 'bunuhdemonking': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pp = randomNomor(300)
emas = randomNomor(40)
dm = randomNomor(20)
besi = randomNomor(50)
xp = Math.ceil(Math.random() * 1000)
done = monospace(`☠ Misi membunuh demonking

🎁 Hadiah membunuh demonking
 • Uang : ${pp}
 • Besi : ${besi}
 • Emas : ${emas}
 • Diamond : ${dm}
 • Exp : ${xp}Xp💫`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 hydratedContentText: done,
 locationMessage: { 
 jpegThumbnail: kingthumb },
 hydratedFooterText: `${namebot}`,
 hydratedButtons: [ 
 {
 quickReplyButton: {
 displayText: 'Bunuh demonking lagi',
 id: '.demonking',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Cek Inventori',
 id: '.myinventori',
 }
 },
 {
 quickReplyButton: {
 displayText: 'Myprofile',
 id: '.profil',
 }
 }]
 }
 }
 }), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m }) 
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
addLevelingXp(sender, xp)}
break
case 'q': case 'quoted': {
if (!isCreator) throw mess.owner
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await hisoka.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'eval': {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
break
case 'public': {
if (!isCreator) throw mess.owner
hisoka.public = true
m.reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isCreator) throw mess.owner
hisoka.public = false
m.reply('Sukses Change To Self Usage')
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'My Group',
url: 'https://chat.whatsapp.com/GDZOBuMkFSCKw6mzDUDoPd'
}
},
{
urlButton: {
displayText: 'My Youtube',
url: 'https://youtube.com/channel/UCUzeU3gvoQPV1joakMUOTtg'
}
},
{
quickReplyButton: {
displayText: 'Status Bot',
id: `${prefix}ping`
}
},
{
quickReplyButton: {
displayText: 'Owner',
id: `${prefix}owner`,
}
},
{
quickReplyButton: {
displayText: 'Script',
id: `${prefix}sc`
}
}]
fatihgans = fs.readFileSync('./lib/hisoka.jpg')
let txt = `「 Broadcast Bot 」\n\n${text}`
hisoka.send5ButImg(yoi, txt, `${namebot}`, fatihgans, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'sendsesi': case 'session': case'sendsession': {
if (!isCreator) throw mess.owner
hisoka.sendMessage(m.chat, {document: fs.readFileSync(`${sessionName}.json`), mimetype: 'json', fileName: `session-multi-device.json`}, {quoted:m})
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'lockcmd': {
if (!isCreator) throw mess.owner
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in cmdmedia)) throw 'Hash not found in database'
cmdmedia[hash].locked = !/^un/i.test(command)
fs.writeFileSync('./src/cmdmedia.json', JSON.stringify(cmdmedia))
m.reply('Done!')
}
break
case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await hisoka.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'My Group',
url: 'https://chat.whatsapp.com/GDZOBuMkFSCKw6mzDUDoPd'
}
},
{
urlButton: {
displayText: 'My Youtube',
url: 'https://youtube.com/channel/UCUzeU3gvoQPV1joakMUOTtg'
}
},
{
quickReplyButton: {
displayText: 'Status Bot',
id: `${prefix}ping`
}
},
{
quickReplyButton: {
displayText: 'Owner',
id: `${prefix}owner`,
}
},
{
quickReplyButton: {
displayText: 'Script',
id: `${prefix}sc`
}
}]
fatihgans = fs.readFileSync('./lib/hisoka.jpg')
let txt = `「 Broadcast Bot 」\n\n${text}`
hisoka.send5ButImg(i, txt, `${namebot}`, fatihgans, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'delete': case 'del': case 'd': {
if (!isCreator) throw mess.owner 
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'setexif': case 'setwmsticker': {
if (!isCreator) throw mess.owner
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
case 'chat': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
hisoka.chatModify({ archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
default:
if (isVO){
if (m.mtype == 'viewOnceMessage' === true ){
msg = {...mek}
msg.message = mek.message.viewOnceMessage.message
msg.message[Object.keys(msg.message)[0]].viewOnce = false
m.reply('ViewOnce Detect')
hisoka.copyNForward(from, msg)
}}
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m = String(err)
await m.reply(m)
}
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

if (budy.startsWith('$')) {
if (!isCreator) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
hisoka.sendText(m.chat, err, m)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
