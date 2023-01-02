import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const IncrementLike = () => setLike(like + 1);
  const IncrementDisLike = () => setDisLike(dislike + 1);

  return (
    <div className="counter-container">
      {/* <button className="like-button" onClick={IncrementLike}>
        👍{like}
      </button>
      <button className="dislike-button" onClick={IncrementDisLike}>
        👎{dislike}
      </button> */}
      <IconButton className="like-button"
       onClick={IncrementLike} aria-label="like-button">
        <Badge badgeContent={like} color="primary">
          <ThumbUpIcon color="action" />
        </Badge>
      </IconButton>
      <IconButton className="dislike-button"
      onClick={IncrementDisLike} aria-label="dislike-button">
        <Badge badgeContent={dislike} color="error">
          <ThumbDownAltIcon color="action" />
        </Badge>
      </IconButton>
    </div>
  );
}
