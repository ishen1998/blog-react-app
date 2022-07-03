import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import { getWallpaper } from "../../api/index";
import "./index.scss";
function Welcome() {
  const baseUrl = "https://cn.bing.com";
  const [bg, setBg] = useState({ background: "" });
  const arrowScrollTo = (type) => {
    let top = type === "down" ? window.innerHeight : -window.innerHeight;
    window.scrollBy({
      top,
      behavior: "smooth"
    });
  };
  function wallpaper() {
    getWallpaper().then((res) => {
      let random = Math.floor(Math.random() * res.data.length);
      let src = baseUrl + res.data[random].url;
      setBg({ background: `url("${src}")` });
      localStorage.setItem("image", src);
      sessionStorage.setItem("imgArr", JSON.stringify(res.data));
    });
  }
  useEffect(() => {
    wallpaper();
  }, []);
  return (
    <>
      <div className="welcome-container">
        <div className="screen">
          <div className="arrowDown">
            <DownOutline
              className="arrow-down"
              onClick={() => arrowScrollTo("down")}
            />
          </div>
          <div className="wallpaper" style={bg}>
            <div className="filter-layer"></div>
          </div>
          <div className="content">
            <svg className="name" viewBox="0 0 680 180">
              <text x="50%" y="50%" dy=".3em">
                blog of ishen
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="welcome-container info">
        <div className="screen">
          <div className="arrowDown">
            <UpOutline
              className="arrow-up"
              onClick={() => arrowScrollTo("up")}
            />
          </div>
          <div className="wallpaper" style={bg}>
            <div className="filter-layer"></div>
          </div>
          <div className="content">
            <svg className="name" viewBox="0 0 680 180">
              <text x="50%" y="50%" dy=".3em">
                blog of ishen
              </text>
            </svg>
            <div className="moveTo">
              <Link
                to={{
                  pathname: "/home",
                  state: { showTabBar: true, showNavBar: false }
                }}
              >
                首页
              </Link>
              <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>

              <a
                href="https://github.com/ishen1998"
                title="Github"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <Link
                to={{
                  pathname: "/about",
                  state: { showTabBar: true, showNavBar: false }
                }}
              >
                关于我
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="icp">赣ICP备2021008449号</div>
    </>
  );
}

export default Welcome;
