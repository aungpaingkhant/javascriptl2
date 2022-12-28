var getimgs = document.querySelectorAll('.img');
// console.log(getimgs); // NodeList

var getmodal = document.querySelector('.modal');
var getmodalimg = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getbtnclose = document.querySelector('.btn-close');

getimgs.forEach(function(img){
    img.addEventListener('click',function(){
        

        shownow(this);


    });
});


// getbtnclose.addEventListener('click',function(){
//     getmodal.style.display = "none";
// });

getbtnclose.onclick = function(){
    getmodal.style.display = "none";
}

function shownow(ele){

    // console.log(ele);
    // console.log(ele.src);
    // console.log(ele.alt);

    getmodal.style.display = "block";
    getmodalimg.src = ele.src;
    getcaption.textContent = ele.alt;
}

document.addEventListener('click',function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
});

