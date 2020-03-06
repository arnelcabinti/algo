

// let input = "chillout";
// let x = 8;

// Create own function instead of Math using library
let getSqrt = (number) => {
    let sqrt = number / 2;
    let temp = 0;

    while(sqrt != temp) {

        temp = sqrt;

        sqrt = ((number / temp) + temp) / 2;
    }

    return sqrt;
}

let getRowColumn = (s) => {
    let strLen = s.lenght;
    let row = Math.floor(getSqrt(strLen)), 
        column = Math.ceil(getSqrt(strLen)), 
        lastString = "";

    if((row * column) < strLen){
        row = column; 
    }
    

    for(let i = 0; i < column; i++){
        let test = "";
        let num = i;

        for(let y = 0; y < column; y++){
            if (num >= strLen) {
                break;
            }
            test += s[num];
            num = num + (column);
        }

       
        lastString = lastString + test + " "

    }
    console.log(lastString);
    return lastString;
}

getRowColumn();

5 5

pos 4 3 

top 5 - 4(r) = 1

right 5 - 3(c) = 2

left 3(c) - 1 = 2

bot 4(r) - 1 = 3


Back Slash (up= +-, down = -+)
5 2
4 3
3 4
2 5

Slash (up = ++, down = --) 
5 4
4 3
3 2
2 1

Blocker
2 3 = 2
4 2 =
5 5 = 


bc == oc : (br > or ? br - 5 : br - 1) + 1
br == or : (bc > oc ? bc - 5 ? bc - 1) + 1 



4 3

2 3
1
= 1 + 1
 
 
4 2
  1
= 1 + 1

5 3
5 
= 0 + 1


4 3
5
= 1 + 1











