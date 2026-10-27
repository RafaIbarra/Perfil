import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import GenerarEnvioCorreo from '../../Peticiones/apienviocorreo';

export function Contact({ servidoractivo }) {
  const [textoboton, setTextoboton] = useState('Enviar Mensaje');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const datosregistrar = {
      nombre: formData.name,
      correocontacto: formData.email,
      mensaje: formData.message,
    };

    try {
      const endpoint = 'CorreoContacto/';
      const result = await GenerarEnvioCorreo(endpoint, datosregistrar);

      if (result && result.resp === 200) {
        setStatusMessage({ type: 'success', text: '¡Mensaje enviado con éxito! Te responderé pronto.' });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage({ type: 'error', text: 'Error al enviar el mensaje. Intenta de nuevo o contáctame por email directo.' });
      }
    } catch {
      setStatusMessage({ type: 'error', text: 'Ocurrió un error inesperado al procesar el envío.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "blasrafael1986@gmail.com",
      isLink: false,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/30"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+595 994 203 957",
      href: "https://wa.me/595994203957",
      isLink: true,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/30"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Capiatá, Paraguay",
      isLink: false,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30"
    },
  ];

  useEffect(() => {
    if (servidoractivo) {
      setTextoboton('Enviar Mensaje');
    } else {
      setTextoboton('Servidor no disponible');
    }
  }, [servidoractivo]);

  return (
    <div className="py-12 md:py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
          <span>Hablemos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ponte en{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            Contacto
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Información de Contacto
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Estoy disponible para nuevos proyectos y oportunidades de colaboración. No dudes en contactarme para discutir cómo puedo ayudarte.
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map((info, index) => {
                const IconComp = info.icon;
                if (info.isLink) {
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800/70 hover:border-purple-500/40 hover:bg-slate-800/40 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl border ${info.bg} shrink-0 group-hover:scale-110 transition-transform`}>
                          <IconComp className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {info.title}
                          </h4>
                          <p className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                    </a>
                  );
                }

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/70 cursor-default select-text"
                  >
                    <div className={`p-3 rounded-xl border ${info.bg} shrink-0`}>
                      <IconComp className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {info.title}
                      </h4>
                      <p className="text-sm sm:text-base font-semibold text-white">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Envíame un mensaje</span>
            </h3>

            {statusMessage && (
              <div
                className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-medium ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Tu nombre
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Tu email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="juan@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Asunto
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Ej. Consulta sobre desarrollo de software"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition-all text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Tu mensaje
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto o necesidades técnicas..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!servidoractivo || isSubmitting}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 shadow-lg cursor-pointer ${
                  !servidoractivo
                    ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01]'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Enviando...' : textoboton}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
