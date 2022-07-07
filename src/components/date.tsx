import { format, parseISO } from "date-fns";

export default function Date(input: { dateString: string }) {
  const { dateString } = input;  
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}