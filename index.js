var _ = require('koa-route');
var koa = require('koa');
var parse = require('co-body');
var app = koa();

var db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};

var pets = {
  list: function *(){
    var names = Object.keys(db);
    this.body = JSON.stringify(names)
  },

  show: function *(name){
    var pet = db[name];
    if (!pet) return this.throw('cannot find that pet', 404);
    this.body = JSON.stringify(pet);
  },

  create: function *() {
    var pet = yield parse(this);
    db[pet.name] = pet;
    this.body = JSON.stringify(pet);
  }
};

app.use(_.get('/pets', pets.list));
app.use(_.post('/pets', pets.create));
app.use(_.get('/pets/:name', pets.show));

var port = process.env.PORT || 3000;
app.listen(port);
console.log('listening on port ' + port);
