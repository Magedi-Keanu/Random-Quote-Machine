$("documnet").ready(function(){




    
const generateQuote = (obj) =>{
    const objQuote= obj;

    ////Generate random array index within the arrays length
    let totalQuotes = objQuote.quotes.length;

    const generateRandomNum = (total) => {
        return Math.floor(Math.random()*total);
    };


    ////use generated number to produce random quote
    let num = generateRandomNum(totalQuotes);

    let quoteStr = objQuote.quotes[num].quote;
    let authorStr = objQuote.quotes[num].author;

    
   


//display qoute and author in h3 tag and  p tag 
    $("h3").fadeOut(1500,function(){
        $("h3").text(quoteStr).fadeIn(1000);
     });

     $("#author").fadeOut(1500,function(){
        $("#author").text(authorStr).fadeIn(1000);
     });
     
    console.log(objQuote.quotes[num]);
}



const generateRandomColor = () =>{

    //array storing css background colors
    let arrColor = [
        {"background-color":"crimson"},
        {"background-color":"peru"},
        {"background-color":"darkturquoise"},
        {"background-color":"firebrick"},
        {"background-color":"orangered"},
        {"background-color":"goldenrod"},
        {"background-color":"slateblue"},
        {"background-color":"teal"},
        {"background-color":"seagreen"},
        {"background-color":"dodgerblue"}
    ]


    //generate random array index within the arrays length
    let totalColors = arrColor.length;
    const generateRandomNum = (total) => {
        return Math.floor(Math.random()*total);
    }

    //change color of body and button using generated array index
    let position = generateRandomNum(totalColors);
    $("body ").css(arrColor[position]);
    $("button").css(arrColor[position]);
    $(".fa-brands").css(arrColor[position]);
}; 



//generateQuote and generateRandomColor function will be invoked when element is clicked 
$("#new-quote").click(function(){
    //retrieve JSON file and insert file content into generateQuote function.
    $.getJSON("./json/quotes.json", function(json){
        generateQuote(json); 
    });

    generateRandomColor()
});



//generateQuote function is invoked when page is loaded and ready.
//New quote is produced on every reload
$.getJSON("./json/quotes.json", function(json){
    generateQuote(json); 
    generateRandomColor()
});


//Share generated Quote to Twitter
$(".fa-twitter").click(function(){
    //set string to be tweeted in suitable format and compose string in the URL 
    var tweetStr = '"'+$("h3").text() +'"' + "-"+ $("#author").text()+".";
    const tweetabletext = "https://twitter.com/intent/tweet?"  + "&text=" + encodeURIComponent(tweetStr);

    //Tweet Url set as a link attribute for the element
    $("a").attr("href",tweetabletext);

   
})



$(".fa-tumblr").click(function(){
    //set string to be posted in suitable format and compose string in the URL 
    let text = $("#author").text();
    var tumblrCaption ="&caption="+text.trim();
    var tumblrContent =  $("#text").text();

    const tumblrText = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes" + tumblrCaption + "&content=" +encodeURIComponent(tumblrContent)+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";

    //Tumblr Url set as a link attribute for the element
    $("a").attr("href",tumblrText);

    console.log(tumblrText);
    
})



})


