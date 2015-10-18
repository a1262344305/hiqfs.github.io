/*htmlobj=$.ajax({url:"http://server-php.coding.io/imgaddress.php",async:true});
var address=htmlobj.responseText;
var arr = address.split("<br>");
var index = Math.floor(Math.random() * arr.length);
index-=1;
if (index==-1) {
  index+=1;
}
document.write('<style>body{background-image:url(' + arr[index] + ')}</style>');*/
