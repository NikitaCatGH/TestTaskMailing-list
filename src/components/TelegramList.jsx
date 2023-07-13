import React from "react";
import TelegramLine from "./TelegramLine";

export default function TelegramList({ telegrams }) {
  return (
    <div className="mainContainer">
      {telegrams.map((telegram) => (
        <TelegramLine line={telegram} key={telegram.text + telegram.id} />
      ))}
    </div>
  );
}
