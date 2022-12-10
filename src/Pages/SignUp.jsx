export const SignUp = () => {
  return (
    <>
      <div className="signup">
        <div className="maindiv">
        <h1>Create an Account</h1>
          <div className="signupdiv">
         
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input className="create" type="text" placeholder="CREATE AN ACCOUNT" />
            <p>Already have an Account ?</p>
            <input className="loginhere" type="text" placeholder="LOG IN HERE" />
            <div className="btn">
            <button className="btn1">Terms of Use </button>
            <span>&</span>
            <button className="btn2">Privacy Policy</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .maindiv{
            width: 500px;
            height: 500px;
            // margin: auto;
            text-align: center;
            background: #8c86867d;
          }
          .signupdiv{
            display: flex;
            flex-direction: column;
              align-items: center;
              width: 200px; 
              margin: auto;
             gap : 10px;            
            }

             .signup{
                display: flex;
                justify-content: center;
                align-items: center;
                border : 1px solid;
                width: 100vw;
                height: 100vh;
                margin:auto;
                background:url("https://as2.ftcdn.net/v2/jpg/02/85/34/77/1000_F_285347794_Om0hFtqPMPebQ5AfLXPXNn76pQOlTFvi.jpg");
             }

             .input{
                border: 10px solid;
            }

             input::placeholder{
               text-align: center;
               opacity:1.0
             }
            
             .create{
                background-color: black;
                color: white;
                border:none;
                // padding: 10px 15px
             }

             input{
                padding:10px 15px
             }

             .loginhere{
                border: 2px solid;
             }
             
             .btn{
                display:flex;
                height :20px
             }

             .btn1,
             .btn2{
                background: none;
                border: none;
                cursor: pointer;
                border-bottom: 1px solid;
             }
            
        `}
      </style>
    </>
  );
};
