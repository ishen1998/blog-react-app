import React, { Component } from "react";
import { Swiper } from "antd-mobile";
import styles from "./index.module.scss";
import Article from "../../component/article";
export default class Home extends Component {
  
  state = {
    imgArr: JSON.parse(sessionStorage.getItem("imgArr"))
  };

  render() {
    const { imgArr } = this.state;
    return (
      <div className={styles.container}>
        <Swiper autoplay loop>
          {imgArr.map((item) => (
            <Swiper.Item key={item.hsh}>
              <img
                src={"https://cn.bing.com" + item.url}
                className={styles.img}
                alt={item.copyright}
              />
            </Swiper.Item>
          ))}
        </Swiper>
        <Article history={this.props.history} />
      </div>
    );
  }
}
