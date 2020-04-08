
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
