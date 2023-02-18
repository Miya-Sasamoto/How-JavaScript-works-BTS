'use strict';

function calcAge(birthYear){
  const age = 2023 - birthYear;

  function printAge(){
    let outPut = `${firstName} is ${age}, born in ${birthYear}`
    console.log(outPut);

    if(birthYear >= 1981 && birthYear <= 1996){
      var millenial = true; //varは関数スコープを持つ。ブロックチェーンにならない//

      const firstName = "Miya";

      outPut = "this is new output";


      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);


      function add(a,b){
        return a + b;

      }


    }

    // console.log(str);
    console.log(millenial); //だからこれが反応する//
    // console.log(add(2,3)); //これが反応するのは、use strictをコメントオフにした時。
    console.log(outPut);
  }

  printAge();

  return age;
}

const firstName = "Miya";
calcAge(1995);
