





    document.onkeydown = function (e) {
        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
            return false;
        }
        if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
            return false;
        }
        if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
            return false;
        }
    }







$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});

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





<script type="text/javascript">
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))
</script>


