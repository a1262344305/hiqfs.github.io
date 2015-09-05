htmlobj=$.ajax({url:"../other/ls",async:true});
var address=htmlobj.responseText;
var arr = address.split("<br>");
document.write('<style>body{background-image:url(' + arr[index] + ')}</style>')
