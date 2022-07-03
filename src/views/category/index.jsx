import React, { useEffect, useState } from "react";
import { getCategoryList } from "../../api/index";
import { Button } from "antd-mobile";
import './index.scss'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await getCategoryList();
    console.log(res);
    if (res.isOK) {
      setData(() => res.data.rows);
    }
  }, []);
  const getTagArticle = (id) => {};
  return (
    <div className="category">
      <div className="container">
        {data.map((o) => (
          <div key={o.id} className="box-card">
            <div className="img">
              <img width="100%" height="100%" src={o.categoryImg} alt="" />
            </div>
            <div className="text">{o.categoryName}</div>
            {/* <div className="desc">{o.describe}</div> */}
            <div className="categories">
              <Button size="mini" onClick={getTagArticle(o.id)} type="primary">
                进入专栏
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
