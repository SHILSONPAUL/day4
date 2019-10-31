function validform(x){
    var uname=document.getElementById("username");
    var email= x.ename.value;
    var email_re = /\S+@\S+\.\S+/;
    var num =  /^\d{10}$/;
    var n= x.numb.value;
    if(uname.length<6){
    alert("Please enter a valid username");
    return false;
    }
    else if(email_re.test(email) == false){
        alert("Please enter a valid email");
        return false;
    }
    else if(num.test(n) == false){
        alert("please enter a valid phone number");
        return false;
    }
}