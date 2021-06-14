const FormInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.labelName}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        readOnly={props.readOnly && "readOnly"}
        onChange={props.change}
        value={props.value}
        list={props.list}
      />
    </div>
  );
};
export default FormInput;
