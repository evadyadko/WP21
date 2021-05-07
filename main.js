function validateForm() {
    function name(){
        let name_input = $('#formname');
        let cur_val = name_input.val();
        let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$";
        if (cur_val.match(name_regex) && cur_val !== ''){
            name_input.removeClass('is-invalid');
            name_input.addClass('is-valid');
            return true;
        } else{
            name_input.removeClass('is-valid');
            name_input.addClass('is-invalid');
            $('#form-alert').show().html("Incorrect name!")
            return false;
        }

    }
    function city(){
        let city_input = $('#formcity');
        let city_val = city_input.val();
        let city_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$";
        if (city_val.match(city_regex) && city_val !== ''){
            city_input.removeClass('is-invalid');
            city_input.addClass('is-valid');
            return true;
        } else{
            city_input.removeClass('is-valid');
            city_input.addClass('is-invalid');
            $('#form-alert').show().html("Incorrect city!")
            return false;
        }

    }

    function age(){
        let age_input = $('#formage');
        let age_val = age_input.val();
        let age_regex = "^[0-9]+(([',. -][0-9 ])?[0-9])$";
        if (age_val.match(age_regex) && age_val !== ''){
            age_input.removeClass('is-invalid');
            age_input.addClass('is-valid');
            return true;
        } else{
            age_input.removeClass('is-valid');
            age_input.addClass('is-invalid');
            $('#form-alert').show().html("Incorrect age!")
            return false;
        }


    }
    function phone(){
        let phone_input = $('#formphone');
        let phone_val = phone_input.val();
        let phone_regex = "^[0-9]+(([',. -][0-9 ])?[0-9])$";
        if (phone_val.match(phone_regex) && phone_val !== ''){
            phone_input.removeClass('is-invalid');
            phone_input.addClass('is-valid');
            return true;
        } else{
            phone_input.removeClass('is-valid');
            phone_input.addClass('is-invalid');
            $('#form-alert').show().html("Incorrect phonenumber!")
            return false;
        }


    }
    function email(){
        let email_input = $('#formEmail');
        let email_val = email_input.val();
        let email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (email_val.match(email_regex) && email_val !== ''){
            email_input.removeClass('is-invalid');
            email_input.addClass('is-valid');
            return true;
        } else{
            email_input.removeClass('is-valid');
            email_input.addClass('is-invalid');
            $('#form-alert').show().html("Incorrect email!")
            return false;
        }

    }
    if(name() && phone() && email() && city() && age()){
        return true
    }
}


function writeFormData(){
    let objects = {
        Name: $('#formname').val(),
        Age: $('#formage').val(),
        City: $('#formcity').val(),
        Mail: $('#formEmail').val(),
        Number: $('#formpassword').val(),
    }
    $('#form-content').show();

    var i = 0
    for (var object in objects) {
        $('tr:eq(' + i + ') td').html(objects[object]);
        i = i + 1
    }

}

$(document).ready(function(){
    $('#link-tab').click(function (){
        $('#links').show();
        $('#contact').hide();

    });
    $('#contact-tab').click(function (){
        $('#links').hide();
        $('#contact').show();
    });
    $('#submit').click(function (){
        if (validateForm()){
            writeFormData()
            $('#form-alert').hide();
        }
    });
    $('#erase').click(function (){
        $('#form-content').hide();
        $('input:text'). val("");
    });
});
function openlink(evt, link) {
    var i, tabcontent, navitem;
    tabcontent = document.getElementsByClassName("tab-pane active");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    navitem = document.getElementsByClassName("nav-link active");
    for (i = 0; i < navitem.length; i++) {
        navitem[i].className = navitem[i].className.replace(" active", "");
    }
    document.getElementById(link).style.display = "block";
    evt.currentTarget.className += " active";
}

function opencontact(evt, contact) {
    var i, tabcontent, navitem;
    tabcontent = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    navitem = document.getElementsByClassName("nav-link");
    for (i = 0; i < navitem.length; i++) {
        navitem[i].className = navitem[i].className.replace(" active", "");
    }
    document.getElementById(contact).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function() {
    $('#contact-tab').click(function () {
        $('#links').hide();
        $('#contact').show();
    });

    $('#link-tab').click(function () {
        $('#links').show();
        $('#contact').hide();
    });
});