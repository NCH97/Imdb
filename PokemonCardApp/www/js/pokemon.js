let cards = [];
let page = 1;
let nbel = 25;
var back = document.querySelector("#back")
var foward = document.querySelector("#foward")
let actualid = 1;

function happy(){
app.request({

    
 
    url: `https://api.pokemontcg.io/v2/cards/?page=${page}`,

    method: "GET",

    dataType: "json",

    beforeSend: function () {
        
        app.dialog.preloader('');

    },

    success: function (res) {

        
        console.log(res);
       

        app.dialog.close();

      for( let i=0; i < 250;i++){

        addInfo(i,res); 
        

      }
      
      CardsDisplay(cards)
    },
   
});
}

function CardsDisplay() {
   
        $("#cardList").html("<h2></h2>")
            for(let i=nbel - 25; i < nbel;i++){
                
                    let card =    ` <div class="card" id="${cards[i].id}">
                    <div class="card-header">${cards[i].name}</div>
                    <div class="card-content"> 
                    <a href="/sanitaire/${cards[i].id}"  >
                      <img src="${cards[i].img}" />
                      </a>
                    <div class="card-footer">Prix : ${cards[i].prix}</div>
                  </div>      
                  `;
                  
                $("#cardList").append(card)
            }
            
        
        
    
        }
     
function plus(){
    if(nbel +25 > 250){
        page += 1
        nbel = 25
        happy(); 
        
        
    }
    else{
        nbel +=25
       CardsDisplay()
    }
    
}


function moin(){
    if(nbel -25 < 1){
        if(page == 1){
            alert("C'est la première page")
            stop();
            
        }
        else{
            page -=1
            nbel = 250
            happy();  
            
        }
    }
    else{
        nbel -=25
        CardsDisplay()
    }
    topFunction();
}

function addInfo(i , res){

    /*

name attack : [15].attacks[0].name
attack : [15].attacks[0].damage
attackk text : [15].attacks[0].text
length attack : [15].attacks.length
    hp : [14].hp
type : [14].types.length  / [14].types[0]
resistances type : [14].resistances[0].type 
resistances value :  [14].resistances[0].value
weakness type  : [14].weaknesses[0].type 
weakness value : [14].weaknesses[0].value
link achat  : [14].cardmarket.url
length: 3 retrait cost  : [14].retreatCost.length
*/

    let nameCard =  res.data[i].name
    let imageCard = res.data[i].images.small
    let priceCard = res.data[i].cardmarket.prices.trendPrice
    let idCard =  res.data[i].id
    let hp = res.data[i].hp
    let  resistancesType = res.data[i].resistances[0].type 
    let resistancesValue =  res.data[i].resistances[0].value
    let nameAttack =  res.data[i].attacks[0].name
    let attack = res.data[i].attacks[0].damage
    let weaknessType  = res.data[i].weaknesses[0].type 
    let weaknessValue = res.data[i].weaknesses[0].value
    let buylink  = res.data[i].cardmarket.url
    let retraitCost  = res.data[i].retreatCost.length
    
    cards.push({name:nameCard ,img: imageCard ,prix:priceCard,id:idCard});
}


function valId(val){
     actualid = val;
    
}
function singleDisplayCard(){
    for(let i=0;i<250;i++){
        if(cards[i].id==actualid){
            actualid = i;
        }
    }
    console.log(actualid);

    let card =    ` <div class="card" id="${cards[actualid].id}">
    <div class="card-header">${cards[actualid].name}</div>
    <div class="card-content"> 
    <a href="/sanitaire/${cards[actualid].id}"  >
      <img src="${cards[actualid].img}" />
      </a>
    <div class="card-footer">Prix : ${cards[actualid].prix}</div>
    
  </div>      
  `;
  
$("#card").append(card)
}
