import React, { useState, useEffect, useCallback } from 'react';
import { Route, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { boardDetailOptions } from 'Atoms/atom';
import { boardAPI } from 'api/api';
import { BoardDetailApi } from 'api/ApiProps';
import ArticleCreatePageContainer from 'Article/container/ArticleCreatePageContainer';
import ArticleListContainer from 'ArticleList/container/ArticleListContainer';
import BoardContentHeader from '../presentational/BoardContentHeader';

import 'css/BoardDetail.css';

const BoardDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
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
  const setBoardDetailOption = useSetRecoilState(boardDetailOptions);

  const loadData = useCallback(async () => {
    const response = await boardAPI.getById(id);
    setboardData(response);
    setBoardDetailOption(response.options);
  }, [id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="board-detail">
      <section className="content">
        <header className="contents-header">
          <BoardContentHeader boardDetailData={boardData} />
        </header>
        <hr />
        <div className="article-area">
          <ArticleListContainer id={id} />
        </div>
      </section>
      <Route path="/board/write" component={ArticleCreatePageContainer} exact />
    </div>
  );
};

export default BoardDetailContainer;
