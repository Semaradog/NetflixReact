import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <img src="https://cdn.iphoneincanada.ca/wp-content/uploads/2021/11/Netflix.jpeg" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" alt="" />
                <ArrowDropDown className="icon"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar