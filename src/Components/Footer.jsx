export const Footer=()=>{
    return<>

<div className="storeDiv">
              <div className="div5">
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/Find_Store.svg" alt="" />
                </div>
                <div style={{margin: "20px"}}>
                 <h3 className='m0'>Stores</h3>
                 <p className='m0'>Find your local store</p>
                </div>
              </div>

              <div className="div6">
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/Track_order.svg" alt="" />
                </div>
                <div style={{margin: "20px"}}>
                  <h3 className='m0'>Track order</h3>
                  <p className='m0'>Track your order in real time</p>
                </div>
              </div>

              <div className="div7">
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0910/0818/files/Support.svg" alt="" />
                </div>
                <div style={{margin: "20px"}}>
                <h3 className='m0'>Support</h3>
                <p className='m0'>Talk to our online support</p>
                </div>
              </div>
            </div>

        <div className="footerdiv">
            <div className="footer1">
                <h1>Fragrance Outlet</h1>
                <p><strong>Fragrance Outlet </strong> is one of the nation’s largest retailers of genuine designer fragrances and related accessories. We also pride ourselves on being the leading authority on fragrances. Our stores offer the widest selection of designer perfume and fragrances at the most affordable prices.</p>
                <div className="socialicon">
                <img style={{ height: "50px"}} src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/logo-facebook-512.png" alt="" />
                <img style={{ height: "39px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7a86Rb-lfd5NGUH7bd8UDWJ7DoU7Fyf00cw&usqp=CAU" alt="" />
                </div>
            </div>
            <div className="footer2">
              <h3>Products</h3>
              <p>Women's Fragrances</p>
              <p>Men's Fragrances</p>
              <p>Gift Sets</p>
              <p>Skincare</p>
            </div>
            <div className="footer3">
                <h3>Your Account</h3>
                <p>My Account</p>
                <p>Order Status</p>
                <p>My Wish List</p>
                <p>Contact Us</p>
                <p>Blog</p>
            </div>
            <div className="footer4">
                <h3>Help + Info</h3>
                <p>About Us</p>
                <p>Frequently Asked Questions (FAQ)</p>
                <p>Career</p>
                <p>Store Locator</p>
                <p> Privacy Policy</p>
                <p>Shipping & Processing</p>
                <p>Terms of Service</p>
                <p>Return Policy</p>
                <p>Accessibility Statement</p>
            </div>
        </div>

            <style>{`
            .storeDiv{
                margin-top: 150px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 20px;
                margin-right: 20px;
                border-bottom: 1px solid #aea5a5;
                padding-bottom: 30px;
                margin-bottom: 20px;
              }
      
              .div5,
              .div6,
              .div7{
                display: flex;
          justify-content: center;
          align-items: center;
              }

              .footerdiv{
                display: flex;
                justify-content: space-between;
                align-items: start;
                width: 100vw;
              }

              .footer1,
              .footer2,
              .footer3, 
              .footer4{
                width: 25vw;
              }
            .footer1{
                padding-left: 20px;
            }
            .footer2{
                padding-left: 60px;
            }
            .socialicon{
                display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -222px;
            }

            `}</style>
    </>
}