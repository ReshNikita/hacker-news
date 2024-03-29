import { FC, useEffect, useMemo } from "react";

import { Story } from "./Story";
import { Loader } from "./Loader";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchNews } from "../redux/newsActions";

import { getSortByDate } from "../utils/getSortByDate";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer: FC = () => {
  const { count } = useInfiniteScroll();
  const dispatch = useAppDispatch();
  const { stories, areStoriesLoading } = useAppSelector(state => state.news);
  const sortedStories = useMemo(
    () => [...stories].sort(getSortByDate),
    [stories]
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      {areStoriesLoading ? (
        <Loader />
      ) : (
        <ul className="flex flex-col items-center cursor-pointer">
          {sortedStories.slice(0, count).map(story => (
            <Story key={story.id} {...story} />
          ))}
        </ul>
      )}
    </>
  );
};
