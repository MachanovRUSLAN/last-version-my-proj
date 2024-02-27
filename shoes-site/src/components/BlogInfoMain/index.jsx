import React from "react";
import { useParams } from "react-router";
import blogdata from "../../Data/blogdata";
import "./BlogInfo.css";
import M_logo from "../img/M-logo.jpg";

function BlogInfoMain() {
  const { blogId } = useParams();
  console.log({ blogId });
  return (
    <>
      <div className="info-blog">
        {blogdata.map((blog) => {
          if (blog.id === +blogId) {
            return (
              <div className="infocart" key={blog.id}>
                <div className="info-cart-img">
                  <img src={blog.img} />
                </div>
                <div className="cart-content-down">
                  <img src={M_logo} />
                  <h6>{blog.text}</h6>
                </div>
                <div className="Note">
                  <p>
                    Et Harum Quidem Rerum Facilis Est Et Expedita Distinctio.
                    <br />
                    Nam L Quo Minus Id Quod Maxime Placeat Facere.
                    <br />
                    Nulla Gravida Euismod Lorem, T mpus Hendrerit Est Porta Eu.
                    <br /> Aenean Tortor Enim, Cursus Eget Euismod Vel, Euismod
                    In Eros
                  </p>
                  <h4>– Ut Enim Ad</h4>
                </div>
                <div className="less-note">
                  <p>
                    Nere Are Always Protests, Whether You Do Something Good Or
                    Bad. Even If You Do Something Beneficial, People Say You Do
                    It Because It’s Advertising. The Key To My Collections Is
                    Sensuality. I Like The Body. I Like To Design Everything To
                    Do With The Body.
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default BlogInfoMain;
