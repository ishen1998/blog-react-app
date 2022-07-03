import React, { useState } from "react";
import { InfiniteScroll, List } from "antd-mobile";
import { getArticles } from "../../api/index";
import ArticleItem from "./article-item";
import "./index.scss";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  async function loadMore() {
    const res = await getArticles({ page, size });
    setData((data) => {
      console.log(data);
      return [...data, ...res.data.rows];
      // return data.concat(res.data.rows);
    });
    if (res.data.count > data.length) {
      setPage((page) => page + 1);
      console.log(page);
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }

  return (
    <>
      <List>
        {data.map((item) => (
          // <List.Item className="list">
          <ArticleItem history={props.history} key={item.id} data={item} />
          // </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  );
};
