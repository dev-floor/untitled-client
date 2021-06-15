import { atom } from 'recoil';
import { OptionResponse } from '../api/ApiProps';

export const selectedArticleId = atom<string>({
  key: 'selectedArticleId',
  default: '',
});

export const viewMode = atom<string>({
  key: 'viewMode',
  default: 'card',
});

export const viewSort = atom<string>({
  key: 'viewSort',
  default: '',
});

export const viewFilter = atom<string[]>({
  key: 'viewFilter',
  default: [],
});

export const articleCreateSelectedOptions = atom<string[]>({
  key: 'articleCreateSelectedOptions',
  default: [],
});

export const applyFilterFlag = atom<boolean>({
  key: 'applyFilterFlag',
  default: false,
});

export const articleCreateOption = atom<OptionResponse[]>({
  key: 'articleCreateOptions',
  default: [],
});

// NEED TO IMPLEMENT :: type add
export const UpdateCommentId = atom<number>({
  key: 'updateCommentId',
  default: 0, // 0일경우 수정 안함
});

export const DeleteCommentId = atom<number>({
  key: 'deleteCommentId',
  default: 0, // 0일경우 삭제 안함
});

export const NewCommentId = atom<number>({
  key: 'newCommentId',
  default: 0,
});
