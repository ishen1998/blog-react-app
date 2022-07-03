import React, { Component } from "react";
import { getArticleDetail } from "../../api";
import { date } from "../../util/format";
import "./index.scss";
import "highlight.js/styles/vs2015.css";
export default class Detail extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await getArticleDetail(id);
    if (res.isOK) {
      this.setState(
        {
          article: res.data
        },
        () => {
          this.innerContent(res.data.contentHtml);
        }
      );
    }
  }
  innerContent(str) {
    this.content.innerHTML = str;
  }
  state = {
    article: {}
  };
  render() {
    const { article } = this.state;
    return (
      <div className="detail-container">
        <div className="main">
          <div className="info">
            <span className="author">
              <img
                src={(article.authorInfo && article.authorInfo.avatar) || ""}
                alt=""
              />
              {article.authorName}
            </span>
            <span className="other">
              {date(article.created_at, "YYYY年MM月DD日")}
              <span className="other">
                &nbsp;&nbsp;&nbsp;&nbsp;浏览&nbsp; {article.viewCount}
              </span>
            </span>
          </div>
          <div className="article-img">
            <img
              width="100%"
              height="100%"
              src={ article.titleImage}
              alt=""
            />
            {/* <img src="article.titleImage ? article.titleImage : imgsrc" /> */}
          </div>
          <h1>{article.title}</h1>
          <blockquote>{article.desc}</blockquote>
          <div className="content">
            <div ref={(e) => (this.content = e)}></div>
          </div>
          {/* <Comment
        ref="remark"
        :userInfo="userInfo"
        :commentList="remarkList"
        @ondelete="delRemark"
        @onlike="likeRemark"
        @send="send"
      ></Comment> */}
        </div>
      </div>
    );
  }
}
