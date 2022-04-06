import { useRef, useState } from "react";

import faker from "@faker-js/faker";

import { User } from "../../../@types";
import { Avatar } from "../../avatar";
import { PostProfilePreview } from "./post-perfil-preview";
import {
  Container,
  HeadUserInfo,
  HeadUserInfoUserName,
  MoreIcon,
  MoreOptionsButton,
} from "./styles";

const recentPosts = Array.from({ length: 5 }, () => ({
  id: faker.datatype.uuid(),
  src: faker.image.city(),
  alt: faker.lorem.words(5),
}));

type HeaderProps = Pick<User, "userName" | "avatarUrl"> & {
  onMore: () => void;
};

export function PostHeader({ avatarUrl, userName, onMore }: HeaderProps) {
  const currentTimeId = useRef<number>(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isMouseEnterOnPreview, setIsMouseEnterOnPreview] = useState(false);

  function onMouseEnter() {
    currentTimeId.current = window.setTimeout(
      () => setIsPreviewOpen(true),
      2000
    );
  }

  function onMouseOut() {
    if (!isMouseEnterOnPreview) setIsPreviewOpen(false);
    window.clearTimeout(currentTimeId.current);
  }

  return (
    <Container>
      <HeadUserInfo>
        <Avatar src={avatarUrl} alt={userName} />

        <HeadUserInfoUserName
          to={`/${userName}`}
          onMouseEnter={onMouseEnter}
          onMouseOut={onMouseOut}
        >
          {userName}
        </HeadUserInfoUserName>
      </HeadUserInfo>

      <MoreOptionsButton onClick={onMore}>
        <MoreIcon />
      </MoreOptionsButton>

      {isPreviewOpen && (
        <PostProfilePreview
          user={{
            avatarUrl,
            flowing: 10,
            followers: 20,
            id: "123",
            subName: "rodrigo silva",
            userName,
            posts: 30,
          }}
          recentPosts={recentPosts}
          onMouseEnter={() => setIsMouseEnterOnPreview(true)}
          onMouseLeave={() => setIsPreviewOpen(false)}
        />
      )}
    </Container>
  );
}
