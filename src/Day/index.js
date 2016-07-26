import React from 'react';
const style = require('./Day.scss');

export default function Day({currentYear, info, date, day, handleDayClick, isDisabled, isToday, isSelected, monthShort, locale, theme}) {
	var {date: mmt, yyyymmdd} = date;
	var year = mmt.year();

	return (
		<li
			style={(isToday) ? {color: theme.todayColor} : null}
			className={`${style.root}${isToday ? ' ' + style.today : ''}${isSelected ? ' ' + style.selected : ''}${isDisabled ? ' ' + style.disabled : ' ' + style.enabled}`}
			data-date={yyyymmdd}
			onClick={(!isDisabled && handleDayClick) ? handleDayClick.bind(this, mmt) : null}
		>
			{(day === 1) && <span className={style.month}>{monthShort}</span>}
			<span className={style.day}>{day}</span>
			<div className={style.marker}>
				{info && info.photo && <img className={style.img} src={info.photo[0].url} /> }
				{info && info.note && !!info.note.length && <span className={style.note} /> }
			</div>
			{(day === 1 && currentYear !== year) && <span className={style.year}>{year}</span>}
			{isSelected &&
				<div className={style.selection} style={{backgroundColor: (typeof theme.selectionColor == 'function') ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active}}>
					<span className={style.month}>{(isToday) ? (locale.todayLabel.short || locale.todayLabel.long) : monthShort}</span>
					<span className={style.day}>{day}</span>
				</div>
			}
		</li>
	);
}
