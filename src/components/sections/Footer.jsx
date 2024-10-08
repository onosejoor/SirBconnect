import { useContext } from "react";
import Lists from "../snippets/List";
import Svg from "../snippets/Svg";
import { DarkThemeContext } from "../Context";
import { Link } from "react-router-dom";

function Footer({ routed }) {
  const { dark } = useContext(DarkThemeContext);
  return (
    <>
      <section id="footer">
        <footer className="footer">
          <div className="logoWrap">
            <Link to={"/"}>
              <img
                className="logo"
                src={
                  dark === "true" ? "/images/Logo2.png" : "/images/Logo1.png"
                }
                alt="SirB logo"
              />
            </Link>

            <p className="location">
              No 61 Clifford And Georgewilll Plaza, Choba, Port-Harcourt,
              River-State Nigeria
            </p>
          </div>

          <div className="foot">
            <h3 className="footHead">Quick links</h3>
            <div className="footLink">
              <ul>
                <Lists
                  class2="footer-link"
                  text="Home"
                  link={!routed ? "#" : "/"}
                />
                <Lists
                  class2="footer-link"
                  text="Services"
                  link={routed ? "/#services" : "#services"}
                />
                <Lists
                  class2="footer-link"
                  text="About"
                  link={routed ? "/#about" : "#about"}
                />
                <Lists class2="footer-link" text="Contact" link="#contact" />

                {/* <Lists
                  class2="footer-link"
                  text="Reviews"
                  link={routed ? "/#reviews" : "#reviews"}
                /> */}
              </ul>
            </div>
          </div>
          <div className="foot">
            <h3 className="footHead">Services</h3>
            <div className="footLink">
              <ul>
                <Lists
                  class2="footer-link"
                  text="Research Services"
                  link={"researches"}
                />
                <Lists
                  class2="footer-link"
                  text="Graphic designs"
                  link={"graphic-design"}
                />
                <Lists
                  class2="footer-link"
                  text="Scholarships"
                  link={"scholarships"}
                />

                <Lists
                  class2="footer-link"
                  text="Web Development"
                  link="web-dev"
                />
                <Lists
                  class2="footer-link"
                  text="NYSC"
                  link="nysc"
                />
              </ul>
            </div>
          </div>
          <div className="foot workingHours">
            <h3 className="footHead">Working Hours</h3>
            <div className="workHours">
              {" "}
              <b className="work">Weekdays</b>
              <p>8am - 6pm</p>
            </div>
            <div className="workHours">
              {" "}
              <b className="work">Weekends</b>
              <p>10am - 5pm</p>
            </div>
          </div>
          <div className="foot">
            <div id="svg-container">
              <Svg
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                  >
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
                  </svg>
                }
                link="#"
              />
              <Svg
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                  >
                    <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" />
                  </svg>
                }
                link="https://facebook.com/Sirbconnect"
              />
              <Svg
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                  >
                    <path d="M 43.753906 6.4023438 C 42.53621 6.3489969 41.294792 6.712898 40.271484 7.46875 L 37.525391 9.4960938 L 25 18.755859 L 12.591797 9.5839844 A 1.0001 1.0001 0 0 0 11.949219 9.3007812 L 12.199219 9.3007812 L 9.734375 7.4765625 C 8.7104042 6.7188363 7.4671493 6.3528895 6.2480469 6.40625 C 5.0289444 6.4596105 3.8349462 6.9314667 2.9082031 7.8457031 C 1.7309454 9.0063798 1 10.629831 1 12.410156 L 1 15.84375 A 1.0001 1.0001 0 0 0 1 16.138672 L 1 39.5 C 1 41.421188 2.5788117 43 4.5 43 L 12 43 A 1.0001 1.0001 0 0 0 13 42 L 13 25.373047 L 24.40625 33.804688 A 1.0001 1.0001 0 0 0 25.59375 33.804688 L 37 25.373047 L 37 42 A 1.0001 1.0001 0 0 0 38 43 L 45.5 43 C 47.421188 43 49 41.421188 49 39.5 L 49 16.119141 A 1.0001 1.0001 0 0 0 49 15.859375 L 49 12.410156 C 49 10.6517 48.290455 9.0357821 47.128906 7.8730469 C 47.095336 7.8394769 47.084086 7.83018 47.097656 7.84375 A 1.0001 1.0001 0 0 0 47.091797 7.8378906 C 46.165242 6.9256756 44.971603 6.4556905 43.753906 6.4023438 z M 43.644531 8.4003906 C 44.400835 8.4300436 45.134049 8.7168876 45.689453 9.2636719 C 45.708363 9.2823439 45.722171 9.2964424 45.712891 9.2871094 C 46.50934 10.084374 47 11.188613 47 12.410156 L 47 15.496094 L 39 21.408203 L 39 11 A 1.0001 1.0001 0 0 0 38.996094 10.898438 L 41.458984 9.078125 A 1.0001 1.0001 0 0 0 41.460938 9.078125 C 42.109578 8.598977 42.888228 8.3707375 43.644531 8.4003906 z M 6.3574219 8.40625 C 7.1145694 8.37661 7.8958927 8.6037105 8.5449219 9.0839844 L 11.003906 10.902344 A 1.0001 1.0001 0 0 0 11 11 L 11 21.408203 L 3 15.496094 L 3 12.410156 C 3 11.174482 3.5017577 10.068855 4.3125 9.2695312 C 4.8677569 8.7217677 5.6002743 8.4358895 6.3574219 8.40625 z M 37 12.371094 L 37 22.886719 L 25 31.755859 L 13 22.886719 L 13 12.373047 L 24.40625 20.804688 A 1.0001 1.0001 0 0 0 25.59375 20.804688 L 37 12.371094 z M 3 17.982422 L 11 23.896484 L 11 41 L 4.5 41 C 3.6591883 41 3 40.340812 3 39.5 L 3 17.982422 z M 47 17.982422 L 47 39.5 C 47 40.340812 46.340812 41 45.5 41 L 39 41 L 39 23.896484 L 47 17.982422 z" />
                  </svg>
                }
                link="#"
              />
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
