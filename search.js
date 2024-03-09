
let spin = document.getElementById("spin");
    let button = document.getElementById('sub');
    let image = document.getElementById('id');
    let inp = document.getElementById('inp');
    // var neww = document.createElement('img'
    let i =0;

    spin.style.display = "block";
    spin.style.visibility="hidden";
 function getid(){
   image.style.height="300px";
      image.style.width="300px";
      image.style.transform = "rotateY(0deg) rotateX(0deg)";
   console.log(i);
   var pre = "https://gecgudlavalleruonlinepayments.com//StudentPhotos/";
   var ext = ".jpg";
     var leo = pre+inp.value+ext;
     image.setAttribute('class','img2');
     if(inp.value != "23481a04p4"){
      image.src ="";
      spin.style.visibility ="visible";
      
     image.src = leo;
image.onload = ()=>{
  spin.style.visibility ="hidden";
};
   image.alt = "Error, Not Found";
   
       image.style.borderRadius = "20px";
     }else{
      alert(" VNVR KARTHIK ,He is the developer of this Site..");
      image.src ="https://i.ibb.co/F3MNzK0/vnvr-Karthik1.jpg";
      image.style.height="400px";
      image.style.width="320px";
      image.style.transform = "rotateY(0deg) rotateX(0deg)";
 //  image.style.transform = "rotateY(0deg)"
     }
   
i++  ;


 }
 
 
 
 const toastTrigger = document.getElementById('sub');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show();
  });
}

