import { useEffect, useState } from 'react'

export const BALADE_FILTER_DEFAULTS = {
  level: 'Tous niveaux',
  rideType: 'Tous',
  duration: 'Toutes durées',
  riders: 'Tous',
  budget: 800,
  experience: 'Toutes',
  popularity: 'Tous',
  coach: 'Tous les coachs',
}

export const SEANCE_FILTER_DEFAULTS = {
  level: 'Tous niveaux',
  discipline: 'Toutes',
  duration: 'Toutes durées',
  riders: 'Tous',
  timeSlot: 'Tous',
  coach: 'Tous les coachs',
  horseLevel: 'Tous',
  availableOnly: false,
  price: 800,
  sortBy: 'Date',
}

const BALADE_LEVELS = ['Tous niveaux', 'Débutant', 'Intermédiaire', 'Confirmé']
const BALADE_DURATIONS = ['Toutes durées', "Moins d'1h", '1h – 2h', '2h – 4h', 'Plus de 4h']
const BALADE_EXPERIENCES = ['Toutes', 'Relaxation', 'Sportive', 'Découverte', 'Luxe / VIP']
const BALADE_TYPES = [
  { label: 'Tous', icon: 'horse' },
  { label: 'Forêt', icon: 'tree' },
  { label: 'Plage', icon: 'sunSea' },
  { label: 'Campagne', icon: 'field' },
  { label: 'Montagne', icon: 'mountain' },
  { label: 'Coucher de soleil', icon: 'sunset' },
  { label: 'Privée', icon: 'lock' },
]

const SEANCE_LEVELS = ['Tous niveaux', 'Débutant', 'Intermédiaire', 'Confirmé']
const SEANCE_DISCIPLINES = [
  { label: 'Toutes', icon: 'horse' },
  { label: 'Dressage', icon: 'dressage' },
  { label: 'Obstacle', icon: 'jump' },
  { label: "Saut d'obstacles", icon: 'barrier' },
  { label: 'Cross', icon: 'cross' },
  { label: 'Travail au sol', icon: 'ground' },
  { label: 'Autres', icon: 'dots' },
]
const SEANCE_DURATIONS = ['Toutes durées', '<1h', '1h–1h30', '1h30–2h', '2h+']
const TIME_SLOTS = ['Tous', 'Morning', 'Afternoon', 'Evening']
const HORSE_LEVELS = ['Tous', 'Calme', 'Énergique', 'Sportif']
const SORT_OPTIONS = ['Date', 'Prix', 'Popularité']
const COACHES = ['Tous les coachs', 'Thomas L.', 'Julie M.', 'Camille D.']
const POPULARITY = ['Tous', 'Les plus populaires', 'Les mieux notées']

const CloseIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ResetIcon = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 13.6-5.7L20 9M20 4v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 12a8 8 0 0 1-13.6 5.7L4 15M4 20v-5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ArrowIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const UserIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
const ChevDown = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const SunIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
const MoonIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 15.3A8 8 0 0 1 8.7 4a7 7 0 1 0 11.3 11.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>

function TypeIcon({ type }) {
  const common = { stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }
  if (type === 'tree') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="m12 3-4 6h2l-4 6h4v5h4v-5h4l-4-6h2l-4-6Z" /></svg>
  if (type === 'sunSea') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M5 16c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1M4 20c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1M8 12a4 4 0 0 1 8 0M12 4v2M5 8l1.5 1.5M19 8l-1.5 1.5" /></svg>
  if (type === 'field') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M3 18c4-4 7-5 10-3 2 1.3 4 1.4 8-1M5 14c3-3 5-4 8-2 2 1.3 4 1.2 6-.8M8 10h1M16 8h1M12 6v5" /></svg>
  if (type === 'mountain') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="m3 19 7-12 4 6 2-3 5 9H3Z" /><path {...common} d="m10 7 1.8 3.2L10 10.8" /></svg>
  if (type === 'sunset') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M4 18h16M6 14a6 6 0 0 1 12 0M12 4v2M5 8l1.5 1.5M19 8l-1.5 1.5M8 21h8" /></svg>
  if (type === 'lock') return <svg width="27" height="27" viewBox="0 0 24 24"><rect {...common} x="6" y="10" width="12" height="10" rx="2" /><path {...common} d="M9 10V7a3 3 0 0 1 6 0v3M12 14v2" /></svg>
  if (type === 'dressage') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M5 18h14M7 16c2-5 6-7 10-4M9 13l-2-3 3-2 4 2 3-1 2 3M10 8V5M15 10l1 4" /></svg>
  if (type === 'jump') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M4 18h16M7 15c3-5 7-7 11-3M10 12l-2-3 3-2 4 2 2-1M17 15v3" /></svg>
  if (type === 'barrier') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M5 6v13M19 6v13M7 10h10M7 15h10" /></svg>
  if (type === 'cross') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M4 18c4-5 7-6 10-3 2 2 4 2 6 0M7 15l2-4 4 2 2-5M16 8h3v3" /></svg>
  if (type === 'ground') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M4 17h16M6 13c3-2 5-2 8 0 2 1.3 4 1.3 6 0M8 9h8M10 6h4" /></svg>
  if (type === 'dots') return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M5 12h.01M12 12h.01M19 12h.01" /></svg>
  return <svg width="27" height="27" viewBox="0 0 24 24"><path {...common} d="M5 16c2-5 6-8 11-5M7 17h11M9 10l-2-3 3-2 4 2 3-1" /></svg>
}

function PopularityIcon({ type }) {
  if (type === 'Les mieux notées') return <svg width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="m8 3 4 6 4-6M12 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="m12 12 1 2 2 .2-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L9 14.2l2-.2 1-2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
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

function CardGrid({ options, value, onChange }) {
  return (
    <div className="filter-type-grid">
      {options.map((option) => (
        <button
          key={option.label}
          className={value === option.label ? 'filter-type-card filter-type-card--active' : 'filter-type-card'}
          onClick={() => onChange(option.label)}
        >
          {value === option.label && <span className="filter-type-card__check"><CheckIcon /></span>}
          <span className="filter-type-card__icon"><TypeIcon type={option.icon} /></span>
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  )
}

function RiderStepper({ value, onChange }) {
  return (
    <div className="filter-riders">
      <button onClick={() => onChange(value === 'Tous' ? 1 : Math.max(1, value - 1))} aria-label="Retirer un cavalier">−</button>
      <button className={value === 'Tous' ? 'filter-riders__number filter-riders__number--active' : 'filter-riders__number'} onClick={() => onChange('Tous')}>Tous</button>
      {[1, 2, 3, 4, 5, 6, 7].map((count) => (
        <button
          key={count}
          className={value === count ? 'filter-riders__number filter-riders__number--active' : 'filter-riders__number'}
          onClick={() => onChange(count)}
        >
          {count}
        </button>
      ))}
      <button className={value === 8 ? 'filter-riders__number filter-riders__number--active' : 'filter-riders__number'} onClick={() => onChange(8)}>8+</button>
      <button onClick={() => onChange(value === 'Tous' ? 1 : Math.min(8, value + 1))} aria-label="Ajouter un cavalier">+</button>
    </div>
  )
}

function RangeField({ label, value, onChange }) {
  return (
    <section className="filter-block">
      <div className="filter-budget__head">
        <p className="filter-block__label">{label}</p>
        <span>{value} MAD</span>
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
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ '--filter-progress': `${((value - 200) / 600) * 100}%` }}
      />
    </section>
  )
}

function SelectField({ label, value, options, onChange, sort }) {
  return (
    <section className="filter-block">
      <p className="filter-block__label">{label}</p>
      <label className="filter-select">
        {sort ? <span className="filter-select__sort">↕</span> : <UserIcon />}
        <select value={value} onChange={(event) => onChange(event.target.value)}>
          {options.map((item) => <option key={item}>{item}</option>)}
        </select>
        <ChevDown />
      </label>
    </section>
  )
}

export default function FilterModal({ open, mode, filters, onApply, onClose }) {
  const isSeances = mode === 'seances'
  const defaults = isSeances ? SEANCE_FILTER_DEFAULTS : BALADE_FILTER_DEFAULTS
  const [draft, setDraft] = useState(filters || defaults)

  useEffect(() => {
    if (open) setDraft(filters || defaults)
  }, [open, filters, defaults])

  if (!open) return null

  const update = (key, value) => setDraft((current) => ({ ...current, [key]: value }))
  const resetFilters = () => setDraft(defaults)
  const applyFilters = () => {
    onApply(draft)
    onClose()
  }

  return (
    <div className={`filter-modal filter-modal--${mode}`} role="dialog" aria-modal="true" aria-label="Filtres">
      <button className="filter-modal__backdrop" onClick={onClose} aria-label="Fermer les filtres" />
      <section className="filter-modal__sheet">
        <div className="filter-modal__handle" />
        <button className="filter-modal__close" onClick={onClose} aria-label="Fermer">
          <CloseIcon />
        </button>

        <header className="filter-modal__header">
          <h2>Filtres</h2>
          <p>{isSeances ? 'Affinez votre recherche de séances' : 'Affinez votre expérience de balade'}</p>
        </header>

        <div className="filter-modal__content">
          {isSeances ? (
            <>
              <section className="filter-block">
                <p className="filter-block__label">Niveau</p>
                <PillGroup options={SEANCE_LEVELS} value={draft.level} onChange={(value) => update('level', value)} />
              </section>
              <section className="filter-block">
                <p className="filter-block__label">Discipline</p>
                <CardGrid options={SEANCE_DISCIPLINES} value={draft.discipline} onChange={(value) => update('discipline', value)} />
              </section>
              <section className="filter-block">
                <p className="filter-block__label">Durée</p>
                <PillGroup options={SEANCE_DURATIONS} value={draft.duration} onChange={(value) => update('duration', value)} />
              </section>
              <section className="filter-block">
                <p className="filter-block__label">Nombre de cavaliers</p>
                <RiderStepper value={draft.riders} onChange={(value) => update('riders', value)} />
              </section>
              <section className="filter-block">
                <p className="filter-block__label">Créneau horaire</p>
                <div className="filter-time-slots">
                  {TIME_SLOTS.map((slot) => (
                    <button key={slot} className={draft.timeSlot === slot ? 'filter-time-slot filter-time-slot--active' : 'filter-time-slot'} onClick={() => update('timeSlot', slot)}>
                      {slot === 'Morning' && <SunIcon />}
                      {slot === 'Afternoon' && <SunIcon />}
                      {slot === 'Evening' && <MoonIcon />}
                      {slot}
                    </button>
                  ))}
                </div>
              </section>
              <SelectField label="Coach" value={draft.coach} options={COACHES} onChange={(value) => update('coach', value)} />
              <section className="filter-block filter-block--split">
                <div>
                  <p className="filter-block__label">Niveau du cheval</p>
                  <PillGroup options={HORSE_LEVELS} value={draft.horseLevel} onChange={(value) => update('horseLevel', value)} />
                </div>
                <div>
                  <p className="filter-block__label">Disponibilités</p>
                  <button
                    className={draft.availableOnly ? 'filter-toggle filter-toggle--active' : 'filter-toggle'}
                    onClick={() => update('availableOnly', !draft.availableOnly)}
                  >
                    Séances disponibles
                    <span />
                  </button>
                </div>
              </section>
              <RangeField label="Prix par personne" value={draft.price} onChange={(value) => update('price', value)} />
              <SelectField label="Trier par" value={draft.sortBy} options={SORT_OPTIONS} onChange={(value) => update('sortBy', value)} sort />
            </>
          ) : (
            <>
              <section className="filter-block">
                <p className="filter-block__label">Niveau</p>
                <PillGroup options={BALADE_LEVELS} value={draft.level} onChange={(value) => update('level', value)} />
              </section>
              <section className="filter-block">
                <p className="filter-block__label">Type de balade</p>
                <CardGrid options={BALADE_TYPES} value={draft.rideType} onChange={(value) => update('rideType', value)} />
              </section>
              <section className="filter-block">
                <p className="filter-block__label">Durée</p>
                <PillGroup options={BALADE_DURATIONS} value={draft.duration} onChange={(value) => update('duration', value)} />
              </section>
              <section className="filter-block">
                <p className="filter-block__label">Nombre de cavaliers</p>
                <RiderStepper value={draft.riders} onChange={(value) => update('riders', value)} />
              </section>
              <RangeField label="Budget par personne" value={draft.budget} onChange={(value) => update('budget', value)} />
              <section className="filter-block">
                <p className="filter-block__label">Expérience</p>
                <PillGroup options={BALADE_EXPERIENCES} value={draft.experience} onChange={(value) => update('experience', value)} />
              </section>
              <section className="filter-block">
                <p className="filter-block__label">Popularité</p>
                <div className="filter-popularity">
                  {POPULARITY.map((item) => (
                    <button
                      key={item}
                      className={draft.popularity === item ? 'filter-popularity__card filter-popularity__card--active' : 'filter-popularity__card'}
                      onClick={() => update('popularity', item)}
                    >
                      <PopularityIcon type={item} />
                      <span>{item}</span>
                      {draft.popularity === item && <small><CheckIcon /></small>}
                    </button>
                  ))}
                </div>
              </section>
              <SelectField label="Coach" value={draft.coach} options={COACHES} onChange={(value) => update('coach', value)} />
            </>
          )}
        </div>

        <footer className="filter-modal__actions">
          <button className="filter-modal__reset" onClick={resetFilters}>
            <ResetIcon />
            Réinitialiser
          </button>
          <button className="filter-modal__submit" onClick={applyFilters}>
            Voir les résultats
            <ArrowIcon />
          </button>
        </footer>
      </section>
    </div>
  )
}
