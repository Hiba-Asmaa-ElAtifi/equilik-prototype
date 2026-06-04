function ClockIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function RidersIcon() {
  return <svg width="13" height="12" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.8"/><path d="M3 21c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="18" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6"/><path d="M15 21c0-2.5 1.3-4.5 3-5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
}

const BADGE_STYLE = {
  confirme:      { bg: 'rgba(18,60,140,0.4)',    color: '#93b4f5', dot: '#4a7fd4' },
  intermediaire: { bg: 'rgba(212,163,115,0.22)', color: '#D4A373', dot: '#D4A373' },
  debutant:      { bg: 'rgba(123,168,155,0.22)', color: '#7BA89B', dot: '#7BA89B' },
}

export default function SeanceCard({ seance }) {
  const badge = BADGE_STYLE[seance.levelKey] || BADGE_STYLE.debutant

  return (
    <div className="sc-card">
      {/* Image */}
      <div className="sc-card__image" style={{ background: seance.fallback }}>
        <img
          src={seance.image}
          alt={seance.title}
          className="sc-card__img"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>

      {/* Content */}
      <div className="sc-card__body">
        {/* Time + badge + price */}
        <div className="sc-card__top">
          <div className="sc-card__time-group">
            <span className="sc-card__time">{seance.time}</span>
            <span className="sc-card__badge" style={{ background: badge.bg, color: badge.color }}>
              {seance.level}
              <span className="sc-card__dot" style={{ background: badge.dot }} />
            </span>
          </div>
          <div className="sc-card__price-area">
            <span className="sc-card__price">{seance.price} <span className="sc-card__currency">MAD</span></span>
            <span className="sc-card__per">par pers.</span>
          </div>
        </div>

        {/* Title */}
        <p className="sc-card__title">{seance.title}</p>

        {/* Meta */}
        <div className="sc-card__meta">
          <span className="sc-card__meta-item"><ClockIcon />{seance.duration}</span>
          <span className="sc-card__meta-item"><RidersIcon />Max. {seance.maxRiders} cavaliers</span>
        </div>

        {/* Coach + réserver */}
        <div className="sc-card__footer">
          <div className="sc-card__coach">
            <div className="sc-card__avatar">
              <img
                src={seance.coachImage}
                alt={seance.coach}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <div>
              <p className="sc-card__coach-name">Avec <strong>{seance.coach}</strong></p>
              <p className="sc-card__coach-role">{seance.coachTitle}</p>
            </div>
          </div>
          <button className="sc-card__btn">Réserver</button>
        </div>
      </div>
    </div>
  )
}
