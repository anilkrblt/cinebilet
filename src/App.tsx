import logo from "./logo192.png"
import './App.css';
function App() {




  return (
    <>
      <div className='container-fluid bg-primary text-center p-5' >
        <div className="row">
          <nav className="navbar navbar-expand-sm bg-danger navbar-primary rounded-2 ">
            <div className="container-fluid ">


              <div className="col">
                <a className="navbar-brand hover-overlay hover-zoom hover-shadow ripple  text-white" href="#">
                  Anasayfa

                </a>
              </div>
              <div className="col">
                <a className="navbar-brand hover-overlay hover-zoom hover-shadow ripple  text-white" href="#">
                  Sinemalarımız

                </a>
              </div>
              <div className="col">
                <a className="navbar-brand " href="#">
                  <img src={logo} alt="Avatar Logo" style={{ width: "40px" }} className="rounded-pill" />

                </a>
              </div>
              <div className="col">
                <a className="navbar-brand  text-white" href="#">
                  Hakkımızda

                </a>
              </div>
              <div className="col">
                <a className="navbar-brand  text-white " href="#">
                  Kampanyalar

                </a>
              </div>
            </div>
          </nav>


        </div>
      </div>

      <div className="container mt-5 text-center">
        <div className="d-inline-flex p-3 bg-secondary text-white ">
          <span className="p-3">Vizyondakiler</span>
          <span className="p-3">Gelecek Program</span>
        </div>
      </div>
      <div className="container text-center">
        <div className="d-inline-flex p-3 bg-primary text-white ">

          <span className="p-3">Türler</span>
          <span className="p-3">Dil</span>
        </div>
      </div>

      <div className="container border d-flex flex-wrap px-5 py-3 bg-secondary">
        <div className="card" style={{ height:"400px", width: "300px" }}>
          <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div className="card" style={{ height:"400px", width: "300px" }}>
          <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div className="card" style={{ height:"400px", width: "300px" }}>
          <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div className="card" style={{ height:"400px", width: "300px" }}>
          <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div className="card" style={{ height:"400px", width: "300px" }}>
          <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div className="card" style={{ height:"400px", width: "300px" }}>
          <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
