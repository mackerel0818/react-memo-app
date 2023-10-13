import React, { useState } from "react";
import { Link } from "react-router-dom";

function CategoryItem({ label, subItems }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        className="hover:cursor-pointer dark:text-white"
        onClick={toggleExpand}
      >
        {label}
      </div>
      {isExpanded && subItems && (
        <ul className="pl-6">
          {subItems.map((subItem, index) => (
            <li className="pt-1 dark:text-white" key={index}>
              <Link to="/notebooks/all">└ {subItem}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MultiLevelSidebar({ name }) {
  const subItems = ["메모 1", "메모 2"];
  const nestedItems = ["Nested 1", "Nested 2"];

  return (
    <div>
      <CategoryItem
        label={name}
        className="font-semibold py-2"
        subItems={subItems}
      >
        <CategoryItem label={subItems[0]} />
        <CategoryItem label={subItems[1]} subItems={nestedItems} />
      </CategoryItem>
    </div>
  );
}

export default MultiLevelSidebar;
