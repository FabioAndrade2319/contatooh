var express = require('express');
//var home = require('../app/routes/home'); //importa o módulo home de routes//substituído pelo "load"
var load = require('express-load'); //importa o módulo load (seção 2.9 pág30)

module.exports = function() {
    var app = express();

    //configuração de ambiente, configura a porta através da função set utilizando a chave 'port' e atribuindo valor 3000
    app.set('port',3000);

    //middleware
    app.use(express.static('./public'));

    app.set('view engine','ejs'); //define o ejs como template engine
    app.set('views','./app/views'); //define o diretório onde ficarão as views, assim a pagina index.html será movida para o diretório views e sua extensão alterada para .ejs

    //home(app); substituída pela chamada ao load abaixo

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};
