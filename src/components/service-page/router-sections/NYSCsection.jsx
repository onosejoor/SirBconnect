import { useContext } from "react";
import HeaderCard from "../../snippets/HeaderCard";
import NyscServiceCard from "../../snippets/NYSCServiceCard";
import { DarkThemeContext } from "../../Context";

export default function NYSCsection() {
  const { dark } = useContext(DarkThemeContext);
  return (
    <>
      <section id="nyscHeader">
        <img className="nyscBackgroung" src="/images/Router/nysc/nysc.jpeg" alt="background" />
        {" "}
        <HeaderCard
          text="Serving with Purpose, Impacting Communities"
          top2="CBO Accredited"
          class="nyscHeader"
        />
      </section>

      <section id="nyscAbout">
        <div className="nyscAboutCon">
          <img src="/images/Router/nysc/help.webp" alt="" />

          <div className="nyscAboutTextCon">
            <h3>Serve with purpose, impact lives.</h3>
            <p className="nyscAboutText">
              At SirBconnect, we’re your streamlined gateway to hassle-free NYSC
              registration. Our efficient process ensures you meet all
              requirements without the paperwork headache. Whether you’re a
              fresh graduate or a returning corps member, our expert team guides
              you every step of the way.{" "}
            </p>
          </div>
        </div>
        <div className="nyscAboutCon nysc2">
          <img src="/images/Router/nysc/unity.png" alt="" />

          <div className="nyscAboutTextCon">
            <h3>Unity</h3>
            <p className="nyscAboutText">
              Join our network of fresh graduates, seasoned corps members, and
              alumni. Share experiences, swap stories, and build lasting
              friendships. NYSC isn’t just about paperwork; it’s about
              connecting hearts across Nigeria.
            </p>
          </div>
        </div>
      </section>

      <section id="goal">
        <h3 className="top margin">How We Can Help</h3>
        <div className="nyscServiceContainer">
          <NyscServiceCard
            header={"Cyber Cafe Services"}
            text={
              "SirBconnect is CBO accredited, which assists NYSC registrants with online registration processes, ensuring eligibility and proper documentation"
            }
            src={"/images/Router/nysc/research.png"}
          />
          <NyscServiceCard
            header={"Relocation Assistance"}
            text={
              "For those seeking relocation within the NYSC scheme, SirBconnect can provide guidance on the process. This includes understanding the criteria for relocation and assisting with necessary paperwork."
            }
            //   src={"/images/Router/nysc/relocation.png"}
            svg={
              <svg
                fill={dark === "false" ? "#fff" : "#000"}
                className="illu"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 395.71 395.71"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            }
          />
          <NyscServiceCard
            header={"Document Verification Assistance"}
            text={
              "SirBconnect can assist with verifying and organizing essential documents required for NYSC registration. Ensuring that all your paperwork is in order is crucial for a smooth process."
            }
            // src={"/images/Router/nysc/research.png"}
            svg={
              <svg
                fill={dark === "false" ? "#fff" : "#000"}
                className="illu"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 231.306 231.306"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                enableBackground="new 0 0 231.306 231.306"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M229.548,67.743L163.563,1.757C162.438,0.632,160.912,0,159.32,0H40.747C18.279,0,0,18.279,0,40.747v149.813 c0,22.468,18.279,40.747,40.747,40.747h149.813c22.468,0,40.747-18.279,40.747-40.747V71.985 C231.306,70.394,230.673,68.868,229.548,67.743z M164.32,19.485l47.5,47.5h-47.5V19.485z M190.559,219.306H40.747 C24.896,219.306,12,206.41,12,190.559V40.747C12,24.896,24.896,12,40.747,12H152.32v60.985c0,3.313,2.687,6,6,6h60.985v111.574 C219.306,206.41,206.41,219.306,190.559,219.306z"></path>{" "}
                    <path d="m103.826,52.399c-5.867-5.867-13.667-9.098-21.964-9.098s-16.097,3.231-21.964,9.098c-5.867,5.867-9.098,13.667-9.098,21.964 0,8.297 3.231,16.097 9.098,21.964l61.536,61.536c7.957,7.956 20.9,7.954 28.855,0 7.955-7.956 7.955-20.899 0-28.855l-60.928-60.926c-2.343-2.343-6.143-2.343-8.485,0-2.343,2.343-2.343,6.142 0,8.485l60.927,60.927c3.276,3.276 3.276,8.608 0,11.884s-8.607,3.276-11.884,0l-61.536-61.535c-3.601-3.601-5.583-8.388-5.583-13.479 0-5.092 1.983-9.879 5.583-13.479 7.433-7.433 19.525-7.433 26.958,0l64.476,64.476c11.567,11.567 11.567,30.388 0,41.955-5.603,5.603-13.053,8.689-20.977,8.689s-15.374-3.086-20.977-8.689l-49.573-49.574c-2.343-2.343-6.143-2.343-8.485,0-2.343,2.343-2.343,6.142 0,8.485l49.573,49.573c7.87,7.87 18.333,12.204 29.462,12.204s21.593-4.334 29.462-12.204 12.204-18.333 12.204-29.463c0-11.129-4.334-21.593-12.204-29.462l-64.476-64.476z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            }
          />
          <div className="line"></div>
        </div>
      </section>
    </>
  );
}
