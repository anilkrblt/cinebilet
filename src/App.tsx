import logo from "./logo.png";
import "./App.css";
import { data } from "./dummy_data/dummy_data";
function App() {
  // git clone [url] --branch [branch] --single-branch

  return (
    <>
      <div className="container-fluid text-center p-5" >
        <div className="row">
          <nav className="navbar navbar-expand-sm bg-danger fixed-top p-3">
            <div className="container ">
              <div className="col">
                <a
                  className="navbar-brand hover-overlay hover-zoom hover-shadow ripple  text-white"
                  href="#"
                >
                  <button type="button" className="btn btn-outlined-primary">
                    Anasayfa
                  </button>
                </a>
              </div>
              <div className="col">
                <a
                  className="navbar-brand hover-overlay hover-zoom hover-shadow ripple  text-white"
                  href="#"
                >
                  <button type="button" className="btn btn-outlined-primary">
                    Sinemalarımız
                  </button>
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
                  <button type="button" className="btn btn-outlined-primary">
                    Hakkımızda
                  </button>
                </a>
              </div>
              <div className="col">
                <a className="navbar-brand  text-white " href="#">
                  <button type="button" className="btn btn-outlined-primary">
                    Kampanyalar
                  </button>
                </a>
              </div>
              
                <a className="navbar-brand  text-white " href="#">
                  <button type="button" className="btn btn-outline-primary">
                    Giriş Yap
                  </button>
                </a>
              
            </div>
          </nav>
        </div>
      </div>

      <div className="container-fluid mt-5 text-center">
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

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
              >
                Türler
              </a>

              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    Korku
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Aksiyon
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
              >
                Diller
              </a>

              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    Türkçe
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    İngilizce
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="tab-content ">
            <div id="home" className="container tab-pane active">
              <br />
              <h3 className="lead display-3 text-white">Vizyondakiler</h3>
              <div className="container border d-flex flex-wrap py-3 bg-secondary " >
                {data.map((obje: any) => {
                  
                  return (
                    <>
                      <div
                        className="card m-auto mt-2"
                        style={{ height: "750px", width: "300px" }}
                      >
                        <div className="card-body">
                          <h4 className="card-title">{obje.movieName}</h4>

                          <img
                            className="card-img-top"
                            src={obje.coverImg}
                            alt="Card image"
                          />
                          <hr />
                          <p>Korku, Aksiyon</p>
                          <hr />
                          <p>NİSAN: 11, 12, 13 </p>
                          <a href="#" className="btn btn-primary">
                            Bilet Al
                          </a>
                        </div>
                        <div className="card-footer">
                          <p className="card-text">
                            <legend className="lead ">Bugünkü Seanslar</legend>
                            <button
                              type="button"
                              className="btn btn-outline-primary m-1"
                            >
                              12:30
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary m-1"
                            >
                              13:30
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary m-1"
                            >
                              14:30
                            </button>
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div id="menu1" className="container tab-pane fade">
              <br />
              <h3 className="text-white display-3">Gelecek Filmler</h3>
              <p className="text-white display-4">Yakında...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center"></div>
    </>
  );
}

export default App;
