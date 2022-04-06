import { User } from "../../../../@types";
import { Avatar } from "../../../avatar";
import { PostFromDate } from "../../../post/post-from-date";
import {
  Container,
  AvatarWrapper,
  DescriptionWrapper,
  UserName,
  Description,
} from "./styles";

type CommentModalDescriptionProps = Pick<User, "userName" | "avatarUrl"> & {
  description: string;
  createdAt: string | Date;
};

export function CommentModalDescription({
  avatarUrl,
  description,
  userName,
  createdAt,
}: CommentModalDescriptionProps) {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar src={avatarUrl} alt={userName} />
      </AvatarWrapper>

      <DescriptionWrapper>
        <div>
          <UserName>{userName}</UserName>

          <Description>{description}</Description>
        </div>

        <PostFromDate style={{ marginTop: "16px", display: "block" }}>
          {createdAt}
        </PostFromDate>
      </DescriptionWrapper>
    </Container>
  );
}
