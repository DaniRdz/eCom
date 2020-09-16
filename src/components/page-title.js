import React from "react";

export default function (props) {
  const { className, title } = props;
  return <div className={`${className} page-title`}>{title}</div>;
}
