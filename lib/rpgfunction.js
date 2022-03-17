const fs = require('fs')
let _RPG = JSON.parse(fs.readFileSync('./dataB/inventori.json'))


//== Ikan Inventory

const addIkan = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].ikan += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellIkan = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].ikan -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}        

const getIkan = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].ikan
}
}

//== Emas Inventory   

const addEmas = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].emas += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellEmas = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].emas -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}        

const getEmas = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].emas
}
}

//== Diamond Inventory

 const addDm = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].diamond += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

 const sellDm = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].diamond -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}
  
const getDm = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].diamond
}
}
   
//== Iron Inventory

const addBesi = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].besi += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellBesi = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].besi -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getBesi = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].besi
}
}
 
//== Kayu Inventory

const addKayu = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].kayu += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellKayu = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].kayu -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getKayu = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].kayu
}
}

//== Daun Inventory

const addDaun = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].daun += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellDaun = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].daun -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getDaun = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].daun
}
}

//== Sampah Inventory

const addSampah = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].sampah += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellSampah = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].sampah -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getSampah = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].sampah
}
}
  
//== monyet Inventory

const addMonyet = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].monyet += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellMonyet = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].monyet -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getMonyet = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].monyet
}
}

//== gorilla Inventory

const addGorilla = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].gorilla += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellGorilla = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].gorilla -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getGorilla = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].gorilla
}
}

//== Anjing Inventory

const addAnjing = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].Anjing += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellAnjing = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].Anjing -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getAnjing = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].Anjing
}
}

//== harimau Inventory

const addHarimau = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].harimau += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellHarimau = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].harimau -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getHarimau = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].harimau
}
}

//== macan Inventory

const addMacan = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].macan += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellMacan = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].macan -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getMacan = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].macan
}
}

//== kuda Inventory

const addKuda = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].kuda += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellKuda = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].kuda -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getKuda = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].kuda
}
}

//== zebra Inventory

const addZebra = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].zebra += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellZebra = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].zebra -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getZebra = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].zebra
}
}

//== rusa Inventory

const addRusa = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].rusa += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellRusa = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].rusa -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getRusa = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].rusa
}
}

//== kerbau Inventory

const addKerbau = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].kerbau += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellKerbau = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].kerbau -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getKerbau = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].kerbau
}
}

//== Sapi Inventory

const addSapi =(sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].Sapi += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellSapi =(sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].Sapi -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getSapi =(sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].Sapi
}
}

//== babi Inventory

const addBabi = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].babi += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellBabi = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].babi -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getBabi = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].babi
}
}

//== garuda Inventory

const addGaruda = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].garuda += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellGaruda = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].garuda -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getGaruda = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].garuda
}
}

//== Domba Inventory

const addDomba = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].garuda += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellDomba = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].garuda -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getDomba = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].garuda
}
}

//== Kelelawar Inventory

const addKelelawar = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].Kelelawar += amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const sellKelelawar = (sender, amount) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
_RPG[position].Kelelawar -= amount
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}
}

const getKelelawar = (sender) => {
let position = false
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id === m.sender) {
position = i
}
})
if (position !== false) {
return _RPG[position].Kelelawar
}
}
   
/**
 * Add User Initial Inventory
 * @made by Febriansyah
 * @don't lose maker's name
 */
const addInventori = (sender) => {
const obj = {id: m.sender, emas: 0, diamond: 0, besi: 0, ikan: 0 }
_RPG.push(obj)
fs.writeFileSync('./dataB/inventori.json', JSON.stringify(_RPG))
}

/**
 * Check Adventure User
 * @made by Febriansyah
 * @don't lose maker's name
 */
const checkPetualangUser = (sender) => {
let status = false 
Object.keys(_RPG).forEach((i) => {
if (_RPG[i].id ===m.senderr) {
status = true
}
})
return status
}



module.exports = { addEmas, sellEmas, getEmas, addDiamond, sellDiamond, getDiamond, addBesi, sellBesi, getBesi, addKayu, sellKayu, getKayu, addDaun, sellDaun, getDaun, addSampah, sellSampah, getSampah, addMonyet, sellMonyet, getMonyet, addGorilla, sellGorilla, getGorilla, addAnjing, sellAnjing, getAnjing, addHarimau, addMacan, addKuda, addZebra, addRusa, addKerbau, addSapi, addBabi, addGaruda, addDomba, addKelelawar, sellHarimau, sellMacan, sellKuda, sellZebra, sellRusa, sellKerbau, sellSapi, sellBabi, sellGaruda, sellDomba, sellKelelawar, checkPetualangUser, addInventory, addIkan, sellIkan, getIkan }