import React from "react";

function Contact() {
  return (
    <div style={{ margin: "0px 124.5px 0px" }}>
      <div style={{ padding: "64px 0px", textAlign: "center" }}>
        <span
          style={{
            padding: "16px 0px",
            borderBottom: "5px #616161 solid",
            fontSize: "24px",
          }}
        >
          Contact Us
        </span>
      </div>

      <form>
        <div style={{ margin: "16px 0px" }}>
          <label>Name</label>
          <input style={{ width: "100%", padding: "8px" }} type="text" />
        </div>

        <div style={{ margin: "16px 0px" }}>
          <label>Email</label>
          <input style={{ width: "100%", padding: "8px" }} type="text" />
        </div>

        <div style={{ margin: "16px 0px" }}>
          <label>Subject</label>
          <input style={{ width: "100%", padding: "8px" }} type="text" />
        </div>

        <div style={{ margin: "16px 0px" }}>
          <label>Message</label>
          <input style={{ width: "100%", padding: "8px" }} type="text" />
        </div>

        <button style={{color:"white",background:"black",padding:"8px 16px", border:"none",width:"100%"}}>
            Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
