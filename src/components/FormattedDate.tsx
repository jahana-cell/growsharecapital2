'use client';

import { formatInTimeZone } from 'date-fns-tz';
import { Timestamp } from 'firebase/firestore';

function FormattedDate({ dateValue }: { dateValue: string | Date | Timestamp | null | undefined }) {
  if (!dateValue) {
    return null;
  }

  try {
    const date = dateValue instanceof Timestamp ? dateValue.toDate() : new Date(dateValue);
    const formattedDate = formatInTimeZone(date, 'UTC', 'MMMM d, yyyy');
    return <>{formattedDate}</>;
  } catch (e) {
    return <>Invalid Date</>;
  }
}

export default FormattedDate;
