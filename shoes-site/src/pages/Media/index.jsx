import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./Media.css";
const images = [
  "https://cdn.thewirecutter.com/wp-content/media/2023/08/watershoes-2048px-1243-2.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/run-affordable-running-shoes-1676481206.jpg?resize=2048:*",
  "https://marathonhandbook.com/wp-content/uploads/2022/10/Carbon-Fiber-Running-shoes.jpg",
  "https://cdn-images.buyma.com/resizer/item/201207/0062235319/472761007/org.jpg?w=1500&h=1500",
  "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Fclot-nike-clotez-bruce-lee-official-look-release-info-dz3239-001-003.jpg?cbr=1&q=90",
  "https://www.greensole.com/wp-content/uploads/2022/12/25-1.jpg",
];

function Media() {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next") {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "previous") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            top: "0",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button className="return" onClick={() => imgAction()}>
            x
          </button>
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
          <button className="previous1" onClick={() => imgAction("previous")}>
            prev
          </button>
          <button className="next1" onClick={() => imgAction("next")}>
            next
          </button>
        </div>
      )}
      <div className="media-box">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry style={{ padding: "10px" }}>
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{
                  width: "100%",
                  height: "200px",
                  display: "block",
                  cursor: "pointer",
                }}
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default Media;
