import React from "react";
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { db } from "../helper/firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import SendMessage from "./SendMessage";

const ChatComp = () => {
  const [messages, loading, error] = useCollection(collection(db, "messages"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  console.log(messages, loading, error);
  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}

      <div className="flex flex-col p-[10px] relative">
        {messages &&
          messages.docs.map((doc) => (
            <Message key={doc.id} message={doc.data()} />
          ))}
      </div>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default ChatComp;
