let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async ()=> {
    let fact = await getImg();
    //console.log(fact);

    
    let img = document.querySelector("#result");
    img.setAttribute("src", fact);
8
});


async function getImg() {

    try
    {
          let res = await axios.get(url);
          return res.data.message;
    }

    catch(err){
         console.log("error",e);
         return "/";

    }
}