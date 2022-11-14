// 동영상 강의에 나온 코드를 그대로 실습하세요
let elInputUsername = document.querySelector('#username')
let elInputPassword1 = document.querySelector('#password')
let elInputPassword2 = document.querySelector('#password-retype')

let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')
let elPasswordMismatch = document.querySelector('.mismatch-message')

// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide')
    
    elFailureMessage.classList.add('hide')
  } else {
    elSuccessMessage.classList.add('hide')

    elFailureMessage.classList.remove('hide')
  }
}

elInputPassword2.onkeyup = function () {
  if (isMatch(elInputPassword1.value,elInputPassword2.value)) {
    elPasswordMismatch.classList.add('hide')
  } else {
    elPasswordMismatch.classList.remove('hide')
  }
}

function isMoreThan4Length(value) {
  return value.length >= 4
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
}

function isMatch (password1, password2) {
  return password1 === password2// TODO : 동영상 강의를 보고 이 함수를 완성하세요.
}
