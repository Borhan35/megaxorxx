
// Register Form Validation

$(document).ready(function(){
    $("#register-form").parsley();

    $(function () {
        $('#add_campaign_form').parsley().on('field:validated', function () {
                var ok = $('.parsley-error').length === 0;
                $('.bs-callout-info').toggleClass('formHidden', !ok);
                $('.bs-callout-warning').toggleClass('formHidden', ok);
            })
            .on('form:submit', function () {
                return false;
            });
           
    });

});


// Table Plugin Call 
$(document).ready(function(){
    $('table').basictable();
});


// Show Hide Password
function showPassword(){
    const input = document.querySelector('#password');
    input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');
}

function showPassword2(){
    const input2 = document.querySelector('#password2');
    input2.getAttribute('type') === 'password' ? input2.setAttribute('type', 'text') : input2.setAttribute('type', 'password');
}

// Bootstrap Dropdown Make Select 
document.querySelectorAll('.b_drop_selecMenu .dropdown-item').forEach( function(el) {   
    el.addEventListener('click', function() {
        document.querySelector('.b_drop_select').innerText = el.textContent;
        document.querySelector('.b_drop_selecMenu').value = el.textContent;
    });
});
document.querySelectorAll('.b_drop_selecMenu1 .dropdown-item').forEach( function(el) {    
    el.addEventListener('click', function() {
        document.querySelector('.b_drop_select1').innerText = el.textContent;
        document.querySelector('.b_drop_selecMenu').value = el.textContent;
    });
});


// Sidebar Toggle 
$(document).ready(function(){
    $("#toogle_bar").click(function(e) {
        e.preventDefault();
        $("#sidebar_sh").toggleClass("actives");
        $('#cb_main_content').toggleClass('actives');
    });
})

// Offcanvas responsive sidebar 
$(document).ready(function(){
    $("#mobile_toggle").click(function() {
        $('.mobile_sidebar').toggleClass('mobile_active')
    });
})

// All Select 
$(document).ready(function(){
    $('.mega_select').selectpicker();
})

$('.selectpicker').attr('data-trigger', 'change').attr('data-required', 'true');



$(document).ready(function(){

    $(window).on("load", function () {

        $('.cam_edit').on('click', save_onclick);
        $('.cam_edit').on('click', function () {
            $('.camp_view_field input, select').css('border', 'none');
        });
    
        $('.cam_cancel').on('click', cancel_onclick);
        $('.cam_cancel').on('click', function () {
            $('.camp_view_field input, select').css('border', 'none');
            $('.camp_view_field input, .cam_view_select_edits.bootstrap-select .btn-light').css('border', '0');
            $('.cam_view_select_edits.bootstrap-select .dropdown-menu').css('visibility', 'hidden');
        });
        $('.cam_save').on('click', cancel_onclick);
        $('.cam_save').on('click', function () {
            $('.camp_view_field input, select').css('border', 'none');
            $('.camp_view_field input, .cam_view_select_edits.bootstrap-select .btn-light').css('border', '0');
            $('.cam_view_select_edits.bootstrap-select .dropdown-menu').css('visibility', 'hidden');
        });
    
        $('.cam_edit').on('click', edit_onclick);
        $('.cam_edit').on('click', function () {
            $('.camp_view_field input, .cam_view_select_edits.bootstrap-select .btn-light').css('border', '1px solid #7B7B7B');
            $('.cam_view_select_edits.bootstrap-select .dropdown-menu').css('visibility', 'visible');
        });
        $('.cam_save, .cam_cancel').hide();
    });

    function edit_onclick() {
        setFormMode($(this).closest(".mega_campaign_view form"), 'edit');
    }

    function cancel_onclick() {
        setFormMode($(this).closest(".mega_campaign_view form"), 'view');

        //TODO: Undo input changes?
    }

    function save_onclick() {
        setFormMode($(this).closest(".mega_campaign_view form"), 'view');
        //TODO: Send data to server?
    }

    function setFormMode($form, mode) {
        switch (mode) {
            case 'view':
                $form.find('.cam_save, .cam_cancel').hide();
                $form.find('.cam_edit').show();
                $form.find("input, select").prop("disabled", true);
                break;
            case 'edit':
                $form.find('.cam_save, .cam_cancel').show();
                $form.find('.cam_edit').hide();
                $form.find("input, select").prop("disabled", false);
                break;
        }
    }

})