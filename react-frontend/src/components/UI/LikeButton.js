import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
export const ThumsUpButton = (props) => {
  return (
    <div className="mt-3 d-flex justify-content-start align-items-center">
      <IconButton color="primary" aria-label="Like a Post">
        <ThumbUpAltIcon />
      </IconButton>
      <div className="font-weight-bolder">{props.likes}</div>
    </div>
  );
};
