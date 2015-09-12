/**
 * Created by Lily on 10.09.2015.
 */

function sign_In(){
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var password = document.form.password.value;
    var email=document.form.email.value;
    if ( emailRegex=="" || password == ""){
        document.form.password.focus();
        document.form.email.focus();
        alert ("Please, fill the form")
    }
    else {
        return true;
    }
};

