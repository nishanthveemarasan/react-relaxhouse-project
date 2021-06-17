import React, { useState } from "react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { useDate } from "hooks/get-date";
import FormTextarea from "components/UI/FormTextarea";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export const PostComment = (props) => {
  const comment = props.commentData;
  return (
    <React.Fragment>
      {comment &&
        comment.map((data, index) => {
          return (
            <Card
              style={{ backgroundColor: "lightgray", width: "50%" }}
              key={index}
            >
              <CardBody>
                <h4 className="font-weight-bolder text-primary">
                  {data.users.name}{" "}
                  <small className="font-italic">
                    On {useDate(data.created_at)}
                  </small>
                </h4>
                <p className="mt-2">{data.content}</p>
              </CardBody>
            </Card>
          );
        })}
    </React.Fragment>
  );
};

export const WriteComment = (props) => {
  const [comment, setComment] = useState("");
  const onCommentChange = (event) => {
    setComment(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      user_id: 4,
      post_id: props.id,
      content: comment,
    };
    props.onSubmitHandler(data);
  };
  return (
    <React.Fragment>
      <Card style={{ width: "50%" }}>
        <CardBody>
          <Form onSubmit={onSubmitHandler}>
            <FormTextarea
              id={`writeComment-${props.id}`}
              type="textarea"
              labelName="Leave Your Comment Here"
              readOnly=""
              rows="3"
              change={onCommentChange}
              value={comment}
            ></FormTextarea>
            <Button variant="secondary" type="submit">
              Submit Your Comment
            </Button>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
