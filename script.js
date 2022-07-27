/*
взять текст, проверить тип + 
сделать нажатие вручную на клавиатуру и заполнение инпутов +

если нажимаю числа только тогда происходит заполнение

по нажатию на ctrl v сделать заполнение +

*/

let inp = document.querySelectorAll(".num")
let count = 0;
let val = [];
let code = 2345;
function checkType(arg, arg2, arg3){
   
    val[arg3] = arg;
    console.log(val) 
    count++;

    if(count<inp.length){
        inp[count].focus();
    }
    let x = val.join('');        
    if(Number(x) === code){
        inp.forEach(item=>{
            item.classList.add("right");
            item.blur();
        })
     }   

    
}


document.addEventListener("keydown", (evt)=>{
    
    if(evt.key === 'v' && evt.ctrlKey){
        navigator.clipboard.readText()
        .then(text => {
            let x = Number(text)
            console.log("тип " + typeof x);
            if(!isNaN(x)){
                let myFunc = num => Number(num);
                let arr = Array.from(String(x), myFunc);
                console.log(arr);

                for(let i=0; i<inp.length; i++){
                    inp[i].value = arr[i]
                }
                
            }else{
                console.log("текст")
            }
            
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', "empty");
        });
    }

})




