//a pagina pronta
$(document).ready(function() {


  $("#tab-resume").click(function(){
    $("#resume").show();
    $("#about").hide();
  });

  $("#tab-about").click(function(){
    $("#about").show();
    $("#resume").hide();
  });

  $("#side-resume").click(function(){
    $('.button-collapse').sideNav('hide');
    $("#resume").show();
    $("#about").hide();
  });
  $("#side-resume").on("tap",function(){
    $('.button-collapse').sideNav('hide');
    $("#resume").show();
    $("#about").hide();
  });
  $("#side-about").click(function(){
    $('.button-collapse').sideNav('hide');
    $("#about").show();
    $("#resume").hide();

  });
  $("#side-about").on("tap",function(){
    $('.button-collapse').sideNav('hide');
    $("#about").show();
    $("#resume").hide();

  });
  $("#side-contactme").click(function(){
    $('.button-collapse').sideNav('hide');
  });
  //resize della pagina
   resizePage();
   $(window).resize(function(){resizePage()});

  //carico il curriculum
  $('#download_CV').click(function(e) {
    e.preventDefault();  //stop the browser from following
    window.open('doc/CV-SalvatoreAlescio.pdf', "CV Salvatore Alescio");
  })

});
//al caricamento della pagina

$(window).load(function(){
  resizePage();
  $("#about").load("html/about.html"); // al load della pagina mi deve caricare
  $("#resume").load("html/cv.html");
});

function resizePage(){
  if($(window).width() < 768){
    $(".sidenavResponsive").show();
    $("#tabLine").hide();
  }
  if($(window).width() >= 768){
    $(".sidenavResponsive").hide();
    $("#tabLine").show();
  }
}
