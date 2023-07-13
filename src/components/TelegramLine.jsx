import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../App.css";
export default function TelegramLine(props) {
  return (
    <>
      <div className="line">
        <p>{props.line.text} </p>
      </div>
    </>
  );
}
