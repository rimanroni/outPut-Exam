//   ekjon User Er kase input niye Take Result Dite hobe okk er Programber koro;;

let user = prompt("Enter Your Marks Here ");
let marks = parseInt(user);

if(marks>=80&& marks<=100){
    document.write('Congratulations! Your Result Is A+')
}
else if(marks>=70&& marks<=79){
    document.write('Congratulations! Your Result Is A')
}
else if(marks>=60&&marks<=69){
    document.write('Congratulations! Your Result A-')
}
else if(marks>=50&& marks<=59){
    document.write('Congratulations! Your Result Is B')
}
else if(marks>=40&&marks<=49){
    document.write('Congratulations! Your Result C')
}
else if(marks>=33&&marks<=39){
    document.write('Your Result is D')
}
else{
    document.write('Your Result Faill !!!!!!')
}