import React from "react";

const Grid = () => {
  return (
    // Wrap everything in a single parent element
    <div>
      {/* Image Grid Section */}
      <div
        className="relative w-full max-w-6xl px-6 mx-auto my-20"
        // style={{ top: "calc(130vh + 2cm)" }} // Removed to ensure it adjusts based on content
      >
        {/* First Row of Images */}
        <div className="flex" style={{ marginTop: "2cm", overflow: "visible" }}>
          <div
            style={{
              position: "relative",
              width: "62%",
              marginRight: "0.5cm",
            }}
          >
            <img
              src="/bali.jpeg" // Replace with your first image path
              alt="First"
              style={{
                width: "100%", // Use 100% to fill the container
                height: "8cm",
                borderRadius: "10px", // Rounded corners
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "1cm", // 1 cm space from the left
                color: "white",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
              }}
            >
              <p>Bromo, East Java</p>
              <h6 style={{ fontWeight: "bold" }}>Bromo Tengger Tour</h6>{" "}
              {/* Bold h6 */}
            </div>
          </div>
          <div style={{ position: "relative", width: "48%" }}>
            <img
              src="/denp.jpeg" // Replace with your second image path
              alt="Second"
              style={{
                width: "100%",
                height: "8cm",
                borderRadius: "10px", // Rounded corners
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "1cm", // 1 cm space from the left
                color: "white",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
              }}
            >
              <p>Denpasar, Bali</p>
              <h6 style={{ fontWeight: "bold" }}>Bali Beach Tourism</h6>{" "}
              {/* Bold h6 */}
            </div>
          </div>
        </div>

        {/* Second Row of Images */}
        <div
          className="flex"
          style={{ marginTop: "0.5cm", overflow: "visible" }}
        >
          <div
            style={{
              position: "relative",
              width: "60%",
              marginRight: "0.5cm",
            }}
          >
            <img
              src="./sumatra.jpeg" // Replace with your third image path
              alt="Third"
              style={{
                width: "100%",
                height: "8cm",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "1cm", // 1 cm space from the left
                color: "white",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
              }}
            >
              <p>Lampung, South Sumatra</p>
              <h6 style={{ fontWeight: "bold" }}>Sumatra Tourism</h6>{" "}
              {/* Bold h6 */}
            </div>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <img
              src="/central.jpeg" // Replace with your fourth image path
              alt="Fourth"
              style={{
                width: "100%",
                height: "8cm",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "1cm", // 1 cm space from the left
                color: "white",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
              }}
            >
              <p>Jogjakarta, Central Java</p>
              <h6 style={{ fontWeight: "bold" }}>Borobudur Temple Tour</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
