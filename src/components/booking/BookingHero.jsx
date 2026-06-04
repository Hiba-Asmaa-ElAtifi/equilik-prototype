export default function BookingHero({ image, onBack, backIcon, bellIcon }) {
  return (
    <header className="booking-hero">
      <div className="booking-hero__bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="booking-hero__overlay" />
      <div className="booking-hero__nav">
        <button className="booking-hero__btn" onClick={onBack} aria-label="Retour">{backIcon}</button>
        <button className="booking-hero__btn" aria-label="Notifications">
          {bellIcon}
          <span className="booking-hero__badge">2</span>
        </button>
      </div>
      <div className="booking-hero__content">
        <h1>Réserver</h1>
        <p>Finalisez votre réservation</p>
      </div>
    </header>
  )
}
