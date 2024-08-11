import React, { useState } from "react";
import "./Sidebar.css";

const filterCategories = [
  { name: "CUSTOMIZABLE", type: "checkbox" },
  { name: "IDEAL FOR", type: "dropdown", options: ["All"] },
  { name: "OCCASION", type: "dropdown", options: ["All"] },
  { name: "WORK", type: "dropdown", options: ["All"] },
  { name: "FABRIC", type: "dropdown", options: ["All"] },
  { name: "SEGMENT", type: "dropdown", options: ["All"] },
  { name: "SUITABLE FOR", type: "dropdown", options: ["All"] },
  { name: "RAW MATERIALS", type: "dropdown", options: ["All"] },
  { name: "PATTERN", type: "dropdown", options: ["All"] },
];

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <aside className="sidebar">
      {filterCategories.map((category, index) => (
        <div key={index} className="filter-category">
          {category.type === "checkbox" ? (
            <label className="checkbox-label">
              <input type="checkbox" /> {category.name}
            </label>
          ) : (
            <div>
              <div
                className="dropdown-header"
                onClick={() => toggleCategory(category.name)}
              >
                <span>{category.name}</span>
                <span className="dropdown-arrow">
                  {openCategory === category.name ? "▲" : "▼"}
                </span>
              </div>
              {openCategory === category.name && (
                <div className="dropdown-options">
                  {category.options?.map((option, optionIndex) => (
                    <div key={optionIndex} className="dropdown-option">
                      <p className="all-text">All</p>
                      <p className="underline" >Unselect all</p>
                      <div className="checkboxes"> 
                         <input type = "checkbox" />
                         <p>Men</p>
                      </div>
                      <div className="checkboxes"> 
                         <input type = "checkbox" />
                         <p>Women</p>
                      </div>
                      <div className="checkboxes"> 
                         <input type = "checkbox" />
                         <p>Baby & Kids</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;