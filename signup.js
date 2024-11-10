const user_key="user";
function signup()
{
    var  username = document.getElementById("signup_username").value;
    var  password = document.getElementById("signup_password").value;
    var  email = document.getElementById("signup_email").value;
    var cpassword=document.getElementById("signup_cpassword").value;

        if(username.trim()==""|| password.trim()==""||email.trim()==""||cpassword.trim()=="")
        {
            alert("Please fill all the fields");
            return ;
        }

        else if (password!=cpassword)
        {
            alert("not matched passwords");
            return ;
        }
        else
        {
            var x=JSON.parse(localStorage.getItem(user_key))|| [];
            for(let i=0;i<x.length;i++)
            {
                if(x[i].email==email)
                {
                    alert("email already exists");
                    return ;
                }
                    
            }

            var obj  = {
                username:username,
                email:email,
                password:password
            };
            x.push(obj);

            localStorage.setItem(user_key,JSON.stringify(x));
            alert("registered successfully");


        }
}

function login()
{
    var email=document.getElementById("login_email").value;
    var password=document.getElementById("login_password").value;
    if (email.trim() == '' || password.trim() == '') 
        {
            alert('Please fill all the fields');
            return;
        }
    else
        {
    
            var x = JSON.parse(localStorage.getItem(user_key)) || [];
    
            for (var i = 0; i < x.length; i++) 
            {
                
                if (x[i].email == email) 
                {
                    if (x[i].password != password)
                    {
                        alert('Invalid Credentials');
                        return;
                    }
                    else
                    {
                        
                       sessionStorage.setItem('user', JSON.stringify(x[i]));
                        alert('Login Successful');
                        return;
                        
                        
                    }
                }
            }
    
            alert('User Not Found');
    
        }
    
    }