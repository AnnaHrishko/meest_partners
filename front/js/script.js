$('.phone').each(function(){
    window.intlTelInput(this, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    separateDialCode: true,
});
})

$(document).ready(function(){
    $('.phone').mask('000-000-000',{placeholder:"000-000-000"}, {autoclear: true});
  });

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});
  
$(function() {
    $(".form-manager").validate({
        rules: {
            "name": {
                required: true,
                minlength: 3,
            },
            "phone": {
                required: true,
                minlength: 11,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
        },
        messages: {
            "name": {
                required: "Required field",
                minlength: "Enter your full name",
            },
            "phone": {
                required: "Required field",
                minlength: "Enter your full phone number",
            },
            "email": {
                required: "Required",
                emailRegex: "Enter your full email",
            },
        },
    });
});

