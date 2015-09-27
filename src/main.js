var Vue = require('vue');
var appOptions = require('./app.vue');
var app = new Vue(appOptions).$mount('#app');
var Syncano = require('syncano');
var account = new Syncano({accountKey : "ACCOUNT_KEY"});
var instance = account.instance('INSTANCE_NAME').detail();

instance.then(function(res){
  console.error(res);
});
