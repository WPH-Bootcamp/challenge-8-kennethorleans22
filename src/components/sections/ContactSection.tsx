import { useState, useEffect } from 'react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

type ModalState = 'none' | 'success' | 'error';

const servicesList = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud Solutions',
  'Software Development',
  'Other',
];

function CheckIcon() {
  return (
    <svg
      width='12'
      height='9'
      viewBox='0 0 12 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 4.5L4.5 8L11 1'
        stroke='#FDFDFD'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set(['Web Development'])
  );
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [modalState, setModalState] = useState<ModalState>('none');

  useEffect(() => {
    if (modalState !== 'none') {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalState]);

  function handleChange(field: keyof ContactForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }) as ContactForm);
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }) as Partial<ContactForm>);
    }
  }

  function toggleService(service: string) {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      if (next.has(service)) {
        next.delete(service);
      } else {
        next.add(service);
      }
      return next;
    });
  }

  function submitForm() {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Ganti 'success' → 'error' untuk test tampilan error
      setModalState('success');
    }
  }

  function handleBackToHome() {
    setModalState('none');
    setForm({ name: '', email: '', message: '' });
    setSelectedServices(new Set(['Web Development']));
    setErrors({});
    // Halaman sudah di atas dari useEffect, tidak perlu scroll lagi
  }

  function handleTryAgain() {
    setModalState('none');
    setTimeout(() => {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  return (
    <>
    {/* ── Modal Overlay ── */}
      {modalState !== 'none' && (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        >
          {/* Popup / Success Container 
              Mobile: w-[353px] h-[374px] 
              Desktop (lg): max-w-[518px] h-auto
          */}
          <div className="modal-card w-[353px] h-[374px] lg:w-full lg:max-w-[518px] lg:h-auto flex flex-col rounded-[16px] overflow-hidden border border-border">

            {/* Frame 1618873794 (Bagian Atas - Container Logo)
                Mobile: h-[160px] p-2
                Desktop (lg): h-[225px] p-2
            */}
            <div className="w-full h-[160px] lg:h-[225px] flex justify-center items-center p-2 bg-bg-section">
              {/* Message (Logo Gambar 3D Isometric)
                  Mobile: w-[140px] h-[140px]
                  Desktop (lg): w-[228px] h-[228px]
              */}
              <img
                src={modalState === 'success' ? '/contact/success-icon.svg' : '/contact/failed-icon.svg'}
                alt={modalState === 'success' ? 'Message received' : 'Error'}
                className="w-[140px] h-[140px] lg:w-[228px] lg:h-[228px] object-contain shrink-0"
              />
            </div>

            {/* Pop Up (Bagian Bawah - Teks dan Tombol)
                Mobile: h-[214px] pt-6 px-6 pb-10 gap-4 (padding 24px 24px 40px, gap 16px sesuai figma)
                Desktop (lg): h-auto pt-8 px-8 pb-10 gap-8
            */}
            <div className="w-full flex flex-col items-center bg-bg-darkest h-[214px] pt-6 px-6 pb-10 gap-4 lg:h-auto lg:pt-8 lg:px-8 lg:pb-10 lg:gap-8">
              
              {/* Frame 1618873163 (Pembungkus Teks)
                  Mobile: w-[305px] h-[90px] gap-[2px]
                  Desktop (lg): w-full max-w-[454px] h-auto gap-2
              */}
              <div className="w-[305px] h-[90px] lg:w-full lg:max-w-[454px] lg:h-auto flex flex-col items-center gap-[2px] lg:gap-2 text-center">
                {/* Title (Message Received!)
                    Mobile: text-[18px] leading-[32px] w-[305px] h-[32px]
                    Desktop (lg): text-[20px] leading-[34px] w-full
                */}
                <h3 className="w-[305px] h-[32px] lg:w-full font-sans font-bold text-[18px] leading-[32px] lg:text-[20px] lg:leading-[34px] text-text-white">
                  {modalState === 'success' ? 'Message Received!' : 'Oops! Something went wrong.'}
                </h3>
                {/* Deskripsi Teks 
                    Mobile: text-[14px] leading-[28px] w-[305px] h-[56px]
                    Desktop (lg): text-[16px] leading-[30px] w-full
                */}
                <p className="w-[305px] h-[56px] lg:w-full font-sans font-medium text-[14px] leading-[28px] lg:text-[16px] lg:leading-[30px] text-text-secondary">
                  {modalState === 'success'
                    ? "Thanks for reaching out — we’ll get back to you as soon as possible."
                    : "We couldn’t send your message. Please try again or check your connection."}
                </p>
              </div>

              {/* Button Container 
                  Mobile: w-[305px] h-[44px] padding 8px gap 4px
                  Desktop (lg): max-w-[361px] h-[48px]
              */}
              <button
                type="button"
                className="w-[305px] h-[44px] lg:w-full lg:max-w-[361px] lg:h-[48px] rounded-full flex flex-row justify-center items-center p-2 gap-1 border-0 cursor-pointer transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ 
                  backgroundColor: '#FF623E', 
                  boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.25)' 
                }}
                onClick={modalState === 'success' ? handleBackToHome : handleTryAgain}
              >
                {/* Teks di Dalam Button 
                    Mobile: text-[14px] leading-[28px] (w-[96px] h-[28px] di figma diabaikan width-nya agar flexbox center bekerja sempurna)
                    Desktop (lg): text-[16px] leading-[30px]
                */}
                <span className="font-sans font-bold text-[14px] leading-[28px] lg:text-[16px] lg:leading-[30px] tracking-[-0.02em] text-[#FFFFFF]">
                  {modalState === 'success' ? 'Back to Home' : 'Try Again'}
                </span>
              </button>

            </div>

          </div>
        </div>
      )}

      {/* ── Contact Form Section ── */}
      <section
        id='contact'
        className='bg-bg-darkest pt-10 px-4 pb-0 lg:py-20 lg:px-35 flex flex-col items-center'
      >
        <div className='w-full lg:max-w-180 flex flex-col gap-6 lg:gap-12'>
          <div className='flex flex-col gap-4 text-center'>
            <h2 className='text-display-sm font-bold text-text-white tracking-tight lg:text-display-xl'>
              Ready to Start? Let's Talk.
            </h2>
            <p className='text-sm font-medium text-text-secondary lg:text-lg'>
              Tell us what you need, and we'll get back to you soon.
            </p>
          </div>
          <form
            className='flex flex-col gap-10'
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
            noValidate
          >
            <div className='flex flex-col gap-5'>
              {/* Name */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-sm font-bold text-text-white'>
                  Name
                </label>
                <input
                  type='text'
                  placeholder='Enter your name'
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className='form-input w-full h-12 rounded-xl border px-4 text-sm font-medium text-text-white bg-transparent outline-none transition-colors duration-200 lg:text-base'
                  style={{
                    borderColor: errors.name
                      ? '#D9206E'
                      : 'var(--color-border)',
                  }}
                />
                {errors.name && (
                  <p className='text-xs' style={{ color: '#D9206E' }}>
                    {errors.name}
                  </p>
                )}
              </div>
              {/* Email */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-sm font-bold text-text-white'>
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className='form-input w-full h-12 rounded-xl border px-4 text-sm font-medium text-text-white bg-transparent outline-none transition-colors duration-200 lg:text-base'
                  style={{
                    borderColor: errors.email
                      ? '#D9206E'
                      : 'var(--color-border)',
                  }}
                />
                {errors.email && (
                  <p className='text-xs' style={{ color: '#D9206E' }}>
                    {errors.email}
                  </p>
                )}
              </div>
              {/* Message */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-sm font-bold text-text-white'>
                  Message
                </label>
                <textarea
                  placeholder='Enter your message'
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className='form-input w-full rounded-xl border px-4 py-2 text-sm font-medium text-text-white bg-transparent outline-none resize-none transition-colors duration-200 lg:text-base'
                  style={{
                    height: '134px',
                    borderColor: errors.message
                      ? '#D9206E'
                      : 'var(--color-border)',
                  }}
                />
                {errors.message && (
                  <p className='text-xs' style={{ color: '#D9206E' }}>
                    {errors.message}
                  </p>
                )}
              </div>
              {/* Services */}
              <div className='flex flex-col gap-3.5'>
                <span className='text-sm font-bold text-text-white'>
                  Services
                </span>
                <div className='flex flex-col gap-4 lg:flex-row lg:gap-9'>
                  <div className='flex flex-col gap-4'>
                    {servicesList.slice(0, 3).map((service) => (
                      <label
                        key={service}
                        className='flex flex-row items-center gap-3 cursor-pointer select-none'
                      >
                        <input
                          type='checkbox'
                          className='sr-only'
                          checked={selectedServices.has(service)}
                          onChange={() => toggleService(service)}
                        />
                        <div
                          className={`w-5 h-5 rounded-md shrink-0 flex items-center justify-center transition-colors duration-200 ${selectedServices.has(service) ? 'bg-orange' : 'border border-border'}`}
                        >
                          {selectedServices.has(service) && <CheckIcon />}
                        </div>
                        <span className='text-sm font-medium text-text-white lg:text-base'>
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className='flex flex-col gap-4'>
                    {servicesList.slice(3).map((service) => (
                      <label
                        key={service}
                        className='flex flex-row items-center gap-3 cursor-pointer select-none'
                      >
                        <input
                          type='checkbox'
                          className='sr-only'
                          checked={selectedServices.has(service)}
                          onChange={() => toggleService(service)}
                        />
                        <div
                          className={`w-5 h-5 rounded-md shrink-0 flex items-center justify-center transition-colors duration-200 ${selectedServices.has(service) ? 'bg-orange' : 'border border-border'}`}
                        >
                          {selectedServices.has(service) && <CheckIcon />}
                        </div>
                        <span className='text-sm font-medium text-text-white lg:text-base'>
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='w-full py-2 lg:py-3 bg-orange rounded-full text-sm lg:text-base font-bold text-white border-0 cursor-pointer transition-opacity duration-200 hover:opacity-90'
              style={{
                boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.25)',
              }}
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default ContactSection;
