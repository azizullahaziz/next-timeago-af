import * as React from "react";
import { formatTimeAgo } from "../timeago";
import type { LocaleCode, TimeAgoOptions } from "../types";

export interface TimeAgoProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  date: Date | number;
  /** Defaults to "en" */
  locale?: LocaleCode;
  /** Pass-through formatting options */
  options?: Omit<TimeAgoOptions, "locale">;
  as?: keyof JSX.IntrinsicElements;
}

export function TimeAgo({ date, locale = "en", options, as, ...rest }: TimeAgoProps) {
  const Component = (as ?? "span") as any;
  const text = React.useMemo(() => formatTimeAgo(date, { ...options, locale }), [date, locale, options]);
  return <Component {...rest}>{text}</Component>;
}
