"use client";
import { useRef } from "react";

const comments = [
  {
    author: "Dave",
    date: "2027-01-01",
    content: "This is a comment from Dave",
  },
  {
    author: "Alice",
    date: "2027-01-02",
    content: "This is a comment from Alice",
  },
  {
    author: "Bob",
    date: "2027-01-03",
    content: "This is a comment from Bob",
  },
  {
    author: "Eve",
    date: "2027-01-04",
    content: "This is a comment from Eve",
  },
];

export default function TicketComments() {
  const commentRef = useRef(null);

  return (
    <footer>
      <h3>Comments</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add comment");
        }}
      >
        <textarea ref={commentRef} placeholder="Add a comment" />
        <button type="submit">Add comment</button>
      </form>
      <section>We have {comments.length} comments.</section>
    </footer>
  );
}
