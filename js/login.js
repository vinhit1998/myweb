function toggle(){
    var x =document.getElementById("password")
    var y =document.getElementById("hide1")
    var z =document.getElementById("hide2")
    if (x.type === 'password') {
        x.type="text";
        y.style.display="block";
        z.style.display="none";
    }else{
        x.type="password";
        y.style.display="none";
        z.style.display="block";
    }
}
function checkpass(){
    var a = document.getElementById("password").value;
    var b = document.getElementById("confirm_password").value;
    var c = document.getElementById("email").value;
    if (a=="" || b==""||c=="") {
        if (c=="") {
            alert("không được bỏ phần email");
            return false
        }else if (a=="") {
            alert("không được bỏ phần mật khẩu");
            return false
        } else {
            alert("không được bỏ phần nhập lại mật khẩu");
            return false
        }
    }else if (a.length<=6 || b.length<=6 ){
        alert("Mật khẩu phải trên 6 kí tự");
        return false
    }else if (a!=b ){
        alert("phần mật khẩu và nhập lại mật khẩu khác nhau");
        return false
    }else{
        alert("Đăng kí thành công!!!!")
        return true
    }
}
var crE= 'nhomweb3@gmail.com';
var crP='12345678910';
function checkpasslogin(){
    var a = document.getElementById("password").value;
    var c = document.getElementById("email").value;
    if(c==crE && a==crP){
        alert('Đăng nhập thành công');
        return true
    }else{
        alert('đăng nhập thất bại');
        return false;
    }

}
function checknumber(){
  var n1 =document.getElementById('number1').value;
  var result=parseInt(n1)*7000000
  document.getElementById('result').value=result
}
function checknumber1(){
    var n1 =document.getElementById('number2').value;
    var result=parseInt(n1)*10990000
    document.getElementById('result1').value=result
}
function checknumber2(){
    var n1 =document.getElementById('number3').value;
    var result=parseInt(n1)*17990000
    document.getElementById('result2').value=result
  }
function checknumber3(){
    var n1 =document.getElementById('number4').value;
    var result=parseInt(n1)*26990000
    document.getElementById('result3').value=result
}

  