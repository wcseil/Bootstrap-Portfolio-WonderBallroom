$(function() {

    /* modals */
    $(".openEvents").click(function(){
        $("#eventsModal").modal("show");
    })

    $(".openUserMenu").click(function(){
        $("#userModal").modal("show");
    })

    $("#showSpecs").click(function(){
        $("#specsModal").modal("show");
    })



    /*   
    for (let i = 0; i < 100; i++){
        $(".jumbotron").fadeOut(3000);
        $(".jumbotron").css("background-image", backgroundImages[i]);
        /*$(".jumbotron").css("background-image", backgroundImages[Math.floor(Math.random()*backgroundImages.length-1)]);
        $(".jumbotron").fadeIn(3000);
        
        console.log(i);
    };
    */

    /* rotate jumbotron background images */
    let backgroundImages = ["url(../images/wonder_sign.jpg", "url(../images/wonder_sign2.jpg", "url(../images/wonder_show.jpg", "url(../images/wonder_show2.jpg"]
    let changeBackground = function(){
        $(".jumbotron-home").css("background-image", backgroundImages[Math.floor(Math.random()*backgroundImages.length)]);
    }   
    setInterval(function(){changeBackground()}, 7000);

    /* calculate ticket price */
    $("#ticketsChosen").change(function(){
        let ticketQuantSelected = $("#ticketsChosen").val();
        $(".totalPrice").html( "Total price: $" + ticketQuantSelected * 25 + ".00");
    });

   /*
    $("#collapsebtn").click(function(){
        month = "#" + $("#selectMonth").val();
        $(month).display("block");
    });
    */

});