'use client'
import ContactUsButtons from '@/components/UI/ContactUsButtons/ContactUsButtons'
import CustomInput from '@/components/UI/CustomInput/CustomInput'
import React from 'react'
import styles from './ContactUs.module.scss'
import Link from 'next/link'

export default function ContactUs({ theme }) {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [city, setCity] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [comment, setComment] = React.useState('')

  const [agreement, setAgreement] = React.useState(false)
  const [formReady, setFormReady] = React.useState(false)
  const [formSubmitted, setFormSubmitted] = React.useState(false)
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormReady(true)
    setError('')

    // if (!validateName(name)) {
    //   setError('Пожалуйста, введите ваше имя')
    //   return
    // }
    // if (!validateEmail(email)) {
    //   setError('Пожалуйста, корректно заполните поле Электронная почта')
    //   return
    // }
    // if (!validateCity(city)) {
    //   setError('Пожалуйста, введите ваш город')
    //   return
    // }
    if (!validatePhone(phone)) {
      setError('Пожалуйста, корректно заполните поле Номер телефона')
      return
    }
    if (!agreement) {
      setError('Подтвердите согласие на обработку данных')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          city,
          comment,
          messageFormat: 'contactForm'
        })
      })

      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.error || 'Ошибка при отправке сообщения.')
      }
      setFormSubmitted(true)
    } catch (err) {
      setError(err.message || 'Ошибка соединения. Попробуйте позже.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className={`${styles.container} ${styles[`${theme}Container`]}`}>
      <div className={styles.contactUs}>
        <div className={styles.addInfo}>
          <div className={styles.title}>
            <h2>Разработаем решение для вашего производства</h2>
            <ContactUsButtons theme="contacts" />
          </div>
          <div className={styles.text}>
            Бесплатно разработаем роботизированную производственную ячейку под ваши задачи. Оставьте заявку и руководитель проектов свяжется с вами.
          </div>
        </div>
        <div className={styles.contactForm}>
          {formSubmitted ? (
            <div className={styles.successMessage}>
              <h4>Сообщение отправлено!</h4>
              <p>Наш менеджер свяжется с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.inputContainer}>
                <div className={styles.rowContainer}>
                  <div className={styles.formRow}>
                    <CustomInput
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      validate={()=>{}}
                      theme="white"
                    />
                    <CustomInput
                      type="tel"
                      placeholder="Номер телефона*"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      errorMessage={'Пожалуйста, корректно заполните поле!'}
                      validate={validatePhone}
                      checkForm={formReady}
                      theme="white"
                    />
                  </div>
                  <div className={styles.formRow}>
                    <CustomInput
                      type="text"
                      placeholder="Город"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      validate={()=>{}}
                      theme="white"
                    />
                    <CustomInput
                      type="email"
                      placeholder="Электронная почта"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      errorMessage={"Пожалуйста, корректно заполните поле!"}
                      validate={validateEmail}
                      theme="white"
                    />
                  </div>
                  <div className={styles.formRow}>
                    <textarea
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Комментарий"
                      rows="6"
                    ></textarea>
                  </div>
                </div>

                <div className={styles.consent}>
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className={styles.checkBox}
                    checked={agreement}
                    onChange={(e) => setAgreement(e.target.checked)}
                  />
                  <label htmlFor="consent">
                    <span className={styles.customMarker}>
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.01786L3.45455 7.42857L10 1"
                          stroke="#0149BF"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    Заполняя форму, вы соглашаетесь на{' '}
                    <Link href="/privacy-policy" target="_blank" rel="noreferrer">
                      обработку персональных данных
                    </Link>
                  </label>
                </div>
              </div>
              {error && <p className={styles.error}>{error}</p>}
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Отправка...' : 'Отправить'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function validateName(name) {
  return name.trim().length > 0
}
function validateCity(city) {
  return city.trim().length > 0
}
function validatePhone(phone) {
  const regex =
    /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  return regex.test(phone)
}
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}
