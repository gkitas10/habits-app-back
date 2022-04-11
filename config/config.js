//PORT
process.env.PORT = process.env.PORT || 4000;
//ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//DB
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/habits-app';
}else{
   urlDB=process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

