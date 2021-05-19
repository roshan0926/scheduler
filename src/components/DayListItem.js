import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const DayListItemClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  })

  const formatSpots = function() {
    const spotsRemaining = props.spots;

    if (!spotsRemaining) {
      return `no spots remaining`;
    } else {
      return (spotsRemaining === 1 ? `1 spot remaining` : `${spotsRemaining} spots remaining`);
    }
  }

  return (
    <li data-testid="day" className={DayListItemClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}