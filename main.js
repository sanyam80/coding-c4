async function makeApiCall(url){
    try{
        var res = await fetch(url);
        var data = await res.json();
        return data;
    }
    catch(error){
        console.log("error:",error)
    }
}

async function appendData(data,parent){

data.forEach(q => {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = q.urlToImage;
    var p= document.createElement("p");
     p.innerText = q.title;
    div.append(img,p);
    parent.append(div)
})




}
export {makeApiCall, appendData};