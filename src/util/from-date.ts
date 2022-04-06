import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/pt";

dayjs.extend(relativeTime);
dayjs.locale("pt");

export function fromDate(start: Date | string) {
  return dayjs(start).fromNow();
}
