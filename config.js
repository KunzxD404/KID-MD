const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
zenz: 'https://zenzapi.xyz',
}
global.APIKeys = {
'https://zenzapi.xyz': '0bc3c59742f4',
}
global.owner = ['6287778886786']
global.premium = ['6288292024190']
global.packname = 'KID BOT-MD'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
admin: '*Fitur Khusus Admin Group!*',
botAdmin: '*Jadikan Bot Sebagai Admin*',
owner: '*Fitur Khusus Owner Bot*',
group: '*Fitur Hanya Bisa Digunakan Di Grup*',
private: 'Fitur Hanya Bisa Digunakan Di Private Chat!',
wait: '*Wait Onichan>//<*...',
succ: '*nih kak😼*',
wrongFormat: '*Format salah kak*',
error: '*Error kak, jika masalah berlanjut silahkan hubungin owner ya:)*',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12'
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
