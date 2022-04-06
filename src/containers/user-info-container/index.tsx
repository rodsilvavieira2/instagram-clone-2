import { UserInfo } from "../../components";
import { config } from "../../config";
import { useGetUserQuery } from "../../redux/api/base";

export const UserInfoContainer = () => {
  const { data, isLoading } = useGetUserQuery({ userID: config.devUserId });

  return <UserInfo {...(data || {})} isLoading={isLoading} />;
};
