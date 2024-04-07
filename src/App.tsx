import logo from "./logo192.png";
import "./App.css";
function App() {
  // git clone [url] --branch [branch] --single-branch

  return (
    <>
      <div className="container-fluid bg-primary text-center p-5">
        <div className="row">
          <nav className="navbar navbar-expand-sm bg-danger navbar-primary rounded-2 ">
            <div className="container-fluid ">
              <div className="col">
                <a
                  className="navbar-brand hover-overlay hover-zoom hover-shadow ripple  text-white"
                  href="#"
                >
                  Anasayfa
                </a>
              </div>
              <div className="col">
                <a
                  className="navbar-brand hover-overlay hover-zoom hover-shadow ripple  text-white"
                  href="#"
                >
                  Sinemalarımız
                </a>
              </div>
              <div className="col">
                <a className="navbar-brand " href="#">
                  <img
                    src={logo}
                    alt="Avatar Logo"
                    style={{ width: "40px" }}
                    className="rounded-pill"
                  />
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
        

        <div className="container mt-3">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#home">
                Vizyondakiler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#menu1">
                Gelecek Filmler
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="home" className="container tab-pane active">
              <br />
              <h3>Vizyondakiler</h3>
            </div>
            <div id="menu1" className="container tab-pane fade">
              <br />
              <h3>Gelecek Filmler</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="d-flex p-3 bg-primary text-white justify-content-end ">
          <span className="p-3">Türler</span>
          <span className="p-3">Dil</span>
        </div>
      </div>

      <div className="container border d-flex flex-wrap px-5 py-3 bg-secondary">
        <div className="card" style={{ height: "400px", width: "300px" }}>
          <img
            className="card-img-top"
            src="img_avatar1.png"
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
        <div className="card" style={{ height: "400px", width: "300px" }}>
          <img
            className="card-img-top"
            src="img_avatar1.png"
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
        <div className="card" style={{ height: "400px", width: "300px" }}>
          <img
            className="card-img-top"
            src="img_avatar1.png"
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
        <div className="card" style={{ height: "400px", width: "300px" }}>
          <img
            className="card-img-top"
            src="img_avatar1.png"
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
        <div className="card" style={{ height: "400px", width: "300px" }}>
          <img
            className="card-img-top"
            src="img_avatar1.png"
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
        <div className="card" style={{ height: "400px", width: "300px" }}>
          <img
            className="card-img-top"
            src="img_avatar1.png"
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
