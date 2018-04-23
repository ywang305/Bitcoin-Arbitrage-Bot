/*
start MongoDB : sudo service mongod start
restart :  sudo service mongod restart
stop serivce: sudo service mongod stop
start this js:  mongo path/...js
======================================

to validate in shell:

    mongo           //  show databases  --> test, arbitrage, ...  // db  --> list current used db (default test)
    use arbitrage   // initialized by getDB('arbitrage')
    show collections  //-> btc
    db.btc.find({}).pretty()
*/

// @ts-ignore
db = new Mongo().getDB('arbitrage');

db.btc.remove({}); // delete all original documents


/*
db.btc.createIndex({ status: 1 });  // 1 : asending order
*/