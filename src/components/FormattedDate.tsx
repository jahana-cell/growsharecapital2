'use client';

import { useState, useEffect } from 'react';
import { formatInTimeZone } from 'date-fns-tz';
import { Timestamp } from 'firebase/firestore';

function FormattedDate({ dateValue }: { dateValue: string | Date | Timestamp | null | undefined }) {
  const [formattedDate, setFormattedDate] = useState('');
  useEffect(() => {
    if (!dateValue) {
      setFormattedDate('');
      return;
    }
    try {
      const date = dateValue instanceof Timestamp ? dateValue.toDate() : new Date(dateValue);
      setFormattedDate(formatInTimeZone(date, 'UTC', 'MMMM d, yyyy'));
    } catch (e) {
      setFormattedDate('Invalid Date');
    }
  }, [dateValue]);
  return <>{formattedDate}</>;
}

export default FormattedDate;
