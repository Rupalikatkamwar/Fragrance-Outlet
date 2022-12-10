import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { useNavigate } from 'react-router-dom';

function App() {

const navigate=useNavigate()

  return (
    <div className="App">
      <div className="mainDiv">


     <div>
      <NavBar/>
      


       <div className="banner"/> 

        <div><h2>Best Selling Fragrances</h2>
        <h3>Explore the best selling perfumes of all times</h3>
        </div>
          <div className="productdiv">           
          <div className="child2">
              <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/FO_HP_Clinique_replacement_4.jpg?v=1669128186&width=560" alt="" />
             </div>

             <div className="child1">
             <h4>Mix and Match your Favourite Scents</h4>
              <h1>BOGO 50</h1>
              <p>For a limited time, save big on select products! For each item, add either the same item or another of equal or lesser value from the BOGO collection page at 50% discount. For biggest value, mix and match your products found in the link below.</p>
              <button className='btn'>Shop Now</button>
             </div>             
          </div>  

          <div className="parentdiv">
            <div className='div1'>
            <div>
              <img className='img1' src="https://cdn.shopify.com/s/files/1/0910/0818/files/noun_Shipping_1742677_2x_3c42ea60-8e5a-499e-9042-8bae8a4e1a66.png?v=1650611453" alt="" />
            </div>
               <div>
                <h2>Free Shipping</h2>
                <p>Enjoy Free U.S. Shipping on orders over $50 (Excludes Hawaii & Alaska)</p>
               </div>
            </div>

          <div className="div2">
            <div>
              <img className='img1' src="https://cdn.shopify.com/s/files/1/0910/0818/files/Path_122_2x_822c91b9-3bf3-48dd-8b25-24793c002347.png?v=1650611521" alt="" />
            </div>
            <div>
              <h2>100% Authentic</h2>
              <p>Always Authentic, Always on Sale
Over 100 Stores Nationwide.</p>
            </div>
          </div>

          <div className="div3">
            <div>
              <img className='img1' src="https://cdn.shopify.com/s/files/1/0910/0818/files/Image_40_2x_5d03c7c3-2770-451b-bffe-0de7e78beab1.png?v=1650611642" alt="" />
            </div>

            <div>
              <h2 style={{margin:2}}>Top Rated </h2>
               <div className='ig1'>
                <img className='image' src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" alt="" />
                <h5>4.6/5</h5>
                </div> 
                 <div className='ig2'>
                  <img className='image1' src="https://cdn.shopify.com/s/files/1/0910/0818/files/Image_40_2x_5d03c7c3-2770-451b-bffe-0de7e78beab1.png?v=1650611642" alt="" />
                  <h6>Trustpilot</h6>
                 </div>
                 </div>
               </div>

               <div className="div4">
                <div>
                  <img className='img1' src="https://cdn.shopify.com/s/files/1/0910/0818/files/Image_228_0583e692-fb24-470a-88ec-8f89c2e9cafc.png?v=1650611691" alt="" />
                </div>
                <div><h2>Buy Now – Pay Later</h2>
                <p>4 Interest-free payments available through Klarna on purchases over $35</p></div>
               </div>
              </div>

              <div className="banner2" onClick={()=>{
                    navigate("/productdetail")
                  }}>
             
                  <div className='sizediv' >
                  <img className='img2' src="https://cdn.shopify.com/s/files/1/0910/0818/files/FO_Lower_Exclusive_f775ce4f-352c-4194-9082-2d3f8636288b_1200x_crop_center.jpg?v=1669216353" alt="" />
                  </div>
                  <div className='sizediv'>
                  <img className='img2' src="https://cdn.shopify.com/s/files/1/0910/0818/files/FO_Lower_Gifts_1200x_crop_center.jpg?v=1669147983" alt="" />

                  </div>
               <div className='sizediv'>
               <img className='img2' src="https://cdn.shopify.com/s/files/1/0910/0818/files/FO_Lower_beauty_1200x_crop_center.jpg?v=1669147983" alt="" />

               </div>
                
              </div>

              <div>
                <h2>Shop all Best Selling Fall Fragrances</h2>
              </div>

              <div className="productdiv1">
              <div className="child2">
                  <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/ur-landing.jpg?v=1668615565&width=560" alt="" />
                 </div>
                  <div className="child1">
                    <h5>An Exclusive Addition To Our Family</h5>
                    <h1>UR THE KING & UR THE QUEEN</h1>
                    <p>A fragrance that celebrates who you are, recognizing the exceptionalism that each of us possesses.
<button className='btn'>Learn More</button>
</p>
                  </div>
                 
             
              </div>

              <div><h1>From the Blog</h1></div>
            <div className="blogdiv">
              <div className="fregrance" style={{marginTop:"-27px"}}>
                <img className='img2' src="https://cdn.shopify.com/s/files/1/0910/0818/articles/7844ffafd800ca3e9a2f814868c912ef.jpg?v=1668638636" alt="" />
                <h2>Best Fragrances for Cold Weather</h2>
                <p>Best Fragrances for Cold Weather Have you ever noticed how you immediately feel comfortable when you smell something from your childhood? Maybe the smell of hot chocolate takes you back...
</p>
                <div className='btn1'><button className='btn'>Read more</button></div>
              </div>
              <div className="perfume" style={{marginTop:'18px'}}>
                <img className='img2' src="https://cdn.shopify.com/s/files/1/0910/0818/articles/8f506c20c6b0440e9398e0dfaeadd147.jpg?v=1668624890" alt="" />
              <h2>What’s the Difference Between Cologne and Perfume?</h2>
              <p>What’s the Difference Between Cologne and Perfume? To most, the difference between cologne and perfume is simply their target audience, with perfume being marketed towards women and cologne toward men....</p>
              <div className='btn1'>
              <button className='btn'>Read more</button>
              </div>
              </div>
              <div className="scent">
                <img className='img2' src="https://cdn.shopify.com/s/files/1/0910/0818/articles/1ba82e40d9229fa32bdeb9d5e8070997.jpg?v=1668637357" alt="" />
                  <h2>2 Fabulous Niche Scents For Women</h2>
                  <p>2 Fabulous Niche Scents For Women Niche scents are superior, bold, and most importantly, high-quality. So, what is a niche scent, exactly? A niche scent is an exclusive fragrance that...</p>
                 <div className='btn1'> <button className='btn'>Read more</button>
                 </div>
                  </div>
                  
            </div>

            <div className="productdiv3">
              <div className="child4">
                <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/lower_image_copy.jpg?v=1668012170&width=533" alt="" />
              </div>
              <div className="child3">
              <h1>Save 5% Off Your Purchase & Be the first to know
about our sales and discounts</h1>
<h4>Our email subscribers get early access to new launches, promotions and more.</h4>
<div>
<input type="text" placeholder='Please Enter the Email Address' style={{borderRadius: 'initial', padding: "10px 10px"}}/>
<button className='btn2'>Subscribe</button>
</div>
              </div>
            </div>

           <Footer/>
           <div className="logoDiv">
  <div>
    <img src="https://www.pngitem.com/pimgs/m/42-421398_trustpilot-logo-png-transparent-png.png" alt="" style={{height: "120px"}} />
    <p className="mo">TrustScore <strong>4.6</strong>|<strong>6,552</strong> reviews</p>
    <p>ALSO OF INTEREST:</p>
  </div>
  <div style={{marginTop: "180px"}}><p>Jo Malone Cologne & Fragrances     Tom Ford Perfumes and Colognes</p>
    <p>Dior Perfumes and Colognes - Fragrance Outlet</p>
  </div>
  <div style={{marginTop: "70px"}}>
    <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/icon--klarna.png?v=7133510224733580434" alt="" style={{height: "40px", padding: "5px"}} />
    <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/icon--paypal-fill.svg?v=1669441468581032255" alt="" style={{height: "40px", padding: "5px"}} />
  <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/icon--visa-fill.svg?v=9976654573666207885" alt="" style={{height: "40px", padding: "5px"}} />
  <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/icon--mastercard-fill.svg?v=7956066576063288951" alt="" style={{height: "40px", padding: "5px"}} />
  <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/icon--discover-fill.svg?v=7679577960051490125" alt="" style={{height: "40px", padding: "5px"}} />
  </div>  
</div>

              </div>


                    
      </div>

      <style>
        {`
        
        input{
          border: none;
          background: #eae3e3;
          border-radius: 20px;
          width: 300px;
          height: 30px;
          padding: 5px 5px;
        }

        .input::placeholder{
          padding-left: 5px;
        }

        .banner{
          width:100vw;
          height:70vh;
          background:url("https://cdn.shopify.com/s/files/1/0910/0818/files/TFO_11-30-2022_Cyber_Week_Continues__WEB_Banner_1500x.jpg?v=1669823498");
        }

        .productdiv{
          background-color: #b3dbd6;
          display: flex;
          justify-content: space-between;
          height: 70vh;
          align-items: center;
          margin-top: 160px;
        }

        .productdiv1{
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f7edee;
          height: 70vh;
          margin-top: 160px;
        }

        .productdiv3{
          display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #05490f;
    margin-top: 170px;
        }


        .child1{
          width:400px
          
        }

        .child2{
          margin-top: -110px;
        }

        .btn{
          background :none;
          border:none;
          cursor:pointer;
          border-bottom:1px solid;
        }

        .image{
          height: 20px;
        }

        .image1{
          height: 17px;
        }

        .parentdiv{
          display: flex;
          height :100wh;
          padding:100px;
        }

        .div1,
        .div2,
        .div3,
        .div4{
          display: flex;
    align-items: center;
    justify-content: center;
    width: 25vw;
    padding : 5px;
        }
        
        .img1{
          height :40px;
          width :40px;
        }

        .ig1,
        .ig2{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
        }

       .banner2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
       }

        .sizediv{
          width:33%
        }

        .img2{
          width:100%
        }

        .blogdiv{
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100vw;
        }

        .fregrance,
        .perfume,
        .scent{
          width: 30%;
        }

        .btn1{
          text-align: start;
        }
        .btn2{
          background: black;
    border: none;
    cursor: pointer;
    color: white;
    padding: 18px  70px;        }

        .child3{
          width: 710px;
          color: white;
          font-size: larger;
        }
        
        .child4{
          margin-top: -32px;
    margin-bottom: -50px;
        }

        .logoDiv{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 50px;
        }

        `}
      </style>
      
    </div>


  );
}

export default App;
