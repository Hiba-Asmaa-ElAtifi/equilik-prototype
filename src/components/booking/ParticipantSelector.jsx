export default function ParticipantSelector({ count, max, onChange }) {
  const label = `${count} cavalier${count > 1 ? 's' : ''}`

  return (
    <section className="booking-section">
      <div className="booking-section__row">
        <h2>Participants</h2>
        <span>{label}</span>
      </div>
      <div className="participant-selector">
        <button onClick={() => onChange(Math.max(1, count - 1))} aria-label="Retirer un participant">−</button>
        <strong>{label}</strong>
        <button onClick={() => onChange(Math.min(max || 12, count + 1))} aria-label="Ajouter un participant">+</button>
      </div>
    </section>
  )
}
