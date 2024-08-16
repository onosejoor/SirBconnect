const FormInput = (props) => {
  return (
    <>
      <div>
        {" "}
        <label htmlFor="name">{props.name}</label>
        <input style={{borderColor: props.error ? "red" : "inherit"}}
          id={props.name}
          className="formInput"
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.change}
          value={props.value}
        />
        {props.error && (
          <h6 className={"error "+ props.name}>{props.errorMessage}</h6>
        )}
        {/* <h6 className={"error " + props.name}>{props.errorMessage}</h6> */}
      </div>
    </>
  );
};

export default FormInput;
