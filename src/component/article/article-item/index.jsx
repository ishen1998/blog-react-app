import { Button, Tag } from "antd-mobile";
import { EyeOutline, MessageOutline, LikeOutline } from "antd-mobile-icons";
import { formatTime } from "../../../util/format";
import { withRouter } from "react-router-dom";
import "./idnex.scss";
// eslint-disable-next-line import/no-anonymous-default-export
export default withRouter((props) => {
  console.log(props);
  const data = props.data || {};
  const history = props.history || {};
  const toDetail = (id) => {
    history.push("/detail/" + id, { showTabBar: false, showNavBar: true });
  };
  return (
    <div className="article-container">
      <div className="article-item">
        <div className="tag">
          发布于{formatTime(data.created_at)}&nbsp;&nbsp;
        </div>
        <div className="article-title">
          <h3>{data.title}</h3>
        </div>
        <div className="tag">
          <Tag round color="success">
            ishen
            {/* {data.authorName} */}
          </Tag>
          {data.ArticleCategories &&
            data.ArticleCategories.map((item) => (
              <Tag round key={item.id} color="primary">
                {item.categoryName}
              </Tag>
            ))}
        </div>
        <div className="article-description">
          <span> {data.desc}</span>
        </div>
        <div>
          <Button onClick={() => toDetail(data.id)} className="read">
            阅读全文
          </Button>
        </div>
        <div className="article-data">
          <div>
            <EyeOutline fontSize={14} />
            <span>{data.viewCount}</span>
          </div>
          <div>
            <LikeOutline fontSize={14} />
            <span>{data.likeCount}</span>
          </div>
          <div>
            <MessageOutline fontSize={14} />
            <span>{data.commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
