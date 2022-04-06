import dayjs from "dayjs";

export function formateDate(date: string | Date) {
  return dayjs(date).format("DD [de] MMMM [de] YYYY");
}
