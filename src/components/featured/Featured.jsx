import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Serires"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf07Ihf0o-BL7ks_pjwU1BfBJzxgHA8Ao8jMZ5dfJA8PZ_R7l-NyvQHtTj1TpmnL7lnR2SA8Nv4VGzEO9yJkmJ_fwArM.jpg?r=7c6" alt="" />

        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Don%27t_Look_Up_logo.png" alt="" />
      

            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit, consequuntur dolorem esse rerum accusantium in eligendi id nesciunt hic nobis facere placeat explicabo deserunt quos soluta fugiat voluptatem ducimus.
            </span>

            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>

        </div>
    </div>
  )
}
