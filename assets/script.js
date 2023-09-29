function onSubmit(el){
    let username = el.username.value
    let password = el.pass.value
    let fail = ''

    if(username == '' ||password == ''){
        fail = 'Заполните все пустые строки'
    }

    if(fail != ''){
        alert(fail)
        return false
    }
}