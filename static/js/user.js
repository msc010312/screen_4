const joinbtn = document.querySelector('.log-in-btn>a');

joinbtn.addEventListener('click', (e) => {
    
    const formEl = document.join;
    if (!isValid(formEl))
        return ;

    alert("회원가입을 완료하였습니다.");
    window.location.href = "http://127.0.0.1:5502/pages/user/login.html"

})


function isValid(form) {
    const idGap = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,9}$/ ;
    const emailGap = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    const pwGap = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\]).{8,16}$/;

    if (form.id.value == "") {
        alert("이름을 입력해주세요")
        form.id.value.focus();
        return false;
    }

    if (!idGap.test(form.id.value)) {
        alert("특수문자,공백,점 등을 제외하고 2~9 사이의 글자로 입력해주세요")
        form.id.value.focus();
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

    if (form.pw.value !== form.pwCheck.value) {
        alert("비밀번화와 동일하지 않습니다.")
        form.pwCheck.value.focus();
        return false;
    }
    return true
}

const [isShowPwChecked, setShowPwChecked] = useState(false)
const pwRef = useRef(null)

const handleShowPwChecked = async () => {
  const pw = await pwRef.current
  if (pw === null) return

  await setShowPwChecked(!isShowPwChecked)
  if(!isShowPwChecked) {
    pw.type = 'text';
  } else {
    pw.type = 'password';
  }
}