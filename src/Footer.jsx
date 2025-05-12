const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-3 border-top">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            <svg className="bi" width="30" height="24" aria-hidden="true">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-light">© 2025 NewsMag, Inc</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
