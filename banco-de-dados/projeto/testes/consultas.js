const db = require('../config/db')

/*db('perfis')
    //.then(res => console.log(res))
    .then(res => res.map(p => p.nome))
    .then(nomes => console.log(nomes))
    .finally(() =>db.destroy)*/
/*
db('perfis')
    .map(p => p.nome)
    .then(nomes => console.log(nomes))
    .finally(() => db.destroy())*/

//knex permite chamar o map logo depois do db e depois chamar um then isso na versão 0.16.3
/*
db('perfis').select('nome', 'id')
    .then(res => console.log(res))
    .finally(() => db.destroy())
*/
/*
db.select('nome', 'id')
    .from('perfis')
    .limit(4).offset(2) //offset delimitador de onde irá começar 
    .then(res => console.log(res))
    .finally(() => db.destroy()) */

//trazer somente o nome 
/*
db('perfis')
    .where({ id: 2 })
    .first()
    .then(res => console.log(res.nome))
    .finally(() => db.destroy())
*/

db('perfis')
    .select('id', 'nome')
    // .where({ id: 2 })
    // .where('id', '=', 2)
    // .where('nome', 'like', '%m%')
    // .whereNot({ id: 2 })
    .whereIn('id', [1, 2, 3])
    // .first()
    .then(res => console.log(res))
    .finally(() => db.destroy())