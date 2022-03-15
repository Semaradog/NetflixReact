import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOutlined } from "@material-ui/icons"
import "./listItem.scss"

export default function ListItem() {
  return (
    <div className="listItem">
      <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf07Ihf0o-BL7ks_pjwU1BfBJzxgHA8Ao8jMZ5dfJA8PZ_R7l-NyvQHtTj1TpmnL7lnR2SA8Nv4VGzEO9yJkmJ_fwArM.jpg?r=7c6" alt="" />
      
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpOutlined/>
          <ThumbDownAltOutlined/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, possimus inventore aliquid.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  )
}
