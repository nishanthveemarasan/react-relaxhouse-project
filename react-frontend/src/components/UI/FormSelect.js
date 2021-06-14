import FormTextarea from "./FormTextarea";

const FormSelect = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        className="form-control"
        id={props.id}
        value={props.value}
        onChange={props.change}
        disabled={props.readOnly && "readOnly"}
      >
        <option vlaue="received">Received</option>
        <option value="processing">Processing</option>
        <option value="packed">Packed</option>
        <option value="sent">Sent</option>
      </select>
    </div>
  );
};
export default FormSelect;
