import React, { useEffect, useState } from "react";

export default function SetlistColors({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hexColor}`;

  useEffect(()=>{
    let interv=setTimeout(()=>{
        setAlert(false)
    },3000)
    return () => clearTimeout(interv)
  },[alert])

  return (
    <div
      className={`w-[222px] h-[200px] ${index > 10 && "color-light"}`}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      style={{ backgroundColor: `${hexValue}` }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert && <p>copy to clipboard</p>}
    </div>
  );
}
