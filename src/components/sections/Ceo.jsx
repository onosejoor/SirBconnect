const Ceo = ({ dark }) => {
  return (
    <>
      <section id="CEO">
        <div className="ceo-container">
          <div className="ceoImg">
            <img
              src={ "/images/staffs & CEO/dummy ceo.jpg"}
              alt="Ceo image"
            />
          </div>

          <div className="ceoText">
            <h1 className="ceoH1">Meet Our CEO</h1>
            <br />

            <div className="break">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={dark === "false" ? "#0077b6" : "white"}
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sed
              facilis labore voluptatum modi eligendi molestias nam voluptas ea
              id sit veniam harum sequi cupiditate, vero in at iusto illum?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ceo;
