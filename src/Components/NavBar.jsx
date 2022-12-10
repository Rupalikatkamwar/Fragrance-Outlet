import { useNavigate } from 'react-router-dom';

export const NavBar=()=>{

    const navigate = useNavigate()

    return<>
        <div className="maindiv">
            <div className="navbar">
               <div className='justify'>
               <div className='navheight'>
                <img className="adjustIcon" src="https://static.thenounproject.com/png/213081-200.png" alt="" />
                <h5 className='m0'>Track Order</h5>
                </div>
                <div className="navheight"><img className='adjustIcon' src="https://www.iconpacks.net/icons/2/free-location-icon-2952-thumb.png" alt="" />
                <h5 className='m0'>Find A Store</h5>
                </div>
               </div>
                <div className='justify'>
                <div className="navheight">
                    <img className='adjustIcon' src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png" alt="" />
                <div className='btn'>
                <button className='btn1' onClick={()=>{
         navigate("/signup")
        }}>SignUp</button>
        <span>/ </span>
<button className='btn3' onClick={()=>{
  navigate("/login")
}}>Login</button>
                </div>
                </div>
                <div className="navheight">
                <img className='adjustIcon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvIf4oeKbMoFjMyQh1Fit-CzxUUiwwW0Afw&usqp=CAU" alt="" />
                <h5 className='m0'>Wishlist</h5>
                </div>
              <div className="navheight">
              <img className='adjustIcon' src="https://cdn-icons-png.flaticon.com/512/118/118096.png" alt="" />
                <h5 className='m0'>Shopping Bag</h5>
              </div>
                </div>
            </div>
   

            <div className="homepage">
        <div className='justify'>
          <h5>Women's</h5>
          <h5>Men's</h5>
          <h5>Exclusive</h5>
          <h5>Gifts</h5>
          <h5>Clearance</h5>
          <h5>shop by Brand</h5>
          <h5>Offers</h5>
        </div>
        <div className='justify'>
          <input className='input1' type="text" placeholder='Search'/>
        </div>
      </div>

        </div>



<style>
    {`

     .homepage{
        display: flex;
        justify-content: space-between;
        align-items: center;
       padding:0px 15px;

      }  

        .navbar{
            display: flex;
justify-content: space-between;
align-items: center;
// gap: 10px;
padding: 18px 15px;
border-bottom: 1px solid #aea5a5;

        }
        .navheight{
            height: 100%
        }

        .btn1,
        .btn3{
            background:none;
            border:none;
            cursor :pointer;
            // border-bottom: 1px solid; 
        }

        .justify{
            display: flex;
            gap : 10px;
        }

        .adjustIcon{
            height: 30px;
            width: 30px;
        }

        .input1{
            border: none;
    background: #eae3e3;
    border-radius: 20px;
    width: 300px;
    height: 30px;
    padding: 5px 5px;
        }

    `}
</style>


        </>
}
