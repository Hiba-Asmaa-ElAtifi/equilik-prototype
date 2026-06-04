export default function BookingSummaryCard({ booking, icons }) {
  const riderLabel = `${booking.maxRiders} cavalier${booking.maxRiders > 1 ? 's' : ''}`

  return (
    <section className="booking-summary-card">
      <div className="booking-summary-card__image">
        <img src={booking.image} alt="" />
      </div>
      <div className="booking-summary-card__body">
        <div className="booking-summary-card__top">
          <div>
            <h2>{booking.title}</h2>
            <span className={`booking-level booking-level--${booking.levelKey || 'standard'}`}>{booking.level}</span>
          </div>
          <div className="booking-summary-card__price">
            <strong>{booking.price} MAD</strong>
            <span>par pers.</span>
          </div>
        </div>
        <div className="booking-summary-card__meta">
          <span>{icons.clock}{booking.duration}</span>
          <span>{icons.riders}Max. {riderLabel}</span>
        </div>
        {booking.coach && (
          <div className="booking-summary-card__coach">
            <img src={booking.coachImage} alt="" />
            <div>
              <p>Avec <strong>{booking.coach}</strong></p>
              <span>{booking.coachTitle}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
