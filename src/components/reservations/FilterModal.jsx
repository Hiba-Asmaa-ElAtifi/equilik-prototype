import { useState } from 'react'

const LEVELS = ['Tous niveaux', 'Débutant', 'Intermédiaire', 'Confirmé']
const DURATIONS = ["Moins d'1h", '1h – 2h', '2h – 4h', 'Plus de 4h']
const EXPERIENCES = ['Relaxation', 'Sportive', 'Dressage', 'Découverte', 'Luxe / VIP']
const COACHES = ['Tous les coachs', 'Thomas L.', 'Julie M.', 'Camille D.']

const TYPES = [
  { label: 'Forêt', icon: 'tree' },
  { label: 'Plage', icon: 'sunSea' },
  { label: 'Campagne', icon: 'field' },
  { label: 'Montagne', icon: 'mountain' },
  { label: 'Coucher de soleil', icon: 'sunset' },
  { label: 'Privée', icon: 'lock' },
]

const POPULARITY = [
  { label: 'Les plus populaires', icon: 'star' },
  { label: 'Les mieux notées', icon: 'medal' },
]

const CloseIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ResetIcon = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 13.6-5.7L20 9M20 4v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 12a8 8 0 0 1-13.6 5.7L4 15M4 20v-5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ArrowIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const UserIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
const ChevDown = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>

function TypeIcon({ type }) {
  const common = { stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }
  if (type === 'tree') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="m12 3-4 6h2l-4 6h4v5h4v-5h4l-4-6h2l-4-6Z" /></svg>
  if (type === 'sunSea') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M5 16c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1M4 20c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1M8 12a4 4 0 0 1 8 0M12 4v2M5 8l1.5 1.5M19 8l-1.5 1.5" /></svg>
  if (type === 'field') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M3 18c4-4 7-5 10-3 2 1.3 4 1.4 8-1M5 14c3-3 5-4 8-2 2 1.3 4 1.2 6-.8M8 10h1M16 8h1M12 6v5" /></svg>
  if (type === 'mountain') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="m3 19 7-12 4 6 2-3 5 9H3Z" /><path {...common} d="m10 7 1.8 3.2L10 10.8" /></svg>
  if (type === 'sunset') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M4 18h16M6 14a6 6 0 0 1 12 0M12 4v2M5 8l1.5 1.5M19 8l-1.5 1.5M8 21h8" /></svg>
  return <svg width="27" height="27" viewBox="0 0 24 24"><rect {...common} x="6" y="10" width="12" height="10" rx="2" /><path {...common} d="M9 10V7a3 3 0 0 1 6 0v3M12 14v2" /></svg>
}

function PopularityIcon({ type }) {
  if (type === 'medal') return <svg width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="m8 3 4 6 4-6M12 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="m12 12 1 2 2 .2-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L9 14.2l2-.2 1-2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
  return <svg width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
}

function PillGroup({ options, value, onChange }) {
  return (
    <div className="filter-pills">
      {options.map((option) => (
        <button
          key={option}
          className={value === option ? 'filter-pill filter-pill--active' : 'filter-pill'}
          onClick={() => onChange(option)}
        >
          {option}
          {value === option && <span><CheckIcon /></span>}
        </button>
      ))}
    </div>
  )
}

export default function FilterModal({ open, onClose }) {
  const [level, setLevel] = useState('Tous niveaux')
  const [duration, setDuration] = useState('2h – 4h')
  const [rideType, setRideType] = useState('Forêt')
  const [riders, setRiders] = useState(2)
  const [budget, setBudget] = useState(520)
  const [experience, setExperience] = useState('Relaxation')
  const [popularity, setPopularity] = useState('Les plus populaires')
  const [coach, setCoach] = useState('Tous les coachs')

  if (!open) return null

  const resetFilters = () => {
    setLevel('Tous niveaux')
    setDuration('2h – 4h')
    setRideType('Forêt')
    setRiders(2)
    setBudget(520)
    setExperience('Relaxation')
    setPopularity('Les plus populaires')
    setCoach('Tous les coachs')
  }

  return (
    <div className="filter-modal" role="dialog" aria-modal="true" aria-label="Filtres">
      <button className="filter-modal__backdrop" onClick={onClose} aria-label="Fermer les filtres" />
      <section className="filter-modal__sheet">
        <div className="filter-modal__handle" />
        <button className="filter-modal__close" onClick={onClose} aria-label="Fermer">
          <CloseIcon />
        </button>

        <header className="filter-modal__header">
          <h2>Filtres</h2>
          <p>Affinez votre recherche</p>
        </header>

        <div className="filter-modal__content">
          <section className="filter-block">
            <p className="filter-block__label">Niveau</p>
            <PillGroup options={LEVELS} value={level} onChange={setLevel} />
          </section>

          <section className="filter-block">
            <p className="filter-block__label">Durée</p>
            <PillGroup options={DURATIONS} value={duration} onChange={setDuration} />
          </section>

          <section className="filter-block">
            <p className="filter-block__label">Type de balade</p>
            <div className="filter-type-grid">
              {TYPES.map((type) => (
                <button
                  key={type.label}
                  className={rideType === type.label ? 'filter-type-card filter-type-card--active' : 'filter-type-card'}
                  onClick={() => setRideType(type.label)}
                >
                  {rideType === type.label && <span className="filter-type-card__check"><CheckIcon /></span>}
                  <span className="filter-type-card__icon"><TypeIcon type={type.icon} /></span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="filter-block">
            <p className="filter-block__label">Nombre de cavaliers</p>
            <div className="filter-riders">
              <button onClick={() => setRiders(Math.max(1, riders - 1))} aria-label="Retirer un cavalier">−</button>
              {[1, 2, 3, 4, 5, 6, 7].map((count) => (
                <button
                  key={count}
                  className={riders === count ? 'filter-riders__number filter-riders__number--active' : 'filter-riders__number'}
                  onClick={() => setRiders(count)}
                >
                  {count}
                </button>
              ))}
              <button
                className={riders >= 8 ? 'filter-riders__number filter-riders__number--active' : 'filter-riders__number'}
                onClick={() => setRiders(8)}
              >
                8+
              </button>
              <button onClick={() => setRiders(Math.min(8, riders + 1))} aria-label="Ajouter un cavalier">+</button>
            </div>
          </section>

          <section className="filter-block">
            <div className="filter-budget__head">
              <p className="filter-block__label">Budget par personne</p>
              <span>{budget} MAD</span>
            </div>
            <div className="filter-budget__labels">
              <span>200 MAD</span>
              <span>800 MAD et +</span>
            </div>
            <input
              className="filter-budget__range"
              type="range"
              min="200"
              max="800"
              step="50"
              value={budget}
              onChange={(event) => setBudget(Number(event.target.value))}
              style={{ '--filter-progress': `${((budget - 200) / 600) * 100}%` }}
            />
          </section>

          <section className="filter-block">
            <p className="filter-block__label">Expérience</p>
            <PillGroup options={EXPERIENCES} value={experience} onChange={setExperience} />
          </section>

          <section className="filter-block">
            <p className="filter-block__label">Popularité</p>
            <div className="filter-popularity">
              {POPULARITY.map((item) => (
                <button
                  key={item.label}
                  className={popularity === item.label ? 'filter-popularity__card filter-popularity__card--active' : 'filter-popularity__card'}
                  onClick={() => setPopularity(item.label)}
                >
                  <PopularityIcon type={item.icon} />
                  <span>{item.label}</span>
                  {popularity === item.label && <small><CheckIcon /></small>}
                </button>
              ))}
            </div>
          </section>

          <section className="filter-block">
            <p className="filter-block__label">Coach</p>
            <label className="filter-select">
              <UserIcon />
              <select value={coach} onChange={(event) => setCoach(event.target.value)}>
                {COACHES.map((item) => <option key={item}>{item}</option>)}
              </select>
              <ChevDown />
            </label>
          </section>
        </div>

        <footer className="filter-modal__actions">
          <button className="filter-modal__reset" onClick={resetFilters}>
            <ResetIcon />
            Réinitialiser
          </button>
          <button className="filter-modal__submit" onClick={onClose}>
            Voir les résultats
            <ArrowIcon />
          </button>
        </footer>
      </section>
    </div>
  )
}
