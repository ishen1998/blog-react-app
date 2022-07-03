// eslint-disable-next-line import/no-anonymous-default-export
import "./index.scss";
import home from '../../assets/img/home.png'
import github from '../../assets/img/github.png'
import email from '../../assets/img/email.png'
import phone from '../../assets/img/phone.png'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="box">
      {/* <!--[if IE]><p className="kill-ie">请使用IE9以上版本浏览</p><![endif]-->
  <!-- <span id="pdf" className="pdf">pdf下载</span> --> */}

      <div id="container" className="container animation">
        <header className="header">
          <div className="header-top">
            <div className="name">
              <h4>
                沈奇<small>Qi Shen</small>
              </h4>
            </div>
            <div className="job">
              <h4>
                Web 前端开发 <small>/深圳</small>
              </h4>
            </div>
          </div>
          <div className="line-w"></div>
          <div className="header-bottom">
            <div className="column">
              <h5>男/1998.11</h5>
              <h5>本科 · 软件工程</h5>
              <h5>江西工程学院</h5>
              <h5>一年工作经验</h5>
            </div>
            <div className="column">
              <a href="https://ishen.site">
                <img src={home} alt="" />
                https://ishen.site&nbsp;&nbsp;
              </a>
              <a href="https://github.com/ishen1998">
                <img src={github} alt="" />
                github.com/ishen1998&nbsp;&nbsp;
              </a>
              <a>
                <img src={email} alt="" />
                sq1910@qq.com&nbsp;&nbsp;
              </a>
              <a>
                <img src={phone} alt="" />
                18779550878&nbsp;&nbsp;
              </a>
            </div>
          </div>
        </header>
        <section className="body">
          <div className="left">
            <div className="title">
              <span className="title-l"></span>
              <h3>实习经历</h3>
              <span className="title-r"></span>
            </div>
            <div className="item-job">
              <span>深圳市天沃数字技术有限公司</span>

              {/* <!-- <h5>实习</h5> --> */}
            </div>
            <div className="item-detail">
              <span>前端开发</span>
              <span>2020.4-2020.8</span>
            </div>
            <div className="item-job">
              <span>广州君思网络科技有限公司</span>
              <h5>实习</h5>
            </div>
            <div className="item-detail">
              <span>长沙研发中心</span>
              <span>2019.7-2020.1</span>
            </div>
            <div className="title">
              <span className="title-l"></span>
              <h3>项目经历</h3>
              <span className="title-r"></span>
            </div>
            <div className="item-content">
              <p>
                <strong>个人博客 · 前端+后端开发</strong>
              </p>
              <span>
                技术栈：vue2.x全家桶+nodejs+koa2技术栈。
                系统设计的初衷是为了记录自己在日常生活的的一些学习笔记，同时也是为了运用自己所学的技术完成一个完整的从服务端到前端的一个系统编码实现。
                博客系统分为前台+后台模式，通过jsonwebtoken实现接口权限控制。数据库采用mysql数据库，选择sequelize插件，通过ORM方式实现与数据库的交互。
                前台具备登陆/注册、文章列表、文章详情、文章点赞、文章评论、归档、文章发布等模块。
                后台具备文章、日志、用户、评论等模块。
                {/* <!-- <strong>相关模块开发负责人</strong>:
            负责相应模块的页面开发，封装可复用的组件。
            对页面交互优调，优化页面整体性能。与后端开发工程师联调接口<br />
            项目基于<em>vue全家桶</em>，利用<em>vue-cli</em>，实现前端工程化开发。
            使用<em>Axios</em>,并对其进行二次封装。实现API接口调用。
            页面UI选用<em>AntDesign UI</em>，并对部分组件进行二次封装。 --> */}
              </span>
            </div>
            <div className="item-content">
              <p>
                <strong>人事管理系统 · 前端开发</strong>
              </p>
              <span>
                <strong>项目开发负责人</strong>:
                负责整体项目结构搭建，模块划分。封装可复用的组件。
                负责项目公共基础建设与规划
                <br />
                前台：vue2.x+vue全局桶+antdesignUI
                项目描述：用于管理在校老师的信息，考勤，等情况。根据所属部门或学院进行相互评分。
                我的职责：搭建整个项目结构，封装可复用的组件，基础功能库的编写，业务交互的实现
                主要功能：人员录入，权限管理，评分考核，个人总结，校级考核，部门考核，荣誉加分等
              </span>
            </div>
          </div>
          <div className="line-h"></div>
          <div className="right">
            <div className="title">
              <span className="title-l"></span>
              <h3>专业能力</h3>
              <span className="title-r"></span>
            </div>
            <div className="item-content">
              <span>
                {" "}
                · 近两年的前端学习与开发经验，有近一年的全职开发经验{" "}
              </span>
              <span>
                · 掌握前端基本开发技能，熟悉<em>HTML5</em>
                <em>CSS3</em>熟悉<em>W3C标准</em>
                熟悉前端常见各种布局：<em>响应式</em>
                <em>flex布局</em>
                <em>rem布局</em>，对移动端适配问题有实践经验，熟悉浏览器兼容方案
              </span>
              <span>
                · 熟悉JavaScript，熟悉<em>DOM、BOM</em>
                ,熟悉原型、闭包及部分设计模式。熟悉运用<em>ES6_7_8</em>语法
                理解JS中异步操作机制原理，了解<em>Promise A+</em>规范。熟悉
                <em>Ajax</em>
              </span>
              <span>
                · 熟练使用<em>Vue.js</em>熟悉<em>Vue全家桶</em>
                ，对基于Vue开发的组件UI有丰富的使用经验。例如：
                <em>AntDesign UI</em>
                <em>ElementUI</em>
                <em>Vant UI</em> 对其他UI框架也有使用经验<em>Bootstrap</em>
                <em>MUI</em>等
              </span>
              <span>
                · 熟练使用<em>Jquery/zepto.js</em>
                <em>Axios</em>
                <em>Mock.js </em>等前端js库。了解<em>TypeScript </em>
              </span>
              <span>
                · 熟练运用前端工程化工具<em>Git</em>源代码管理工具。
                <em>webpack</em>打包构建工具。<em>npm/cnpm/yarn</em>包管理工具。
              </span>
              <span> · 熟悉微信小程序开发 </span>
              <span>
                · 了解前端热门技术栈。<em>React.js</em>
                <em>Node.js</em>
              </span>
            </div>
          </div>
        </section>
        <footer className="footer">
          <p></p>
          <div className="title">
            <span className="title-l"></span>
            <h3>自我评价</h3>
            <span className="title-r"></span>
          </div>
          <span> · 具有一定的创新创造精神，乐于挑战自己。 </span>
          <span> · 对工作认真负责，具有高度责任心。拒绝敷衍了事 </span>
          <span>
            · 具有良好的沟通合作能力、分析解决问题能力以及较强的学习能力。
          </span>
          {/* <!-- <span>
        · 喜欢与他人进行技术交流与分享
      </span> --> */}
        </footer>
        {/* <!-- <p className="essay">越努力，越幸运！</p>
    <p className="last-modified">最后更新时间：2020年03月</p> --> */}
      </div>
    </div>
  );
};
