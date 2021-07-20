import React from 'react';
import { Route } from 'react-router-dom';
import { isFullSize } from 'Atoms/atom';
import ArticleDetailContainer from './Article/container/ArticleDetailContainer';
import ArticleCreatePageContainer from './Article/container/ArticleCreatePageContainer';
import ArticleListContainer from './ArticleList/container/ArticleListContainer';
import BoardDetailContainer from './Board/container/BoardDetailContainer';
import SidebarContainer from './Layout/SidebarContainer';
import FavoriteLectureContainer from './FavoriteLecture/Container/FavoriteLectureContainer';
import HongitMain from './Layout/HongitMain';
import HongitHeader from './Layout/HongitHeader';
import HongitFooter from './Layout/HongitFooter';
import AllLectureMenuContainer from './Board/container/AllLectureMenuContainer';
import LoginContainer from './User/Container/LoginContainer';
import SignInContainer from './User/Container/SignInContainer';
import 'css/Router.css';

const Router = () => (
  <div>
    <Route path="/login" component={LoginContainer} exact />
    <Route path="/SignIn" component={SignInContainer} exact />
    <HongitHeader />
    <div className="total-main">
      <div className="side-contents">
        <SidebarContainer />
      </div>
      <section className="vertical"> </section>
      <div className="total-contents">
        <Route path="/" component={HongitMain} exact />
        <Route path="/detail" component={ArticleDetailContainer} exact />
        <Route path="/articleList" component={ArticleListContainer} exact />
        <Route path="/article/:id" component={ArticleDetailContainer} exact />
        <Route path="/write" component={ArticleCreatePageContainer} exact />
        <Route path="/board" component={BoardDetailContainer} exact />
        <Route
          path="/AllLectureMenu"
          component={AllLectureMenuContainer}
          exact
        />
        <Route
          path="/favoriteRegister"
          component={FavoriteLectureContainer}
          exact
        />
        <Route path="/board/9" render={() => <h1>질문게시판</h1>} />
        <Route path="/board/10" render={() => <h1>커뮤니티게시판</h1>} />
        <Route path="/board/11" render={() => <h1>구인게시판</h1>} />
        <Route path="/board/12" render={() => <h1>채용게시판</h1>} />
      </div>
    </div>
    <HongitFooter />
  </div>
);

export default Router;
