import image from "/hacker.svg";

type Constants = {
  APP_TITLE: string;
  BASE_URL: string;
  COPYRIGHT: string;
  UPDATE_BUTTON: string;
  UPDATE_COMMENTS: string;
  NEWS_COUNT_START_INDEX: number;
  NEWS_COUNT_END_INDEX: number;
  PREPOSITION_BY: string;
  LOADING: string;
  BACK_BUTTON: string;
  RATING: string;
  COMMENTS: string;
  READ_SOURCE: string;
  POSTED_ON: string;
  404: string;
  OOPS: string;
  GET_BACK: string;
  MAX_STORIES: number;
  STORIES_INCREMENT: number;
  IMAGE: string;
  ERROR: string;
  DEAD_COMMENT: string;
  DELELTED_COMMENT: string;
  ERROR_TITLE: string;
  LOADING_COMMENTS_FAIL: string;
  FETCHING_STORY_FAIL: string;
  FETCHING_NEWS_FAIL: string;
  HEADER_IMG_ALT: string;
};

export const constants: Constants = {
  APP_TITLE: "Hacker News",
  BASE_URL: "/hacker-news",

  COPYRIGHT: "Copyright © Hacker News",
  UPDATE_BUTTON: "Update News",
  UPDATE_COMMENTS: "Update comments",

  NEWS_COUNT_START_INDEX: 0,
  NEWS_COUNT_END_INDEX: 100,
  MAX_STORIES: 100,
  STORIES_INCREMENT: 10,

  PREPOSITION_BY: "by",
  LOADING: "Loading...",
  BACK_BUTTON: "BACK",
  RATING: "Rating: ",
  COMMENTS: "Comments: ",
  READ_SOURCE: "Read source",
  POSTED_ON: "Posted on: ",
  404: "404",
  OOPS: "Oops! Looks like you're lost.",
  GET_BACK: "Let's get you back",
  IMAGE: image,
  ERROR: "Something went wrong",
  DEAD_COMMENT: "Comment is dead",
  DELELTED_COMMENT: "Comment is deleted",
  ERROR_TITLE: "Error!",
  LOADING_COMMENTS_FAIL: "Loading comments failed! Please, try again later.",
  FETCHING_STORY_FAIL: "Fetching story failed! Please try again later.",
  FETCHING_NEWS_FAIL: "Fetching news failed! Please try again later.",
  HEADER_IMG_ALT: "Application logo",
} as const;
