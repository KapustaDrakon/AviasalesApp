import React from 'react';
import { format } from 'date-fns';

import classes from './TicketsListItem.module.scss';

const TicketsListItem = ({ ticket }) => {
  const carrierLogo = (carrier) => {
    return `https://pics.avs.io/99/36/${carrier}.png`;
  };

  const showTimeFly = (date, duration) => {
    const dateFormat = format(new Date(date), 'HH:mm');
    const dateFormatHours = dateFormat.slice(0, 2);
    const dateFormatMinutes = dateFormat.slice(3, 5);
    const dateInMinutes = Number(dateFormatHours * 60 + Number(dateFormatMinutes)) + Number(duration);
    const minutes = (dateInMinutes % 60).toString().padStart(2, '0');
    const hours = Math.abs((dateInMinutes - minutes) / 60 - 24)
      .toString()
      .padStart(2, '0');

    return `${dateFormat} - ${hours}:${minutes}`;
  };

  const changes = (stops) => {
    if (stops.length === 0) {
      return <div>БЕЗ ПЕРЕСАДОК</div>;
    }
    if (stops.length === 1) {
      return <div>1 ПЕРЕСАДКА</div>;
    }
    if (stops.length === 2) {
      return <div>2 ПЕРЕСАДКИ</div>;
    }
    if (stops.length === 3) {
      return <div>3 ПЕРЕСАДКИ</div>;
    }
  };

  const showChanges = (stops) => stops.join(', ');

  return (
    <div className={classes.item__container}>
      <div className={classes['item__price-info']}>
        <div className={classes.item__price}>{`${ticket.price} P`}</div>
        <div>
          <img src={carrierLogo(ticket.carrier)} alt={`Logo_${ticket.carrier}`} />
        </div>
      </div>

      <div className={classes['item__time-info']}>
        <div className={classes.item__time}>
          <div className={classes.item__path}>{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</div>
          <div className={classes['item__path-info']}>
            {showTimeFly(ticket.segments[0].date, ticket.segments[0].duration)}
          </div>
        </div>
        <div className={classes.item__time}>
          <div className={classes.item__time}>
            <div className={classes.item__path}>В ПУТИ</div>
            <div className={classes['item__path-info']}>{`${Math.floor(ticket.segments[0].duration / 60)}ч ${
              ticket.segments[0].duration - Math.floor(ticket.segments[0].duration / 60) * 60
            }м`}</div>
          </div>
        </div>
        <div className={classes.item__time}>
          <div className={classes.item__time}>
            <div className={classes.item__path}>{changes(ticket.segments[0].stops)}</div>
            <div className={classes['item__path-info']}>{showChanges(ticket.segments[0].stops)}</div>
          </div>
        </div>
      </div>

      <div className={classes['item__time-info']}>
        <div className={classes.item__time}>
          <div className={classes.item__path}>{`${ticket.segments[1].origin} - ${ticket.segments[1].destination}`}</div>
          <div className={classes['item__path-info']}>
            {showTimeFly(ticket.segments[1].date, ticket.segments[1].duration)}
          </div>
        </div>
        <div className={classes.item__time}>
          <div className={classes.item__time}>
            <div className={classes.item__path}>В ПУТИ</div>
            <div className={classes['item__path-info']}>{`${Math.floor(ticket.segments[1].duration / 60)}ч ${
              ticket.segments[1].duration - Math.floor(ticket.segments[1].duration / 60) * 60
            }м`}</div>
          </div>
        </div>
        <div className={classes.item__time}>
          <div className={classes.item__time}>
            <div className={classes.item__path}>{changes(ticket.segments[1].stops)}</div>
            <div className={classes['item__path-info']}>{showChanges(ticket.segments[1].stops)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsListItem;
