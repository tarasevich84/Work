 $(document).ready(function() {


 // AJAX FORM
 $('#form').on('submit', function(event) {
  event.preventDefault();

  var submit = false;
  // form validation
  function input_validate() {

   // name validation
   var input = $('input[name="name"]');
   var value = input.val();

   if ($.trim(value) == '' || $.trim(value).length < 2) {
       input.next('.error').fadeIn(400);  
       input.focus()
       input.bind('propertychange input paste focus', function() {
        $(this).next('.error').fadeOut(400);  
       });
       event.preventDefault(); 
       return false; 
   };

   

   // email validation
   var email = $('input[name="email"]');
   var email_val = email.val();

   var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
   
   if ( re.test(email_val) == false ) {
       email.next('.error').fadeIn(400);  
       email.focus() //focus on title field
       email.bind('propertychange input paste', function() {
        $(this).next('.error').fadeOut(400);  
       });
       event.preventDefault(); 
       return false; 
   }; 

   // phone validate
   var input = $('input[name="phone"]');
   var value = input.val();

   if ($.trim(value) == '' || $.trim(value).length < 2) {
       input.next('.error').fadeIn(400);  
       input.focus()
       input.bind('propertychange input paste', function() {
        $(this).next('.error').fadeOut(400);  
       });
       event.preventDefault(); 
       return false; 
   }; 

   // textarea message validation
   var input = $('textarea[name="message"]');
   var value = input.val();

   if ($.trim(value) == '' || $.trim(value).length < 2) {
       input.next('.error').fadeIn(400);  
       input.focus()
       input.bind('propertychange input paste', function() {
        $(this).next('.error').fadeOut(400);  
       });
       event.preventDefault(); 
       return false; 
   }; 


   // checkbox validation
   var input = $('input[name="check1"]');
   var value = input.val();

   if (input.prop('checked')==false) {
    // alert('text')
       input.closest('.checkbox').next('.error').fadeIn(400);  
       input.focus()
       input.bind('click', function() {
        $(this).closest('.checkbox').next('.error').fadeOut(400);  
       });
       event.preventDefault(); 
       return false; 
   }; 


   submit = true;
   
  };
  input_validate();
  
  // if form validated
  if (submit) {
   // SEND FORM IF INPUTS ARE FILLED
   $(this).ajaxSubmit({
    
    resetForm: true,

    success: function() {
     $('#success').fadeIn(500);  //  show message
     $('body, html').animate({ // scroll to message
            scrollTop: $('#success').offset().top - 30
        }, 200);
        setTimeout(function() { // hide message
      $('#success').fadeOut(500);
        }, 2000); // message show time
    },

    error: function() {
     $('#error').fadeIn(500);  //  show message
     $('body, html').animate({ // scroll to message
            scrollTop: $('#error').offset().top - 30
        }, 200);
        setTimeout(function() { // hide message
      $('#error').fadeOut(500);
        }, 2000); // message show time
    }
    
   });

  };

 });









});