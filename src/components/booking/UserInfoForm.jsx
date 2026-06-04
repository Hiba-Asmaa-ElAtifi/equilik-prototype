export default function UserInfoForm({ values, onChange, userIcon }) {
  const update = (field) => (event) => onChange({ ...values, [field]: event.target.value })

  return (
    <section className="booking-section">
      <h2 className="booking-form-title">{userIcon}Vos informations</h2>
      <div className="booking-fields">
        <label>
          <span>Nom complet</span>
          <input value={values.name} onChange={update('name')} placeholder="Ex : Karim Benali" />
        </label>
        <label>
          <span>Email</span>
          <input value={values.email} onChange={update('email')} type="email" placeholder="Ex : karim@email.com" />
        </label>
        <label>
          <span>Téléphone</span>
          <input value={values.phone} onChange={update('phone')} type="tel" placeholder="Ex : 06 12 34 56 78" />
        </label>
      </div>
    </section>
  )
}
