
var  SiteName = document.getElementById('booKmarK');
var  Siteurl = document.getElementById('url');
var booKtList=[];


if (localStorage.getItem( 'booKlist') != null ) {
   // parse للتحويل م object to array 
  booKtList = JSON.parse(localStorage.getItem( 'booKlist'));
  
  displayAllProducts();
  
  }


function getsubmit(){

if (validName()  &&  validUrl() == true) {
  
  
  var booK = {

    site: SiteName.value,
    url: Siteurl.value

} 

booKtList.push(booK);


localStorage.setItem("booKlist", JSON.stringify(booKtList));
   
console.log(booKtList);

getClear();

displayAllProducts() ;

 
}
else{

  alert(`Site Name or Url is not valid, Please follow the rules below:

  Site name must contain at least 3 characters
  Site URL must be a valid one`)
}

}


function getClear() {
     SiteName.value = "";
    Siteurl.value = "";    
}




function displayAllProducts() {
    var box = "";
for( i= 0 ; i< booKtList.length ; i++){

  box  = box + `<tr>
  
  <td>${i}</td>
    <td>${booKtList[i].site}</td>
  
    <td> <a  href="${booKtList[i].url}" target="_blank"  class="btn border-1 btn-visit btn-success  " >
    <i class="fa-solid fa-eye icon"></i>
  </a> 
  </td>
  
    
    <td>   <button onclick="deletelement( ${i})" class="btn border-1 btn-danger" id="closeBtn">
    <i class="fa-solid fa-trash-can"></i>
  </button> </td>


</tr>`
}

document.getElementById('tbody').innerHTML = box;

}



function deletelement(indx) {
  
  booKtList.splice(indx, 1);
  localStorage.setItem('booKlist', JSON.stringify(booKtList));
  displayAllProducts();
}



function searchElement(term) {

var Cartona = "";
// ana 3aml el loop de 34an a3ady 3la Kol el booKname
for (var i = 0 ; i < booKtList.length; i++) {
  
// checK booKtList includesn term

  if (booKtList[i].site.toLowerCase().includes(term.toLowerCase())) {
    Cartona += Cartona +  ` <tr>
    
    <td>${i}</td>
    <td>${booKtList[i].site}</td>
  
    <td> <a  href="${booKtList[i].url}" target="_blank"  class="btn border-1 btn-visit btn-success  " >
    <i class="fa-solid fa-eye icon"></i>
  </a> 
  </td>
  
    
    <td>   <button onclick="deletelement( ${i})" class="btn border-1 btn-danger" id="closeBtn">
    <i class="fa-solid fa-trash-can"></i>
  </button> </td>  
  </tr>`
  
  
  }
document.getElementById('tbody').innerHTML = Cartona;
  
  
}
  
}

function validName() {
  
  var nameRegEx = /[a-zA-Z]{3,}/;
  return nameRegEx.test(SiteName.value);


 

}

function validUrl() {

  var urlRegEx = /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi;
  return urlRegEx.test( Siteurl.value );

}



