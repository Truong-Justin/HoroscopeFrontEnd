import BannerPicture from './assets/horoscopeImg.svg';

// This component renders the banner for the web application
// that includes the app's title, description, and navigation links.
export function Banner() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">
            <a href="index.html" className="navbar-brand">Horoscope <span className="text-warning">App</span></a>
            <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="https://www.justintruong.studio" className="nav-link fw-bold text-light">Back To Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/Truong-Justin/HoroscopeFrontEnd" className="nav-link fw-bold text-light">Github Page</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://horoscopeapi-v6vga.ondigitalocean.app" className="nav-link fw-bold text-light">View The Api</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      <section className="bg-dark text-light p-4 text-center text-sm-start shadow-lg" id="parent">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <img className="img-fluid d-sm-none" id="horoscope-picture" src={BannerPicture} alt="BannerPicture" />
                <div className="py-5">
                    <h1>View Your <span className="text-warning">Horoscope </span>Here!</h1>
                    <p className="lead my-4" >
                        A simple horoscope application that is comprised of two components: a REST API made with Python and Flask, and a 
                        front-end component made with HTML/CSS and ReactJS. View this application on either desktop or mobile devices!
                    </p>
                    <div>
                    <a href="https://github.com/Truong-Justin" className="btn btn-sm btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-github align-top me-1" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 
                            1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 
                            1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        GitHub Profile
                        </a>
                        <a href="https://www.linkedin.com/in/justin-truong-93bb97232/" className="btn btn-sm btn-warning mx-2" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-linkedin align-top me-1" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 
                                0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 
                                1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        LinkedIn
                        </a>
                        <a href = "mailto: truongj1951@uhcl.edu" className="btn btn-sm btn-light" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" fill="currentColor" className="bi bi-envelope align-top me-1" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 
                                9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                        Email
                        </a>
                    </div>
                </div>
                <img className="img-fluid w-25 d-none d-sm-block ms-2" 
                src={BannerPicture}
                alt="BannerPicture" 
                />
            </div>
        </div>
      </section>
      </>
    )
  }