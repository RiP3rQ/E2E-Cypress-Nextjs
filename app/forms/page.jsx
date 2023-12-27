"use client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import ItemsAccordion from "../components/Accordion";
import styles from "./forms.module.css";

const items = [
  {
    summary: "Step 1) Get Form",
    details: `First, we need to get the form`,
    id: "1",
  },
  {
    summary: "Step 2) Type In Form",
    details: `cy.type('words')`,
    id: "2",
  },
  {
    summary: "Step 3) Subscribe",
    details: `cy.click()`,
    id: "3",
  },
  {
    summary: "Step 4) Test success/fail",
    details: `NOTE: Waiting/Retriability *docs`,
    id: "4",
  },
  {
    summary: "Step 5) Test validation",
    details: ``,
    id: "5",
  },
];

export default function FormsPage() {
  const [inputValue, setInputValue] = useState("");
  const [subMessage, setSubMessage] = useState("");
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Testing Forms</h1>
      <ItemsAccordion items={items} />
      <TextField
        className={styles.input}
        label="Email"
        variant="filled"
        value={inputValue}
        data-test="email-input"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        data-test="subscribe-button"
        onClick={() => {
          if (!inputValue.includes(".com") || !inputValue.includes("@")) {
            setSubMessage(`Invalid email: ${inputValue}!`);
          } else if (inputValue.length) {
            setSubMessage(`Successfully subbed: ${inputValue}!`);
          } else if (inputValue.length == 0) {
            setSubMessage("fail!");
          } else {
            setSubMessage("fail!");
          }
          setTimeout(() => {
            setSubMessage("");
            setInputValue("");
          }, 3000);
        }}
      >
        Subscribe
      </Button>
      {subMessage && <p>{subMessage}</p>}
    </main>
  );
}
