const loginbtn = document.querySelector('.log-in-btn>a');

loginbtn.addEventListener('click', (e) => {

    const formEl = document.login;
    if (!isValid(formEl))
        return;

    alert("로그인 성공!");
    window.location.href = "/pages/main/index.html"

})

function isValid(form) {
    const emailGap = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    const pwGap = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\]).{8,16}$/;


    if (form.email.value == "") {
        alert("이메일을 입력해주세요")
        return false;
    }

    if (!emailGap.test(form.email.value)) {
        alert("이메일을 다시 한 번 확인해주세요")
        form.email.value.focus();
        return false;
    }

    if (form.pw.value == "") {
        alert("비밀번호를 입력해주세요")
        form.pw.value.focus();
        return false;
    }

    if (!pwGap.test(form.pw.value)) {
        alert("비밀번호를 다시 한 번 확인해주세요")
        form.pw.value.focus();
        return false;
    }
    return true
}