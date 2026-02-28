'use client'

import { useState } from 'react'

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4">
        {/* Success icon — gold on light gold bg */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f5edd6' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C6A23A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h4 className="font-bold text-xl" style={{ color: '#040C1F' }}>¡Consulta enviada!</h4>
        <p className="text-sm" style={{ color: '#303E60' }}>Nos pondremos en contacto con usted a la brevedad.</p>
      </div>
    )
  }

  const inputClass = `w-full border rounded-[8px] px-3 py-2 text-sm outline-none transition-colors`
  const inputStyle = {
    borderColor: '#d1d5dc',
    color: '#040C1F',
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Label style: brand near-black */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" style={{ color: '#141414' }}>Nombre Completo *</label>
        <input
          type="text"
          required
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className={inputClass}
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = '#C6A23A'; e.target.style.boxShadow = '0 0 0 2px rgba(198,162,58,0.2)' }}
          onBlur={(e) => { e.target.style.borderColor = '#d1d5dc'; e.target.style.boxShadow = 'none' }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" style={{ color: '#141414' }}>Correo Electrónico *</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = '#C6A23A'; e.target.style.boxShadow = '0 0 0 2px rgba(198,162,58,0.2)' }}
          onBlur={(e) => { e.target.style.borderColor = '#d1d5dc'; e.target.style.boxShadow = 'none' }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" style={{ color: '#141414' }}>Teléfono</label>
        <input
          type="tel"
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          className={inputClass}
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = '#C6A23A'; e.target.style.boxShadow = '0 0 0 2px rgba(198,162,58,0.2)' }}
          onBlur={(e) => { e.target.style.borderColor = '#d1d5dc'; e.target.style.boxShadow = 'none' }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" style={{ color: '#141414' }}>Empresa</label>
        <input
          type="text"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          className={inputClass}
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = '#C6A23A'; e.target.style.boxShadow = '0 0 0 2px rgba(198,162,58,0.2)' }}
          onBlur={(e) => { e.target.style.borderColor = '#d1d5dc'; e.target.style.boxShadow = 'none' }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" style={{ color: '#141414' }}>Mensaje *</label>
        <textarea
          required
          rows={3}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className={`${inputClass} resize-none`}
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = '#C6A23A'; e.target.style.boxShadow = '0 0 0 2px rgba(198,162,58,0.2)' }}
          onBlur={(e) => { e.target.style.borderColor = '#d1d5dc'; e.target.style.boxShadow = 'none' }}
        />
      </div>

      {/* Submit — gold button (#C6A23A) with dark text (#040C1F) */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 font-semibold text-sm py-2.5 rounded-[8px] transition-colors shadow-md"
        style={{ backgroundColor: '#C6A23A', color: '#040C1F' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#816828')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C6A23A')}
      >
        <SendIcon />
        Enviar Consulta
      </button>
    </form>
  )
}
