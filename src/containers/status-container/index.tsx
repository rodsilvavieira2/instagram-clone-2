import { StatusBar } from "../../components/status-bar";
import { useGetStatusQuery } from "../../redux/api/status";

export function StatusContainer() {
  const { data = [] } = useGetStatusQuery(undefined);

  return <StatusBar items={data} />;
}
