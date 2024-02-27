import React from "react";
import blogdata from "../../Data/blogdata";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./blog.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sendBlogPage } from "../../redux/Slice/proslice";

function Blog() {
  const dispatch = useDispatch();

  const sendBlogId = (id) => {
    dispatch(sendBlogPage(id));
  };

  return (
    <div className="blog-box">
      <Row>
        {blogdata.map((blog, id) => {
          return (
            <Col lg="6">
              <div className="blog-cart" key={id}>
                <div className="img-blog">
                  <img src={blog.img} />
                </div>
                <div className="blog-content">
                  <h6>{blog.history}</h6>
                  <h1>{blog.head}</h1>
                  <h5>{blog.text.slice(0, 50)}...</h5>
                </div>
                <Link to={`/bloginfo/${blog.id}`}>
                  <h1>add</h1>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Blog;
