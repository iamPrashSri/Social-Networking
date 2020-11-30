import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import db from "../firebase";

function Feed() {
  let [posts, setPosts] = useState([]);

  /* useEffect will run only ONCE when the feed component loads */
  useEffect(() => {
    db.collection("Posts").onSnapshot((snapshot) => {
      /* onSnapshot will return realtime view of the collection if any CRUD operation is performed */
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          timeStamp={post.data.timeStamp}
          message={post.data.message}
          username={post.data.username}
        />
      ))}
    </div>
  );
}

export default Feed;
