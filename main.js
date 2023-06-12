class User{

     constructor(username,password){
        this.username = username;
        this.password = password;
     }
     show(){
        console.log(this.username);
    }
}
let user = new User('kutman', "16")

user.show()