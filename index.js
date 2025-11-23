// const base_url = "https://api.unsplash.com/search/photos?page=1&query=office&client_id=nss1Aw6orpKcSL0M5lWGPOvFSFQGKZOu3CthHbmI2Z0";

let searchText = document.getElementById("search");
let button = document.getElementById("button");
let imageDiv = document.getElementById("image");
let loadMore = document.getElementById("load");
let page =  1;


button.addEventListener("click", () => {
    // console.log(searchText);
    let userTypeValue = searchText.value ;
    searchimage(page, userTypeValue);

});

loadMore.addEventListener("click", ()=>
{
    let userTypeValue=searchText.value;
    page++;
    searchimage(page, userTypeValue);

});



async function searchimage(page,searchText){

    console.log(searchText);

    let response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchText}&client_id=QHaCojzom1bKVF-sOjtl21S8-tI2LfdLZL8QgRdiHeI&per_page=12`);
    let data = await response.json();
    let result = data.results;

    // console.log(result);

    result.map((value, index)=>{
        let imageItem = document.createElement("img");
        imageItem.src = result[index].urls['full'];
        imageDiv.appendChild(imageItem);
    });

}



// map for Object
// foreach for array

// (items, index) => {
    
// }

