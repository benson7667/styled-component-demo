import moment from "moment";
import localizationZhCn from "moment/locale/zh-cn";

export const getDurationAgo = (date, locale) => {
  return moment(date).locale(locale, localizationZhCn).fromNow();
};
