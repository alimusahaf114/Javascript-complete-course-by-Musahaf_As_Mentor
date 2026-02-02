let count = 0 ;

function IncValue(){
    count++
    document.querySelector('.display').textContent = count
                
}
function decValue(){
    count--
    document.querySelector('.display').textContent = count
                
}

function reset(){
    
                count = 0
                document.querySelector('.display').textContent = count
                
}