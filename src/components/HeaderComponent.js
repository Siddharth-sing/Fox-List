import React from "react";

export default function HeaderComponent() {
  return (
    <div>
      <div className="flex-container">
        <div className="flex-item-1">
          <img
            style={{ height: "52px", width:"52px" }}
            src="images/foxicon.png"
            alt="❌"
          />
        </div>
        <h5 className="flex-item-2">Fox List</h5>
      </div>
    </div>
  );
}
