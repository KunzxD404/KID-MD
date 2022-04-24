require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, WAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const fetch = require('node-fetch')
const gis = require('g-i-s')
const xfar = require('xfarr-api')
const os = require('os')
const Math_js = require('mathjs')
const { fromBuffer } = require('file-type')
const path = require('path')
const brainly = require('brainly-scraper')
const yts = require('yt-search')
const quote = require('quote-indo')
const speed = require('performance-now')
const moment = require("moment-timezone");
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { nyam, animeStory, lolinya } = require('./lib/buff')
const { msgFilter } = require('./lib/antispam')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { jadwalbola, jadwaltv, jadwalsholat, youtube, igstalk, getLink, mediafire } = require('./lib/scraper')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { addBalance, kurangBalance, getBalance } = require("./lib/balance");
const { addEmas, sellEmas, getEmas, addDm, sellDm, getDm, addBesi, sellBesi, getBesi, addKayu, sellKayu, getKayu, addDaun, sellDaun, getDaun, addSampah, sellSampah, getSampah, addMonyet, sellMonyet, getMonyet, addGorilla, sellGorilla, getGorilla, addAnjing, sellAnjing, getAnjing, addHarimau, addMacan, addKuda, addZebra, addRusa, addKerbau, addSapi, addBabi, addGaruda, addDomba, addKelelawar, sellHarimau, sellMacan, sellKuda, sellZebra, sellRusa, sellKerbau, sellSapi, sellBabi, sellGaruda, sellDomba, sellKelelawar, checkPetualangUser, addInventori, addIkan, sellIkan, getIkan, addRumah, sellRumah, getRumah, addRumahsakit, sellRumahsakit, getRumahsakit, addKantorpolisi, sellKantorpolisi, getKantorpolisi, addToko, sellToko, getToko, addOrderan, getOrderan }= require('./lib/rpgfunction')
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
const tebaklagu = db.data.game.tebaklagu = []
const tebakbendera = db.data.game.tebakbendera = []
const _family100 = db.data.game.family100 = []
const kuismath = db.data.game.math = []
const tebakgambar = db.data.game.tebakgambar = []
const tebakkata = db.data.game.tebakkata = []
const caklontong = db.data.game.lontong = []
const caklontong_desk = db.data.game.lontong_desk = []
const tebakkalimat = db.data.game.kalimat = []
const tebaklirik = db.data.game.lirik = []
const tebaktebakan = db.data.game.tebakan = []
const vote = db.data.others.vote = []
const balance = JSON.parse(fs.readFileSync('./dataB/balance.json'));
const _RPG = JSON.parse(fs.readFileSync('./dataB/inventori.json'))
const _level = JSON.parse(fs.readFileSync('./dataB/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./dataB/inventori.json'))
const sim = JSON.parse(fs.readFileSync('./dataB/simi.json'))
const daftaruser = JSON.parse(fs.readFileSync('./dataB/User.json'))

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await hisoka.decodeJid(hisoka.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const from = m.key.remoteJid
const sender = mek.key.fromMe
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isSimi = m.isGroup ? sim.includes(from) : false
const limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
const isPetualang = checkPetualangUser(m.sender)
const isBanned = isPremium || global.banned.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isUser = daftaruser.includes(m.sender)
const createMessage = async (jidnya, kontennya, optionnya) => {
return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: hisoka.authState.creds.me.id,upload: hisoka.waUploadToServer})}
const reply = (teks) => { hisoka.sendText(from, teks, text, {quoted:m})}
const fothub = await getBuffer(`https://images.app.goo.gl/txfrYcYHT2XcUg148`)
const reply2 = (teks) => {
hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `KUNZ BOTZ OFFICIAL 1`,"body": `By KunzxD`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fothub ,"sourceUrl": "https://chat.whatsapp.com/GDZOBuMkFSCKw6mzDUDoPd"}}}, { quoted: m})
}
const sendFileFromUrl = async (from, url, caption, mek, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
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
return hisoka.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
}
}
const mentions = (teks, memberr, id) => { (id == null || id == undefined || id == false) ? hisoka.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hisoka.sendMessage(from, teks.trim(), extendedText, { quoted: m, contextInfo: { "mentionedJid": memberr } })}
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}
if (!hisoka.public) {
if (!m.key.fromMe) return
}
if (isCmd && !isUser) {
daftaruser.push(m.sender)
fs.writeFileSync('./dataB/User.json', JSON.stringify(daftaruser, null, 2))
}
if (isCmd && msgFilter.isFiltered(from)) {
reply2(mess.spam)
}
if (m.message) {
hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply2(mess.endLimit)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
db.data.users[m.sender].limit -= 1
}
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
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
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
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

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
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
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
async function sendPlay(from, query) {
var url = await yts(query)
url = url.videos[0].url
youtube(url).then(async data => {
const buttonsDefault = [
{ urlButton: { displayText: `🔗 Url Youtube`, url : `https://youtu.be/${data.id}` } },
{ quickReplyButton: { displayText: `🎥 Video`, id: `${prefix}ytmp4 ${url}` } },
{ quickReplyButton: { displayText: `🎵 Audio`, id: `${prefix}ytmp3 ${url}` } },
{ quickReplyButton: { displayText: `🔍 YT-Search`, id: `${prefix}yts ${q}` } },
]
var teks = `*Judul :* *${data.title}*\n*Size mp4 :* *${data.size}*\n*Size mp3 :* *${data.size_mp3}*`
hisoka.sendMessage(from, { caption: teks, location: { jpegThumbnail: await getBuffer(data.thumb) }, templateButtons: buttonsDefault, footer: namebot, mentions: [m.sender] })
}).catch((e) => {
hisoka.sendMessage(from, { text: mess.error.api }, { quoted: m })
owner.map( i => hisoka.sendMessage(from, { text: `Send Play Error : ${e}` }))
})
}
let but5 = [{
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
├ ➤ Name : ${pushname}
├ ➤ No : @${m.sender.split("@")[0]}
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
displayText: 'Adventure',
id: '.adventure',
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
var buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
var buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
var buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
const walruan = await getBuffer(`https://images.app.goo.gl/FtiBTNRQMBfcuzom9`)
const walbang = await getBuffer(`https://images.app.goo.gl/FtiBTNRQMBfcuzom9`)
const wallung = await getBuffer(`https://images.app.goo.gl/FtiBTNRQMBfcuzom9`)
const gammoth = await getBuffer(`https://images.app.goo.gl/ZLwambzqnsHD7kQW8`)
const gamning = await getBuffer(`https://images.app.goo.gl/WgaoHWq95FCtjkEUA`)
const mothumb = await getBuffer(`https://telegra.ph/file/2c3606d58879cf9efa96f.jpg`)
const blinthumb = await getBuffer(`https://telegra.ph/file/da824d340a60ad55b57c3.jpg`)
const monthumb = await getBuffer(`https://telegra.ph/file/c63d4eb8731290ae2abde.jpg`)
const vilthumb = await getBuffer(`https://telegra.ph/file/3e1e27da647e60feaa112.jpg`)
const kingthumb = await getBuffer(`https://telegra.ph/file/90ddf5a6a486e0e59e572.jpg`)
const limethumb = await getBuffer(`https://telegra.ph/file/119e269dd63adf84cffc3.jpg`)
const cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)

awalan = `╭ *Konnichiwa ${pushname} Senpai, Iam Kid*

╰ *Prefix* - 《${prefix}》`
animeMenu = `《 *Anime Menu* 》
*♟${prefix}quotesanime*
*♟${prefix}anime*
*♟${prefix}character*
*♟${prefix}storyanime*
*♟${prefix}myanimelist*
*♟${prefix}anibatch*
*♟${prefix}anoboy*
*♟${prefix}oploverz*
*♟${prefix}fanfox*
*♟${prefix}nekonime*
*♟${prefix}gogonime*
*♟${prefix}jouganime*
*♟${prefix}nimegami*
*♟${prefix}nekopoion*
*♟${prefix}getnekopoi*
*♟${prefix}neonimeon*
*♟${prefix}kiryuu*
*♟${prefix}kodenuklir*
*♟${prefix}nhentai*
*♟${prefix}randomnhentai*
*♟${prefix}genshinlist*
*♟${prefix}genshin*
*♟${prefix}manga*
*♟${prefix}mangadex*
*♟${prefix}mangatoon*
*♟${prefix}manganato*
*♟${prefix}klikmanga*
*♟${prefix}kissmanga*
*♟${prefix}samehadaku*
*♟${prefix}komikstation*
*♟${prefix}komiku*`
nsfwMenu = `《 *Nsfw&Sfw Menu* 》
*♟${prefix}loli*
*♟${prefix}cosplay*
*♟${prefix}waifu*
*♟${prefix}tickle* 
*♟${prefix}slap* 
*♟${prefix}smug* 
*♟${prefix}baka* 
*♟${prefix}poke* 
*♟${prefix}pat* 
*♟${prefix}neko* 
*♟${prefix}meow* 
*♟${prefix}lizard* 
*♟${prefix}kiss* 
*♟${prefix}hug* 
*♟${prefix}fox_girl* 
*♟${prefix}feed* 
*♟${prefix}cuddle* 
*♟${prefix}woof* 
*♟${prefix}why* 
*♟${prefix}fact* 
*♟${prefix}kemonomimi* 
*♟${prefix}holo* 
*♟${prefix}spoiler* 
*♟${prefix}avatar* 
*♟${prefix}waifu* 
*♟${prefix}gecg* 
*♟${prefix}goose* 
*♟${prefix}wallpaper* 
*♟${prefix}pussy* 
*♟${prefix}neko* 
*♟${prefix}lesbian* 
*♟${prefix}kuni* 
*♟${prefix}cumsluts* 
*♟${prefix}classic* 
*♟${prefix}boobs* 
*♟${prefix}bj* 
*♟${prefix}anal* 
*♟${prefix}avatar* 
*♟${prefix}yuri* 
*♟${prefix}trap* 
*♟${prefix}tits* 
*♟${prefix}kemonomimi* 
*♟${prefix}kitsune* 
*♟${prefix}keta* 
*♟${prefix}holo* 
*♟${prefix}hentai* 
*♟${prefix}futanari* 
*♟${prefix}femdom* 
*♟${prefix}feet* 
*♟${prefix}ero* 
*♟${prefix}blowjob* 
*♟${prefix}spank* 
*♟${prefix}gasm*`
groupMenu = `《 *Group Menu* 》
*♟${prefix}act <option>*
*♟${prefix}deact <option>*
*♟${prefix}ephemeral <option>*
*♟${prefix}infochat <reply pesan bot>*
*♟${prefix}setpp <reply gambar>*
*♟${prefix}setname <text>*
*♟${prefix}group <open/close>*
*♟${prefix}editinfo <open/close>*
*♟${prefix}add @user*
*♟${prefix}kick @user*
*♟${prefix}promote @user*
*♟${prefix}demote @user*
*♟${prefix}hidetag <text>*
*♟${prefix}hidetag20 <text>*
*♟${prefix}tagall <text>*
*♟${prefix}getpp <reply gambar>*
*♟${prefix}vote <text>*
*♟${prefix}linkgroup*
*♟${prefix}revoke*
*♟${prefix}listonline*
*♟${prefix}devote*
*♟${prefix}upvote*
*♟${prefix}cekvote*
*♟${prefix}hapusvote*`
animalMenu = `《 *Animal Menu* 》
*♟${prefix}dog*
*♟${prefix}cat*
*♟${prefix}panda*
*♟${prefix}fox*
*♟${prefix}red_panda*
*♟${prefix}koala*
*♟${prefix}bird*
*♟${prefix}raccoon*
*♟${prefix}kangaroo*`
videoMenu = `《 *Video Menu* 》
*♟${prefix}shaunthesheep <reply image/sticker>*`
downloaderMenu = `《 *Downloader Menu* 》
*♟${prefix}gitclone <url>*
*♟${prefix}sfilemobi <url>*
*♟${prefix}mediafire <url>*
*♟${prefix}telesticker <url>*
*♟${prefix}twitter <url>*
*♟${prefix}play <url>*
*♟${prefix}ytmp4 <url>*
*♟${prefix}ytmp3 <url>*
*♟${prefix}instagram <url>*
*♟${prefix}facebook <url>*
*♟${prefix}tiktok <url>*
*♟${prefix}tiktoknowm <url>*
*♟${prefix}tiktokmp3 <url>*
*♟${prefix}cocofun <url>*
*♟${prefix}xnxx <url>*`
searchMenu = `《 *Search Menu* 》
*♟${prefix}play <query>*
*♟${prefix}ytsearch <query>*
*♟${prefix}calculator <query>*
*♟${prefix}stalkgithub <query>*
*♟${prefix}stalkinstagram <query>*
*♟${prefix}brainly <query>*
*♟${prefix}google <query>*
*♟${prefix}playstore <query>*
*♟${prefix}sfilemobisearch <query>*
*♟${prefix}pinterest <query>*
*♟${prefix}shopee <query>*
*♟${prefix}linkwa <query>*
*♟${prefix}film <query>*
*♟${prefix}lk21 <query>*
*♟${prefix}wattpad <query>*
*♟${prefix}wattpaduser <query>*
*♟${prefix}wallpaper <query>*
*♟${prefix}wikimedia <query>*
*♟${prefix}gimage <query>*
*♟${prefix}alphacoders <query>*
*♟${prefix}webtoon <query>*
*♟${prefix}joox <query>*
*♟${prefix}liriklagu <query>*
*♟${prefix}chordlagu <query>*
*♟${prefix}translate <query>*
*♟${prefix}stickersearch <query>*
*♟${prefix}pornhub <query>*
*♟${prefix}xvideossearch <query>*
*♟${prefix}kbbi <query>*
*♟${prefix}kodepos <query>*
*♟${prefix}herolist*
*♟${prefix}herodetail <query>*`
infoMenu = `《 *Info Menu* 》
*♟${prefix}jadwalbola*
*♟${prefix}jadwaltv*
*♟${prefix}jadwalsholat*
*♟${prefix}infogempa*
*♟${prefix}kodenegara*
*♟${prefix}covidworld*`
socialMenu = `《 *Social Menu* 》
*♟${prefix}mutual*
*♟${prefix}anonymous*
*♟${prefix}start*
*♟${prefix}next*
*♟${prefix}keluar*
*♟${prefix}sendkontak*`
gamesMenu = `《 *Games Menu* 》
*♟${prefix}halah/hilih/huluh/heleh/holoh*
*♟${prefix}jadian*
*♟${prefix}jodohku*
*♟${prefix}tictactoe*
*♟${prefix}delttc*
*♟${prefix}suit*
*♟${prefix}suitpvp*
*♟${prefix}aduayam*
*♟${prefix}tebak <option>*
*♟${prefix}slot*
*♟${prefix}family100*`
funMenu = `《 *Fun Menu* 》
*♟${prefix}cekbapak*
*♟${prefix}cekmati*
*♟${prefix}citacita*
*♟${prefix}hobby*
*♟${prefix}wangy*
*♟${prefix}truth*
*♟${prefix}dare*
*♟${prefix}apakah*
*♟${prefix}bisakah*
*♟${prefix}kapankah*
*♟${prefix}rate*
*♟${prefix}roll*
*♟${prefix}flip*`
rpgMenu = `《 *Rpg Menu* 》
*♟${prefix}rpgmenu*
*♟${prefix}joinrpg*
*♟${prefix}mining*
*♟${prefix}miningxp*
*♟${prefix}mancing*
*♟${prefix}adventure*
*♟${prefix}tembak*
*♟${prefix}berburu*
*♟${prefix}menebang*
*♟${prefix}mulung*
*♟${prefix}ojek*
*♟${prefix}taxy*
*♟${prefix}myinventori*
*♟${prefix}leaderboard*
*♟${prefix}killslime*
*♟${prefix}killgoblin*
*♟${prefix}killdevil*
*♟${prefix}killbehemoth*
*♟${prefix}killdemond*
*♟${prefix}killdemondking*
*♟${prefix}pasar*`
randomMenu = `《 *Random Menu* 》
*♟${prefix}darkjoke*
*♟${prefix}meme*
*♟${prefix}gore*
*♟${prefix}pantun*
*♟${prefix}couple*
*♟${prefix}ceritasex*
*♟${prefix}ceritahoror*
*♟${prefix}ceritaperjuangan*
*♟${prefix}cecan*
*♟${prefix}asupan*
*♟${prefix}bokep*
*♟${prefix}faktaunik*
*♟${prefix}katabijak*
*♟${prefix}quotes*
*♟${prefix}quotebucin*
*♟${prefix}quotekehidupan*
*♟${prefix}quotegalau*
*♟${prefix}tag*
*♟${prefix}tagme*`
islamicMenu = `《 *Islamic Menu* 》
*♟${prefix}asmaulhusna*
*♟${prefix}iqra*
*♟${prefix}hadist*
*♟${prefix}alquran*
*♟${prefix}juzamma*
*♟${prefix}tafsirsurah*
*♟${prefix}kisahnabi*`
voiceMenu = `《 *Voice Changer* 》
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
*♟${prefix}tupai*`
primbonMenu = `《 *Primbon Menu* 》
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
*♟${prefix}shio*`
toolsMenu = `《 *Tools Menu* 》
*♟${prefix}toimage*
*♟${prefix}sticker*
*♟${prefix}stickerwm*
*♟${prefix}tovideo*
*♟${prefix}togif*
*♟${prefix}tourl*
*♟${prefix}tinyurl*
*♟${prefix}tomp3*
*♟${prefix}tovn*
*♟${prefix}removebg*
*♟${prefix}emojimix*
*♟${prefix}semoji*
*♟${prefix}attp*
*♟${prefix}ttp*
*♟${prefix}ebinary*
*♟${prefix}dbinary*
*♟${prefix}ebase64*
*♟${prefix}debase64*
*♟${prefix}ehex*
*♟${prefix}dhex*
*♟${prefix}styletext*
*♟${prefix}passwordgen*
*♟${prefix}get*
*♟${prefix}readmore*
*♟${prefix}qrcode*
*♟${prefix}ssweb*`
canvasMenu = `《 *Canvas Menu* 》
*♟${prefix}stickermeme <reply image/sticker>*
*♟${prefix}animecard <reply image/sticker>*
*♟${prefix}lolice <reply image/sticker>*
*♟${prefix}lgbt <reply image/sticker>*
*♟${prefix}pixelate <reply image/sticker>*
*♟${prefix}simpcard <reply image/sticker>*
*♟${prefix}horny <reply image/sticker>*
*♟${prefix}pansexual <reply image/sticker>*
*♟${prefix}nonbinary <reply image/sticker>*
*♟${prefix}lesbian <reply image/sticker>*
*♟${prefix}bisexual <reply image/sticker>*
*♟${prefix}tobecontinue <reply image/sticker>*
*♟${prefix}wasted <reply image/sticker>*
*♟${prefix}wanted <reply image/sticker>*
*♟${prefix}triggered <reply image/sticker>*
*♟${prefix}greyscale <reply image/sticker>*
*♟${prefix}jail <reply image/sticker>*
*♟${prefix}darkness <reply image/sticker>*
*♟${prefix}delete <reply image/sticker>*
*♟${prefix}invert <reply image/sticker>*
*♟${prefix}joke <reply image/sticker>*
*♟${prefix}sepia <reply image/sticker>*
*♟${prefix}blur <reply image/sticker>*
*♟${prefix}circle <reply image/sticker>*
*♟${prefix}fuse <reply image/sticker>*
*♟${prefix}gay <reply image/sticker>*
*♟${prefix}facepalm <reply image/sticker>*
*♟${prefix}beautiful <reply image/sticker>*
*♟${prefix}trash <reply image/sticker>*
*♟${prefix}toilet <reply image/sticker>*
*♟${prefix}place <reply image/sticker>*
*♟${prefix}burning <reply image/sticker>*
*♟${prefix}shattered <reply image/sticker>*
*♟${prefix}mirrors <reply image/sticker>*
*♟${prefix}anaglyph <reply image/sticker>*
*♟${prefix}iphone <reply image/sticker>*
*♟${prefix}flame <reply image/sticker>*
*♟${prefix}frame <reply image/sticker>*
*♟${prefix}memory <reply image/sticker>*
*♟${prefix}nature <reply image/sticker>*
*♟${prefix}ripped <reply image/sticker>*
*♟${prefix}tearing <reply image/sticker>*
*♟${prefix}exposure <reply image/sticker>*
*♟${prefix}scary <reply image/sticker>*
*♟${prefix}rejected <reply image/sticker>*
*♟${prefix}brazzers <reply image/sticker>*
*♟${prefix}ps4 <reply image/sticker>*
*♟${prefix}distort <reply image/sticker>*
*♟${prefix}moustache <reply image/sticker>*
*♟${prefix}frame <reply image/sticker>*
*♟${prefix}emboss <reply image/sticker>*
*♟${prefix}spongebob <reply image/sticker>*
*♟${prefix}discordhouse <reply image/sticker>*
*♟${prefix}karenhave <reply image/sticker>*
*♟${prefix}thanos <reply image/sticker>*
*♟${prefix}approved <reply image/sticker>*
*♟${prefix}burn <reply image/sticker>*
*♟${prefix}challenger <reply image/sticker>*
*♟${prefix}crush <reply image/sticker>*
*♟${prefix}dictator <reply image/sticker>*
*♟${prefix}iphonex <reply image/sticker>*
*♟${prefix}animeface <reply image/sticker>*
*♟${prefix}stickbug <reply image/sticker>*
*♟${prefix}badut2 <reply image/sticker>*
*♟${prefix}badut3 <reply image/sticker>*
*♟${prefix}missionpassed <reply image/sticker>*`
photofMenu = `《 *Photo Filter Menu* 》
*♟${prefix}angie <reply image/sticker>*
*♟${prefix}aria <reply image/sticker>*
*♟${prefix}attic <reply image/sticker>*
*♟${prefix}black-and-white <reply image/sticker>*
*♟${prefix}chrome-1970 <reply image/sticker>*
*♟${prefix}contrast-bandw <reply image/sticker>*
*♟${prefix}creamy <reply image/sticker>*
*♟${prefix}duotone <reply image/sticker>*
*♟${prefix}eva <reply image/sticker>*
*♟${prefix}golden-hour <reply image/sticker>*
*♟${prefix}hana <reply image/sticker>*
*♟${prefix}hdr <reply image/sticker>*
*♟${prefix}japanese <reply image/sticker>*
*♟${prefix}lana <reply image/sticker>*
*♟${prefix}lavender <reply image/sticker>*
*♟${prefix}lemonade <reply image/sticker>*
*♟${prefix}light-leak <reply image/sticker>*
*♟${prefix}lisa <reply image/sticker>*
*♟${prefix}lomo <reply image/sticker>*
*♟${prefix}milk <reply image/sticker>*
*♟${prefix}molly <reply image/sticker>*
*♟${prefix}monochrome <reply image/sticker>*
*♟${prefix}morning <reply image/sticker>*
*♟${prefix}movie <reply image/sticker>*
*♟${prefix}orton <reply image/sticker>*
*♟${prefix}paretro <reply image/sticker>*
*♟${prefix}perfect-bandw <reply image/sticker>*
*♟${prefix}plumy <reply image/sticker>*
*♟${prefix}retrolga <reply image/sticker>*
*♟${prefix}ruby <reply image/sticker>*
*♟${prefix}sand <reply image/sticker>*
*♟${prefix}sapphire <reply image/sticker>*
*♟${prefix}sepia <reply image/sticker>*
*♟${prefix}soft-sepia <reply image/sticker>*
*♟${prefix}solarize <reply image/sticker>*
*♟${prefix}sphinx <reply image/sticker>*
*♟${prefix}venus <reply image/sticker>*
*♟${prefix}viewfinder <reply image/sticker>*
*♟${prefix}warm-sunset <reply image/sticker>*`
photoxyMenu = `《 *Photo Oxy Menu* 》
*♟${prefix}sertitolol <text>*
*♟${prefix}coffee <text>*
*♟${prefix}quotewood <text>*
*♟${prefix}flaming <text>*
*♟${prefix}oceansea <text>*
*♟${prefix}pubg <text>*
*♟${prefix}shadow <text>*
*♟${prefix}rainbow <text>*
*♟${prefix}gravity <text>*
*♟${prefix}burnpaper <text>*
*♟${prefix}smoke <text>*
*♟${prefix}romantic <text>*
*♟${prefix}naruto <text>*
*♟${prefix}lovemessage <text>*
*♟${prefix}grass <text1|text2>*
*♟${prefix}doubleheart <text1|text2>*
*♟${prefix}coffecup <text1|text2>*
*♟${prefix}lovetext <text1|text2>*
*♟${prefix}butterfly <text1|text2>*
*♟${prefix}slidetext <text1|text2>*`
textproMenu = `《 *Text Pro Menu* 》
*♟${prefix}ytcomment <comment|username>*
*♟${prefix}neon <text>*
*♟${prefix}snowtext <text>*
*♟${prefix}cloudtext <text>*
*♟${prefix}3dluxury <text>*
*♟${prefix}3dgradient <text>*
*♟${prefix}blackpink <text>*
*♟${prefix}realisticcloud <text>*
*♟${prefix}cloudsky <text>*
*♟${prefix}sandsummerbeach <text>*
*♟${prefix}sandwriting <text>*
*♟${prefix}sandengraved <text>*
*♟${prefix}summerysandwriting <text>*
*♟${prefix}balloontext <text>*
*♟${prefix}3dglue <text>*
*♟${prefix}balloontext <text>*
*♟${prefix}metaldarkgold <text>*
*♟${prefix}neongalaxy <text>*
*♟${prefix}1917 <text>*
*♟${prefix}minion3d <text>*
*♟${prefix}holographic3d <text>*
*♟${prefix}metalpurpledual <text>*
*♟${prefix}deluxesilver <text>*
*♟${prefix}glossybluemetal <text>*
*♟${prefix}deluxegold <text>*
*♟${prefix}glossycarbon <text>*
*♟${prefix}fabric <text>*
*♟${prefix}happnewyearfirework <text>* 
*♟${prefix}newyear3d <text>*
*♟${prefix}neontext <text>*
*♟${prefix}metaldarkgoldeffect <text>*
*♟${prefix}helloweenfire <text>*
*♟${prefix}bloodontheroastedglass <text>*
*♟${prefix}xmas3d <text>*
*♟${prefix}jokerlogo <text>*
*♟${prefix}wicker <text>*
*♟${prefix}naturalleaves <text>*
*♟${prefix}fireworksparkle <text>*
*♟${prefix}skeleton <text>*
*♟${prefix}redfoilballon <text>*
*♟${prefix}purplefoilballon <text>*
*♟${prefix}pinkfoilballon <text>*
*♟${prefix}greenfoilballon <text>*
*♟${prefix}cyanfoilballon <text>*
*♟${prefix}bluefoilballon <text>*
*♟${prefix}goldfoilballon <text>*
*♟${prefix}steel <text>*
*♟${prefix}ultragloss <text>*
*♟${prefix}denim <text>*
*♟${prefix}decorategreen <text>*
*♟${prefix}decoratepurple <text>*
*♟${prefix}peridotstone <text>*
*♟${prefix}rock <text>*
*♟${prefix}lava <text>*
*♟${prefix}yellowglass <text>*
*♟${prefix}purpleglass <text>*
*♟${prefix}orangeglass <text>*
*♟${prefix}greeglass <text>*
*♟${prefix}cyanglass <text>*
*♟${prefix}blueglass <text>*
*♟${prefix}redglass <text>*
*♟${prefix}purpleshnyglass <text>*
*♟${prefix}captainamerica <text>*
*♟${prefix}captainamerica <text>*
*♟${prefix}robotr2d2 <text>*
*♟${prefix}toxic <text>*
*♟${prefix}rainbowequalizer <text>*
*♟${prefix}stone <text1|text2>*
*♟${prefix}ph <text1|text2>*
*♟${prefix}3davengers <text1|text2>*
*♟${prefix}marvelstudios <text1|text2>*
*♟${prefix}marvel <text1|text2>*
*♟${prefix}glitch <text1|text2>*
*♟${prefix}3dmetalsilver <text1|text2>*
*♟${prefix}3dmetalrosegold <text1|text2>*
*♟${prefix}3dmetalgold <text1|text2>*
*♟${prefix}3dmetalgalaxy <text1|text2>*
*♟${prefix}lionlogomascot <text1|text2>*
*♟${prefix}wolflogoblackwhite <text1|text2>*
*♟${prefix}wolflogogalaxy <text1|text2>*
*♟${prefix}ninjalogo <text1|text2>*
*♟${prefix}realisticvintage <text1|text2>*`
ephotoMenu = `《 *Ephoto Menu* 》
*♟${prefix}television <text>*
*♟${prefix}glasses <text>*
*♟${prefix}blackpink <text>*
*♟${prefix}neonbp <text>*
*♟${prefix}coverpubg <text>*
*♟${prefix}greenbrush <text>*
*♟${prefix}neonblue <text>*
*♟${prefix}eraser <text>*
*♟${prefix}dragonfire <text>*
*♟${prefix}incandescent <text>*
*♟${prefix}typography <text>*
*♟${prefix}letters <text>*
*♟${prefix}cloth <text>*
*♟${prefix}graffiti <text>*
*♟${prefix}metals <text>*
*♟${prefix}typography2 <text>*
*♟${prefix}nightstars <text>*
*♟${prefix}cloud <text>*
*♟${prefix}caper <text>*
*♟${prefix}horror <text>*
*♟${prefix}sunlight <text>*
*♟${prefix}cake <text>*
*♟${prefix}pig <text>*
*♟${prefix}hallowen <text>*
*♟${prefix}leafgraphy <text>*
*♟${prefix}water <text>*
*♟${prefix}crank <text>*
*♟${prefix}puppy <text>*
*♟${prefix}pubgavatar <text>*
*♟${prefix}foggy <text>*
*♟${prefix}memories <text>*
*♟${prefix}glazing <text>*
*♟${prefix}flower <text>*
*♟${prefix}american <text>*
*♟${prefix}aov <text>*
*♟${prefix}ml <text>*
*♟${prefix}warface <text>*
*♟${prefix}tiger <text>*
*♟${prefix}arrow <text>*
*♟${prefix}arrow2 <text>*
*♟${prefix}diary <text>*
*♟${prefix}artistic <text>*
*♟${prefix}diaryframe <text>*
*♟${prefix}wood <text1|text2>*
*♟${prefix}notebook <text1|text2>*
*♟${prefix}pencil <text1|text2>*
*♟${prefix}wposter <text1|text2>*
*♟${prefix}heated <text1|text2>*
*♟${prefix}buoys <text1|text2>*
*♟${prefix}writestatus <text1|text2>*
*♟${prefix}quotestatus <text1|text2>*
*♟${prefix}juventus <text1|text2>*
*♟${prefix}scholes <text1|text2>*
*♟${prefix}collage <reply image/sticker>*
*♟${prefix}cyberpunk <reply image/sticker>*
*♟${prefix}billboard <reply image/sticker>*
*♟${prefix}fire <reply image/sticker>*
*♟${prefix}rain <reply image/sticker>*
*♟${prefix}ring <reply image/sticker>*
*♟${prefix}cat <reply image/sticker>*
*♟${prefix}sad <reply image/sticker>*
*♟${prefix}cinemagraph <reply image/sticker>*
*♟${prefix}vhs <reply image/sticker>*
*♟${prefix}heart <reply image/sticker>*
*♟${prefix}smoke <reply image/sticker>*
*♟${prefix}handlefire <reply image/sticker>*
*♟${prefix}spectrum <reply image/sticker>*
*♟${prefix}painting <reply image/sticker>*`
databMenu = `《 *Database Menu* 》
*♟${prefix}setcmd*
*♟${prefix}delcmd*
*♟${prefix}listcmd*
*♟${prefix}lockcmd*
*♟${prefix}addmsg*
*♟${prefix}delmsg*
*♟${prefix}listmsg*
*♟${prefix}getmsg*`
mainMenu = `《 *Main Menu* 》
*♟${prefix}menu / ${prefix}help / ${prefix}?*
*♟${prefix}botstatus*
*♟${prefix}listpc*
*♟${prefix}listgc*
*♟${prefix}react*
*♟${prefix}report/request*
*♟${prefix}runtime*
*♟${prefix}speed*
*♟${prefix}owner*
*♟${prefix}script*
*♟${prefix}afk*
*♟${prefix}credit*`
ownerMenu = `《 *Owner Menu* 》
*♟${prefix}chat <option>*
*♟${prefix}setmenu <option>*
*♟${prefix}sendmessage*
*♟${prefix}onauto <option>*
*♟${prefix}offauto <option>*
*♟${prefix}block*
*♟${prefix}unblock*
*♟${prefix}creategroup*
*♟${prefix}join*
*♟${prefix}leave*
*♟${prefix}sendsesi*
*♟${prefix}setppbot*
*♟${prefix}bc*
*♟${prefix}bcgc*
*♟${prefix}delete*
*♟${prefix}setexif*
*♟${prefix}quoted*
*♟${prefix}eval*
*♟${prefix}term*
*♟${prefix}shutdown*
*♟${prefix}$ / > / => <code>*`
akhiran = `*Just for fun hope you are happy;)*`

allmenunya = `${awalan}

${animeMenu}

${nsfwMenu}

${groupMenu}

${animalMenu}

${videoMenu}

${downloaderMenu}

${searchMenu}

${infoMenu}

${socialMenu}

${gamesMenu}

${funMenu}

${rpgMenu}

${randomMenu}

${islamicMenu}

${voiceMenu}

${primbonMenu}

${toolsMenu}

${canvasMenu}

${photofMenu}

${photoxyMenu}

${textproMenu}

${ephotoMenu}

${databMenu}

${mainMenu}

${ownerMenu}

${akhiran}`
switch(command) {
case 'thanksto': case 'tqtq': case 'thanks': case 'credit': {
m.reply(`*---Big Thanks To---*

*Adiwajshing*
*Penyedia Module*
*DikaArdnt*
*Yuzzu*

《 *Contributor* 》
*Nurutomo*
*Mhankbarbar* 
*Fatih Arridho*
*Zhwzein*
*CAF-ID*

《 *Penyedia Api* 》
*Farhan (penyedia api(api-xcoders.xyz))*
*Nurutomo (penyedia api(api.xteam.xyz))*
*Vio (penyedia api(violetics.pw))*`)
}
break
case 'allmenu': {
hisoka.send5ButGif(from, allmenunya, namebot, await createMessage(from, {video: {url: "./lib/kidvid.mp4", caption: allmenunya}, gifPlayback: true}))}
break
case 'menu': case '?': case 'help': case 'menuall': case 'semuamenu': case 'command': {
if(menutype == 'gif'){
hisoka.send5ButGif(from, allmenunya, namebot, await createMessage(from, {video: {url: "./lib/kidvid.mp4", caption: allmenunya}, gifPlayback: true}))}
}
if(menutype == 'location'){
hisoka.sendMessage(from, { caption: allmenunya, location: { jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') }, templateButtons: but5, footer: namebot, mentions: [m.sender] })
}
if(menutype == 'image'){
hisoka.sendMessage(from, { caption: allmenunya, image: { jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') }, templateButtons: but5, footer: namebot, mentions: [m.sender] })
} 
if(menutype == 'list'){
hisoka.sendListM(from, `*Konnichiwa ${pushname} Senpai, Iam Kid*`, '>\\<', `${namebot}`)
}
if(menutype == 'listproduct'){ 
hisoka.relayMessage(from, {  "orderMessage": {  "itemCount": 111119999, "message": allmenunya, "footerText": "B-Baka><", "thumbnail": fs.readFileSync('./lib/hisoka.jpg'), "surface": 'CATALOG'}}, {})
}
break
case 'animemenu': {
reply2(`${animeMenu}\n\n${akhiran}`)}
break
case 'nsfwmenu': {
reply2(`${nsfwMenu}\n\n${akhiran}`)}
break
case 'groupmenu': {
reply2(`${groupMenu}\n\n${akhiran}`)}
break
case 'animalmenu': {
reply2(`${animalMenu}\n\n${akhiran}`)}
break
case 'videomenu': {
reply2(`${videoMenu}\n\n${akhiran}`)}
break
case 'downloadermenu': {
reply2(`${downloaderMenu}\n\n${akhiran}`)}
break
case 'searchmenu': {
reply2(`${searchMenu}\n\n${akhiran}`)}
break
case 'infomenu': {
reply2(`${infoMenu}\n\n${akhiran}`)}
break
case 'socialmenu': {
reply2(`${socialMenu}\n\n${akhiran}`)}
break
case 'gamesmenu': {
reply2(`${gamesMenu}\n\n${akhiran}`)}
break
case 'funmenu': {
reply2(`${funMenu}\n\n${akhiran}`)}
break
case 'rpgmenu': {
reply2(`${rpgMenu}\n\n${akhiran}`)}
break
case 'randommenu': {
reply2(`${randomMenu}\n\n${akhiran}`)}
break
case 'islamicmenu': {
reply2(`${islamicMenu}\n\n${akhiran}`)}
break
case 'voicemenu': {
reply2(`${voiceMenu}\n\n${akhiran}`)}
break
case 'primbonmenu': {
reply2(`${primbonMenu}\n\n${akhiran}`)}
break
case 'toolsmenu': {
reply2(`${toolsMenu}\n\n${akhiran}`)}
break
case 'canvasmenu': {
reply2(`${canvasMenu}\n\n${akhiran}`)}
break
case 'photofmenu': {
reply2(`${photofMenu}\n\n${akhiran}`)}
break
case 'photoxymenu': {
reply2(`${photoxyMenu}\n\n${akhiran}`)}
break
case 'textpromenu': {
reply2(`${textproMenu}\n\n${akhiran}`)}
break
case 'ephotomenu': {
reply2(`${ephotoMenu}\n\n${akhiran}`)}
break
case 'databmenu': {
reply2(`${databMenu}\n\n${akhiran}`)}
break
case 'mainmenu': {
reply2(`${mainMenu}\n\n${akhiran}`)}
break
case 'ownermenu': {
reply2(`${ownerMenu}\n\n${akhiran}`)}
break
case 'sc': case 'sourcecode': case 'script': {
m.reply(`Base Script : https://github.com/DikaArdnt/Hisoka-Morou\n\n Dont Forget Give Star ⭐`)}
break
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
}
break
case 'listpc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await hisoka.groupMetadata(i)
teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, m)
}
break
case 'react': {
if (!q) throw `*Tambahkan Query Emoji Setelah Command*\nContoh : ${prefix + command} 🐦`
hisoka.sendMessage(from, { react: { text: `${q}`, key: m.key }})
}
break
case 'quotesanime': case 'quoteanime': {
let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
m.reply(`${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`)}
break
case 'myanimelist': case 'animelist': case 'mylistanime': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/myanimelist?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 MYANIMELIST 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Rate* : *${x.rate}*\n`
txt += `*Chapter* : *${x.chapter}*\n`
txt += `*Link* : *${x.url}*\n`
txt += `*Desription* : *${x.description}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'anibatch': case 'batchnime': case 'animebatch': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/anibatch?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 ANIBATCH 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Rate* : *${x.rate}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'anoboy': case 'anoboynime': case 'anoboysearch': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/anoboy?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 ANOBOY 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Uploaded* : *${x.showup}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'oploverz': case 'oplo': case 'oploverzsearch': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/oploverz?apikey=${apikey.vikey}&manga=${q}`)
buff = await getBuffer(anu.result[0].thumbnail)
get_result = anu.result
let txt = `*------「 OPLOVERZ 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Status* : *${x.status}*\n`
txt += `*Type* : *${x.type}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: buff, caption: txt }, { quoted: m })}
break
case 'gogonime': case 'gogoanime': case 'gogo': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/gogoanime?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 GOGOANIME 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Released* : *${x.released}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'jouganime': case 'jougaanime': case 'jouga': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/jouganime?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 JOUGANIME 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Rate* : *${x.rate}*\n`
txt += `*Type* : *${x.type}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'mangadex': case 'mangadexsearch': case 'madex': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/mangadex?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 MANGADEX 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Rate* : *${x.rate}*\n`
txt += `*Followers* : *${x.followers}*\n`
txt += `*Views* : *${x.views}*\n`
txt += `*Link* : *${x.url}*\n`
txt += `*Description* : *${x.description}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'manganato': case 'manganatosearch': case 'madex': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/manganato?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 MANGANATO 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Rate* : *${x.rate}*\n`
txt += `*Authors* : *${x.author}*\n`
txt += `*Update* : *${x.updated}*\n`
txt += `*Views* : *${x.views}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'mangatoon': case 'mangatoonsearch': case 'toon': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/search/mangatoon?apikey=${apikey.vikey}&query=${q}`)
get_result = anu.result
let txt = `*------「 MANGATOON 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Genre* : *${x.type}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'komiku': case 'komikusearch': case 'komikunime': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/komiku?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 KOMIKU 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Chapter* : *${x.chapter}*\n`
txt += `*Link* : *${x.url}*\n`
txt += `*Description* : *${x.description}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'nimegami': case 'nimegamisearch': case 'nimegamin': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/nimegami?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 NIMEGAMI 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Status* : *${x.status}*\n`
txt += `*Rate* : *${x.rate}*\n`
txt += `*Category* : *${x.category}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'samehadaku': case 'samehadakusearch': case 'mehadaku': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/samehadaku?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 SAMEHADAKU 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Genre* : *${x.genres}*\n`
txt += `*Status* : *${x.status}*\n`
txt += `*Rate* : *${x.rate}*\n`
txt += `*Type* : *${x.type}*\n`
txt += `*Views* : *${x.views}*\n`
txt += `*Link* : *${x.url}*\n`
txt += `*Description* : *${x.description}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'klikmanga': case 'klikmangasearch': case 'mangaklik': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/klikmanga?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 KLIKMANGA 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Genre* : *${x.genres}*\n`
txt += `*Status* : *${x.status}*\n`
txt += `*Date* : *${x.date}*\n`
txt += `*Author* : *${x.author}*\n`
txt += `*Link* : *${x.url}*\n`
txt += `*Description* : *${x.description}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'kissmanga': case 'kissmangasearch': case 'mangakiss': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/kissmanga?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 KISSMANGA 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'genshinlist': case 'charlist': {
m.reply(`*albedo*
*aloy*
*amber*
*arataki-itto*
*ayaka*
*barbara*
*beidou*
*bennett*
*chongyun*
*diluc*
*diona*
*eula*
*fischl*
*ganyu*
*gorou*
*hu-tao*
*jean*
*kaeya*
*kazuha*
*keqing*
*klee*
*kokomi*
*lisa*
*mona*
*ningguang*
*noelle*
*qiqi*
*raiden*
*razor*
*rosaria*
*sara*
*sayu*
*shenhe*
*sucrose*
*tartaglia*
*thoma*
*traveler-anemo*
*traveler-electro*
*traveler-geo*
*venti*
*xiangling*
*xiao*
*xingqiu*
*xinyan*
*yanfei*
*yoimiya*
*yun-jin*
*zhongli*`)}
break
case 'genshin': case 'genshinimpact': case 'genshininfo': {
if (!q) throw mess.q
anu = await fetchJson(`https://api.genshin.dev/characters/${q}`)
m.reply(`Name : *${anu.name}*
Vision : *${anu.vision}*
Weapon : *${anu.weapon}*
Nation : *${anu.nation}*
Affiliation : *${anu.affiliation}*
Rarity : *${anu.rarity}*
Constellation : *${anu.constellation}*
Birthday : ${anu.birthday}*
Description : ${anu.description}`)}
break
case 'getdatanekopoi': case 'nekopoidetail': case 'getnekopoi': {
if (!q) throw mess.q
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('nekopoi.care')) throw mess.wrongFormat
reply2(mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/anime/getnekopoi?url=${q}&apikey=${apikey.xkey}`)
txt = `*Title* : ${anu.result.title}
*Duration* : ${anu.result.meta[3].duration}
*Size* : ${anu.result.meta[4].size}
*Link* :
*Droplink* : ${anu.result.linkDownload[0].drop}
*Zippylink* : ${anu.result.linkDownload[5].zippyshare}`
hisoka.sendMessage(m.chat, { image: { url: `https://images.app.goo.gl/i1mBaGUcvXBrTJ928` }, caption: txt }, { quoted: m })}
break
case 'nekopoion': case 'nekopoilatest': {
reply2(mess.wait)
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
case 'nekonime': case 'nekonim': case 'nekonimesearch': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/nekonime?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 NEKONIME 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Chapter* : *${x.chapter}*\n`
txt += `*Uploaded* : *${x.released}*\n`
txt += `*Link* : *${x.url}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'fanfox': case 'fanfoxnime': case 'foxnime': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/fanfox?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 FANFOX 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Status* : *${x.status}*\n`
txt += `*Author* : *${x.author}*\n`
txt += `*Chapter* : *${x.chapter}*\n`
txt += `*Link* : *${x.url}*\n`
txt += `*Description* : *${x.description}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'kodenuklir': case 'codenuklir': case 'sauce': {
m.reply(`Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
Note : Easy mode = Sange, Biasa Aja, Mental Lemah :v
==============================
Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
Kode nuklir dr milf oneesan ampe gan***** loli
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/

Random
257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`)}
break
case 'randomnhentai': case 'nhentairandom': {
reply2(mess.wait)
let anu = await fetchJson(`https://api-xcoders.xyz/api/anime/randomnhentai?apikey=${apikey.xkey}`)
textnya = `*Title* : *${anu.result.titleID}*
*Parodies* : *${anu.result.meta[0].parodies}*
*Character* : *${anu.result.meta[1].characters}*
*Artist* : *${anu.result.meta[3].artists}*
*Groups* : *${anu.result.meta[4].groups}*
*Languange* : *${anu.result.meta[5].languanges}*
*Categories* : *${anu.result.meta[6].categories}*
*Pages* : *${anu.result.meta[7].pages}*
*Uploaded* : *${anu.result.meta[8].uploaded}*
*Code* : *${anu.result.code}*
`
hisoka.sendMessage(m.chat, { image: { url: `https://images.app.goo.gl/9qE4cugjavA1WeQBA` }, caption: `${textnya}` }, { quoted: m })
}
break
case 'nhentai': case 'nhentaisearch': case 'nhentaicode': {
if (!q) throw mess.q
anu = await fetchJson(`https://api-xcoders.xyz/api/anime/codenhentai?code=${q}&apikey=${apikey.xkey}`)
textnya = `*Title* : *${anu.result.titleID}*
*Parodies* : *${anu.result.meta[0].parodies}*
*Character* : *${anu.result.meta[1].characters}*
*Artist* : *${anu.result.meta[3].artists}*
*Groups* : *${anu.result.meta[4].groups}*
*Languange* : *${anu.result.meta[5].languanges}*
*Categories* : *${anu.result.meta[6].categories}*
*Pages* : *${anu.result.meta[7].pages}*
*Uploaded* : *${anu.result.meta[8].uploaded}*
*Url* : *https://nhentai.net/g/${anu.result.code}*
`
hisoka.sendMessage(m.chat, { image: { url: `https://images.app.goo.gl/9qE4cugjavA1WeQBA` }, caption: `${textnya}` }, { quoted: m })
}
break
case 'kiryuu': case 'kiryu': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/kiryu?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 KIRYUU 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : ${x.title}\n`
txt += `*Chapter* : ${x.chapter}\n`
txt += `*Rate* : ${x.rate}\n`
txt += `*Link* : ${x.url}\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'komikstation': case 'stationkomik': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/anime/komikstation?apikey=${apikey.vikey}&manga=${q}`)
get_result = anu.result
let txt = `*------「 KOMIKSTATION 」------*\n\n`
for (var x of get_result) {
txt += `*Title* : ${x.title}\n`
txt += `*Chapter* : ${x.chapter}\n`
txt += `*Link* : ${x.url}\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: anu.result[0].thumbnail }, caption: txt }, { quoted: m })}
break
case 'manga': {
if (!q) throw mess.q
await reply2(mess.wait)
xfar.Manga(q).then(async data => {
let txt = `*------「 MANGA-SEARCH 」------*\n\n`
for (let i of data) {
txt += `*Title :* *${i.judul}*\n`
txt += `*Url :* *${i.link}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].thumbnail }, caption: `${txt}` }, { quoted: m})
})}
break
case 'anime': {
if (!q) throw mess.q
await reply2(mess.wait)
xfar.Anime(q).then(async data => {
let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
for (let i of data) {
txt += `*Title :* *${i.judul}*\n`
txt += `*Url :* *${i.link}*\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].thumbnail }, caption: `${txt}` }, { quoted: m})
})}
break
case 'char': case 'character': {
if (!q) throw mess.q
await reply2(mess.wait)
xfar.Character(q).then(async data => {
let txt = `*-------「 CHARACTER-SEARCH 」-------*\n\n`
for (let i of data) {
txt += `*Name :* *${i.character}*\n`
txt += `*Link :* *${i.link}*\n`
}
hisoka.sendMessage(m.chat, { image: { url: data[0].thumbnail }, caption: `${txt}` }, { quoted: m})
})}
break
case 'randomanime': case 'storyanime': {
reply2(mess.wait)
hisoka.sendMessage(m.chat, { video: { url: animeStory }, caption: mess.succ }, { quoted: m})}
break
case 'loli': {
reply2(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: lolinya }, caption: mess.succ }, { quoted: m})
}
break
case 'tickle': case 'slap': case 'smug': case 'baka': case 'poke': case 'pat': case 'meow': case 'lizard': case 'kiss': case 'hug': case 'fox_girl': case 'feed': case 'cuddle': case 'woof': case 'why': case 'fact': case 'kemonomimi': case 'holo': case 'spoiler': case 'avatar': case 'waifu': case 'gecg': case 'goose': case 'wallpaper': case 'pussy': case 'neko': case 'lesbian': case 'kuni': case 'cumsluts': case 'classic': case 'boobs': case 'bj': case 'anal': case 'avatar': case 'yuri': case 'trap': case 'tits': case 'kemonomimi': case 'kitsune': case 'keta': case 'holo': case 'hentai': case 'futanari': case 'femdom': case 'feet': case 'ero': case 'blowjob': case 'spank': case 'gasm': {
reply2(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
hisoka.sendMessage(m.chat, { image: { url: anu.url }, caption: mess.succ }, { quoted: m})
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
footer: namebot,
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
footer: namebot,
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
footer: namebot,
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
case 'kick': case 'hedsot': case 'headshot': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': case 'invite': case 'tambah': {
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
case 'infochat': case 'sider': {
if (!m.quoted) m.reply('reply Pesan')
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
case 'hidetag20': {
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
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
hisoka.sendMessage(from, options, text)
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
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
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
case 'act': case 'aktifkan': case 'active': {
if (!isCreator && !itsMe) throw mess.owner
if (!isGroupAdmins) throw mess.admin
if (!q) throw 'Option : 1. antilink\n2. mute'
if (args[0] === 'antilink') {
if (db.data.chats[m.chat].antilink) return m.reply('*Sudah Aktif Sebelumnya*')
db.data.chats[m.chat].antilink = true
m.reply('*Antilink Active*')
} else if (args[0] === 'mute') {
if (db.data.chats[m.chat].mute) return m.reply('*Sudah Aktif Sebelumnya*')
db.data.chats[m.chat].mute = true
m.reply(`*${hisoka.user.name} telah di mute di group ini*`)}
}
break
case 'deact': case 'matikan': case 'deactive': {
if (!isCreator && !itsMe) throw mess.owner
if (!isGroupAdmins) throw mess.admin
if (!q) throw 'Option : 1. antilink\n2. mute'
if (args[0] === 'antilink') {
if (!db.data.chats[m.chat].antilink) return m.reply('Sudah Tidak Aktif Sebelumnya')
db.data.chats[m.chat].antilink = false
m.reply(`*Antilink Deact*`)
} else if (args[0] === 'mute') {
if (!db.data.chats[m.chat].mute) return m.reply('*Sudah Tidak Aktif Sebelumnya*')
db.data.chats[m.chat].mute = false
m.reply(`*${hisoka.user.name} telah di unmute di group ini*`)}
}
case 'video': {
if (!q) throw mess.q
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
hisoka.sendMessage(from, { video: { url: `${q}` }}, { quoted: m })}
break
case 'audio': {
if (!q) throw mess.q
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
hisoka.sendMessage(from, { audio: { url: `${q}` }}, { quoted: m })}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
reply2(mess.wait)
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
case 'stickerwm': case 'swm': case 'take': case 'colong': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (!q.includes('|')) return m.reply(`Kirim perintah *${prefix + command}* packname|author`)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
reply2(mess.wait)
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
if (!quoted) throw 'reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
reply2(mess.wait)
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
if (!quoted) throw 'reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'togif': {
if (!quoted) throw 'reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
reply2(mess.wait)
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
case 'tinyurl': {
if (!q) throw mess.q
reply2(mess.wait)
try {
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
m.reply(`${anu.data}`)
} catch (e) {
emror = String(e)
m.reply(`${e}`)
}}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!quoted) throw `Kirim/reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/reply Image Dengan Caption ${prefix + command}`
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './dataB/remobg-'+getRandom('')
localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './dataB/hremo-'+getRandom('.png')
reply2(mess.wait)
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
if (/document/.test(mime)) throw `Kirim/reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
reply2(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${namebot}.mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
reply2(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'ebinary': {
if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
let { eBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let eb = await eBinary(teks)
m.reply(eb)
}
break
case 'dbinary': {
if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
let { dBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let itunya = await dBinary(teks)
m.reply(itunya)
}
break
case 'base64enc': case 'ebase64': {
if (!q) throw mess.q
anu = await fetchJson(`https://violetics.pw/api/tools/base64-enc?apikey=${apikey.vikey}&text=${q}`)
m.reply(anu.result)}
break
case 'base64dec': case 'debase64': {
if (!q) throw mess.q
anu = await fetchJson(`https://violetics.pw/api/tools/base64-dec?apikey=${apikey.vikey}&base64=${q}`)
m.reply(anu.result)}
break
case 'hexenc': case 'ehex': {
if (!q) throw mess.q
anu = await fetchJson(`https://violetics.pw/api/tools/hex-enc?apikey=${apikey.vikey}&text=${q}`)
m.reply(anu.result)}
break
case 'hexdec': case 'dhex': {
if (!q) throw mess.q
anu = await fetchJson(`https://violetics.pw/api/tools/hex-dec?apikey=${apikey.vikey}&hex=${q}`)
m.reply(anu.result)}
break
case 'emojimix': {
if (!text) throw `Example : ${prefix + command} 😅+🤔`
reply2(mess.wait)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break 
case 'semoji': {
if (!q) throw `*Tambahkan Query Emoji Setelah Command\nContoh : ${prefix + command} 🐦`
reply2(mess.wait)
const listMess = async (id, text1, text2, desc1) => {
const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
listMessage: {
title: text1,
description: text2,
buttonText: 'Pilih Disini',
listType: 1,
footerText: namebot,
mtype: 'listMessage',
sections: [{
"title": ".",
"rows": [
{
"title": "Apple Emoji",
"description": "Change Regular Emoji To Apple Emoji With Sticker",
"rowId": `.apple ${q}`
},{
  "title": "Samsung Emoji Emoji",
  "description": "Change Regular Emoji To Samsung Emoji With Sticker",
  "rowId": `.samsung ${q}`
},{
  "title": "Facebook Emoji Emoji",
  "description": "Change Regular Emoji To Facebook Emoji With Sticker",
  "rowId": `.facebook ${q}`
},{
  "title": "Instagram Emoji",
  "description": "Change Regular Emoji To Instagram Emoji With Sticker",
  "rowId": `.ig ${q}`
},{
  "title": "Google Emoji",
  "description": "Change Regular Emoji To Google Emoji With Sticker",
  "rowId": `.google ${q}`
},{
  "title": "Twitter Emoji",
  "description": "Change Regular Emoji To Twitter Emoji With Sticker",
  "rowId": `.twitter ${q}`
},{
  "title": "Whatsapp Emoji",
  "description": "Change Regular Emoji To Apple Emoji With Sticker",
  "rowId": `.whatsapp ${q}`
},{
  "title": "Htc Emoji",
  "description": "Change Regular Emoji To Htc Emoji With Sticker",
  "rowId": `.htc ${q}`
},{
  "title": "Microsoft Emoji",
  "description": "Change Regular Emoji To Microsoft Emoji With Sticker",
  "rowId": `.microsoft ${q}`
},{
  "title": "Mozilla Emoji",
  "description": "Change Regular Emoji To Mozilla Emoji With Sticker",
  "rowId": `.mozilla ${q}`
},{
  "title": "Openmoji Emoji",
  "description": "Change Regular Emoji To Openmoji Emoji With Sticker",
  "rowId": `.openmoji ${q}`
},{
  "title": "Pixel Emoji",
  "description": "Change Regular Emoji To Pixel Emoji With Sticker",
  "rowId": `.pixel ${q}`
}]}], "contextInfo": {
  "stanzaId": m.key.id,
  "participant": m.sender,
  "quotedMessage": m.message
}
}}), { userJid: m.participant || m.key.remoteJid, quoted: m });
return await hisoka.relayMessage(
m.key.remoteJid,
template.message,
{ messageId: template.key.id }
)
}
listMess(from, `*Haii Kak Mau Pilih Semojinya Yang Gimana Nih?><*`, '\n', `${namebot}`)}
break
case 'apple': case 'ip': case 'ap': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[0].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'samsung': case 'ss': case 'sa': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[2].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'facebook': case 'fb': case 'fa': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[6].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'google': case 'go': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[1].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'htc': case 'ht': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[12].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'lg': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[11].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'twitter': case 'tw': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[5].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'whatsapp': case 'wa': case 'wh': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[4].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'microsoft': case 'mc': case 'mi': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[3].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'mozilla': case 'moz': case 'mo': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[13].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'openmoji': case 'omoji': case 'op': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[8].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'pixel': case 'pi': {
emoji.get(`${args[1]}`)
.then(async emoji => {
let encmedia = await hisoka.sendImageAsSticker(m.chat, emoji.images[7].url, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
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
case 'ssweb': {
if (!q.includes('http://') && !q.includes('https://')) throw (`*Format salah kak, ${prefix}ssweb https://LINKNYA*`)
reply2(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://violetics.pw/api/media/ssweb?apikey=${apikey.vikey}&url=${q}` }, caption: mess.succ }, { quoted: m })
}
break
case 'get': case 'inspect': {
if(!q) return m.reply('linknya?')
fetch(q).then(res => res.text())
.then(bu =>{
m.reply(bu)
})  
}
break
case 'qrcode': case 'qr': {
if (args.length < 2) return m.reply(`Kirim perintah ${command} Text\nContoh : ${command} gwibu`)
reply2(mess.wait)
hisoka.sendMessage(from, {caption: `*QR CODE*`, image: {url: `https://chart.googleapis.com/chart?cht=qr&chl=${q}&chs=512x512`}}, {quoted: m})
}
break
case 'passwordgen': case 'buatpasword': {
if (!q) throw `*Masukan Query Nomor\nContoh ${prefix + command} 10`
anu = await fetchJson(`https://violetics.pw/api/tools/password-gen?apikey=${apikey.vikey}&amount=${q}`)
m.reply(anu.result)}
break
case 'readmore': case 'more': {
m.reply('‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎')
}
break
case 'pinterest': {
if (!q) throw mess.q
await reply2(mess.wait)
xfar.Pinterest(q).then(async data => {
hisoka.sendMessage(m.chat, { image: { url: data.url }, caption: `*Media Url* : ${data.url}` }, { quoted: m})
})}
break
case 'wikimedia': case 'wallpaper': {
if (!text) throw mess.q
let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: `*Media Url* : ${result.image}` }, { quoted: m})
}
break
case 'alphacoders': {
if (!text) throw mess.q
anu = await fetchJson(`https://violetics.pw/api/media/alphacoders?apikey=${apikey.vikey}&query=${q}`)
get_result = anu.result
txt = `ALPHACODERS LINK\n\n`
for (var x of get_result){
txt += `${x}\n\n`
}
m.reply(txt)
}
break
case 'gimage': {
if (!text) throw `Example : ${prefix + command} kaori cicak`
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
caption: mess.succ,
hisoka.sendMessage(m.chat, { image: { url: images }, caption: `*Media Url* : ${result.image}` }, { quoted: m})
})}
break
case 'film': {
if (!q) throw mess.q
await reply2(mess.wait)
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
case 'lk21': case 'lk21search': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/lk21/search?query=${q}&apikey=${apikey.xkey}`)
get_result = anu.result
let txt = `*-------「 LK21-SEARCH 」-------*\n\n`
for (var x of get_result) {
txt += `*Title* : ${x.title}\n`
txt += `*Genre* : ${x.genre}\n`
txt += `*Created* : ${x.dateCreated}\n`
txt += `*Director* : ${x.director}\n`
txt += `*Duration* : ${x.duration}\n`
txt += `*Rating* : ${x.rating}\n`
txt += `*Review* : ${x.review}\n`
txt += `*BestRating* : ${x.bestRating}\n`
txt += `*Type* : ${x.type}\n\n`
}
hisoka.sendMessage(m.chat, { image: { url : anu.result[0].thumbnail }, caption: `${txt}` }, { quoted: m})}
break
case 'wattpad': {
if (!q) throw mess.q
await reply2(mess.wait)
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
await reply2(mess.wait)
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
await reply2(mess.wait)
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
reply2(mess.wait)
let anu = await fetchJson(`https://api-xcoders.xyz/api/download/joox?query=${q}&apikey=${apikey.xkey}`)
let msg = await hisoka.sendImage(m.chat, anu.result.thumbnail, `*------「 JOOX-SEARCH 」------*

*Title* : *${anu.result.judul}*
*Album* : *${anu.result.album}*
*Singer* : *${anu.result.artist}*
*Size* : *${anu.result.size}*`, m)
hisoka.sendMessage(m.chat, { audio: { url: anu.result.link }, mimetype: 'audio/mpeg', fileName: anu.result.judul+'.m4a' }, { quoted: m })
}
break
case 'herolist': {
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
m.reply(listt)
})}
break
case 'herodetail': {
if (!q) throw mess.q
res = await herodetails(q)
her = `*Hero Details ${q}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
m.reply(her)}
break
case 'liriklagu': case 'lagu': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/search/liriklagu?query=${q}&apikey=${apikey.xkey}`)
m.reply(`*Title* : *${q}*\n*Lirik* : ${anu.result.lyrics}`)
}
break
case 'chordlagu': case 'chord': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/search/chordlagu?query=${q}&apikey=${apikey.xkey}`)
m.reply(`*Title* : *${anu.result.title}*\n*Chord* : ${anu.result.chord}`)
}
break
case 'tr': case 'translate': {
if (!q) throw mess.q
reply2(mess.wait)
m.reply(`Error`)}
break
case 'brainly': {
if (!q) return m.reply("Masukkan pertanyaan")
reply2(mess.wait)
brainly(q).then(async res => {
let txt = `*------「 BRAINLY-SEARCH 」------*\n\n`
for (let p of res.data) {
txt += `*Pertanyaan* : ${p.pertanyaan}\n*Jawaban* : ${p.jawaban[0].text}\n\n`
}
m.reply(txt)
}).catch(e => m.reply(e))}
break
case 'shopee': case 'shopeesearch': {
if (!q) throw mess.q
reply (mess.wait)
anu = await fetchJson(`https://violetics.pw/api/search/shopee?apikey=${apikey.vikey}&query=${q}`)
get_result = anu.result
for (let x of get_result) {
txt = `*Nama Barang* : *${x.name}*\n`
txt += `*Stok* : ${x.stock}*\n`
txt += `*Terjual* : ${x.terjual}*\n`
txt += `*Information* : ${x.information}*\n`
txt += `*Location* : *${x.location}*\n`
txt += `*Link* : ${x.url}*\n`
txt += `*Harga* : ${anu.result.harga}*\n\n`
}
m.reply(txt)}
break
case 'linkwa': case 'grupwhatsapp': {
if (!q) throw mess.q
reply (mess.wait)
anu = await fetchJson(`https://violetics.pw/api/search/group-whatsapp?apikey=${apikey.vikey}&query=${q}`)
get_result = anu.result
for (let x of get_result) {
txt = `*Name* : *${x.title}*\n`
txt += `*Link* : ${x.url}*\n\n`
}
m.reply(txt)}
break
case 'yts': case 'ytsearch': {
if (!q) throw mess.q
reply2(mess.wait)
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
case 'kalkulator': case 'calculator': {
if (!text) throw `*Example :*\n.kalkulator 2 * 5\n\n*List Bilangan :*\n• Kali : *\n• Bagi : /\n• Tambah : +\n• Kurang : -`
teks = `${q} = ${Math_js.evaluate(q)}`
m.reply(teks)}
break
case 'githubstalk': case 'stalkgithub': case 'ghstalk': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://api.github.com/users/${q}`)
buff = await getBuffer(`${anu.avatar_url}`)
txt = `*----「 GITHUB-STALK 」----*

*Username* : ${anu.login}
*Followers* : ${anu.followers}
*Following* : ${anu.following}
*Created at* :  ${anu.created_at}
*Updated at* : ${anu.updated_at}
*Public Gists* : ${anu.public_gists}
*Public Repos* : ${anu.public_repos}
*Twitter* : ${anu.twitter_username}
*Email* : ${anu.email}
*Location* : ${anu.location}
*Blog* : ${anu.blog}
*Link* : ${anu.html_url}
*Bio* : ${anu.bio}`
hisoka.sendMessage(from, {image: buff, caption: txt}, {quoted:m})}
break
case 'instagramstalk': case 'igstalk': case 'stalkig': case 'stalkinstagram': {
if (!q) throw mess.q
reply2(mess.wait)
igstalk(q).then(async data => {
buff = await getBuffer(`${data.profilePicHD}`)
txt = `*----「 INSTAGRAM-STALK 」----*

*Username* : *${data.username}*
*Id* : *${data.id}*
*Fullname* : *${data.fullname}*
*Followers* : *${data.followers}*
*Following* : *${data.following}*
*Post* : *${data.posts}*
*Reel* : *${data.highlightCount}*
*Private* : *${data.isPrivate}*
*Verified* : *${data.isVerified}*
*Link* : *https://instagram.com/${data.username}*
*Bio* : 
${data.biography}
`
hisoka.sendMessage(from, {image: buff, caption: txt}, {quoted:m})})}
break
case 'google': {
if (!q) throw mess.q
reply (mess.wait)
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
if (!q) throw mess.q
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/apk/playstore?apikey=${apikey.vikey}&apps=${q}`)
get_result = anu.result
let txt = `*----「 PLAYSTORE 」----*\n\n`
for (var x of get_result) {
txt += `*Title* : *${x.title}*\n`
txt += `*Rate* : *${x.rate}*\n`
txt += `*Package* : *${x.package}*\n`
txt += `*Dev* : *${x.dev}*\n`
txt += `*Link* : *${x.url}*\n`
txt += `*Description* : *${x.description}*\n\n`
}
m.reply(txt)}
break
case 'sfilemobisearch': case 'sfilesearch': {
if (!q) throw mess.q
reply (mess.wait)
anu = await fetchJson(`https://violetics.pw/api/search/sfile-search?apikey=${apikey.vikey}&query=${q}`)
get_result = anu.result
let store = '*----「 SFILEMOBI-SEARCH 」----*\n\n'
for (let x of get_result) {
store += `*Name* : ${x.title}*\n`
store += `*Size* : *${x.size}*\n`
store += `*Url* : *${x.link}*\n\n`
}
m.reply(store)}
break
case 'pornhub': case 'porn': {
if (!q) throw mess.q
reply (mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/search/pornhub?query=${q}&apikey=${apikey.xkey}`)
txt = `*Title* : ${anu.result[0].title}
*Duration* : ${anu.result[0].duration}
*Viewers* : ${anu.result[0].viewers}
*Rating* : ${anu.result[0].rating}
*Published* : ${anu.result[0].published}
*Url* : ${anu.result[0].url}

*Title* : ${anu.result[1].title}
*Duration* : ${anu.result[1].duration}
*Viewers* : ${anu.result[1].viewers}
*Rating* : ${anu.result[1].rating}
*Published* : ${anu.result[1].published}
*Url* : ${anu.result[1].url}

*Title* : ${anu.result[2].title}
*Duration* : ${anu.result[2].duration}
*Viewers* : ${anu.result[2].viewers}
*Rating* : ${anu.result[2].rating}
*Published* : ${anu.result[2].published}
*Url* : ${anu.result[2].url}

*Title* : ${anu.result[3].title}
*Duration* : ${anu.result[3].duration}
*Viewers* : ${anu.result[3].viewers}
*Rating* : ${anu.result[3].rating}
*Published* : ${anu.result[3].published}
*Url* : ${anu.result[3].url}

*Title* : ${anu.result[4].title}
*Duration* : ${anu.result[4].duration}
*Viewers* : ${anu.result[4].viewers}
*Rating* : ${anu.result[4].rating}
*Published* : ${anu.result[4].published}
*Url* : ${anu.result[4].url}
`
m.reply(txt)}
break
case 'xvideossearch': case 'xsearch': {
if (!q) throw mess.q
anu = await fetchJson(`https://api-xcoders.xyz/api/search/xvideos?query=${q}&apikey=${apikey.xkey}`)
txt = `*Title* : ${anu.result[0].title}
*Duration* : ${anu.result[0].duration}
*Url* : ${anu.result[0].url}

*Title* : ${anu.result[1].title}
*Duration* : ${anu.result[1].duration}
*Url* : ${anu.result[1].url}

*Title* : ${anu.result[2].title}
*Duration* : ${anu.result[2].duration}
*Url* : ${anu.result[2].url}

*Title* : ${anu.result[3].title}
*Duration* : ${anu.result[3].duration}
*Url* : ${anu.result[3].url}

*Title* : ${anu.result[4].title}
*Duration* : ${anu.result[4].duration}
*Url* : ${anu.result[4].url}
`
m.reply(txt)}
break
case 'kbbi': {
if (!q) throw mess.q
anu = await fetchJson(`https://api-xcoders.xyz/api/info/kbbi?query=${q}&apikey=${apikey.xkey}`)
txt = `*Query* : *${anu.result.query}*
*Jawab* : 
${anu.result[0].arti},
${anu.result[1].arti}`
m.reply(txt)}
break
case 'kodepos': case 'pos': {
if (!q) throw mess.q
anu = await fetchJson(`https://api.xteam.xyz/kodepos?q=${q}&APIKEY=${apikey.xtkey}`)
txt = `*Provinsi* : ${anu.result[0].province}
*City* : ${anu.result[0].city}
*Subdistrict* : ${anu.result[0].subdistrict}
*Urban* : ${anu.result[0].urban}
*Kode* ^: ${anu.result[0].postalcode}

*Provinsi* : ${anu.result[1].province}
*City* : ${anu.result[1].city}
*Subdistrict* : ${anu.result[1].subdistrict}
*Urban* : ${anu.result[1].urban}
*Kode* ^: ${anu.result[1].postalcode}

*Provinsi* : ${anu.result[2].province}
*City* : ${anu.result[2].city}
*Subdistrict* : ${anu.result[2].subdistrict}
*Urban* : ${anu.result[2].urban}
*Kode* ^: ${anu.result[2].postalcode}

*Provinsi* : ${anu.result[3].province}
*City* : ${anu.result[3].city}
*Subdistrict* : ${anu.result[3].subdistrict}
*Urban* : ${anu.result[3].urban}
*Kode* ^: ${anu.result[3].postalcode}

*Provinsi* : ${anu.result[4].province}
*City* : ${anu.result[4].city}
*Subdistrict* : ${anu.result[4].subdistrict}
*Urban* : ${anu.result[4].urban}
*Kode* ^: ${anu.result[4].postalcode}

*Provinsi* : ${anu.result[5].province}
*City* : ${anu.result[5].city}
*Subdistrict* : ${anu.result[5].subdistrict}
*Urban* : ${anu.result[5].urban}
*Kode* ^: ${anu.result[5].postalcode}

*Provinsi* : ${anu.result[6].province}
*City* : ${anu.result[6].city}
*Subdistrict* : ${anu.result[6].subdistrict}
*Urban* : ${anu.result[6].urban}
*Kode* ^: ${anu.result[6].postalcode}

*Provinsi* : ${anu.result[7].province}
*City* : ${anu.result[7].city}
*Subdistrict* : ${anu.result[7].subdistrict}
*Urban* : ${anu.result[7].urban}
*Kode* ^: ${anu.result[7].postalcode}

*Provinsi* : ${anu.result[8].province}
*City* : ${anu.result[8].city}
*Subdistrict* : ${anu.result[8].subdistrict}
*Urban* : ${anu.result[8].urban}
*Kode* ^: ${anu.result[8].postalcode}

*Provinsi* : ${anu.result[9].province}
*City* : ${anu.result[9].city}
*Subdistrict* : ${anu.result[9].subdistrict}
*Urban* : ${anu.result[9].urban}
*Kode* ^: ${anu.result[9].postalcode}
`
m.reply(txt)}
break
case 'play': {
if (!q) throw mess.q
reply2(mess.wait)
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
if (!q) return reply2(mess.wrongFormat)
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
case 'gempa': case 'infogempa': {
anu = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
txt = `*Info Gempa*

*Tanggal* : *${anu.infogempa.gempa.Tanggal}*
*Jam* : *${anu.infogempa.gempa.Jam}*
*TanggalWaktu* : *${anu.infogempa.gempa.DateTime}*
*Coordinates* : *${anu.infogempa.gempa.Coordinates}*
*Lintang* : *${anu.infogempa.gempa.Lintang}*
*Bujur* : *${anu.infogempa.gempa.Bujur}*
*Mangnitude* : *${anu.infogempa.gempa.Magnitude}*
*Kedalaman* : *${anu.infogempa.gempa.Kedalaman}*
*Wilayah* : *${anu.infogempa.gempa.Wilayah}*
*Potensi* : *${anu.infogempa.gempa.Potensi}*
*Dirasakan* : *${anu.infogempa.gempa.Dirasakan}*
*Shakemap* : *${anu.infogempa.gempa.Shakemap}*`
m.reply(txt)}
break
case 'meme': case 'memeindo': {
reply2(mess.wait)
anu = await getBuffer(`https://api-xcoders.xyz/api/random/meme?apikey=${apikey.xkey}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'videogore': case 'gore': {
reply2(mess.wait)
anu = await getBuffer(`https://api-xcoders.xyz/api/random/gore?apikey=${apikey.xkey}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'pantun': {
anu = await fetchJson(`https://violetics.pw/api/random/pantun?apikey=${apikey.vikey}`)
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
reply2(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'cecan': case 'randomcecan': {
hisoka.sendMessage(from, { image: { url: `https://violetics.pw/api/asupan/cecan?apikey=${apikey.vikey}`, caption: mess.succ }}, { quoted: m })}
break
case 'asupan': case 'asupanrandom': {
anu = fs.readFileSync('./dataB/asupan.js');
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)
hisoka.sendMessage(from, { video: { url: hasm, caption: mess.succ }}, { quoted: m })}
break
case 'randombokep': case 'bokep': {
anu = await fetchJson(`https://api-xcoders.xyz/api/random/bokep?apikey=${apikey.xkey}`)
hisoka.sendMessage(from, { video: { url: anu.result.url, caption: mess.succ }}, { quoted: m })}
break
case 'bahasa': case 'kodenegara': {
(`*A*
Afganistan 93
Afrika Selatan 27
Afrika Tengah 236
Albania 355
Algeria (Aljazair) 213
Amerika Serikat 1
Andorra 376
Angola 244
Anguila 1-264
Antigua 1-268
Antillen Belanda 599
Arab Saudi 966
Argentina 54
Armenia 374
Aruba 297
Australia 61
Austria 43
Azerbaijan 994

*B*
Bahama 1-242
Bahrain 973
Bangladesh 880
Barbados 1-246
Barbuda 1-268
Belanda 31
Belarus 375
Belgia 32
Belize 501
Benin 229
Bermuda 1-441
Bhutan 975
Bolivia 591
Bosnia dan Herzegovina 387
Botswana 267
Brasil 55
Brunei Darussalam 673
Bulgaria 359
Burkina Faso 226
Burundi 257

*C*
Cape Verde 238
Ceko 420
Chad 235
Chili 56
Cina 86
Cina Makau 853

*D*
Denmark 45
Djibouti 253
Domikia 1-767

*E*
Ekuador 593
El Salvador 503
Eritrea 291
Estonia 372
Ethiopia 251

*F*
Fiji 679
Filipina 63
Finlandia 358

*G*
Gabon 241
Gambia 220
Georgia 995
Ghana 233
Gibraltar 350
Greenland 299
Grenada 1-473
Guam 1-671
Guatemala 502
Guinea 224
Guinea Bissau 245
Guinea Ekuator 240
Guyana 592

*H*
Haiti 509
Honduras 504
Hongaria 36
Hongkong 852

*I*
Indonesia 62
India 91
Inggris (Britania Raya) 44
Irak 964
Iran 98
Irlandia 353
Islandia 354
Israel 972
Italia 39

*J*
Jamaika 1-876
Jepang 81
Jerman 49
Jersey 44-1534

*K*
Kamboja 855
Kamerun 237
Kanada 1
Kazakhstan 7
Kenya 254
Kepulauan Marshall 692
Kepulauan Turks dan Caicos 1-649
Kirgizstan 996
Kiribati 686
Kolombia 57
Komoros 682
Korea Selatan 82
Korea Utara 850
Kosta Rika 506
Kroasia 385
Kuba 53
Kuwait 965
Kurakao 599

*L*
Laos 856
Latvia 371
Lebanon 961
Lesotho 266
Liberia 231
Libya 218
Liechtenstein 423
Lituania 370
Luksemburg 352

*M*
Madagaskar 261
Makedonia 389
Maladewa 960
Malawi 265
Malaysia 60
Mali 223
Malta 356
Maroko 212
Mauritania 222
Mauritius 230
Mayotte 262
Aryasiko 52
Mesir 20
Mikronesia 691
Moldova 373
Monako 377
Mongolia 976
Montenegro 382
Mozambik 258
Myanmar 95

*N*
Namibia 264
Nauru 674
Nepal 977
Niger 227
Nigeria 234
Nikaragua 505
Niue 683
Norwegia 47

*O*
Oman 968

*P*
Pakistan 92
Palau 680
Palestina 970
Panama 507
Pantai Gading 225
Papua Nugini 675
Paraguay 595
Perancis 33
Perancis Polinesia 689
Peru 51
Pitcairn 64
Polandia 48
Portugal 351
Puerto Riko 1-787, 1-939
Pulau Cocos 61
Pulau Cook 682
Pulau Falkland 500
Pulau Faroe 298
Pulau Man 44-1624
Pulau Mariana Utara 1-670
Pulau Reuni 262
Pulau Solomon 677
Pulau Virgin 1-340

*Q*
Qatar 974

*R*
Republik Ceko 420
Republik Demokrasi Kongo 243
Republik Dominika 1-809, 1-829, 1-849
Rumania 40
Rusia 7
Rwanda 250

*S*
Sahara Barat 212
Santo Barthelemy 590
Santo Helena 290
Santo Kitts dan Nevis 1-869
Santo Lucia 1-758
Santo Vincent dan Grenadines 1-784
Samoa 685
San Marino 378
Sao Tome dan Principe 239
Selandia Baru 64
Senegal 221
Serbia 381
Seychelles 248
Sierra Leone 232
Singapura 65
Siprus 357
Slovenia 386
Slowakia 421
Somalia 252
Spanyol 34
Sri Lanka 94
Sudan 249
Sudan 211
Suriah 963
Suriname 597
Svalbard dan Jan Mayen 47
Swaziland 268
Swedia 46
Swiss 41

*T*
Tajikistan 992
Tanjung Verde 238
Tanzania 255
Taiwan 886
Thailand 66
Timor Leste 670
Togo 228
Tokelau 690
Tonga 676
Trinidad dan Tobago 1-868
Tunisia 216
Turki 90
Turkmenistan 993
Tuvalu 688

*U*
Uganda 256
Ukraina 380
Uni Emirat Arab 971
Uruguay 598
Uzbekistan 998

*V*
Vanuatu 678
Vatican 379
Venezuela 58
Vietnam 84

*W*
Walls dan Futuna 681

*Y*
Yaman 967
Yunani 30
Yordania 962

*Z*
Zambia 260
Zimbabwe 263`)}
break
case 'covidworld': case 'coviddunia': {
if (!text) throw `Tambahkan query negara setelah command\n*Example* : ${prefix + command} indonesia`
anu = await fetchJson(`https://covid19.mathdro.id/api/countries/${q}`)
txt = `*Negara* : *${q}*

*Confirmed* :
*Value* : *${anu.confirmed.value}*
*Detail* : *${anu.confirmed.detail}*

*Recovered* :
*Value* : *${anu.recovered.value}*
*Detail* : *${anu.recovered.detail}*

*Deaths* :
*Value* : *${anu.deaths.value}*
*Detail* : *${anu.deaths.detail}*

*Last Update* : *${anu.lastUpdate}*`
m.reply(txt)}
break
case 'faktaunik': case 'fakta': {
anu = await fetchJson(`https://violetics.pw/api/random/fakta?apikey=${apikey.vikey}`)
m.reply(anu.result)}
break
case 'bijak': case 'katabijak': case 'bucin': case 'katabucin': {
anu = await fetchJson(`https://violetics.pw/api/random/katabijak?apikey=${apikey.vikey}`)
m.reply(anu.result)}
break
case 'quotebucin': case 'bucinquote': {
const query = 'bucin'
const quote = await quote.Quotes(query)
m.reply(quote)
}
break
case 'quotegalau': case 'galauquote': {
const query = 'galau'
const quote = await quote.Quotes(query)
m.reply(quote)
}
break
case 'quotekehidupan': case 'kehidupanquote': {
const query = 'kehidupan'
const quote = await quote.Quotes(query)
m.reply(quote)
}
break
case 'randomquote': case 'quoterandom': case 'quotes': {
const query = 'random'
const quote = await quote.Quotes(query)
m.reply(quote)
}
break
case 'tag': {
if (!q) throw (`Penggunaan ${prefix}tag 62xnxx`)
var nomqm = `${q}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
hisoka.sendText(m.chat, tagq, m, { contextInfo: { mentionedJid }})
}
break
case 'tagme': {
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
hisoka.sendText(m.chat, tag, m, { contextInfo: { mentionedJid }})
}
break
case 'cekbapak': {
if (!text) throw (`Siapa yg mau dicek?`)
const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk']
const cek = bapak[Math.floor(Math.random() * bapak.length)]
m.reply(cek)}
break
case 'cekmati': case 'maticek': {
if (!text) throw (`Siapa yg mau dicek?`)
anu = mati[Math.floor(Math.random() * mati.length)]
m.reply(`${text} Mati Dalam ${anu}\n\n\n*Note* : *Ini Hanya Main Main*`)
}
break
case 'citacita': case 'citaku': case 'randomcitacita': {
const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
const cita3 = cita[Math.floor(Math.random() * cita.length)]
cita2 = await getBuffer(cita3)
hisoka.sendMessage(m.chat, { audio: cita2, mimetype: 'audio/mpeg', fileName: `cita.mp4` }, { quoted: m })}
break
case 'hobby': case 'hoby': {
if (!text) throw (`Siapa yg mau dicek?`)
const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
m.reply(`${text} hobbynya ${by}`)}
break
case 'wangy': case 'wangyan': {
if (!text) throw '*Masukkan Query Nama Kak><*'
qq = `${text}`
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
m.reply(awikwok)}
break
case 'truth': {
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
hisoka.sendMessage(m.chat, { image: truteh, caption: `*Truth* :\n${ttrth}` }, { quoted: m })}
break
case 'dare': {
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
hisoka.sendMessage(m.chat, { image: buff, caption: `*Dare* :\n${der}` }, { quoted: m })}
break
case 'apakah': {
if (!text) throw (`*Pertanyaannya apanih?*\n*Example : ${prefix + command} gw wibu*`)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','ynkts']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`*Pertanyaan* : *${text}*\n*Jawaban* : *${kah}*`)}
break
case 'bisakah': {
if (!text) throw (`*Pertanyaannya apanih?*\n*Example : ${prefix + command} gw wibu*`)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU','yntkts']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`*Pertanyaan* : *${text}*\n*Jawaban* : *${keh}*`)}
break
case 'kapankah': {
if (!text) throw (`*Pertanyaannya apanih?*\n*Example : ${prefix + command} gw wibu*`)
const kapan =['yntkts','Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`*Pertanyaan* : *${text}*\n*Jawaban* : *${koh}*`)}
break
case 'rate': case 'nilai': {
if (!text) throw (`*Pertanyaannya apanih?*\n*Example : ${prefix + command} kid*`)
const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`*Name* : *${text}*\n*Rate* : *${te}*`)}
break
case 'dadu': case 'roll': {
let encmedia = await hisoka.sendImageAsSticker(m.chat, dadunya, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)}
break
case 'flip': case 'lemparkoin': {
let encmedia = await hisoka.sendImageAsSticker(m.chat, flipnya, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)}
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
reply2(mess.wait)
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
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
m.reply(`*Merespon dalam ${latensi.toFixed(4)} _Second_, ${oldd - neww} _miliseconds_*`)}
break
case 'tes': case 'bot': {
m.reply(`Iya ada apa kak Kid disini😼`)}
break
case 'botstatus': case 'statusbot': case 'infobot': case 'info': {
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
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `*Name Bot* : ${namebot}
*Runtime* : ${runtime(process.uptime())}
*Speed* : ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
*User* : ${daftaruser.length}

*Contact Me*
*Instagram : instagram.com/iam_kunzx*
*Github : github.com/kunzxd404*
*Whatsapp : wa.me/6287778886786*

*Server Info*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
m.reply(respon)
}
break
case 'owner': case 'creator': case 'dev': {
hisoka.sendContact(m.chat, global.owner, m)
}
break
case 'twtdl': case 'twt': case 'twitterdl': case 'twitter': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('twitter.com')) throw (mess.wrongFormat)
await reply2(mess.wait)
xfar.Twitter(q).then(async data => {
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
reply2(mess.error)
})}
break
case 'gitclone': case 'git': case 'clone': case 'github': {
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!regex.test(args[0])) throw 'link salah!'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
hisoka.sendMessage(m.chat, {document: { url: url }, mimetype: 'json', fileName: `${filename}`}, null, {quoted:m})}
break
case 'mp4': case 'ytmp4': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('youtu.be') && !q.includes('youtube.com')) throw reply2(mess.wrongFormat)
reply2(mess.wait)
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
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('youtu.be') && !q.includes('youtube.com')) throw reply2(mess.wrongFormat)
reply2(mess.wait)
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
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('instagram.com')) throw reply2(mess.wrongFormat)
reply2(mess.wait)
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
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('facebook.com')) throw reply2(mess.wrongFormat)
xfar.Facebook(args[1]).then(async data => {
let txt = `*----「 FACEBOOK-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${data.title}*\n`
txt += `*Type :* *${data.medias[0].extension}*\n`
txt += `*Quality :*${data.medias[0].quality}*\n`
txt += `*Size :* *${data.medias[0].formattedSize}*\n`
txt += `*Url Source :* *${data.url}*\n\n`
txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
sendFileFromUrl(m.chat, data.medias[0].url, mess.succ, m)})}
break
case 'tiktokmp3': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('tiktok')) throw mess.wrongFormat
await reply2(mess.wait)
xfar.Tiktok(q).then(async data => {
let txt = `*----「 TIKTOK-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${data.title}*\n`
txt += `*Format :* *${data.medias[3].extension}*\n`
txt += `*Quality :* *${data.medias[3].quality}*\n`
txt += `*Size :* *${data.medias[3].formattedSize}*\n`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
hisoka.sendMessage(m.chat, { audio: { url: `${data.medias[0].url}` }, caption: mess.succ }, { quoted: m})
})}
break
case 'tiktokwm': case 'tiktok': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('tiktok')) throw mess.wrongFormat
await reply2(mess.wait)
xfar.Tiktok(q).then(async data => {
let txt = `*----「 TIKTOK-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${data.title}*\n`
txt += `*Format :* *${data.medias[0].extension}*\n`
txt += `*Quality :* *${data.medias[0].quality}*\n`
txt += `*Size :* *${data.medias[0].formattedSize}*\n`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
hisoka.sendMessage(m.chat, { video: { url: `${data.medias[0].url}` }, caption: mess.succ }, { quoted: m})
})}
break
case 'tiktoknowm': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('tiktok')) throw mess.wrongFormat
await reply2(mess.wait)
xfar.Tiktok(q).then(async data => {
let txt = `*----「TIKTOK-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${data.title}*\n`
txt += `*Format :* *${data.medias[2].extension}*\n`
txt += `*Quality :* *${data.medias[2].quality}*\n`
txt += `*Size :* *${data.medias[2].formattedSize}*\n`
sendFileFromUrl(m.chat, data.thumbnail, txt, m)
hisoka.sendMessage(m.chat, { video: { url: `${data.medias[0].url}` }, caption: mess.succ }, { quoted: m})
})}
break
case 'cocofun': case 'coco': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('coco')) throw mess.wrongFormat
reply2(mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/download/cocofun?url=${q}&apikey=${apikey.xkey}`)
let txt = `*----「COCOFUN-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${anu.result.title}*\n`
txt += `*Like :* *${anu.result.like}*\n`
txt += `*Shared :* *${anu.result.shared}*\n`
txt += `*Quality :* *${anu.resul.resolution}*\n`
txt += `*Desc :* *${anu.result.desc}*\n`
sendFileFromUrl(m.chat, anu.result.thumbnail, txt, m)
hisoka.sendMessage(m.chat, { video: { url: `${anu.result.url}` }, caption: mess.succ }, { quoted: m})}
break
case 'xnxx': case 'xnx': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('xnxx')) throw mess.wrongFormat
reply2(mess.wait)
anu = await fetchJson(`https://api-xcoders.xyz/api/download/xnxx?url=${q}&apikey=${apikey.xkey}`)
let txt = `*----「XNXX-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${anu.result.title}*\n`
txt += `*Views :* *${anu.result.views}*\n`
txt += `*Quality :* *${anu.resul.quality}*\n`
txt += `*Keyword :* *${anu.result.keyword}*\n`
sendFileFromUrl(m.chat, anu.result.thumb, txt, m)
hisoka.sendMessage(m.chat, { video: { url: `${anu.result.url}` }, caption: mess.succ }, { quoted: m})}
break
case 'telesticker': case 'stickertele': case 'telesearch': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('t.me') && !q.includes('tele')) throw reply2(mess.wrongFormat)
await reply2(mess.wait)
xfar.Telesticker(q).then(async data => {
gamnya = await getBuffer(`${data.url}`)
let encmedia = await hisoka.sendImageAsSticker(m.chat, gamnya, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'sfilemobi': case 'sfile': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('sfile')) throw mess.wrongFormat
reply2(mess.wait)
anu = await fetchJson(`https://violetics.pw/api/downloader/sfile?apikey=${apikey.vikey}&url=${q}`)
let txt = `*----「SFILEMOBI-DOWNLOADER 」----*\n\n`
txt += `*Title :* *${anu.result.title}*\n`
txt += `*Size :* *${anu.result.size}*\n`
gamnya = await getBuffer(`https://images.app.goo.gl/XVFcJJM7RwXMn6Pf6`)
sendFileFromUrl(m.chat, gamnya, txt, m)
hisoka.sendMessage(m.chat, {document: { url: anu.result.url }, mimetype: anu.result.mimetype, fileName: anu.result.title}, null, {quoted:m})}
break
case 'mediafire': {
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('mediafire')) throw mess.wrongFormat
reply2(mess.wait)
mediafire(q).then(async data => {
hisoka.sendMessage(m.chat, {document: { url: data.link }, mimetype: 'json', fileName: anu.result.title }, null, {quoted:m})})}
break
case 'setcmd': {
if (!m.quoted) throw 'reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
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
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
case 'smeme': case 'stickermeme': {
if (!quoted) throw 'reply image dengan caption'
if (!q.includes('|')) return m.reply(`Kirim perintah *${prefix + command}* kunz|kid`)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${util.format(anu)}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${util.format(anu)}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'animecard': {
if (!quoted) throw 'reply Image dengan caption'
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://violetics.pw/api/canvas/anime-card?apikey=${apikey.vikey}&text=${q}&avatar=${util.format(anu)}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://violetics.pw/api/canvas/anime-card?apikey=${apikey.vikey}&text=${q}&avatar=${util.format(anu)}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'lolice': case 'lgbt': case 'pixelate': case 'simpcard': case 'horny': case 'pansexual': case 'nonbinary': case 'lesbian': case 'bisexual': {
if (!quoted) throw 'reply Image'
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://some-random-api.ml/canvas/${command}?avatar=${util.format(anu)}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://some-random-api.ml/canvas/${command}?avatar=${util.format(anu)}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'tobecontinue': case 'wasted': case 'wanted': case 'triggered': case 'greyscale': case 'jail': case 'darkness': case 'delete': case 'invert': case 'joke': case 'sepia': case 'blur': case 'circle': case 'fuse': case 'gay': case 'facepalm': case 'beautiful': case 'trash': case 'scary': case 'rejected': case 'brazzers': case 'ps4': case 'distort': case 'moustache': case 'frame': case 'emboss': case 'missionpassed': case 'spongebob': case 'discordhouse': case 'karenhave': case 'thanos': case 'approved': case 'burn': case 'challenger': case 'crush': case 'dictator': case 'iphonex': case 'animeface': case 'stickbug': case 'badut2': case 'badut3': {
if (!quoted) throw 'reply Image'
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/maker/${command}?url=${util.format(anu)}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/maker/${command}?url=${util.format(anu)}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'angie': case 'aria': case 'attic': case 'black-and-white': case 'chrome-1970': case 'contrast-bandw': case 'creamy': case 'duotone': case 'eva': case 'golden-hour': case 'hana': case 'hdr': case 'japanese': case 'lana': case 'lavender': case 'lemonade': case 'light-leak': case 'lisa': case 'lomo': case 'milk': case 'molly': case 'monochrome': case 'morning': case 'movie': case 'orton': case 'paretro': case 'perfect-bandw': case 'plumy': case 'retrolga': case 'ruby': case 'sand': case 'sapphire': case 'sepia': case 'soft-sepia': case 'solarize': case 'sphinx': case 'venus': case 'viewfinder': case 'warm-sunset': {
if (!quoted) throw 'reply Image'
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://violetics.pw/api/photofilter/${command}?apikey=${apikey.vikey}&image=${util.format(anu)}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://violetics.pw/api/photofilter/${command}?apikey=${apikey.vikey}&image=${util.format(anu)}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'toilet': case 'place': case 'burning': case 'shattered': case 'mirrors': case 'anaglyph': case 'iphone': case 'flame': case 'frame': case 'memory': case 'nature': case 'ripped': case 'tearing': case 'exposure': {
if (!quoted) throw 'reply Image'
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/photooxy/${command}?url=${util.format(anu)}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/photooxy/${command}?url=${util.format(anu)}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'sertitolol': case 'sertifikattolol': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await getBuffer(`https://api-xcoders.xyz/api/maker/sertitolol?text=${q}&apikey=${apikey.xkey}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'coffee': case 'quotewood': case 'flaming': case 'oceansea': case 'pubg': case 'shadow': case 'rainbow': case 'gravity': case 'burnpaper': case 'smoke': case 'romantic': case 'naruto': case 'lovemessage': {
if (!q) throw mess.q
reply2(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/photooxy/${command}?text=${q}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
}
break
case 'grass': case 'doubleheart': case 'coffecup': case 'lovetext': case 'butterfly': case 'slidetext': {
if (!q.includes('|')) return m.reply(`Kirim perintah *${prefix + command}* kunz|kid`)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
reply2(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.xteam.xyz/textpro/${command}?text=${teks1}&text2=${teks2}&APIKEY=${apikey.xtkey}` }, caption: mess.succ }, { quoted: m})
}
break
case 'nulis': case 'tulis': {
if (!q) throw mess.q
reply2(mess.wait)
anu = await getBuffer(`https://xteam.xyz/magernulis3?text=${q}&APIKEY=${apikey.xtkey}`)
hisoka.sendMessage(from, {image: anu, caption: mess.succ}, {quoted:m})
}
break
case 'collage': case 'cyberpunk': case 'billboard': case 'fire': case 'rain': case 'ring': case 'cat': case 'sad': case 'cinemagraph': case 'vhs': case 'heart': case 'smoke': case 'handlefire': case 'spectrum': case 'painting': {
if (!quoted) throw 'reply Image'
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/ephoto/${command}?url=${util.format(anu)}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/ephoto/${command}?url=${util.format(anu)}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'wood': case 'notebook': case 'pencil': case 'wposter': case 'heated': case 'buoys': case 'writestatus': case 'quotestatus': {
if (!quoted) throw 'reply Image\nContoh ${command} kunz kid'
if (!q.includes('|')) return m.reply(`Kirim perintah *${prefix + command}* kunz|kid`)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/ephoto/${command}?text=${teks1}&text2=${teks2}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/ephoto/${command}?text=${teks1}&text2=${teks2}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'juventus': case 'scholes': {
if (!quoted) throw 'reply Image\nContoh ${command} Kunz 07'
if (!q.includes('|')) return m.reply(`Kirim perintah *${prefix + command}* kunz|07`)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/ephoto/juventus?text=${teks1}&text2=${teks2}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/ephoto/juventus?text=${teks1}&text2=${teks2}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'television': case 'glasses': case 'blackpink': case 'neonbp': case 'coverpubg': case 'greenbrush': case 'neonblue': case 'eraser': case 'dragonfire': case 'incandescent': case 'typography': case 'letters': case 'cloth': case 'graffiti': case 'metals': case 'typography2': case 'nightstars': case 'cloud': case 'caper': case 'horror': case 'sunlight': case 'cake': case 'pig': case 'hallowen': case 'leafgraphy': case 'water': case 'crank': case 'puppy': case 'pubgavatar': case 'foggy': case 'memories': case 'glazing': case 'flower': case 'american': case 'aov': case 'ml': case 'warface': case 'tiger': case 'arrow': case 'arrow2': case 'diary': case 'artistic': case 'diaryframe': {
if (!quoted) throw 'reply Image\nContoh ${command} kunz'
if (!q) throw mess.q
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/ephoto/$command}?text=${q}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://api-xcoders.xyz/api/ephoto/$command}?text=${q}&apikey=${apikey.xkey}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'neon': case 'snowtext': case 'cloudtext': case '3dluxury': case '3dgradient': case 'blackpink': case 'realisticcloud': case 'cloudsky': case 'sandsummerbeach': case 'sandwriting': case 'sandengraved': case 'summerysandwriting': case 'balloontext': case '3dglue': case 'balloontext': case 'metaldarkgold': case 'neongalaxy': case '1917': case 'minion3d': case 'holographic3d': case 'metalpurpledual': case 'deluxesilver': case 'glossybluemetal': case 'deluxegold': case 'glossycarbon': case 'fabric': case 'happnewyearfirework': case 'newyear3d': case 'neontext': case 'metaldarkgoldeffect': case 'helloweenfire': case 'bloodontheroastedglass': case 'xmas3d': case 'jokerlogo': case 'wicker': case 'naturalleaves': case 'fireworksparkle': case 'Sparkle': case 'skeleton': case 'redfoilballon': case 'purplefoilballon': case 'pinkfoilballon': case 'greenfoilballon': case 'cyanfoilballon': case 'bluefoilballon': case 'goldfoilballon': case 'steel': case 'ultragloss': case 'denim': case 'decorategreen': case 'decoratepurple': case 'peridotstone': case 'rock': case 'lava': case 'yellowglass': case 'purpleglass': case 'orangeglass': case 'greeglass': case 'cyanglass': case 'blueglass': case 'redglass': case 'purpleshnyglass': case 'captainamerica': case 'captainamerica': case 'robotr2d2': case 'toxic': case 'rainbowequalizer': {
if (!q) throw mess.q
reply2(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.xteam.xyz/textpro/${command}?text=${q}&APIKEY=${apikey.xtkey}` }, caption: mess.succ }, { quoted: m})
}
break
case 'stone': case 'ph': case '3davengers': case 'marvelstudios': case 'marvel': case 'glitch': case '3dmetalsilver': case '3dmetalrosegold': case '3dmetalgold': case '3dmetalgalaxy': case 'lionlogomascot': case 'wolflogoblackwhite': case 'wolflogogalaxy': case 'ninjalogo': case 'realisticvintage': {
if (!q.includes('|')) return m.reply(`Kirim perintah *${prefix + command}* kunz|kid`)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
reply2(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.xteam.xyz/textpro/${command}?text=${teks1}&text2=${teks2}&APIKEY=${apikey.xtkey}` }, caption: mess.succ }, { quoted: m})
}
break
case 'fakeytcomment': case 'ytcomment': {
if (!q.includes('|')) return m.reply(`Kirim Image Dengan Perintah *${prefix + command}* woi|kunz`)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://some-random-api.ml/canvas/youtube-comment?avatar=${util.format(anu)}&comment=${teks1}&username=${teks2}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { image: { url: `https://some-random-api.ml/canvas/youtube-comment?avatar=${util.format(anu)}&comment=${teks1}&username=${teks2}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
}
break
case 'dog': case 'cat': case 'panda': case 'fox': case 'red_panda': case 'koala': case 'bird': case 'raccoon': case 'kangaroo': {
anu = await fetchJson(`https://some-random-api.ml/animal/${command}`)
hisoka.sendMessage(m.chat, { image: { url: anu.image }, caption: mess.succ }, { quoted: m })
}
break
case 'stickersearch': case 'stickerly': {
if (!q) throw mess.q
reply2(mess.wait)
xfar.StickerSearch(q).then(async data => {
gamnya = await getBuffer(`${data.sticker_url}`)
let encmedia = await hisoka.sendImageAsSticker(m.chat, gamnya, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)})}
break
case 'attp': {
if (!q) throw mess.q
reply2(mess.wait)
let media = await getBuffer(`https://violetics.pw/api/canvas/attp?apikey=${apikey.vikey}&text=${q}`)
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)}
break
case 'ttp': {
if (!q) throw mess.q
reply2(mess.wait)
let media = await getBuffer(`https://violetics.pw/api/canvas/ttp?apikey=${apikey.vikey}&text=${q}`)
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)}
break
case 'shaunthesheep': {
if (!quoted) throw 'reply Image\nContoh ${command} kunz'
reply2(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { video: { url: `https://api.xteam.xyz/videomaker/${command}?url=${util.format(anu)}&APIKEY=${apikey.xtkey}` }, caption: mess.succ }, { quoted: m })
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
hisoka.sendMessage(m.chat, { video: { url: `https://api.xteam.xyz/videomaker/${command}?url=${util.format(anu)}&APIKEY=${apikey.xtkey}` }, caption: mess.succ }, { quoted: m })
}
await fs.unlinkSync(media)
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
reply2(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/dataB/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
reply2(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/dataB/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
reply2(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/dataB/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
reply2(mess.wait)
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
case 'kisahnabi': case 'kisah': {
if (!q) throw mess.q
anu = await fetchJson(`https://api-xcoders.xyz/api/religion/kisahnabi?nabi=${q}&apikey=${apikey.xkey}`)
m.reply(`*Nama*: *${q}*\n*Kisah* : ${anu.result.kisah}`)}
break
case 'asmaulhusna': case 'namanamaallah': {
anu = await fetchJson(`https://violetics.pw/api/religion/asmaulhusna?apikey=${apikey.vikey}`)
get_result = anu.result
let txt = `ASMAUL HUSNA\n\n`
for ( var x of get_result ){
txt += `${x.arabic}\n`
txt += `${x.latin}\n`
txt += `${x.translation_id}\n\n`}
m.reply(txt)}
break
case 'mutual': case 'next': {
anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
await m.reply('Mencari Pasangan >_<')
await m.reply(`wa.me/${anug}`)
await m.reply(`Pasangan Ditemukan`)}
break
case 'anonymous': {
if (m.isGroup) throw mess.private
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, namebot, m)
}
break
case 'keluar': {
if (m.isGroup) throw mess.private
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
if (m.isGroup) throw mess.private
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, namebot, m)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, namebot, m)
room.b = m.sender
room.state = 'CHATTING'
await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, namebot, m)
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
await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, namebot, m)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) throw mess.private
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
await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, namebot, m)
room.b = m.sender
room.state = 'CHATTING'
await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, namebot, m)
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
await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, namebot, m)
}}
break
case 'sendkontak': case 'sendcontact': {
if (m.isGroup) throw mess.private
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
await hisoka.sendButtonText(m.chat, buttons, jawab, namebot, m, {mentions: menst})
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
await hisoka.sendButtonText(m.chat, buttons, jawab, namebot, m, {mentions: ments})
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
case 'suit': {
if (!q) throw (`Kirim perintah ${prefix}suit gunting / batu / kertas`)
const userspilih = q
if (!userspilih.match(/batu|gunting|kertas/)) return reply2(`Pilih batu, kertas, gunting`)
var computer = Math.random();
if (computer < 0.34 ) {
computer = 'batu';
} else if( computer >= 0.34 && computer < 0.67) {
computer = 'gunting';
} else {
computer = 'kertas';
}
if ( userspilih == computer ) {
reply2(`Pertandingan Seri!`)
} else if ( userspilih == 'batu' ) {
if( computer == 'gunting' ) {
m.reply(`*Kamu memilih Batu dan bot Gunting*\n*Kamu menang!*`)
} else {
m.reply(`*Kamu memilih Batu dan bot Kertas*\n*Kamu kalah!*`)
}
} else if ( userspilih == 'gunting' ) {
if( computer == 'batu' ) {
m.reply(`*Kamu memilih Gunting dan bot Batu*\n*Kamu kalah!*`)
} else {
m.reply(`*Kamu memilih Gunting dan bot Kertas\n*Kamu menang!*`)
}
} else if ( userspilih == 'kertas' ) {
if( computer == 'batu' ) {
m.reply(`*Kamu memilih Kertas dan bot Batu*\n*Kamu menang!*`)
} else {
m.reply(`*Kamu memilih Kertas dan bot Gunting*\n*Kamu kalah!*`)
}
}}
break
case 'aduayam': case 'warayam': {
if (!q) throw (`Kirim perintah ${prefix}suit gunting / batu / kertas`)
const userspilih = q
if (!userspilih.match(/🐥|🐤|🐓/)) return reply2(`Pilih 🐥, 🐤, 🐓`)
var computer = Math.random();
if (computer < 0.34 ) {
computer = '🐥';
} else if( computer >= 0.34 && computer < 0.67) {
computer = '🐤';
} else {
computer = '🐓';
}
if ( userspilih == computer ) {
m.reply(`Pertandingan Seri!`)
} else if ( userspilih == '🐥' ) {
if( computer == '🐤' ) {
m.reply(`*Kamu memilih 🐥 dan bot 🐤*\n*Kamu kalah!*`)
} else {
m.reply(`*Kamu memilih 🐥 dan bot 🐥*\n*Kita seri!*`)
}
} else if ( userspilih == '🐤' ) {
if( computer == '🐥' ) {
m.reply(`*Kamu menggunakan ayam 🐤 dan bot 🐥\n*Kamu kalah!*`)
} else {
m.reply(`*Kamu menggunakan ayam 🐤 dan bot 🐓\n*Kamu menang!*`)
}
} else if ( userspilih == '🐓' ) {
if( computer == '🐥' ) {
reply2(`*Kamu menggunakan ayam 🐓 dan bot 🐥*\n*Kamu menang!*`)
} else {
reply2(`*Kamu menggunakan ayam 🐓 dan bot 🐤*\n*Kamu kalah!*`)
}
}}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) throw (`Tidak bisa bermain dengan diri sendiri !`)
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
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban: ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namebot, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'bendera') {
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/dataB/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMedia(m.chat, result.img, '', m, { caption: `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : 60s` }).then(() => {
console.log("Jawaban: " + result.name)
tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], "Waktu Habis\nJawaban: " + result.name , namebot, m)
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
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban: ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namebot, m)
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
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban: ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namebot, m)
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
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban: ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namebot, m)
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
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban: ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namebot, m)
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
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban: ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namebot, m)
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
'?? : 🍌 : 🍌 Win👑'
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
 
🎒 Inventori :
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
 • tembak udara/darat/laut
 • berburu
 • menebang
 • mulung
 • ojek
 • taxy
 • myinventori
 • topleaderboard
 
⚔️ Farming RPG
 • killslime
 • killgoblin
 • killdevil
 • killbehemoth
 • killdemond
 • killdemondking 
`)
const dafpetualang = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
 hydratedContentText: `${pp}`,
 Message: { 
 jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') },
 hydratedFooterText: namebot,
 hydratedButtons: [{
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
case 'pasar': case 'shop': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
txt = `🛒 *Shop*

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
 • sellhewan ikan <jumlah>`
 const dafpetualang = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
 hydratedContentText: `${txt}`,
 Message: { 
 jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') },
 hydratedFooterText: namebot,
 hydratedButtons: [{
 quickReplyButton: {
 displayText: 'My Inventori',
 id: '.mybag',
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
footer: namebot,
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, button, { quoted: m })
}
break
case 'joinrpg': {
if (isPetualang) return m.reply('*Kamu sudah menjadi petualang*')
_petualang.push(sender)
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_petualang))
capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!`
const dafpetualang = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
 hydratedContentText: capt,
 Message: { 
 jpegThumbnail: fs.readFileSync('./lib/hisoka.jpg') },
 hydratedFooterText: namebot,
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
hisoka.relayMessage(m.chat, dafpetualang.message, { messageId: dafpetualang.key.id}, { quoted: m })
}
addInventori(sender)
addLevelingId(sender)
break
case 'kerajaan': case 'kerajaanku': case 'kingdom': case 'mykingdom': {
if (isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
txt = `*My Kingdom 👑*

*DATA*
*Populasi* : *...Penduduk*
*Luas* : *...m*

*BUILDING*
*Rumah* : *${getRumah(sender)}*
*RumahSakit* : *${getRumahsakit(sender)}*
*KantorPolisi* : *${getKantorpolisi(sender)}*
*Toko* : *${getToko(sender)}*

*ECONOMY*
*Uang* : *$${getBalance(sender, balance)}*
*Kayu* : *${getKayu(sender)}*
*Besi* : *${getBesi(sender)}*
*Emas* : *${getEmas(sender)}*
*Berlian* : *${getDm(sender)}*
`
m.reply(txt)}
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
hydratedFooterText: namebot,
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
 hydratedFooterText: namebot,
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
hydratedFooterText: namebot,
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
hydratedFooterText: namebot,
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
hydratedFooterText: namebot,
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
footer: namebot,
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
case 'tembak': {
const adven = Math.ceil(Math.random() * 1000)
const money = Math.ceil(Math.random() * 300)						
if (args[0] == 'udara') {
setTimeout( () => {
m.reply(`[ *PERINTAH DILAKSANAKAN* ]`)
}, 1000)
setTimeout( () => {
m.reply(`[ *SEDANG BERBURU* ]`)
}, 5000)
setTimeout( () => {
m.reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
}, 8000)
setTimeout( () => {
m.reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
}, 12000)
}
if (args[0] == 'darat') {
setTimeout( () => {
m.reply(`[ *PERINTAH DILAKSANAKAN* ]`)
}, 1000)
setTimeout( () => {
m.reply(`[ *SEDANG BERBURU* ]`)
}, 5000)
setTimeout( () => {
m.reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
}, 8000)
setTimeout( () => {
m.reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
}, 12000)
}
if (args[0] == 'laut') {
setTimeout( () => {
m.reply(`[ *PERINTAH DILAKSANAKAN* ]`)
}, 1000)
setTimeout( () => {
m.reply(`[ *SEDANG BERBURU* ]`)
}, 5000)
setTimeout( () => {
m.reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
}, 8000)
setTimeout( () => {
m.reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
}, 12000)
}
addLevelingXp(sender, adven)
addBalance(sender, money, balance)}
break
case 'ojek': case 'ngojek': case 'ngojol': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
uang = Math.ceil(Math.random() * 5000)
xp = Math.ceil(Math.random() * 500)
order = Math.ceil(Math.random() * 1)
setTimeout( () => {
caption = monospace(`「 *Ojek ${pushname}* 」\n • Uang : ${uang}💸\n • Exp : ${xp}Xp💫\n • Orderan : +1\n • Total Orderan : ${getOrderan(sender)}🏷`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: caption,
locationMessage: { 
jpegThumbnail: walbang },
hydratedFooterText: namebot,
hydratedButtons: [ 
{
quickReplyButton: {
displayText: 'Cari Orderan lagi',
id: '.ojek',
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
}, 12000)
setTimeout( () => {
hisoka.sendText(from, '🏍 *Sampai ditujuan*. . .') 
}, 10000) ,
setTimeout( () => {
hisoka.sendText(from, '🏍 *Mengantarkan penumpang*. . .') 
}, 7000) ,
setTimeout( () => {
hisoka.sendText(from, '*Mendapatkan orderan*. . .') 
}, 4000) ,
setTimeout( () => {
hisoka.sendText(from, '🔍 *Mencari orderan*. . .') 
}, 1500) ,
addLevelingXp(sender, xp)
addOrderan(sender, order)
addBalance(sender, uang, balance)}
break
case 'taxy': case 'naxy': case 'gocar': {
if (!isPetualang) return hisoka.sendMessage(m.chat, buttonpetualang, { quoted: m })
uang = Math.ceil(Math.random() * 5000)
xp = Math.ceil(Math.random() * 500)
order = Math.ceil(Math.random() * 1)
setTimeout( () => {
caption = monospace(`「 *Taxy ${pushname}* 」\n • Uang : ${uang}💸\n • Exp : ${xp}Xp💫\n • Orderan : +1\n • Total Orderan : ${getOrderan(sender)}🏷`)
const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: caption,
locationMessage: { 
jpegThumbnail: walbang },
hydratedFooterText: namebot,
hydratedButtons: [ 
{
quickReplyButton: {
displayText: 'Cari Orderan lagi',
id: '.taxy',
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
}, 12000)
setTimeout( () => {
hisoka.sendText(from, '🚕 *Sampai ditujuan*. . .') 
}, 10000) ,
setTimeout( () => {
hisoka.sendText(from, '🚕 *Mengantarkan penumpang*. . .') 
}, 7000) ,
setTimeout( () => {
hisoka.sendText(from, '*Mendapatkan orderan*. . .') 
}, 4000) ,
setTimeout( () => {
hisoka.sendText(from, '🔍 *Mencari orderan*. . .') 
}, 1500) ,
addLevelingXp(sender, xp)
addOrderan(sender, order)
addBalance(sender, uang, balance)}
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
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'gorilla') {
if (getGorilla(sender) < jmlh) return m.reply(`Besi Kamu Tidak Cukup`)
sellGorilla(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getMonyet(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'harimau') {
if (getHarimau(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellHarimau(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getHarimau(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'macan') {
if (getMacan(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellMacan(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getMacan(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'kuda') {
if (getKuda(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellKuda(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getKuda(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'zebra') {
if (getZebra(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellZebra(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getZebra(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'rusa') {
if (getRusa(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellRusa(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getRusa(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'kerbau') {
if (getKuda(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellKuda(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getKuda(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'sapi') {
if (getSapi(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellSapi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getSapi(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'babi') {
if (getBabi(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellBabi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getBabi(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'garuda') {
if (getGaruda(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellGaruda(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getGaruda(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'domba') {
if (getDomba(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellDomba(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getDomba(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'kelelawar') {
if (getKelelawar(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellKelelawar(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getKelelawar(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
hisoka.sendMessage(m.chat, buttoncekinvenyori, { quoted: m })
} else if (args[0] === 'ikan') {
if (getIkan(sender) < jmlh) return m.reply(`${args[0]} Kamu Tidak Cukup`)
sellIkan(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒*Pasar*\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/${args[0]} : ${args[1]}\n • Status : Sukses\n • Sisa${args[0]} : ${getIkan(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
let buttoncekinvenyori = { text: `${capti}`, footer: namebot, buttons: but, headerType: 2 }
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
footer: namebot,
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
footer: namebot,
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
footer: namebot,
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
footer: namebot,
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
footer: namebot,
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
 hydratedFooterText: namebot,
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
 hydratedFooterText: namebot,
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
 hydratedFooterText: namebot,
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
 hydratedFooterText: namebot,
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
 hydratedFooterText: namebot,
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
 hydratedFooterText: namebot,
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
if (!isCreator && !itsMe) throw mess.owner
if (!m.quoted) return m.reply('reply Pesannya!!')
let wokwol = await hisoka.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'eval': {
if (!isCreator) return reply2(mess.owner)
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
if (!isCreator && !itsMe) throw mess.owner
hisoka.public = true
m.reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isCreator && !itsMe) throw mess.owner
hisoka.public = false
m.reply('Sukses Change To Self Usage')
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator && !itsMe) throw mess.owner
if (!text) throw `Text mana?\n\n*Example* : ${prefix + command} fatih-san`
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
hisoka.send5ButImg(yoi, txt, namebot, fatihgans, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'creategroup': case 'buatgrup': {
if (!isCreator && !itsMe) throw mess.owner
if (!q) throw mess.q
const  group  =  await hisoka.groupCreate ( q ,  [ "6287778886786@s.whatsapp.net" ,  "628179269000@s.whatsapp.net" ] ) 
console.log( "membuat grup dengan nama" + q ) 
hisoka.sendMessage ( group.id ,  {  text : 'Hello Everyone'  } )}
break
case 'join': {
if (!isCreator && !itsMe) throw mess.owner
if (!q) throw `${mess.wrongFormat}\n*Example* : ${prefix}${command} url`
if (!q.includes('chat.whatsapp')) throw mess.wrongFormat
reply2(mess.wait)
let result = q.split('https://chat.whatsapp.com/')[1]
await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator && !itsMe) throw mess.owner
await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'sendsesi': case 'session': case'sendsession': {
if (!isCreator && !itsMe) throw mess.owner
hisoka.sendMessage(m.chat, {document: fs.readFileSync(`${sessionName}.json`), mimetype: 'json', fileName: `session-multi-device.json`}, {quoted:m})
}
break
case 'block': {
if (!isCreator && !itsMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator && !itsMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'lockcmd': {
if (!isCreator && !itsMe) throw mess.owner
if (!m.quoted) throw 'reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in cmdmedia)) throw 'Hash not found in database'
cmdmedia[hash].locked = !/^un/i.test(command)
fs.writeFileSync('./src/cmdmedia.json', JSON.stringify(cmdmedia))
m.reply('Done!')
}
break
case 'addmsg': {
if (!m.quoted) throw 'reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
case 'delmsg': case 'deletemsg': {
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
case 'setppbot': {
if (!isCreator && !itsMe) throw mess.owner
if (!quoted) throw `Kirim/reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/reply Image Dengan Caption ${prefix + command}`
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply2(mess.success)
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator && !itsMe) throw mess.owner
if (!text) throw `Text mana?\n\n*Example* : ${prefix + command} fatih-san`
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
hisoka.send5ButImg(i, txt, namebot, fatihgans, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'delete': case 'del': case 'd': {
if (!isCreator && !itsMe) throw mess.owner 
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'setexif': case 'setwmsticker': {
if (!isCreator && !itsMe) throw mess.owner
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
case 'chat': {
if (!isCreator && !itsMe) throw mess.owner
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
case 'setmenu': case 'sethelp': {
if (!isCreator && !itsMe) throw mess.owner
if (!q) throw 'Option : \n1. gif\n2. location\n3. image\n4. list\n5. listproduct'
if (args[0] === 'gif') {
global.menutype = 'gif'
reply2(mess.succ)
} else if (args[0] === 'location') {
global.menutype = 'location'
reply2(mess.succ)
} else if (args[0] === 'image') {
global.menutype = 'image'
} else if (args[0] === 'list') {
global.menutype = 'list'
reply2(mess.succ)
} else if (args[0] === 'listproduct') {
global.menutype = 'listproduct'
reply2(mess.succ)
}
}
break
case 'onauto': case 'auto': {
if (!isCreator && !itsMe) throw mess.owner
if (!q) throw 'Option : 1. viewonce\n2. sticker'
if (args[0] === 'viewonce') {
global.Autoviewonce = true
reply2(mess.succ)
} else if (args[0] === 'sticker') {
global.Autostick = true
reply2(mess.succ)
}}
break
case 'offauto': case 'autooff': {
if (!isCreator && !itsMe) throw mess.owner
if (!q) throw 'Option : 1. viewonce\n2. sticker'
if (args[0] === 'viewonce') {
global.Autoviewonce = false
reply2(mess.succ)
} else if (args[0] === 'sticker') {
global.Autostick = false
reply2(mess.succ)
}}
break
case 'term': {
if (!isCreator && !itsMe) throw mess.owner
if (!q) return
exec(q, (err, stdout) => {
if (err) throw (`${err}`)
if (stdout) {
m.reply(stdout)
}
})}
break 
case 'shutdown': case 'closesession': case 'off': {
if (!isCreator && !itsMe) throw mess.owner
m.reply(`Bye...`)
await sleep(3000)
console.log(`Shutdown`)
process.exit()}
break
case 'report': case 'lapor': case 'laporkan': case 'request': case 'saran': {
if (!text) throw '*Yang Mau Mau Dilaporkan Apanih?><*'
hisoka.sendText('6287778886786@c.us', `*${command}*\n\*Laporan* : ${text}`)
}
break
case 'chatting': case 'kirimpesan': case 'sendmessage':{
if (!isCreator && !itsMe) throw mess.owner
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 62xxx|pesan`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 62xxx|pesan`
hisoka.sendText(`${args[0]}@c.us`, `${args[1]}`)
}
break
default:
if (budy.startsWith("@628179269000")){ 
hisoka.sendMessage(
from, { 
video: fs.readFileSync("./lib/kidvid.mp4"), 
caption: `*Konnichiwa ${pushname} Senpai, Iam Kid Silahkan Ketik .menu Untuk Melihat Menu Bot*`,
gifPlayback: true
})}
if (!Autoviewonce){
if (m.mtype == 'viewOnceMessage' === true ){
msg = {...mek}
msg.message = mek.message.viewOnceMessage.message
msg.message[Object.keys(msg.message)[0]].viewOnce = false
m.reply('ViewonceDetect')
hisoka.copyNForward(from, msg)
}}
if (!Autostick){
if (!quoted) return
if (!/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} 
}
if (budy.startsWith('=>')) {
if (!isCreator) return reply2(mess.owner)
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
if (!isCreator) return reply2(mess.owner)
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
if (!isCreator) return reply2(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
hisoka.sendText(m.chat, `${util.format(err)}`, m)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
