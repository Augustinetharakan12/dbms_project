var x = document.getElementById("sign_in").elements;

 function get_element_signup(){
 	console.log("in get");
 	$('.ajaxProgress').show();
 	$.ajax({
 		type:"POST",
 		url:"http://127.0.0.1:8000/tc/get_element/",
 		datatype:"json",
 		async:true,
 		data:{
 			csrfmiddlewaretoken:'{{ csrf_token }}',
 			name:x[0].value,
 			admission:x[1].value,
 			email:x[2].value,
 			pass:x[3].value,
 		},
 		success: function(json){
 			console.log("sucess");
 			console.log(json.message);
 			$('#output').html(json.message);
 			$('.ajaxProgress').hide();
 		}
 	});
 } 

function get_element_log(){
 	console.log("in login");
 	var n=$("#ad").val();
 	var p=$("#pass").val();

 	$('.ajaxProgress').show();
 	$.ajax({
 		type:"POST",
 		url:"http://127.0.0.1:8000/tc/get_element_log/",
 		datatype:"json",
 		async:true,
 		data:{
 			csrfmiddlewaretoken:'{{ csrf_token }}',
 			ad:n,
 			pass:p,
 		},
 		success: function(json){
 			console.log("sucess");
 			console.log(json.message);
 			$('#output').html(json.message);
 			$('.ajaxProgress').hide();
 		}
 	});
 } 
