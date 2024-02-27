import React from "react";
import "./PostComent.css";

function PostComment() {
  return (
    <div className="Post-main-box">
      <div className="post-box">
        <h4>LEAVE A REPLY</h4>
        <p>
          Your Email Address Will Not Be Published. Required Fields Are Marked *
        </p>
        <form action="#">
          <div className="text-area">
            <div className="area-box">
              <p>comment*</p>
              <textarea name="area" id="area" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="name-mail">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
        </form>
        <h5>post comment</h5>
      </div>
    </div>
  );
}

export default PostComment;
