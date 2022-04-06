import { User } from "../../../@types";
import { InstagramSettings } from "../../../icons";
import { Avatar } from "../../avatar";
import { ProfileStatus } from "./profile-status";
import {
  AvatarWrapper,
  Container,
  Info,
  EditProfileLinkButton,
  FirstRow,
  SettingsButton,
  UserName,
  SecondRow,
  SubName,
  ThirdRow,
} from "./styles";

type ProfileInfoProps = Pick<
  User,
  "userName" | "flowing" | "followers" | "posts" | "avatarUrl" | "subName"
> & {
  onSettings: () => void;
};

export function ProfileInfo({
  onSettings,
  userName,
  flowing,
  followers,
  posts,
  avatarUrl,
  subName,
}: ProfileInfoProps) {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar src={avatarUrl} alt={userName} size="x-large" />
      </AvatarWrapper>

      <Info>
        <FirstRow>
          <UserName>{userName}</UserName>

          <EditProfileLinkButton to="/">Editar perfil</EditProfileLinkButton>

          <SettingsButton onClick={onSettings}>
            <InstagramSettings />
          </SettingsButton>
        </FirstRow>

        <SecondRow>
          <ProfileStatus quantity={posts} label="publicações" />

          <ProfileStatus quantity={followers} label="seguidores" />

          <ProfileStatus quantity={flowing} label="seguindo" />
        </SecondRow>

        <ThirdRow>
          <SubName>{subName}</SubName>
        </ThirdRow>
      </Info>
    </Container>
  );
}
