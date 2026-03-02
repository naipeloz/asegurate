'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const labels = {
  es: {
    nombre:   'Nombre Completo *',
    email:    'Correo Electrónico *',
    telefono: 'Teléfono',
    empresa:  'Empresa',
    mensaje:  'Mensaje *',
    submit:   'Enviar Consulta',
    successH: '¡Consulta enviada!',
    successP: 'Nos pondremos en contacto con usted a la brevedad.',
  },
  pt: {
    nombre:   'Nome Completo *',
    email:    'E-mail *',
    telefono: 'Telefone',
    empresa:  'Empresa',
    mensaje:  'Mensagem *',
    submit:   'Enviar Consulta',
    successH: 'Consulta enviada!',
    successP: 'Entraremos em contato com você em breve.',
  },
  en: {
    nombre:   'Full Name *',
    email:    'Email Address *',
    telefono: 'Phone',
    empresa:  'Company',
    mensaje:  'Message *',
    submit:   'Send Inquiry',
    successH: 'Inquiry sent!',
    successP: 'We will get in touch with you shortly.',
  },
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

export default function ContactForm() {
  const { lang } = useLanguage()
  const l = labels[lang]

  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C6A23A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h4 className="font-bold text-xl text-white">{l.successH}</h4>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.70)' }}>{l.successP}</p>
      </div>
    )
  }

  const inputClass = `w-full border rounded-[8px] px-3 py-2 text-sm outline-none transition-colors`
  const inputStyle = {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.20)',
    color: 'white',
  }
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#C6A23A'
    e.target.style.boxShadow = '0 0 0 2px rgba(198,162,58,0.2)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.20)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">{l.nombre}</label>
        <input type="text" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">{l.email}</label>
        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">{l.telefono}</label>
        <input type="tel" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">{l.empresa}</label>
        <input type="text" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">{l.mensaje}</label>
        <textarea required rows={3} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className={`${inputClass} resize-none`} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 font-semibold text-sm py-2.5 rounded-[8px] transition-colors shadow-md"
        style={{ backgroundColor: '#C6A23A', color: '#040C1F' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#816828')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C6A23A')}
      >
        <SendIcon />
        {l.submit}
      </button>
    </form>
  )
}
