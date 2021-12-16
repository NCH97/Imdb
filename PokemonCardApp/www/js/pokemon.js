//14 4027
//20 par page
//const result = document.querySelector("#cardList");
let cards = [];

let page = 1;
let perPage = 250;


app.request({

    
 
    url: `https://api.pokemontcg.io/v2/cards/?page=${page}&pageSize=${perPage}&count=${count}`,

    method: "GET",

    dataType: "json",

    beforeSend: function () {

        app.dialog.preloader();

    },

    success: function (res) {

        console.log(res);
        CardsDisplay(res)

        app.dialog.close();



    },

});


 function CardsDisplay(res) {
   
    
       

            for(let i=perPage - 20; i < perPage;i++){
                
            
                    let nameCard =  res.data[i].name
                    let imageCard = res.data[i].images.small
                    let priceCard = res.data[i].cardmarket.prices.trendPrice
                    let card =              ` <div class="card">
                    <div class="card-header">${nameCard}</div>
                    <div class="card-content"> 
                      <img src="${imageCard}" />
                    <div class="card-footer">Prix : ${priceCard}</div>
                  </div>      
                  `;
                  
                $("#cardList").append(card)
            }

        
        
    
        }
     

    
