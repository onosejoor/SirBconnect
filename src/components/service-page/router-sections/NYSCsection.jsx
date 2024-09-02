import { useContext } from "react";
import NyscServiceCard from "../../snippets/NYSCServiceCard";
import { DarkThemeContext } from "../../Context";

export default function NYSCsection() {
  const { dark } = useContext(DarkThemeContext);
  return (
    <>
      <section id="nyscHeader">
        <img
          className="nyscBackgroung"
          src="/images/Router/nysc/nysc.jpeg"
          alt="background"
        />{" "}
        <div className="nyscHeader">
          <h4 className="top">CBO Accredited</h4>
          <h1 className="nysc nyscH1">
            <span className="comName">SirBconnect: </span>
            Serving with Purpose, Impacting Communities
          </h1>{" "}
        </div>
      </section>
      {/* </div> */}
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
        <div className="nyscServiceContainer second">
          <NyscServiceCard
            header={"Payment Status"}
            text={
              "SirBconnect assists with checking your payment status. If you’ve made payments related to your NYSC registration, you can verify their status with SirBconnect."
            }
            // src={"/images/Router/nysc/research.png"}
            svg={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="13"
                    rx="2"
                    stroke={dark === "false" ? "#fff" : "#000"}
                    strokeWidth="0.9359999999999999"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>{" "}
                  <path
                    d="M3 10H20.5"
                    stroke={dark === "false" ? "#fff" : "#000"}
                    strokeWidth="0.9359999999999999"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M7 15H9"
                    stroke={dark === "false" ? "#fff" : "#000"}
                    strokeWidth="0.9359999999999999"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            }
          />
          <NyscServiceCard
            header={"Consultation"}
            text={
              "SirBconnect offers guidelines for prospective corps members. These guidelines cover various aspects, including foreign PCM (Prospective Corps Members) requirements, payment procedures, and even guidelines for correcting your date of birth if needed."
            }
            svg={
              <svg
                fill={dark === "false" ? "#fff" : "#000"}
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Layer_1"></g>{" "}
                  <g id="Layer_2">
                    {" "}
                    <g>
                      {" "}
                      <path d="M246.1,144h-126c-17.8,0-32.2,14.5-32.2,32.2v85.5c0,16.9,13.1,30.9,29.8,32.2v23.5c0,3,1.8,5.8,4.6,6.9 c0.9,0.4,1.9,0.6,2.9,0.6c2,0,3.9-0.8,5.3-2.2l28.7-28.7h74.5v10.9c0,17.8,14.5,32.3,32.3,32.3h87l28.7,28.7 c1.4,1.4,3.4,2.2,5.3,2.2c1,0,1.9-0.2,2.9-0.6c2.8-1.2,4.6-3.9,4.6-6.9V337c16.6-1.3,29.8-15.2,29.8-32.2v-85.5 c0-17.8-14.5-32.3-32.3-32.3H278.4v-10.9C278.4,158.4,263.9,144,246.1,144z M156,279c-2,0-3.9,0.8-5.3,2.2l-18.1,18.1v-12.8 c0-4.1-3.4-7.5-7.5-7.5h-5c-9.5,0-17.2-7.7-17.2-17.2v-85.5c0-9.5,7.7-17.2,17.2-17.2h126c9.5,0,17.2,7.7,17.2,17.2v85.5 c0,9.5-7.7,17.2-17.2,17.2H156z M391.9,202.1c9.5,0,17.3,7.7,17.3,17.3v85.5c0,9.5-7.7,17.3-17.3,17.3h-5c-4.1,0-7.5,3.4-7.5,7.5 v12.8l-18.1-18.1c-1.4-1.4-3.3-2.2-5.3-2.2h-90.1c-9.5,0-17.3-7.7-17.3-17.3v-11c16.6-1.3,29.7-15.2,29.7-32.1v-59.6H391.9z"></path>{" "}
                      <path d="M183.3,249.1c-2,0-3.9,0.8-5.3,2.2c-1.4,1.4-2.2,3.3-2.2,5.3c0,2,0.8,3.9,2.2,5.3c1.4,1.4,3.3,2.2,5.3,2.2 c2,0,3.9-0.8,5.3-2.2c1.4-1.4,2.2-3.3,2.2-5.3c0-2-0.8-3.9-2.2-5.3C187.2,249.9,185.3,249.1,183.3,249.1z"></path>{" "}
                      <path d="M183.1,173.9c-12.8,0-23.3,10.4-23.3,23.3v0.5c0,4.1,3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5v-0.5c0-4.5,3.7-8.3,8.3-8.3 s8.3,3.7,8.3,8.3c0,4.4-1.7,8.5-4.8,11.6c-6.9,6.9-10.7,16.1-10.7,25.9c0,4.1,3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5 c0-5.8,2.2-11.2,6.3-15.3c5.9-5.9,9.2-13.8,9.2-22.2C206.4,184.3,195.9,173.9,183.1,173.9z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            }
          />
          <NyscServiceCard
            header={"Revalidation Services"}
            text={
              "If you need to rejoin the NYSC service due to certain circumstances (such as deferring your service year), SirBconnect can guide you through the online application process for revalidation. It’s a convenient way to get back into the program and continue your service journey."
            }
            svg={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={dark === "false" ? "#fff" : "var(--lightBlue)"}
                strokeWidth="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 10V8.125C9.93125 8.125 8.25 9.80625 8.25 11.875C8.25 12.5062 8.40625 13.1062 8.6875 13.625L7.775 14.5375C7.2875 13.7687 7 12.8562 7 11.875C7 9.1125 9.2375 6.875 12 6.875V5L14.5 7.5L12 10ZM15.3125 10.125L16.225 9.21251C16.7125 9.98126 17 10.8938 17 11.875C17 14.6375 14.7625 16.875 12 16.875V18.75L9.5 16.25L12 13.75V15.625C14.0687 15.625 15.75 13.9438 15.75 11.875C15.75 11.2438 15.5875 10.65 15.3125 10.125Z"
                    fill={dark === "false" ? "#fff" : "var(--lightBlue)"}
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    fill={dark === "false" ? "#fff" : "var(--lightBlue)"}
                  ></path>{" "}
                </g>
              </svg>
            }
          />

          <div className="line"></div>
        </div>
      </section>

      <section id="nysc"></section>
    </>
  );
}
