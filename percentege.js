var per = prompt("Enter your percentege");

if(per > 80 && per <=100){
  console.log("you are in Merit");
}else if(per >=60 && per <80){
  console.log("your in 1st Division");
}else if(per >=45 && per <60){
  console.log("ypur are in 2nd Division")
}else if(per >=33 && per <45){
  console.log("your in 3rd Division")
}else if(per <33){
  console.log("you are fail")
}