// src/components/About.tsx
import React from 'react';
import Navbar from './Navbar';

const Login: React.FC = () => {
  return (
    <div>
        <Navbar></Navbar>



    <section className="py-3 py-md-5 py-xl-8 bg-danger ">
      <div className="container" style={{margin: 100 }}>
        <div className="row">
          <div className="col-12">
            <div className="mb-5">
              <h2 className="display-5 fw-bold text-center">Giriş yap</h2>
              <p className="text-center m-0">
                Hesabınız yok mu <button className='btn btn-danger'>Kayıt ol</button>
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="row gy-5 justify-content-center">
              <div className="col-12 col-lg-5">
                <form action="#!">
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control border-0 border-bottom rounded-0"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control border-0 border-bottom rounded-0"
                          name="password"
                          id="password"
                          placeholder="Password"
                          required
                        />
                        <label htmlFor="password" className="form-label">
                          Şifre
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row justify-content-between">
                        <div className="col-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              name="remember_me"
                              id="remember_me"
                            />
                            <label
                              className="form-check-label text-dark"
                              htmlFor="remember_me"
                            >
                              Beni hatırla
                            </label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="text-end">
                            <a href="#!" className="link-secondary text-decoration-none text-dark">
                              Şifrenizi mi unuttunuz
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">
                          Giriş yap
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column">
                <div
                  className="bg-dark h-100 d-none d-lg-block"
                  style={{ width: '1px', opacity: '.1' }}
                ></div>
                <div
                  className="bg-dark w-100 d-lg-none"
                  style={{ height: '1px', opacity: '.1' }}
                ></div>
                <div>veya</div>
                <div
                  className="bg-dark h-100 d-none d-lg-block"
                  style={{ width: '1px', opacity: '.1' }}
                ></div>
                <div
                  className="bg-dark w-100 d-lg-none"
                  style={{ height: '1px', opacity: '.1' }}
                ></div>
              </div>
              <div className="col-12 col-lg-5 d-flex align-items-center">
                <div className="d-flex gap-3 flex-column w-100 ">
                  {/* Google Sign-in Button */}
                  <button className="btn btn-lg btn-warning">
                    {/* Google Icon */}
                    <span className="ms-2 fs-6">Google ile giriş yap</span>
                  </button>
                  {/* Facebook Sign-in Button */}
                  <button className="btn btn-lg btn-primary">
                    {/* Facebook Icon */}
                    <span className="ms-2 fs-6">Facebook ile giriş yap</span>
                  </button>
                  {/* Apple Sign-in Button */}
                  <button className="btn btn-lg btn-dark">
                    {/* Apple Icon */}
                    <span className="ms-2 fs-6">Apple ile giriş yap</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


export default SignIn;

    </div>
  );
}

export default Login;
    