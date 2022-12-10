import axios from "axios"
import { useState } from "react"

export const Login=()=>{

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    console.log(email, password)


const login=()=>{
    axios.post("https://reqres.in/api/users", {email, password}).then((res)=>{
console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}


    return<>
    <div className="login">
        <div className="maindiv">
            <h1>PLEASE SIGN IN</h1>
            <div className="logindiv">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password"/>
                <h6>Forget your password?</h6>
                <button className="Continue" onClick={()=>{
                    login()
                }}>Continue</button>
                {/* <input className="create" type="text" placeholder="CONTINUE"/> */}
                <p>Don't have an Account?</p>
                <input className="reg" type="text" placeholder="REGISTER NOW"/>
                <div>
                <button className="btn1">Terms of Use</button>
                <span>&</span>
                <button className="btn2" >Privacy Policy</button> 
                </div>              
            </div>
        </div>

    </div>

    <style jsx>{`
        .login{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
            width:100vw;
            height:100vh;
            background:url("https://as2.ftcdn.net/v2/jpg/02/85/34/77/1000_F_285347794_Om0hFtqPMPebQ5AfLXPXNn76pQOlTFvi.jpg");
        }
        
            .maindiv{
                height: 500px;
                width: 500px;
                background-color: white;
                margin: auto;
                border: 1px solid;
                text-align: center;
                background: #8c86867d;
            }
              
            .logindiv{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 200px;
                margin: auto;
                gap: 10px;
              }
            
              input{
            border:1px solid;
padding: 10px 15px 
              }

            .create{
                background-color:black;
                color: white;
                border:none;
            }

            .reg{
                border:2px solid
            }

            input::placeholder{
            text-align: center;
            opacity : 1.0
            }

            .btn1,
            .btn2{
                background:none;
                border:none;
                cursor :pointer;
                border-bottom: 1px solid; 
            }
            .Continue{
                background: black;
    border: none;
    color: white;
    height: 40px;
    width: 210px;
}
            }
            
        `}




    </style>
    </>

}