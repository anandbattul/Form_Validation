function validation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    console.log("Hi "+user);
    var conpass = document.getElementById("conpass").value;
    var email = document.getElementById("email").value;
 
    if (user.length < 2) {
        document.getElementById("userr").innerHTML = `**Please write more than one character in the Box`
        return false;
    } 
    if (!isNaN(user)) {
        document.getElementById("userr").innerHTML = `**Please write Alphabets only in the Box`
        return false;
    }
    if (user == "") {
        document.getElementById("userr").innerHTML = `**Please write username in the Box`
        return false;
    }else {
        document.getElementById("userr").innerHTML = "";
    }


    if (pass == "") {
        document.getElementById("passs").innerHTML = `**Please write Password in the Box`
        return false;
    }
    if (pass.length < 8) {
        document.getElementById("passs").innerHTML = `**Please write Password of Atleast 8 Charecter in the Box`
        return false;
    }
    if (pass.search(/[0-9]/)==-1) {
        document.getElementById("passs").innerHTML = `**Please write Password of Atleast 1 Number in the Box`
        return false;
    }
    if (pass.search(/[a-z]/)==-1) {
        document.getElementById("passs").innerHTML = `**Please write Password of Atleast 1 Lower case character in the Box`
        return false;
    }
    if (pass.search(/[A-Z]/)==-1) {
        document.getElementById("passs").innerHTML = `**Please write Password of Atleast 1 Upper case character in the Box`
        return false;
    }
    if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\+\<\>\?]/)==-1) {
        document.getElementById("passs").innerHTML = `**Please write Password of Atleast 1 Spacial Symbol in the Box`
        return false;
    }
    else {
        document.getElementById("passs").innerHTML = ``
    }




    if (conpass == "") {
        document.getElementById("conpasss").innerHTML = `**Please write Conform Password in the Box`
        return false;
    }
    if (conpass != pass) {
        document.getElementById("conpasss").innerHTML = `**Please write Conform Password same as Password in the Box`
        return false;
    }else {
        document.getElementById("conpasss").innerHTML = ``
    }


    if (email == "") {
        document.getElementById("emaill").innerHTML = `**Please write Email in the Box`
        return false;
    }
    if (email.indexOf('@') <=0) {
        document.getElementById("emaill").innerHTML = `**Please write Valid Email(Invalid Position of @) in the Box`
        return false;
    }
    if (email.charAt(email.length-4) !="." && email.charAt(email.length-3) !=".") {
        document.getElementById("emaill").innerHTML = `**Please write Valid Email(Invalid Position of .) in the Box`
        return false;
    }
    else {
        document.getElementById("emaill").innerHTML = ``
    }

}
