import React, { useState } from "react";

export const TodoDate = () => {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const startDateHandleChange = (event) => {
    const inputTask = event.target.value;
    setStartDate(inputTask);
  };

  const startTimeHandleChange = (event) => {
    const inputTask = event.target.value;
    setStartTime(inputTask);
  };

  const endDateHandleChange = (event) => {
    const inputTask = event.target.value;
    setEndDate(inputTask);
  };

  const endTimeHandleChange = (event) => {
    const inputTask = event.target.value;
    setEndTime(inputTask);
  };

  return (
    <div>
      <label className="font-black p-2" for="beginDateTask">
        Start Date:
      </label>
      <input
        className="pl-2"
        type="date"
        name="beginDateTask"
        onChange={(event) => startDateHandleChange(event)}
      ></input>
      <label className="font-black p-2" for="endDateTask">
        End Date:
      </label>
      <input
        className="pl-2"
        type="date"
        name="endDateTask"
        onChange={(event) => endDateHandleChange(event)}
      ></input>

      <label className="font-black p-2" for="beginTimeTask">
        Start Time:
      </label>
      <input
        className="pl-2"
        type="time"
        name="beginTimeTask"
        onChange={(event) => startTimeHandleChange(event)}
      ></input>
      <label className="font-black p-2" for="endTimeTask">
        End Time:
      </label>
      <input
        className="pl-2"
        type="time"
        name="endTimeTask"
        onChange={(event) => endTimeHandleChange(event)}
      ></input>
    </div>
  );
};
