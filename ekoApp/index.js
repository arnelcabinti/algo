

let arraysList = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];
let sortAlphabets = (text) => {
    return text.split('').sort().join('');
};

let sorting = () => {

    for(let i = 0; i < arraysList.length; i++){
        let w = arraysList[i];
        let news = [];
        let prints= [];
        prints.push(w)
        for(let j = 0; j < arraysList.length; j++){
            if(i != j){
                if(sortAlphabets(w) == sortAlphabets(arraysList[j])){
                    prints.push(arraysList[j])
                }   
                else{
                    news.push(arraysList[j])
                }
            }
        }
        console.log(prints.join(' - '))
        arraysList = news
        i = 0;
    }
}

sorting();

let parenthesis = () => {
    let txt = "foo(foo(bar))te(a)st";
    var newTxt = txt.split('(');
    console.log(newTxt)
    let j ="";
    for (var i = 1; i < newTxt.length; i++) {
        let y = newTxt[i].split(')')[0];
        j += y;
    }
    // console.log(j)
   
}

function reverse(s){
    return s.split("").reverse().join("");
}

parenthesis();


class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    // Functions to be implemented 
    
    push(element) 
    { 
        // push element into the items 
        this.items.push(element); 
    } 
    pop() 
    { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    }

    isEmpty() 
    { 
        // return true if stack is empty 
        return this.items.length == 0; 
    }

    peek() 
    { 
        // return the top most element from the stack 
        // but does'nt delete it. 
        return this.items[this.items.length - 1]; 
    } 

} 


let ReverseParenthesessss = (str) => {

    var stack = new Stack(); 

    for(let i=0;i < str.length; i++)
    {
        let start = str[i];
            
        if(start == '('){
            stack.push(i);
        }
        else if(start == ')') {
            let openIndex = stack.pop(),
                closeIndex = i,
                portion = str.substring(openIndex+1,closeIndex),
                wreverse = reverse(portion);

            str = str.replace(portion, wreverse);
        }
    }

    str = str.split("(");
    str = str.join("").split(")");
    return str.join("");
}

let arr = ["foo(bar)", "(bar)" , "foo(bar)blim", "foo(foo(bar))blim"];

for(let i =0 ; i < arr.length; i++){
    console.log(`${arr[i]} => ${ReverseParenthesessss(arr[i])}`);
}