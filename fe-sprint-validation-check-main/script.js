console.log('잘 불려왔니?')

let elInputUsername = document.querySelector('#username')
// console.log(elInputUsername);

let elFailureMessage = document.querySelector('.failure-message')
// console.log(elFailureMessage)

let elSuccessMessage = document.querySelector('.success-message')


elInputUsername.onkeyup = function () {
    //이벤트 핸들러
    // console.log(elInputUsername.value)

    if(isMoreThan4Length(elInputUsername.value)) {
        // console.log('4글자보다 크네')
        // 성공 메세지가 보여야함
        elSuccessMessage.classList.remove('hide')

        // 실패 메세지가 가려져야 함
        elFailureMessage.classList.add('hide')
    } else {
        // console.log('짧다...')
        // 성공 메세지가 가려져야 함
        elSuccessMessage.classList.add('hide')

        // 실패 메세지가 보여야함
        elFailureMessage.classList.remove('hide')
    }
}

// 글자 수가 4개 이상이면,
function isMoreThan4Length(value) {
    return value.length >= 4
}