module.exports = function check(str, bracketsConfig) {
  // your solution
  var a = str.length+1;
      while(str = str.replace(/\<\>|\[\]|\{\}|\(\)|\|\||\{\}|[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/,'')){
          console.log(str);
          if(str.length == a && a != 0) return false;
          if(a == 0) return true;
          a = str.length;
      }
      return true;
}
 