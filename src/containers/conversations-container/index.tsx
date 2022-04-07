import { useCallback, useEffect, useState } from "react";

import { Conversation } from "../../@types";
import { Conversations } from "../../components";
import { useGetConversationsQuery } from "../../redux/api/conversations";

export function ConversationsContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<Conversation[]>([]);

  const {
    data = { data: [], haveMore: false },
    isLoading,
    isFetching,
  } = useGetConversationsQuery({
    page: currentPage,
  });

  const onLoadMore = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (data.data.length) setCurrentItems((prev) => [...prev, ...data.data]);
  }, [data.data]);

  return (
    <Conversations
      items={currentItems}
      haveMore={data.haveMore}
      onLoadMore={onLoadMore}
      isLoading={isLoading}
      isFetching={isFetching}
    />
  );
}
