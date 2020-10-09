import React from "react";

export function UnderlinedTitle(props) {
  const { className, title } = props;
  return <div className={`${className} underlined-title`}>{title}</div>;
}

export function InfoTitle(props) {
  const { className, title, value } = props;
  return (
    <div className={`${className} info-title `}>
      <div className="info-title-title">{title}</div>
      <div className="info-title-value">{value}</div>
    </div>
  );
}
