const UserInput = document.getElementById('submite');
 
UserInput.addEventListener('click', function(){
 
 const  MyInput = document.getElementById('UserInput').value;
 const  marks = parseFloat(MyInput);
   
 if(marks>=90&&marks<=100){
    document.getElementById('Golden').style.display = 'block'
 }

 else   if(marks>=80 && marks<=89){
       document.getElementById('first').style.display = 'block';
}
 
   else if(marks>=70&&marks<=79){
    document.getElementById('Second').style.display = 'block';
}
   else if(marks>=60&&marks<=69){
    document.getElementById('Thred').style.display = 'block';
}
   else if(marks>=50&&marks<=59){
    document.getElementById('Four').style.display = 'block';
}
   else if(marks>=40&&marks<=49){
    document.getElementById('Five').style.display = 'block';
}
   else if(marks>=33&&marks<=39){
    document.getElementById('Six').style.display = 'block'
}
   else if(marks>=1&& marks<=32){
    document.getElementById('Seven').style.display = 'block'
}
 
document.getElementById('UserInput').value = ""

})


const hideResult = document.getElementById('UserInput');
hideResult.addEventListener('click', function(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('Second').style.display = 'none';
    document.getElementById('Thred').style.display = 'none';
    document.getElementById('Four').style.display = 'none';
    document.getElementById('Five').style.display = 'none';
    document.getElementById('Six').style.display = 'none';
    document.getElementById('Seven').style.display = 'none'
    document.getElementById('Golden').style.display = 'none'
})