import { useState } from 'react'
import ReservationTabs   from '../../components/reservations/ReservationTabs'
import DateSelector      from '../../components/reservations/DateSelector'
import BookingCard       from '../../components/reservations/BookingCard'
import SeanceCard        from '../../components/reservations/SeanceCard'
import SubscriptionPlans from '../../components/reservations/SubscriptionPlans'
import BottomNav         from '../../components/reservations/BottomNav'
import './Reservations.css'

/* ── Image imports — place your files in src/assets/reservations/ ── */
import heroBalades  from '../../assets/reservations/reservation-hero.jpg'
import heroSeances  from '../../assets/reservations/session-hero.jpg'
import imgForest    from '../../assets/reservations/ride-forest.jpg'
import imgBeach     from '../../assets/reservations/ride-beach.jpg'
import imgCountry   from '../../assets/reservations/ride-country.jpg'
import imgDressageC from '../../assets/reservations/session-dressage-confirmed.jpg'
import imgObstacle  from '../../assets/reservations/session-obstacle.jpg'
import imgDressageB from '../../assets/reservations/session-dressage-beginner.jpg'
import coachThomas  from '../../assets/reservations/coach-thomas.jpg'
import coachJulie   from '../../assets/reservations/coach-julie.jpg'
import coachCamille from '../../assets/reservations/coach-camille.jpg'

/* ── Hero config ─────────────────────────────────────────────────── */
const HERO = {
  balades:     { title: 'Réservation',  subtitle: 'Balades, séances & abonnements', img: heroBalades },
  seances:     { title: 'Séances',      subtitle: 'Réservez votre prochaine séance', img: heroSeances },
  abonnements: { title: 'Abonnements',  subtitle: 'Progressez en toute sérénité',   img: heroSeances },
}

const LOCATION_LABEL = {
  balades: 'Où souhaitez-vous partir ?',
  seances: 'Centre équestre',
}

/* ── Mock data ───────────────────────────────────────────────────── */
const BALADES = [
  { id:1, title:'Balade en forêt',      level:'Tous niveaux',       duration:'1h30', maxRiders:6, price:450, popular:true,
    image: imgForest,  fallback:'linear-gradient(160deg,#0b2a14 0%,#1a4a22 45%,#0d3016 100%)' },
  { id:2, title:'Balade plage & dunes', level:'Intermédiaire et +', duration:'2h00', maxRiders:8, price:600, popular:false,
    image: imgBeach,   fallback:'linear-gradient(160deg,#0a1e3c 0%,#1a3a60 45%,#102848 100%)' },
  { id:3, title:'Balade campagne',      level:'Tous niveaux',       duration:'1h45', maxRiders:6, price:500, popular:false,
    image: imgCountry, fallback:'linear-gradient(160deg,#1a2c0c 0%,#354e18 45%,#263810 100%)' },
]

const SEANCES = [
  {
    id:1, time:'09:00', title:'Dressage – Confirmé',
    level:'Confirmé', levelKey:'confirme',
    duration:'1h00', maxRiders:4, price:550,
    image: imgDressageC, fallback:'linear-gradient(160deg,#14102a 0%,#2a1e50 45%,#0e0e20 100%)',
    coach:'Thomas L.', coachTitle:'Coach diplômé', coachImage: coachThomas,
  },
  {
    id:2, time:'11:00', title:'Obstacle – Intermédiaire',
    level:'Intermédiaire', levelKey:'intermediaire',
    duration:'1h15', maxRiders:6, price:600,
    image: imgObstacle, fallback:'linear-gradient(160deg,#2a1008 0%,#4a1e10 45%,#301408 100%)',
    coach:'Julie M.', coachTitle:'Coach diplômée', coachImage: coachJulie,
  },
  {
    id:3, time:'14:00', title:'Dressage – Débutant',
    level:'Débutant', levelKey:'debutant',
    duration:'1h00', maxRiders:5, price:500,
    image: imgDressageB, fallback:'linear-gradient(160deg,#0e1e0e 0%,#1c3418 45%,#122010 100%)',
    coach:'Camille D.', coachTitle:'Coach diplômée', coachImage: coachCamille,
  },
]

const CALENDAR_DAYS = [
  { day: 29, muted: true }, { day: 30, muted: true }, { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 },
  { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 },
  { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 },
  { day: 20 }, { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 },
  { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 }, { day: 1, muted: true }, { day: 2, muted: true },
  { day: 3, muted: true }, { day: 4, muted: true }, { day: 5, muted: true }, { day: 6, muted: true }, { day: 7, muted: true }, { day: 8, muted: true }, { day: 9, muted: true },
]

const SUGGESTED_LOCATIONS = [
  { name: 'Haras des Bois', icon: 'horseshoe' },
  { name: 'Royal Polo Club', icon: 'polo' },
  { name: 'Écuries de la Palmeraie', icon: 'horse' },
]

/* ── Icons ───────────────────────────────────────────────────────── */
const BackIcon    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const BellIcon    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
const PinIcon     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/></svg>
const ChevDown    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const FiltersIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const ArrowRight  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ChevRight   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const CloseIcon   = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const SearchIcon  = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.9"/><path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/></svg>
const CheckIcon   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
const HorseshoeSmall = () => <svg width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="M7 19v-5a5 5 0 0 1 10 0v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><path d="M5 19h4M15 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const PoloIcon = () => <svg width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="M4 20 18 4M8 4l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M5 18c2.6 1.3 4.8 1.2 6.7-.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
const HorseLineIcon = () => <svg width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="M15.5 3c-1.5 0-2.5.8-3 2L11 8l-2 .5-2 3.5H5l-1.5 3L5 16l.5 3.5H8L9 18h3.5l1 2H16l.5-4 .5-3-1-3V6c0-1.7-1.4-3-3-3h-2.5z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round"/></svg>
const CrownSmall  = () => (
  <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
    <path d="M2 16L5 6l4.5 5L11 2l1.5 9L17 6l3 10H2Z" fill="url(#cgs)" stroke="#D4A373" strokeWidth="1" strokeLinejoin="round"/>
    <rect x="2" y="16" width="18" height="3.5" rx="1" fill="url(#cgs)"/>
    <defs><linearGradient id="cgs" x1="2" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#E8B87A"/><stop offset="1" stopColor="#C49060"/></linearGradient></defs>
  </svg>
)

function LocationSuggestionIcon({ type }) {
  if (type === 'polo') return <PoloIcon />
  if (type === 'horse') return <HorseLineIcon />
  return <HorseshoeSmall />
}

/* ── Component ───────────────────────────────────────────────────── */
export default function Reservations() {
  const [activeTab,     setActiveTab]     = useState('balades')
  const [selectedDate,  setSelectedDate]  = useState(2)
  const [locationOpen,  setLocationOpen]  = useState(false)
  const [calendarOpen,  setCalendarOpen]  = useState(false)
  const [locationValue, setLocationValue] = useState('Haras des Bois')
  const [draftLocation, setDraftLocation] = useState('Haras des Bois')
  const [calendarValue, setCalendarValue] = useState('2024-05-24')

  const isBalades     = activeTab === 'balades'
  const isSeances     = activeTab === 'seances'
  const isAbonnements = activeTab === 'abonnements'

  const { title, subtitle, img } = HERO[activeTab]

  return (
    <div className="res-screen">

      {/* ── Hero ─────────────────────────────────────── */}
      <header className={`res-hero res-hero--${activeTab}`}>
        <div className="res-hero__bg" style={{ backgroundImage: `url(${img})` }} />
        <div className="res-hero__overlay" />

        <div className="res-hero__nav">
          <button className="res-hero__btn" aria-label="Retour"><BackIcon /></button>
          <button className="res-hero__btn" aria-label="Notifications" style={{ position:'relative' }}>
            <BellIcon />
            <span className="res-hero__badge">2</span>
          </button>
        </div>

        <div className="res-hero__content">
          <h1 className="res-hero__title">{title}</h1>
          <div className="res-hero__deco">
            <span className="res-hero__line" />
            <span className="res-hero__diamond" />
          </div>
          <p className="res-hero__subtitle">{subtitle}</p>
        </div>
      </header>

      {/* ── Scrollable body ──────────────────────────── */}
      <main className="res-body">

        <ReservationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Location */}
        {!isAbonnements && (
          <button className="res-location" onClick={() => {
            setDraftLocation(locationValue)
            setLocationOpen(true)
          }}>
            <div className="res-location__icon"><PinIcon /></div>
            <div className="res-location__text">
              <p className="res-location__label">{LOCATION_LABEL[activeTab]}</p>
              <p className="res-location__value">{locationValue}</p>
            </div>
            <span className="res-location__chevron"><ChevDown /></span>
          </button>
        )}

        {/* Date selector */}
        {!isAbonnements && (
          <DateSelector
            selectedIndex={selectedDate}
            onSelect={setSelectedDate}
            weekMode={isSeances}
            monthLabel={isSeances ? 'Mai 2024' : null}
            onCalendarOpen={() => setCalendarOpen(true)}
          />
        )}

        {/* ── BALADES ───────────────────────────────── */}
        {isBalades && (
          <>
            <section className="res-list">
              <div className="res-list__header">
                <p className="res-list__title">Balades disponibles</p>
                <p className="res-list__count">3 balades disponibles</p>
              </div>
              {BALADES.map(b => <BookingCard key={b.id} booking={b} />)}
            </section>
            <div className="res-actions">
              <button className="res-actions__filters"><FiltersIcon /> Filtres</button>
              <button className="res-actions__planning">Voir le planning <ArrowRight /></button>
            </div>
          </>
        )}

        {/* ── SÉANCES ───────────────────────────────── */}
        {isSeances && (
          <>
            <section className="res-list">
              <div className="res-list__header">
                <p className="res-list__title">Séances disponibles</p>
                <button className="res-list__filter-btn"><FiltersIcon /> Filtrer <ChevRight /></button>
              </div>
              {SEANCES.map(s => <SeanceCard key={s.id} seance={s} />)}
            </section>
            <div className="res-upsell">
              <div className="res-upsell__icon"><CrownSmall /></div>
              <div className="res-upsell__text">
                <p className="res-upsell__title">Abonnement séance</p>
                <p className="res-upsell__desc">Économisez jusqu'à 20% sur vos séances</p>
              </div>
              <span className="res-upsell__arrow"><ChevRight /></span>
            </div>
          </>
        )}

        {/* ── ABONNEMENTS ───────────────────────────── */}
        {isAbonnements && <SubscriptionPlans />}

      </main>

      <BottomNav activeItem="reservations" />

      {locationOpen && (
        <div className="res-sheet res-sheet--location" role="dialog" aria-modal="true" aria-label="Choisir un lieu">
          <button className="res-sheet__backdrop" onClick={() => setLocationOpen(false)} aria-label="Fermer" />
          <div className="res-sheet__panel">
            <div className="res-sheet__handle" />
            <button className="res-sheet__close" onClick={() => setLocationOpen(false)} aria-label="Fermer">
              <CloseIcon />
            </button>
            <div className="res-sheet__icon"><PinIcon /></div>
            <p className="res-sheet__eyebrow">Lieu de départ</p>
            <h2 className="res-sheet__title">Où souhaitez-vous partir ?</h2>
            <p className="res-sheet__subtitle">Recherchez un club ou une ville</p>
            <label className="res-field">
              <span className="res-field__icon"><SearchIcon /></span>
              <input
                autoFocus
                value={draftLocation}
                onChange={(event) => setDraftLocation(event.target.value)}
                placeholder="Rechercher un lieu..."
              />
            </label>
            <p className="res-sheet__section-label">Lieux suggérés</p>
            <div className="res-suggestions">
              {SUGGESTED_LOCATIONS.map((place) => (
                <button
                  key={place.name}
                  className={draftLocation === place.name ? 'res-suggestion--selected' : ''}
                  onClick={() => setDraftLocation(place.name)}
                >
                  <span className="res-suggestion__icon"><LocationSuggestionIcon type={place.icon} /></span>
                  <span>{place.name}</span>
                  {draftLocation === place.name && <span className="res-suggestion__check"><CheckIcon /></span>}
                </button>
              ))}
            </div>
            <button
              className="res-sheet__primary"
              onClick={() => {
                setLocationValue(draftLocation.trim() || 'Haras des Bois')
                setLocationOpen(false)
              }}
            >
              Valider le lieu <ArrowRight />
            </button>
            <p className="res-sheet__note">Vous pourrez modifier ce lieu à tout moment</p>
          </div>
        </div>
      )}

      {calendarOpen && (
        <div className="res-sheet res-sheet--calendar" role="dialog" aria-modal="true" aria-label="Choisir une date">
          <button className="res-sheet__backdrop" onClick={() => setCalendarOpen(false)} aria-label="Fermer" />
          <div className="res-sheet__panel">
            <div className="res-calendar__head">
              <button className="res-calendar__month">mai 2024 <ChevDown /></button>
              <button className="res-calendar__close" onClick={() => setCalendarOpen(false)} aria-label="Fermer">
                <CloseIcon />
              </button>
            </div>
            <div className="res-calendar__weekdays">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day) => <span key={day}>{day}</span>)}
            </div>
            <div className="res-calendar__grid">
              {CALENDAR_DAYS.map((date, index) => {
                const isSelected = !date.muted && calendarValue === `2024-05-${String(date.day).padStart(2, '0')}`
                return (
                  <button
                    key={`${date.day}-${index}`}
                    className={`${date.muted ? 'res-calendar__day--muted' : ''}${isSelected ? ' res-calendar__day--selected' : ''}`}
                    onClick={() => {
                      if (!date.muted) setCalendarValue(`2024-05-${String(date.day).padStart(2, '0')}`)
                    }}
                  >
                    {date.day}
                  </button>
                )
              })}
            </div>
            <div className="res-calendar__actions">
              <button onClick={() => setCalendarOpen(false)}>Annuler</button>
              <button onClick={() => setCalendarOpen(false)}>Confirmer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
