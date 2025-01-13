var userList = []
getUserList()

function getUserList(){
    let jsonUserList = localStorage.get('userList')
    if(jsonUserList != null){
        userList = JSON.parse(jsonUserList)
    }
}


function login(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let repassword = document.getElementById('repassword').value

    //validate
    if(password != repassword){
        alert('password was not match!')
    }else{
        if(findUser(email, password)){
            alert('Login thanh cong')
        }else{
            alert('Sai email hoac mat khau')
        }
        
    }
}

function findUser(email, password){
    for(let i=0; i < userList.length; i++){
        if(email == userList[i].email && password == userList[i].password) return true;
    }
    return false;
}
function saveToDatabase(){
    localStorage.setItem('userList', JSON.stringify(userList))
}