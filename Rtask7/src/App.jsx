import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }

    setLiked(!liked);
  };

  const handleAddComment = () => {
    if (comment.trim() === "") return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="app">

      <div className="card">

  
        <div className="top-banner"></div>

        
        <div className="profile-section">

      
          <div className="image-wrapper">

            <div
              className="upload-box"
              onClick={() => fileInputRef.current.click()}
            >

              {profileImage ? (
                <img src={profileImage} alt="profile" />
              ) : (
                "📷"
              )}

            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              hidden
            />

          </div>

          <div className="like-container">

            <button
              className={liked ? "like-btn active" : "like-btn"}
              onClick={handleLike}
            >
              <span className={liked ? "heart active-heart" : "heart"}>
                ♥
              </span>

              <span className="like-text">
                Like
              </span>
            </button>

            <span className="likes-text">
              {likeCount} Likes
            </span>

          </div>

         <div className="comment-section">

            <h2>Comments</h2>

            <div className="comment-input-container">

              <input
                type="text"
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <button onClick={handleAddComment}>
                ➤
              </button>

            </div>

            <div className="comments-list">

              {comments.map((item, index) => (
                <div className="comment-card" key={index}>
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App; 