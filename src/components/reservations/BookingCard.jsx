function ClockIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function RidersIcon() {
  return <svg width="13" height="12" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.8"/><path d="M3 21c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="18" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6"/><path d="M15 21c0-2.5 1.3-4.5 3-5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
}
function StarIcon() {
  return <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.8.6-5 4.6 1.5 6.7L12 17.2l-6.2 3-1.5-6.7-5-4.6 6.8-.6z"/></svg>
}
function ArrowIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

export default function BookingCard({ booking }) {
  return (
    <div className="booking-card">
      <div className="booking-card__image" style={{ background: booking.fallback }}>
        <img
          src={booking.image}
          alt=""
          className="booking-card__img"
          style={{ display: 'none' }}
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth > 4) e.currentTarget.style.display = 'block'
          }}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        {booking.popular && (
          <div className="booking-card__badge"><StarIcon /> Populaire</div>
        )}
      </div>

      <div className="booking-card__body">
        <div className="booking-card__top">
          <div className="booking-card__info">
            <p className="booking-card__title">{booking.title}</p>
            <p className="booking-card__level">{booking.level}</p>
          </div>
          <div className="booking-card__price-area">
            <p className="booking-card__price">{booking.price} <span className="booking-card__currency">MAD</span></p>
            <p className="booking-card__per">par pers.</p>
          </div>
        </div>

        <div className="booking-card__bottom">
          <div className="booking-card__meta">
            <span className="booking-card__meta-item"><ClockIcon /> {booking.duration}</span>
            <span className="booking-card__meta-item"><RidersIcon /> Max. {booking.maxRiders} cavaliers</span>
          </div>
          <button className="booking-card__arrow" aria-label="Voir détails"><ArrowIcon /></button>
        </div>
      </div>
    </div>
  )
}
