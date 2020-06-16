

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

