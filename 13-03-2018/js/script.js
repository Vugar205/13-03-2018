$(document).ready(function(){
    $("#next").click(function(){
        var activestep = $(".active-step");
        var activecontent = $(".active-content");
        activestep.removeClass("active-step");
        activecontent.removeClass("active-content");
        activestep.next().addClass("active-step seen");
        activecontent.next().addClass("active-content seen");
        $("#prev").removeAttr("disabled");
        if(activestep.next().next().length==0){
            $("#next").attr("disabled","disabled");
        }
    });
    $("#prev").click(function(){
        var activestep = $(".active-step");
        var activecontent = $(".active-content");
        activestep.removeClass("active-step");
        activecontent.removeClass("active-content");
        activestep.prev().addClass("active-step seen");
        activecontent.prev().addClass("active-content seen");
        $("#next").removeAttr("disabled");
        if(activestep.prev().prev().length==0){
            $("#prev").attr("disabled","disabled");
        }
    });
    $(".navbar li").click(function(){
        if($(this).hasClass("seen")){
            $(".navbar li").removeClass("active-step");
            $(".contentWrapper div").removeClass("active-content");
            $(this).addClass("active-step");
            $($(this).children(0).attr("href")).addClass("active-content");
            if($(this).next().length!=0){
                $("#next").removeAttr("disabled");
            }else{
                $("#next").attr("disabled","disabled");
            }
            if($(this).prev().length!=0){
                $("#prev").removeAttr("disabled");
            }
            else{   
                $("#prev").attr("disabled","disabled");
            }
        }
    });
    $("#finish").click(function(){
        alert("Finish Clicked");
    })
    $("#cancel").click(function(){
        $(".navbar li").removeClass("active-step seen");
        $(".contentWrapper div").removeClass("active-content");
        $(".navbar li:first").addClass("active-step seen");
        $(".contentWrapper div:first").addClass("active-content");
        $("#prev").attr("disabled","disabled");
        $("#next").removeAttr("disabled");
    })
});