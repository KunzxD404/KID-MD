const fs = require('fs')
const chalk = require('chalk')

global.apikey = {
zenzkey: '0bc3c59742f4',
zekskey: 'nekonimastah',
harkey: 'hardianto',
xkey: 'D2oxu09LrV',
}
global.owner = ['6287778886786','62179269000']
global.namebot = 'KID BOT-MD'
global.premium = ['6281274578272']
global.packname = 'KID BOT-MD'
global.author = 'Contact Owner\nInstagram : @iam_kunzx\nWhatsapp : 6287778886786'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.menutype = 'gif'
global.mess = {
admin: '*Fitur Khusus Admin Group!*',
botAdmin: '*Jadikan Bot Sebagai Admin*',
owner: '*Fitur Khusus Owner Bot*',
group: '*Fitur Hanya Bisa Digunakan Di Grup*',
private: 'Fitur Hanya Bisa Digunakan Di Private Chat!',
wait: '*Wait Onichan>//<*...',
succ: '*nih kak😼*',
wrongFormat: '*Format salah kak*',
q: '*Format salah kak, tambahkan query setelah command*',
error: '*Error kak, jika masalah berlanjut silahkan hubungin owner ya:)*',
endLimit: '*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
global.limitawal = {
premium: "Infinity",
free: 25
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
