import React, { useState } from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { useDate } from "hooks/get-date";
import { useTime } from "hooks/get-date";
import { ThumsUpButton } from "components/UI/LikeButton";
import { PostComment, WriteComment } from "./Comment";

const useStyles = makeStyles(styles);
const PostContent = (props) => {
  const data = props.postData?.data;
  const classes = useStyles();

  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      {data?.data &&
        data.data.map((post, index) => {
          return (
            <div className="m-5" key={index}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>{post.title}</h4>
                  <p className={classes.cardCategoryWhite}>
                    By {post.name} On {useDate(post.created_at)}{" "}
                    {useTime(post.created_at)}
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="text-justify">{post.content}</div>
                  <ThumsUpButton likes={post.likes_count} />
                  {Number(post.comments_count) > 0 && (
                    <PostComment commentData={post.comments} />
                  )}
                  <WriteComment
                    onSubmitHandler={onSubmitHandler}
                    id={post.id}
                    key={post.id}
                  />
                </CardBody>
              </Card>
            </div>
          );
        })}
    </React.Fragment>
  );
};
export default PostContent;
