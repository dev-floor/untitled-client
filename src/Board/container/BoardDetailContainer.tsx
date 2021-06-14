import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { articleCreateOption } from 'Atoms/atom';
import { boardAPI } from 'api/api';
import { BoardDetailApi } from 'api/ApiProps';
import ArticleCreatePageContainer from 'Article/container/ArticleCreatePageContainer';
import ArticleListContainer from 'ArticleList/container/ArticleListContainer';
import BoardContentHeader from '../presentational/BoardContentHeader';
import 'css/BoardDetail.css';

const BoardDetailContainer = () => {
  const [boardData, setboardData] = useState<BoardDetailApi>({
    id: 0,
    title: '',
    professor: {
      name: '',
      email: '',
    },
    subject: '',
    type: {
      id: '',
      text: '',
    },
    grade: {
      id: '',
      text: '',
    },
    options: [],
  });
  const setArticleCreateOption = useSetRecoilState(articleCreateOption);

  const loadData = async () => {
    const response = await boardAPI.get(/* boardId */);
    setboardData(response);
    setArticleCreateOption(response.options);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="board-detail">
      <section className="side-bar"> side-bar </section>
      <section className="vertical"> </section>
      <section className="content">
        <header className="contents-header">
          <BoardContentHeader boardDetailData={boardData} />
        </header>
        <hr />
        <div className="article-area">
          <ArticleListContainer />
        </div>
      </section>
      <Route path="/board/write" component={ArticleCreatePageContainer} exact />
    </div>
  );
};

export default BoardDetailContainer;
