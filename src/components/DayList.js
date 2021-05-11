import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const daysData = props.days; // Array of day objects [{}]
  const daysList = daysData.map((day) => {
    return (
      < DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day} // Check to see if the day that is selected matches the name in the props (this avoids passing the currently selected day to each DayListItem)
        setDay={props.setDay}
      />
    );
  });
  return (
    <ul>{daysList}</ul>
  )
};