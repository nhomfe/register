var userList = []
getUserList()

function getUserList(){
    let jsonUserList = localStorage.get('userList')
    if(jsonUserList != null){
        userList = JSON.parse(jsonUserList)
    }
}


function register(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let repassword = document.getElementById('repassword').value

    //validate
    if(password != repassword){
        alert('password was not match!')
    }else{
        if(findUserByEmail(email)){
            alert('Email da ton tai')
        }else{
            //Dang ky moi
            let user = {
                email,
                password
            }
            userList.push(user)
            saveToDatabase()
        }
        
    }
}

function findUserByEmail(email){
    for(let i=0; i < userList.length; i++){
        if(email == userList[i].email) return true;
    }
    return false;
}
function saveToDatabase(){
    localStorage.setItem('userList', JSON.stringify(userList))
}