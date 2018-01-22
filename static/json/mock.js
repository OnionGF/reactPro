





var polist = require('./poslist.json')
var picture = require('./picture.json')
var choose = require('./choose.json')
var searchlist = require('./searchlist.json')
var selectHouse = require('./selectHouse.json')
var pwdlogin = require('./pwdlogin.json')

module.exports = function (){
    return {
        list : polist,
        pict : picture,
        choo : choose,
        searchlist:searchlist,
        sele : selectHouse,
        pwdlogin:pwdlogin
    }
}
