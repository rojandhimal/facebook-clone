import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import rojanDhimalImage from "../images/rojan.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={rojanDhimalImage}
        profileSrc={rojanDhimalImage}
        title="Rojan Dhimal"
      />
      <Story
        image={rojanDhimalImage}
        profileSrc={rojanDhimalImage}
        title="Rojan Dhimal"
      />
      <Story
        image={rojanDhimalImage}
        profileSrc={rojanDhimalImage}
        title="Rojan Dhimal"
      />
      <Story
        image={rojanDhimalImage}
        profileSrc={rojanDhimalImage}
        title="Rojan Dhimal"
      />
      <Story
        image={rojanDhimalImage}
        profileSrc={rojanDhimalImage}
        title="Rojan Dhimal"
      />
    </div>
  );
}

export default StoryReel;
