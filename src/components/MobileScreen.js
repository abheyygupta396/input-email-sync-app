import React from "react";

function MobileScreen({ newArr = [] }) {
  return (
    <div className="smartphone">
      <div className="content">
        <div className="inbox-container">
          <div className="inbox-header">
            <span className="back-arrow">←</span>
            <span className="inbox-title">Inbox</span>
            <span className="menu-icon">⋮</span>
          </div>
          <div className="inbox-list-container">
            <ul className="inbox-list">
              {newArr?.map((it, idx) => (
                <li key={idx} className="inbox-item">
                  <div
                    className="avatar"
                    style={{ backgroundColor: "#F4B400" }}
                  >
                    {it.headline1[0]}
                  </div>
                  <div className="item-content">
                    <div className="item-title">{it.headline1}</div>
                    <div className="item-preview">{it.headline2}</div>
                    <div className="item-description">{it.description}</div>
                  </div>
                  <div className="item-time">5:45 PM</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileScreen;
