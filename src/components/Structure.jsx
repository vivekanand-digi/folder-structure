import React from "react";

function Structure({ FileData }) {
  console.log("^^^^", FileData);
  return (
    <div>
      {FileData?.map(({ id, name, isFolder, isChild }) => (
        <div key={id} style={{ marginLeft: "20px", marginTop:"10px" }}>
          <span>{isFolder ? "📁" : "📃"}</span> {name}
          {isChild && isChild.length > 0 && <Structure FileData={isChild} />}
        </div>
      ))}
    </div>
  );
}

export default Structure;
