$(function(){
    /*mouse on list*/
    $("li").hover(function(){
       $(this).find("img").animate({left:"140px"})     
$(".s1").show();
      $(".s1").animate({width:"150px"})     
    },
    /*mouse out list*/
    function(){
           $("img").animate({left:"-10px"})     
$(".s1").hide();
      $(".s1").animate({width:"0px"})          
    })
})

