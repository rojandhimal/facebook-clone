import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import profileImg from "../images/rojan.jpg";
import postImg from "../images/post.jpg";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic={profileImg}
        message="Wow this works"
        timestamp="this is timestamp"
        username="Rojan Tegre"
        image={postImg}
      />
      <Post
        profilePic={postImg}
        message="Hello hello"
        timestamp="this is timestamp"
        username="Rojan Tegre"
        image={profileImg}
      />
      <Post
        profilePic={profileImg}
        message="Wow this works"
        timestamp="this is timestamp"
        username="Rojan Tegre"
      />
    </div>
  );
}

export default Feed;
