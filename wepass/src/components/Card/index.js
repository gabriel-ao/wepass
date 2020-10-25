import React from "react";

export function Card(props) {
  return <div className="card"> {props.children} </div>;
}

// export function CardImg(props) {
//   return <div>{img()}</div>;
// }

export function CardBody(props) {
  return <div className="card-body">{props.children}</div>;
}

export function CardText(props) {
  return <p className="card-text">{props.text}</p>;
}
