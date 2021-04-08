module.exports ={
HOST:"localhost",
USER:"root", //usuario do banco do dados - o dado que esta aqui é um exemplo.
PASSWORD:"123456", //senha do banco - o dado que esta aqui é um exemplo.
DB:"projeto-mvc", //nome do banco - o  dado que esta aqui é um exemplo.
dialect:"mysql", //
  pool:{
    max:5, //numero max de conexões no banco
    min:0, // numero min de conexões no banco
    acquire:3000, //quantidade de requisições que o usuario pode fazer no banco
    idel:1000 //stand by
  }
};  

