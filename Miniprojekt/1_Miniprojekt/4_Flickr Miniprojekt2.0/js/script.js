const searchInput = document.getElementById("searchInput");
const sizeSelect = document.getElementById("sizeSelect");
const noImgInput = document.getElementById("noImgInput");
const searchBtn = document.getElementById("searchBtn");
const imgDiv = document.getElementById("imgDiv");
const loadingDiv = document.getElementById("loadingDiv");

// append images to this
const carouselInner = document.getElementsByClassName(".carousel-inner");

loadingDiv.style.display = "none";

//Lägg till din egna KEY
const KEY = 'dd0fb6ec0bbf49c19346dbc0df2afdb3';
let searchText = 'dog';

//Vi söker endast på 1foto per sida och 1 sida - eller?
let url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${searchText}&format=json&nojsoncallback=1&per_page=${noImgInput.value}&page=1`;

searchBtn.addEventListener("click", function()
{
    // console.log('klickat');
    searchText = searchInput.value;
    url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${searchText}&format=json&nojsoncallback=1&per_page=${noImgInput.value}&page=1`;
    
    removeImg();
    loadAnim();
    fetch(url).then
    (
        function(response)
        {
            // console.log(response);
            if(response.status>=200 && response.status<300)
            {
                return response.json();
            }
            else
            {
                throw 'Something went wrong. :(';
            }
        }
    ).then
    (
        function(data)
        {
            for(let i = 0; i < noImgInput.value; i++)
            {
                
                 //Vi hämtar första bilderna
                const url = getImageUrl(data.photos.photo[i]);
                // console.log(noImgInput);
                // for(let i = 0; i < noImgInput; i++)
                //     {
                        
                        carouselDiv = document.querySelector(".carousel-inner");
                        
                        imgDivParent = document.createElement("div");
                        carouselDiv.appendChild(imgDivParent);
                        imgDivChild = document.createElement("img");
                        imgDivParent.appendChild(imgDivChild);
                        //Set the url
                        imgDivChild.src = url;
                        if(i === 0)
                        {
                            imgDivParent.classList.add("carousel-item", "active");
                            imgDivChild.classList.add("d-block", "w-100");
                        }
                        else
                        {
                            imgDivParent.classList.add("carousel-item");
                            imgDivChild.classList.add("d-block", "w-100");
                        }
                    // }
                // console.log(data);
            }
            loadingDiv.style.display = "none";
        }
    ).catch
    (
        function(error)
        {
            console.log(error);
        }
    );
});
function removeImg()
{
    let img = document.querySelectorAll(".carousel-inner img");
    for(let i = 0; i < img.length; i++)
    {  
        img[i].remove();
    }
}
function loadAnim()
{
    loadingDiv.style.display = "block";
    anime(
        {
        targets: '#loadingDiv',
        width: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      });
}
//här ska vi pussla ihop bild-urlen
function getImageUrl(photoObject)
{
    let photo = photoObject;
    let size = sizeSelect.value;
    // console.log(photo);
    if(sizeSelect.value === "small")
    {
        size = "m";
        document.querySelector("#carouselExampleControls").style.width = "240px";
        
    }
    else if(sizeSelect.value === "large")
    {
        size = "b";
        document.querySelector("#carouselExampleControls").style.width = "1024px";
    }

    let imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
    return imgUrl;
    // console.log(imgUrl);
    // displayImg(imgUrl);
}
//för att visa bilden
// function displayImg(url)
// {
//     // let img = document.createElement('img');
//     imgDivChild.src = url;

//     // document.body.appendChild(img);
//     imgDiv.appendChild(img);
// }