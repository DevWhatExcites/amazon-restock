sendApiRequest();

async function sendApiRequest() {
  let APIKEY = "ADF723F722764F75B3FD232021E4AEF2";
  //Priyansh fill items array from your database.
  let items = ["rice", "butter", "bread"];
  for (let i = 0; i < items.length; i++)
  {
    let item = items[i];
  fetch(`https://api.rainforestapi.com/request?api_key=${APIKEY}&type=search&amazon_domain=amazon.in&search_term=${item}&sort_by=price_low_to_high
    `)
    .then((results) => results.json())
    .then((data) => useApiData(data));
  }
  
}

function useApiData(data) {
  console.log(data);
  let container = document.querySelector("#container");
  let template = document.querySelector("#template");
  
  let title = data.search_results[0].title;
  let img = data.search_results[0].image;
  let url = data.search_results[0].link;

  console.log(title);

  let cardTemplate = template.content.querySelector(".card");

    let cardTitle = cardTemplate.querySelector(".card-title");
    let cardImg = cardTemplate.querySelector(".card-img-top");
    let viewBtn = cardTemplate.querySelector(".btn-success");

    cardTitle.innerHTML = title;
    cardImg.setAttribute("src", img);
    viewBtn.setAttribute("href", url);

    let card = document.importNode(cardTemplate, true);
    container.appendChild(card);
}