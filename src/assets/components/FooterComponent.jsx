import { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <footer className="bg-light text-center fixed-bottom">
        <div className="container pt-4">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline mb-4">
                    <input type="email" className="form-control" placeholder={this.props.placeholder} />
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div className="text-center p-3">
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
