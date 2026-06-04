export default function BookingDetails({ booking, location, dateLabel, onEditLocation, onEditDate, onEditTime, icons }) {
  const rows = [
    { icon: icons.pin, label: 'Centre équestre', value: location, action: onEditLocation, actionText: 'Modifier' },
    { icon: icons.calendar, label: 'Date', value: dateLabel, action: onEditDate, actionText: 'Modifier' },
    { icon: icons.clockLarge, label: 'Heure', value: booking.time || '09:00', action: onEditTime || onEditDate, actionText: 'Modifier' },
  ]

  return (
    <section className="booking-section">
      <h2>Détails de la réservation</h2>
      <div className="booking-detail-list">
        {rows.map((row) => (
          <button key={row.label} className="booking-detail-row" onClick={row.action || undefined}>
            <span className="booking-detail-row__icon">{row.icon}</span>
            <span className="booking-detail-row__text">
              <strong>{row.value}</strong>
              <small>{row.label}</small>
            </span>
            <span className="booking-detail-row__action">{row.action ? row.actionText : row.actionText}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
