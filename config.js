const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6287778886786','628179269000']
global.packname = 'KID BOT BY KUNZXD'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
admin: '*Fitur Khusus Admin Group!*',
botAdmin: '*Jadikan Bot Sebagai Admin*',
owner: '*Fitur Khusus Owner Bot*',
group: '*Fitur Hanya Bisa Digunakan Di Grup*',
private: 'Fitur Hanya Bisa Digunakan Di Private Chat!',
wait: '*Sabar kak*...',
succ: '*nih kak😼*',
wrongFormat: '*Format salah kak*',
error: '*Error kak, jika masalah berlanjut silahkan hubungin owner ya:)*'
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
