import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="ShippingBannerBody">
        <div className="ShippingBanner">
          <div className="BannerContent">
              <a className="BannerContentText">
                Enjoy complimentary standard shipping on all orders
              </a>
          </div>
        </div>
      </div>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light" style={{color: "wheat"}}>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Read
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Stores
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Search
              </a>
            </li>
          </ul>
          <span class="navbar-text">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cart
                </a>
              </li>
            </ul>
          </span>
        </div>
      </nav>
      <div style={{ height: 100 }}></div>
      <div className="row">
        <div className="col-3">
          <img
            className="AesopLogo"
            src="data:image/png;base64,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"
          ></img>
        </div>

        <div align="right" className="col-5">
          <img
            className="AesopImage"
            src="https://www.aesop.com/medias/Aesop-Body-Redemption-Body-Scrub-180mL-large.png?context=bWFzdGVyfGltYWdlc3w2NTYxNDJ8aW1hZ2UvcG5nfGltYWdlcy9oNzAvaDA1Lzg3OTc0MzkxNjQ0NDYucG5nfDhiMzBmOTE2NjBkZmFjOWE4NzM0ZjEwNmEyZTdkNjVhNjk1NzY4ZWJiZmQ3ZjE2M2NlNzU0MDIxOWZiNjJhMmQ"
          ></img>
          <p align="center">180mL</p>
        </div>

        <div align="left" className="productDetail col-4">
          <div>
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="collapse navbar-collapse" id="navbarText">
                <span class="navbar-text">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Body & Hand
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Body
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </nav>
          </div>
          <div>
            <h2>Redemption Body Scrub</h2>
          </div>
          <div>
            <p style={{ lineHeight: 1.7, paddingTop: 4 }}>
              A bracing blend of finely milled Pumice, Bamboo Stem and aromatic
              Pine Needle oil that sloughs away tired cells to leave skin
              polished and refreshed, perfectly prepared for hydration.
            </p>
          </div>
          <div>
            <svg height="5" width="400">
              <line
                x1="0"
                y1="0"
                x2="400"
                y2="0"
                style={{ stroke: "black", strokeWidth: 4 }}
              ></line>
            </svg>
          </div>
          <div>
            <h6>Skin Feel</h6>
            <div>Soft, smooth, refreshed</div>
          </div>
          <div>
            <svg height="5" width="400">
              <line
                x1="0"
                y1="0"
                x2="400"
                y2="0"
                style={{ stroke: "black", strokeWidth: 1 }}
              ></line>
            </svg>
          </div>
          <div>
            <h6>Aroma</h6>
            <div>Fresh, alpine, camphoric</div>
          </div>
          <div>
            <svg height="5" width="400">
              <line
                x1="0"
                y1="0"
                x2="400"
                y2="0"
                style={{ stroke: "black", strokeWidth: 1 }}
              ></line>
            </svg>
          </div>
          <div>
            <div className="row">
              <h6 className="col">Key Ingredients</h6>
              <div className="col"></div>
            </div>
            <div>Bamboo Stem, Sage Leaf, Pine Needle</div>
          </div>
          <div style={{ marginTop: 15 }}>
            <button type="button" class="btn btn-dark btn-lg btn-block">
              Add to your Cart - $260.00
            </button>
          </div>
        </div>
      </div>
      <div style={{ height: 200, marginTop: 100 }}>
        <section>
          <a href="/" style={{color: "black"}}>
            <h4>Book a video consultation</h4>
            <div>
              For assistance selecting the perfect gift, speak to one of our
              trained consultatnts.
            </div>
          </a>
        </section>
      </div>
      <div className="row">
        <div className="col">
          <img src="https://www.aesop.com/u1nb1km7t5q7/19AiYRb9ZOytRoIxJddvpT/a9844ac8faf475d78f345ce402f4f1d5/Aesop-PD-SecondModule-Body-Generic-Mobile-640x640px.jpg"></img>
        </div>
        <div className="col" style={{ marginTop: 120, marginLeft: 50 }}>
          <div align="left">
            <div>
              <p>How to use</p>
            </div>
            <div>
              <h2 style={{ width: 400 }}>
                Once or twice weekly, massage onto soaked skin from neck to toe,
                then rinse thoroughly.
              </h2>
            </div>
            <div>
              <svg height="5" width="400">
                <line
                  x1="0"
                  y1="0"
                  x2="400"
                  y2="0"
                  style={{ stroke: "black", strokeWidth: 4 }}
                ></line>
              </svg>
            </div>
            <div>
              <h6>Dosage</h6>
              <div>Desired Amount</div>
            </div>
            <div>
              <svg height="5" width="400">
                <line
                  x1="0"
                  y1="0"
                  x2="400"
                  y2="0"
                  style={{ stroke: "black", strokeWidth: 1 }}
                ></line>
              </svg>
            </div>
            <div>
              <h6>Texture</h6>
              <div>Opaque, fine-grain gel</div>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        className="SliderLeft"
        indicators={false}
        nextIcon={
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <button
              class="carousel-control-next-icon bg-dark btn btn-dark btn-lg h-25 w-25"
              aria-hidden="true"
            ></button>
            <span class="sr-only">Next</span>
          </a>
        }
        prevIcon={
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <button
              class="carousel-control-prev-icon bg-dark btn btn-dark btn-lg h-25"
              aria-hidden="true"
            ></button>
            <span class="sr-only">Previous</span>
          </a>
        }
        slide={false}
      >
        <Carousel.Item>
          <div className="row">
            <div align="left" className="col">
              <h2>Accompany with</h2>
              <p>
                Refreshingly aromatic, Geranium Leaf Body Balm replenishes
                moisture and softens skin. Follow daily with Déodorant and a
                bracing gargle of Mouthwash. To finish, spray Tacit on wrists
                and collarbone and relish enduring notes of crisp green and
                citrus.
              </p>
            </div>
            <div className="col">
              <img
                className="d-block w-100 ItemImage"
                src="https://www.aesop.com/u1nb1km7t5q7/37mkiTpDQ7ax21YTieiC5S/32b7819c4b9a37dd576fe6e398dc957d/Large-PNG-Aesop-Body-Geranium-Leaf-Body-Balm-120mL-medium.png"
                alt="First slide"
              />
              <a href="/" style={{color: "black"}}>
                <a href="/" style={{color: "black"}}>Geranium Leaf Body Balm</a>
                <p style={{color: "black"}}>Refreshingly aromatic, fresh and green</p>
              </a>
            </div>
            <div className="col">
              <img
                className="d-block w-100 ItemImage"
                src="https://www.aesop.com/u1nb1km7t5q7/4XgyafNHCJchXlZodSnilB/fb298f0b6aa8621a3c34f29008c7fdd2/Aesop-Personal-Care-Deodorant-50mL-Large-782x796px.png"
                alt="First slide"
              />
              <a style={{color: "black"}} href="/">
                <a style={{color: "black"}} href="/">Deodorant</a>
                <p style={{color: "black"}}>Woody, herbaceous, erathy aromatics</p>
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col">
              <img
                className="d-block w-100 ItemImage"
                src="https://www.aesop.com/u1nb1km7t5q7/37mkiTpDQ7ax21YTieiC5S/32b7819c4b9a37dd576fe6e398dc957d/Large-PNG-Aesop-Body-Geranium-Leaf-Body-Balm-120mL-medium.png"
                alt="First slide"
              />
              <a style={{color: "black"}} href="/">
                <a style={{color: "black"}} href="/">Geranium Leaf Body Balm</a>
                <p style={{color: "black"}}>Refreshingly aromatic, fresh and green</p>
              </a>
            </div>
            <div className="col">
              <img
                className="d-block w-100 ItemImage"
                src="https://www.aesop.com/u1nb1km7t5q7/4XgyafNHCJchXlZodSnilB/fb298f0b6aa8621a3c34f29008c7fdd2/Aesop-Personal-Care-Deodorant-50mL-Large-782x796px.png"
                alt="First slide"
              />
              <a style={{color: "black"}} href="/">
                <a style={{color: "black"}} href="/">Deodorant</a>
                <p style={{color: "black"}}>Woody, herbaceous, erathy aromatics</p>
              </a>
            </div>
            <div className="col">
              <img
                className="d-block w-100 ItemImage"
                src="https://www.aesop.com/u1nb1km7t5q7/2iHpP2YkANQ2RAW9udvjzy/f399bb75a2c8e221b81d9c3c214f1ebd/Aesop-Personal-Mouthwash-500mL-large.png"
                alt="First slide"
              />
              <a style={{color: "black"}} href="/">
                <a style={{color: "black"}} href="/">Mouthwash</a>
                <p style={{color: "black"}}>Maintain impeccable oral hygiene</p>
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col">
              <img
                className="d-block w-100 ItemImage"
                src="https://www.aesop.com/u1nb1km7t5q7/4XgyafNHCJchXlZodSnilB/fb298f0b6aa8621a3c34f29008c7fdd2/Aesop-Personal-Care-Deodorant-50mL-Large-782x796px.png"
                alt="First slide"
              />
              <a style={{color: "black"}} href="/">
                <a style={{color: "black"}} href="/">Deodorant</a>
                <p style={{color: "black"}}>Woody, herbaceous, erathy aromatics</p>
              </a>
            </div>
            <div className="col">
              <img
                className="d-block w-100 ItemImage"
                src="https://www.aesop.com/u1nb1km7t5q7/2iHpP2YkANQ2RAW9udvjzy/f399bb75a2c8e221b81d9c3c214f1ebd/Aesop-Personal-Mouthwash-500mL-large.png"
                alt="First slide"
              />
              <a style={{color: "black"}} href="/">
                <a style={{color: "black"}} href="/">Mouthwash</a>
                <p style={{color: "black"}}>Maintain impeccable oral hygiene</p>
              </a>
            </div>
            <div className="col">
              <img
                className="d-block w-100 ItemImage"
                src="https://www.aesop.com/u1nb1km7t5q7/61UwjoBL7R6dHstLKSZIKx/dd5dd3a75b6fab0df57b3486354cee5f/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Large_684x668px.png"
                alt="First slide"
              />
              <a style={{color: "black"}} href="/">
                <a style={{color: "black"}} href="/">Tacit Eau de Parfum</a>
                <p style={{color: "black"}}>Crisp green citrus fragrance</p>
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="footer">
        <div className="footerContent">
        <div className="row">
          <div className="col-3">
            <input placeholder="Email Address"></input>
            <p>
              Subscribe to receive communications about Aesop products,
              services, stores, events and matters of cultural interest.
            </p>
          </div>
          <div className="col-3">
            <p>Orders and support</p>
            <div>
              <svg height="5">
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  style={{ stroke: "white", strokeWidth: 3 }}
                ></line>
              </svg>
            </div>
            <div>
              <a href="/">Contact Us</a>
            </div>
            <div>
              <a href="/">FAQs</a>
            </div>
            <div>
              <a href="/">Delivery and Returns</a>
            </div>
            <div>
              <a href="/">Terms and Conditions</a>
            </div>
          </div>

          <div className="col-3">
            <p>Services</p>
            <div>
              <svg height="5">
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  style={{ stroke: "white", strokeWidth: 3 }}
                ></line>
              </svg>
            </div>
            <div>
              <a href="/">Live Assistance</a>
            </div>
            <div>
              <a href="/">Corporate gifts</a>
            </div>
            <div>
              <a href="/">Facial Assignments</a>
            </div>
          </div>
          <div className="col-3">
            <p>Location preferences</p>
            <div>
              <svg height="5">
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  style={{ stroke: "white", strokeWidth: 3 }}
                ></line>
              </svg>
            </div>
            <div>
              <p>
                Shipping: <a href="/">Hong Kong(S.A.R)</a>
              </p>
            </div>
            <div>
              <p>
                Language: <a href="/">E.N</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: 50}}>
          <div className="col-3">
            <p>Sustainability</p>
            <div>
              <svg height="5">
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  style={{ stroke: "white", strokeWidth: 3 }}
                ></line>
              </svg>
            </div>
            <p>
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation. Learn about our rinse and return
              programme
            </p>
          </div>
          <div className="col-3">
            <p>About</p>
            <div>
              <svg height="5">
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  style={{ stroke: "white", strokeWidth: 3 }}
                ></line>
              </svg>
            </div>
            <div>
              <a href="/">Our Story</a>
            </div>
            <div>
              <a href="/">Foundation</a>
            </div>
            <div>
              <a href="/">Careers</a>
            </div>
            <div>
              <a href="/">Privacy Policy</a>
            </div>

            <div>
              <a href="/">Accessibility</a>
            </div>
          </div>

          <div className="col-3">
            <p>Social Media</p>
            <div>
              <svg height="5">
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  style={{ stroke: "white", strokeWidth: 3 }}
                ></line>
              </svg>
            </div>
            <div>
              <a href="/">Instagram</a>
            </div>
            <div>
              <a href="/">Twitter</a>
            </div>
            <div>
              <a href="/">LinkedIn</a>
            </div>
            <div>
              <a href="/">WeChat</a>
            </div>
            <div>
              <a href="/">Weibo</a>
            </div>
          </div>
          <div className="col"></div>
        </div>
        
        </div>
        
      </div>
    </div>
  );
}

export default App;
