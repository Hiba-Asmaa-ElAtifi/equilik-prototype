const DATES_5 = [
  { day: 'Mer', num: 22, month: 'Mai', hasDot: false },
  { day: 'Jeu', num: 23, month: 'Mai', hasDot: false },
  { day: 'Ven', num: 24, month: 'Mai', hasDot: true },
  { day: 'Sam', num: 25, month: 'Mai', hasDot: true },
  { day: 'Dim', num: 26, month: 'Mai', hasDot: false },
]

const DATES_7 = [
  { day: 'Lun', num: 20, month: 'Mai', hasDot: false },
  { day: 'Mar', num: 21, month: 'Mai', hasDot: false },
  { day: 'Mer', num: 22, month: 'Mai', hasDot: true },
  { day: 'Jeu', num: 23, month: 'Mai', hasDot: false },
  { day: 'Ven', num: 24, month: 'Mai', hasDot: true },
  { day: 'Sam', num: 25, month: 'Mai', hasDot: true },
  { day: 'Dim', num: 26, month: 'Mai', hasDot: false },
]

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="15" r="1.2" fill="currentColor"/>
      <circle cx="7.5" cy="15" r="1.2" fill="currentColor"/>
      <circle cx="16.5" cy="15" r="1.2" fill="currentColor"/>
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function DateSelector({ selectedIndex, onSelect, weekMode = false, monthLabel = null, onCalendarOpen }) {
  const dates = weekMode ? DATES_7 : DATES_5

  return (
    <div className="date-selector">
      <div className="date-selector__header-row">
        <p className="date-selector__header">Choisir une date</p>
        {monthLabel && (
          <button className="date-selector__month-btn" onClick={onCalendarOpen}>
            {monthLabel} <ChevronRight />
          </button>
        )}
      </div>
      <div className="date-selector__scroll">
        {dates.map((d, i) => (
          <button
            key={i}
            className={`date-card${selectedIndex === i ? ' date-card--active' : ''}`}
            onClick={() => onSelect(i)}
          >
            <span className="date-card__day">{d.day}</span>
            <span className="date-card__num">{d.num}</span>
            <span className="date-card__month">{d.month}</span>
            {d.hasDot && <span className="date-card__dot" />}
          </button>
        ))}
        <button className="date-card date-card--cal" aria-label="Ouvrir calendrier" onClick={onCalendarOpen}>
          <CalendarIcon />
        </button>
      </div>
    </div>
  )
}
