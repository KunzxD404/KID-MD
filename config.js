const fs = require('fs')
const chalk = require('chalk')

global.apikey = {
zenzkey: '0bc3c59742f4',//kalo mau make
xkey: 'D2oxu09LrV',
xtkey: '9503ce33fdb96c1e',
vikey: '53fb-eb36-afda'
}
global.namebot = 'KID BOT-MD'
global.owner = ['6287778886786','628179269000']
global.premium = ['628179269000']
global.banned = ['628123456789']
global.packname = 'KID BOT'
global.author = 'Contact Owner\nInstagram : @iam_kunzx\nWhatsapp : 6287778886786'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.menutype = 'gif'
global.Autostick = true
global.Autoviewonce = true
global.mess = {
admin: '*Perintah Ini Hanya Untuk Admin Group!*',
botAdmin: '*Jadikan Bot Sebagai Admin*',
owner: '*Perintah Ini Hanya Untuk Owner Bot*',
group: '*Perintah Ini Hanya Bisa Digunakan Di Grup*',
private: 'Perintah Ini Hanya Bisa Digunakan Di Private Chat!',
wait: '*Wait Oniichan>//<*',
succ: '*Done Oniichan>//<*',
wrongFormat: '*Format salah kak*',
q: '*Format salah Kak, tambahkan query setelah command*',
error: '*Error kak, jika masalah berlanjut silahkan hubungin owner ya:)*',
endLimit: '*Limit Harian Kamu Telah Habis, Limit Akan Direset Setiap Jam 12:)*',
spam: 'Autospam detected give command after 5 seconds*',
}
global.limitawal = {
premium: "Infinity",
free: 35
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
