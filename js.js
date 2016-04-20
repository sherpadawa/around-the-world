$( document ).ready(function() {


var country ={
  nepal: {
    capital: "Kathmandu",
    "National animal": "cow",
    "National language": "Nepali",
    population: "27.8 million"
  },
  yemen: {
    capital: "Sana'a",
    "National animal": "Arabian leopard",
    "National language":"Arabic",
    Population: "24.41 milion"
  }, 
  malaysia: {
    capital: "Kuala Lumpur",
   "National animal": "Malayan tiger",
   "National language":"Malaysian",
   population:"29.72 million"
  },
 emirates:{
    capital:"Abu Dhabi",
    "National animal":"Golden eagle",
    "National language":"Arabic",
    population:"9.346 million"
  },
  india: {
    capital: "New Delhi",
    "National animal": "Royal Bengal tiger ",
    "National language": "hindi",
    population: "1.252 billion"
  },
  france : {
    capital: "paris",
    "National animal": "Gallic rooster",
    "National language": "french",
    population: "66.03 million"
    
    }
  };
 $("#heartfilia").click(function(){
   
   
   var choice = $("#AROUND").val()
  
   
    $("#capital").html(country[choice].capital) ;

     $("#animal").html(country[choice]["National animal"]) ;
      $("#language").html(country[choice]["National language"]) ;
      $("#population").html(country[choice].population) ;
   
 });
    
});



