 
$(document).ready(function(){
 

 $('.ajax-form').submit(function(event) {
          
          event.preventDefault();
            
            var ajaxFormData = {
                'name'     : $('input[name=name]').val(),
                'email'    : $('input[name=email]').val(),
                'message'  : $('input[name=message]').val(),
                'phone'    : $('input[name=phone]').val()
            };

            $.ajax({
                type        : 'POST', 
                url         : 'sender.php',
                dataType    : 'json', 
                encode          : true
            })
                .done(function(data) {

                 if ( ! data.success) {
            
                    // handle errors for name ---------------
                    if (data.errors.name) {
                        $('.form-group-name').addClass('has-error'); 
                        $('.form-group-name').append('<div class="help-block">' + data.errors.name + '</div>'); 
                    }

                    // handle errors for email ---------------
                    if (data.errors.email) {
                        $('.form-group-email').addClass('has-error'); 
                        $('.form-group-email').append('<div class="help-block">' + data.errors.email + '</div>'); 
                    }
                    // handle errors for phone ---------------
                      if (data.errors.phone) {
                        $('.form-group-phone').addClass('has-error'); 
                        $('.form-group-phone').append('<div class="help-block">' + data.errors.phone + '</div>'); 

                } else {

                    $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                    alert('Your Email Has Been Sent'); 

                    }
                }
            });
        });
    });


