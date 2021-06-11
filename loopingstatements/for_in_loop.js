
var d=new Date();
var city={
    name: "Bangalore",
    population: "84.8L",
    language:"kannada",
    another_name: "silicon valley of India",
    cases: 24214,
    covid_cases: ()=>{
         console.log("covid cases as on"+d.getDate+cases);
    }
}
for(var key in city){
    console.log(key+" : "+city[key]);
}