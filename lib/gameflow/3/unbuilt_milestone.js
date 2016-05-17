var sectors = ["industry", "agriculture", "consumerServices", "infrastructure", "education", "tourism", "ecology"];
var investment = {
    industry: 0,
    agriculture: 0,
    consumerServices: 0,
    infrastructure: 0,
    education: 0,
    tourism: 0,
    ecology: 0,
}
function checkUnbuiltMinestone(){
  var moneyLeft = 0;
  for (var i = 0; i < sectors.length; i++){
    moneyLeft = investment[sectors[i]] % 500;
    investment[sectors[i]] = investment[sectors[i]] - moneyLeft;
    console.log("Money left for "+sectors[i]+" is "+moneyLeft);
  }

  return investment;
}
console.log(checkUnbuiltMinestone());
