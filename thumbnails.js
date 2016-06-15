// var data = '{ "thumbnails":
//     ['
//     	{"name" :"Anime Review Website" , "desc" : "Made with PHP, mySQL, html, css and twitter Bootstrap", "img_1" : " " , "img_2" : " " , "link" : "" }, 
//     	{"name" : "Document Summarization" , "desc" : "Made with Python" , "img_1" : " " , "img_2" : " " ,"link" : "" } 

       
//     ]};

var data = '{ "thumbnails" : [' +
'{"name" :"Anime Review Website" , "desc" : "Made with PHP, mySQL, html, css and twitter Bootstrap","color":"black", "img_1" : " " , "img_2" : " " , "link" : "http://cims.nyu.edu/~ljm391/LAMP/list.php"},'+
'{ "name" : "Document Summarization" , "desc" : "Made with Python" , "color":"white", "img_1" : " " , "img_2" : " " ,"link" : "https://github.com/lesliemanrique1/Document_Summarization/blob/master/report.pdf" } ]}'; 


var obj = JSON.parse(data);

// console.log(obj)
console.log(obj.thumbnails[0].name);



// $(function() {
//     $.each(data.thumbnails, function(i, l) {
//         $('#project-thumbs').append("<div class='thumbnail'>" +
//                          "<img src='" + l.img_1 + "' />" +
//                          "<div class='number'>" +
//                          "<h3>" + "number" + "</h3>" +
//                           "</div></div>");
//     });
// }); 



$(function() {
	var json_length = obj.thumbnails.length;
	var l_r = 0 ; 
	var side = "left"
    $.each(obj.thumbnails, function(i, l) {
    	l_r +=1; 
    	if(l_r%2 != 0)
    	{
    		side = "left"; 
    	}
    	else
    	{
    		side = "right"
    	}
    	if(!(obj.thumbnails[i].img_1).trim())
    	{
    		console.log("empty");
    		var string = onclick= "'location.href=' " + obj.thumbnails[i].link + "';' " 
    		console.log(string) 
    		$('#project-thumbs').append("<div  id = 'thumbnail'>" + "<div id = 'thumbnail-"+ side + "' style=  'background-color: " + obj.thumbnails[i].color+ "; '>  <p id = '" + obj.thumbnails[i].name +  "'> " + obj.thumbnails[i].name + " </p> <a href = ' " + obj.thumbnails[i].link + " ' > </a> </div> </div>" );  

    	}   	
        
    });

}); 

// var name_array = [] ;
// $(function() {

	// $.each(obj.thumbnails,function(i,l)
	// {
	// 	name_array.push(obj.thumbnails[i].name);
	// }); 


// }); 
$(document).ready(function() {
    var colorOrig=$("#thumbnail-left").css('background-color');
    var fontOrig =$("#thumbnail-left").css('color');
    $("#thumbnail-left").hover(
    function() {
        //mouse over
        $(this).css('color', 'black')
        $(this).css('background-color', 'white')
        
    }, function() {
        //mouse out
        $(this).css('background-color', colorOrig)
        $(this).css('color', fontOrig)
    });
    var colorOrig_=$("#thumbnail-right").css('background-color');
    var fontOrig_ =$("#thumbnail-right").css('color');
    $("#thumbnail-right").hover(
    function() {
        //mouse over
        $(this).css('color', 'white')
        $(this).css('background-color', 'black')
        
    }, function() {
        //mouse out
        $(this).css('background-color', colorOrig_)
        $(this).css('color', fontOrig_)
    });
});


