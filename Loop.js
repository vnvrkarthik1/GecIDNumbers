  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCBCJzMQuslzsllYuCzYW2vnWemZPI8iLA",
    authDomain: "vnvrkarthik0.firebaseapp.com",
    projectId: "vnvrkarthik0",
    storageBucket: "vnvrkarthik0.appspot.com",
    messagingSenderId: "587737470341",
    appId: "1:587737470341:web:bde6a71aeff64ce8d160ec",
    measurementId: "G-PFPTJT1R21"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);







var times = 1
$('#sec2').css("opacity","0");
function showAllPhotos(year,branch,branchId,n){
if(times!=1){
  $('#sec2').empty();
}
  
 $('#sec2').css("opacity","1");
  
  var pre = "https://gecgudlavalleruonlinepayments.com//StudentPhotos/";
  var ext = ".jpg";
  var alphabets = [...Array(26)].map((x,i)=>String.fromCharCode(i + 97));
  var alphaval = 0;
  var postId;
  for(let i =1;i<=n;i++){
    if(i<=9){
      postId = "0"+i;
    }
    else if(i<=99){
      postId= i;
    }else if(i>=100){
      postId = alphabets[alphaval]+i%10;
      if(i%10 == 9){
        alphaval++;
      }
    }//if
    var totalLink = pre+year+branchId+postId+ext;
    var div = $('<div>');
   var img= $('<img>');
   var span = $('<span>');
   span.text(year+branchId+postId);
   var section = $('#sec2');
   
   div.addClass('col-4');
   div.css({
     "display":'flex',
     "flex-direction":"column",
     "justify-content":"center",
     "align-items":"center"
     
   });
   img.addClass('img3 hidden');
   img.attr('src',totalLink);
   img.attr('loading','lazy');
  section.append(div);
  div.append(img);
  div.append(span);
  console.log(totalLink);
  
  }//loop
  times++;
  lag();
  
}//func
function lag(){
  

setTimeout(function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
          if (entry.isIntersecting){
              entry.target.classList.add('show');
          }
        //  else{
        //      entry.target.classList.remove('show')
        //  }

      });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));



}, 100);
}
lag();
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));



