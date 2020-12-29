var jq = $.noConflict();

jq(document).ready(function(){
    var button = jq("#enterButton");
    
    button.mouseenter(function(){
        button.addClass("buttonAnimation");
    });
    button.mouseover(function(){
        button.css("background-color", "green");
    });
    button.mouseout(function(){
        button.addClass("buttonAnimationReverse");
        button.css("background-color", "darkgrey");
    });
    button.click(function(){
        button.fadeToggle("slow", function(){
            jq("p").text("Hello World!");
        });
    });
});