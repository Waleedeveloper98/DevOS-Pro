import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now
        .toLocaleString("en-US", {
          month: "short",
          weekday: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase()
        .replace(/,/g, "");
      setCurrentDate(formattedDateTime);
    };

    updateDateTime();
    const interval = setInterval(() => {
      updateDateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div className="dateTime">{currentDate}</div>;
};

export default DateTime;
