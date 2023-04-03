const input =[1,2,3,4,5,6,5,7,7,8,9,10,11,12,13,10]
let del: number[] = [];
let temp: number[] = [];

for (let i = 0; i < input.length; i++) {
  if(del.indexOf( input[i]) < 0){
    del.push(input[i])
  }
  else {
    temp.push(input[i])
  }
}
console.log("Output =" ,temp);
