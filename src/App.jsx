import Image from "./assets/react_image.jpg";
import "./App.css";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="main_div">
        {/* navbar start here */}
        <div className="navbar">
          <div className="logo">
            <h2>LOGO</h2>
          </div>
          <div className="navlinks">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
              <li>
                <button>Login</button>
              </li>
            </ul>
          </div>
        </div>

        {/* navbar ends here */}

        {/* hero section is start here */}

        <div className="Hero_section">
          <div className="Hero_section_content">
            <h2>WE PROVIDE FAST FOOD</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              ea enim. Ea corporis sequi non perspiciatis assumenda labore
              mollitia dolor iste eius ipsam! Sint, soluta. Nihil magnam
              molestiae fugiat esse?
            </p>
            <button>Order Now</button>
            <button>Book Us </button>
          </div>
          <div className="Hero_Section_form">
            <form action="">
              <input type="text" placeholder="Enter food name" />
              <input type="text" placeholder="Enter Address ..." />
              <input type="Number" placeholder="enter Quantity" />
              <button>ORDER</button>
            </form>
          </div>
        </div>

        {/* hero section ends here */}
      </div>
    </>
  );
}

export default App;
