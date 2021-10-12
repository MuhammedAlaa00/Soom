$( document ).ready(function() {
    
//navbar-toggle

$('#navbar-toggle').click(function(){
    $('.navbar-collapse').toggle();
})
   
//    scroll
    $(".mazad").click(function() {
    $('html, body').animate({
        scrollTop: $(".contain-video").offset().top
    }, 2000);
});

$('.menu').click(function(){
     
//    $(".list").toggle(10);
     $('.list').toggle() ;
     $('.sticky .fa').toggleClass('fa-bars fa-angle-right');
     
    
 });
    
//    notification
$('.notification span').click(function(){
     
//    $(".list").toggle(10);
     $('.notification-list').toggle() ;
    
 });

//select option
$('#check-car').change(function(){
    if($(this).val() === 'checked'){
        $('#checked').show();
    }else{
        $('#checked').hide();
    }
            
        });

//upload avatar
    if($('#input-avatar').length > 0) {
        document.getElementById('input-avatar').addEventListener('change', function() {
       if (this.files && this.files[0]) {
          var img = document.getElementById('avatar');
          img.src = URL.createObjectURL(this.files[0]); 
      }
  });      
    }
  
//upload atach image
    if($('#input-atach-image').length > 0) {
  document.getElementById('input-atach-image').addEventListener('change', function() {
       if (this.files && this.files[0]) {
          var img_atach = document.getElementById('atach-image');
          img_atach.src = URL.createObjectURL(this.files[0]); 
        }
  });
    }
//upload image1
    if($('#input-image1').length > 0) {
  document.getElementById('input-image1').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img1 = document.getElementById('image1');
          img1.src = URL.createObjectURL(this.files[0]); 
      }
  });
    }
//upload image2
    if($('#input-image2').length > 0) {
  document.getElementById('input-image2').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('image2');
          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
    }
//upload image3
    if($('#input-image3').length > 0) {
  document.getElementById('input-image3').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('image3');
          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
    }
//upload image4
    if($('#input-image4').length > 0) {
  document.getElementById('input-image4').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('image4');
          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
    }
//upload image5
    if($('#input-image5').length > 0) {
  document.getElementById('input-image5').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('image5');
          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
    }
//upload image6
    if($('#input-image6').length > 0) {
  document.getElementById('input-image6').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('image6');
          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
    }
//upload image7
    if($('#input-image7').length > 0) {
  document.getElementById('input-image7').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('image7');
          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
    }
//upload image8
    if($('#input-image8').length > 0) {
  document.getElementById('input-image8').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('image8');
          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
    }

//    upload video
$(document).on("change", ".file_multi_video", function(evt) {
  var $source = $('#video_here');
  $source[0].src = URL.createObjectURL(this.files[0]);
  $source.parent()[0].load();
});
  


//    change language
    
var arrLang ={
    'en':{
        'home' : 'Home',
        'about-us' : 'About Us',
        'sign-in' : 'Sign in',
        'my-profile' : 'My Profile',
        'title' : 'Find Your Dream advertise',
        'adds' : 'add advertise',
        'recently-hading' : 'Recently Add',
        'recently-title' : 'Title Title',
        'show-more' : 'Show More',
        'top-add-hading' : 'Top  Ads',
        'terms' : 'Terms &amp; Conditions',
        'support-links' : 'Support Links',
        'category' : 'Category',
        'follow-us' : 'Follow Us',
        'facebook' : 'FaceBook',
        'twitter' : 'Twitter',
        'youtube' : 'Follow Us',
        'copyright' : '© 2020 Copyright:',
        'twitter' : 'Twitter'
    },
    'ar':{
        'home' : 'الرئيسية',
        'about-us' : 'عننا',
        'sign-in' : 'تسجيل الدخول',
        'my-profile' : 'حسابي',
        'title' : 'Find Your Dream advertise',
        'adds' : 'إضافة إعلان',
        'recently-hading' : 'Recently Add',
        'recently-title' : 'Title Title',
        'show-more' : 'Show More',
        'top-add-hading' : 'Top  Ads',
        'terms' : 'Terms &amp; Conditions',
        'support-links' : 'Support Links',
        'category' : 'Category',
        'follow-us' : 'Follow Us',
        'facebook' : 'FaceBook',
        'twitter' : 'Twitter',
        'youtube' : 'Follow Us',
        'copyright' : '© 2020 Copyright:',
        'twitter' : 'Twitter'
    }
}
 //  add class rtl
    $("#ar").click(function(){
        $( "body" ).addClass( "rtl" );
        $('#ar').css("display", "none");
        $('#en').css("display","block");
    });
    
    
    // remove class rtl
    $('#en').click(function(){
        $( "body" ).removeClass( "rtl" );
        $('#en').css("display", "none");
        $('#ar').css("display","block");
    });

    //translate language
    $('.translate').click(function(){
        var lang = $(this).attr('id');
        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        
    });
    
   
});

//    search

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}



//form input

$('.txtb input').on("focus",function(){
    $(this).addClass("focus");
    
});


$('.txtb input').blur(function()
{
    if( !$(this).val() ) {
          $(this).removeClass("focus");
    }
});

//form select
$('.txtb select').on("click",function(){
    $(this).addClass("focus");
    
});


$('.txtb select').blur(function()
{
    if( !$(this).val() ) {
          $(this).removeClass("focus");
    }
});

