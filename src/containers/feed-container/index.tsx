/* eslint-disable react/no-unstable-nested-components */
import { useCallback, useEffect, useState } from "react";
import {
  AutoSizer,
  List,
  ListRowProps,
  ListRowRenderer,
} from "react-virtualized";
import { v4 as uuidV4 } from "uuid";

import { Post as PostType } from "../../@types";
import { PostProps, Post, Spinner } from "../../components";
import { PostSkeleton } from "../../components/post/post-skeleton";
import { useInfinityScrollTrigger } from "../../hooks";
import { useAddCommentMutation } from "../../redux/api/comments";
import { useGetPostsQuery, useToggleLikeMutation } from "../../redux/api/posts";
import {
  selectCurrentUser,
  setPublicationOptionsModalInfo,
  setCommentsModalInfo,
} from "../../redux/slices";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Container, LoadingContainer } from "./styles";

const skeletons = Array.from({ length: 5 }, () => (
  <li key={uuidV4()}>
    <PostSkeleton />
  </li>
));

export const FeedContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<PostType[]>([]);

  const {
    data = { data: [], haveMore: false },
    isLoading,
    isFetching,
  } = useGetPostsQuery({
    page: currentPage,
  });

  const dispatch = useAppDispatch();

  const { id: userID = "" } = useAppSelector(selectCurrentUser) || {};

  const [togglePostLike] = useToggleLikeMutation();
  const [addComment] = useAddCommentMutation();

  const onMoreOptions = useCallback((id: string) => {
    dispatch(
      setPublicationOptionsModalInfo({ isOpen: true, publicationId: id })
    );
  }, []);

  const onOpenComments = useCallback((id: string) => {
    dispatch(setCommentsModalInfo({ isOpen: true, publicationId: id }));
  }, []);

  async function onToggleLike(postID: string) {
    await togglePostLike({ postID, userID });
  }

  async function onComment({
    comment,
    postID,
  }: {
    postID: string;
    comment: string;
  }) {
    await addComment({ postID, userID, comment });
  }

  const [lastVideo] = useInfinityScrollTrigger({
    handler: () => {
      if (!isFetching && data.haveMore) {
        console.log("more pages");
      }
    },
  });

  useEffect(() => {
    if (data.data.length) setCurrentItems((prev) => [...prev, ...data.data]);
  }, [currentPage]);

  useEffect(() => {
    if (!isLoading) {
      if (data.data.length) setCurrentItems(data.data);
    }
  }, [data.data]);

  return (
    <Container>
      {isLoading ? (
        skeletons
      ) : (
        <>
          {data.data.map((item) => (
            <li key={item.id}>
              <AutoSizer>
                {({ height, width }) => (
                  <List
                    height={height}
                    width={width}
                    rowCount={data.data.length}
                    rowHeight={30}
                    rowRenderer={({ index, key, style }) => {
                      const postData = data.data[index];

                      return (
                        <Post
                          {...postData}
                          key={key}
                          style={style}
                          onComment={onComment}
                          currentUserId={userID}
                          onOpenComments={onOpenComments}
                          onToggleLike={onToggleLike}
                          onMoreOptions={onMoreOptions}
                        />
                      );
                    }}
                  />
                )}
              </AutoSizer>
            </li>
          ))}
        </>
      )}

      {isFetching && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
    </Container>
  );
};
