import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.imdb.com/video/vi15057689?playlistId=tt11286314";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf07Ihf0o-BL7ks_pjwU1BfBJzxgHA8Ao8jMZ5dfJA8PZ_R7l-NyvQHtTj1TpmnL7lnR2SA8Nv4VGzEO9yJkmJ_fwArM.jpg?r=7c6"
        alt=""
      />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpOutlined />
              <ThumbDownAltOutlined />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              possimus inventore aliquid.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
