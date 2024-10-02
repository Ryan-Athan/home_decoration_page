$(document).ready(function(){

    // Start Back to Top 

    $(".btn-backtotops").hide();
    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();

        if(getscrolltop >= 370){
            $(".btn-backtotops").fadeIn(1000);
        }else{
            $(".btn-backtotops").fadeOut(1000);
        }
    })
    // End Back to Top

    // Start nav bar
    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();

        if(getscrolltop >= 200){
            $('.navbar').addClass("navmenus")
        }else{
            $('.navbar').removeClass("navmenus");
        }
    }); 


    $(".navbuttons").click(function(){
        $(this).toggleClass('crossxs');
    });
    // End nav bar 

    // Start Property Section 

    $(".propertrylists").click(function(){
        // $(this).addClass("activeitems");

        $(this).addClass("activeitems").siblings().removeClass('activeitems');

        // const filtervalue = $(this).attr("data-filter");

        const filtervalue = $(this).data('filter');

        if(filtervalue === "all"){
            $(".filters").show("slide",500);
        }else{
            // Method-I 
            // $(".filters").hide();

            // $(".filters").filter("." +filtervalue).show();

             // Method-II
             $(".filters").not('.'+filtervalue).hide("slide",500);

             $(".filters").filter("." +filtervalue).show("slide",500);
        }
    });
    // End Property Section 

    // Start Adv Section
    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();

        if(getscrolltop >= 1200){
            $('.advimages').addClass("fromlefts");
            $('.advtexts').addClass("fromrights");
        }else{
            $('.advimages').removeClass("fromlefts");
            $('.advtexts').removeClass("fromrights");
        }
    }); 
    // End Adv Section

    // Start footer Section 
    const getyear = document.getElementById("getyear");
    const getfullyear = new Date().getFullYear();
    getyear.textContent = getfullyear;

    // End Footer Section 
});