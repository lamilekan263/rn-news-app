import { format } from 'date-fns';

export function dateFormat(date) {
  return format(new Date(date), 'MM/dd/yyyy');
}
