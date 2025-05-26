const DemoLoginPage: React.FC = () => {
  return (
    <div>
      <section className="section-login">
        <div className="row">
          <div className="login">
            <div className="login__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">InputField Demo</h2>
                </div>
                <div className="form__group">
                  <input
                    id="name"
                    type="text"
                    className="form__input"
                    placeholder="Full Name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    id="email"
                    type="email"
                    className="form__input"
                    placeholder="Email Address"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                </div>
                <div className="form__group">
                  <div className="form__radio-group u-margin-bottom-medium">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="small"
                      name="size"
                    />
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Small tour group
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                    />
                    <label htmlFor="large" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Large tour group
                    </label>
                  </div>
                </div>
                <div className="form__group">
                  <button className="btn btn--green">Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoLoginPage;
