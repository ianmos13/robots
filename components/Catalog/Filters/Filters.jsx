import { usePathname } from 'next/navigation'
import Slider from "@mui/material/Slider"
import { useEffect, useState } from "react"
import styles from "./Filters.module.scss"

const DEFAULT_PAYLOAD_MIN = 0
const DEFAULT_REACH_MIN = 0

export default function Filters({ selectedFilters, onChangeFilters, maxReach, maxPayload }) {
  const pathname = usePathname();
  const isPozicionery = pathname.toLowerCase().includes('pozicionery');

  const DEFAULT_PAYLOAD_MAX = maxPayload || 2500
  const DEFAULT_REACH_MAX = maxReach || 1000

  const [isApplicationOpen, setIsApplicationOpen] = useState(true)
  const [isAxesOpen, setIsAxesOpen] = useState(false)
  const [isPayloadOpen, setIsPayloadOpen] = useState(false)
  const [isReachOpen, setIsReachOpen] = useState(false)
  const [isWeightOpen, setIsWeightOpen] = useState(false)

  const applications = [
    "Сварка",
    "Лазерная резка",
    "Плазменная и гидроабразивная резка",
    "Контактная сварка",
    "Паллетирование",
    "Обслуживание станков с ЧПУ",
    "Обслуживание ТПА",
    "Обслуживание гибочного и штамповочного пресса",
    "Обслуживание конвейерной линии",
    "Фрезеровка",
    "Полировка",
    "Гибка металла",
    "SCARA",
  ]
  const axesOptions = [1, 2, 3, 4, 5, 6]

  const [payloadRange, setPayloadRange] = useState([DEFAULT_PAYLOAD_MIN, DEFAULT_PAYLOAD_MAX])
  const [reachRange, setReachRange] = useState([DEFAULT_REACH_MIN, DEFAULT_REACH_MAX])
  const [robotWeight, setRobotWeight] = useState("")

  useEffect(() => {
    const payloadFilter = selectedFilters.find(f =>
      f.startsWith("Грузоподъёмность: ")
    )
    if (payloadFilter) {
      const rangeStr = payloadFilter.replace("Грузоподъёмность: ", "").replace(" кг", "")
      const [minStr, maxStr] = rangeStr.split("-")
      setPayloadRange([parseInt(minStr, 10), parseInt(maxStr, 10)])
    } else {
      setPayloadRange([DEFAULT_PAYLOAD_MIN, DEFAULT_PAYLOAD_MAX])
    }

    const reachFilter = selectedFilters.find(f => f.startsWith("Охват: "))
    if (reachFilter) {
      const rangeStr = reachFilter.replace("Охват: ", "").replace(" мм", "")
      const [minStr, maxStr] = rangeStr.split("-")
      setReachRange([parseInt(minStr, 10), parseInt(maxStr, 10)])
    } else {
      setReachRange([DEFAULT_REACH_MIN, DEFAULT_REACH_MAX])
    }

    const weightFilter = selectedFilters.find(f => f.startsWith("Вес: "))
    if (weightFilter) {
      const val = weightFilter.replace("Вес: ", "").replace(" кг", "")
      setRobotWeight(val)
    } else {
      setRobotWeight("")
    }
  }, [selectedFilters, DEFAULT_PAYLOAD_MAX, DEFAULT_REACH_MAX])

  const isAppSelected = (app) => selectedFilters.includes(`Область применения: ${app}`)
  const isAxisSelected = (axis) => selectedFilters.includes(`Кол-во осей: ${axis}`)

  const toggleApplication = (app) => {
    const label = `Область применения: ${app}`
    if (isAppSelected(app)) {
      onChangeFilters(selectedFilters.filter(f => f !== label))
    } else {
      onChangeFilters([...selectedFilters, label])
    }
  }

  const toggleAxis = (axis) => {
    const label = `Кол-во осей: ${axis}`
    if (isAxisSelected(axis)) {
      onChangeFilters(selectedFilters.filter(f => f !== label))
    } else {
      onChangeFilters([...selectedFilters, label])
    }
  }

  const updatePayloadFilter = (minVal, maxVal) => {
    const label = `Грузоподъёмность: ${minVal}-${maxVal} кг`
    const isDefault = minVal === DEFAULT_PAYLOAD_MIN && maxVal === DEFAULT_PAYLOAD_MAX
    const withoutOld = selectedFilters.filter(f => !f.startsWith("Грузоподъёмность: "))
    if (!isDefault) {
      onChangeFilters([...withoutOld, label])
    } else {
      onChangeFilters(withoutOld)
    }
  }

  const updateReachFilter = (minVal, maxVal) => {
    const label = `Охват: ${minVal}-${maxVal} мм`
    const isDefault = minVal === DEFAULT_REACH_MIN && maxVal === DEFAULT_REACH_MAX
    const withoutOld = selectedFilters.filter(f => !f.startsWith("Охват: "))
    if (!isDefault) {
      onChangeFilters([...withoutOld, label])
    } else {
      onChangeFilters(withoutOld)
    }
  }

  const updateWeightFilter = (val) => {
    const label = `Вес: ${val} кг`
    const withoutOld = selectedFilters.filter(f => !f.startsWith("Вес: "))
    if (!val) {
      onChangeFilters(withoutOld)
      return
    }
    onChangeFilters([...withoutOld, label])
  }

  const handlePayloadRangeChange = (e, newValue) => {
    setPayloadRange(newValue)
    updatePayloadFilter(newValue[0], newValue[1])
  }

  const handleReachRangeChange = (e, newValue) => {
    setReachRange(newValue)
    updateReachFilter(newValue[0], newValue[1])
  }

  const handlePayloadMinChange = (e) => {
    const newMin = parseInt(e.target.value, 10)
    if (Number.isNaN(newMin)) return
    const safeMin = Math.min(newMin, payloadRange[1])
    setPayloadRange([safeMin, payloadRange[1]])
    updatePayloadFilter(safeMin, payloadRange[1])
  }

  const handlePayloadMaxChange = (e) => {
    const newMax = parseInt(e.target.value, 10)
    if (Number.isNaN(newMax)) return
    const safeMax = Math.max(newMax, payloadRange[0])
    setPayloadRange([payloadRange[0], safeMax])
    updatePayloadFilter(payloadRange[0], safeMax)
  }

  const handleReachMinChange = (e) => {
    const newMin = parseInt(e.target.value, 10)
    if (Number.isNaN(newMin)) return
    const safeMin = Math.min(newMin, reachRange[1])
    setReachRange([safeMin, reachRange[1]])
    updateReachFilter(safeMin, reachRange[1])
  }

  const handleReachMaxChange = (e) => {
    const newMax = parseInt(e.target.value, 10)
    if (Number.isNaN(newMax)) return
    const safeMax = Math.max(newMax, reachRange[0])
    setReachRange([reachRange[0], safeMax])
    updateReachFilter(reachRange[0], safeMax)
  }

  const handleWeightChange = (e) => {
    const val = e.target.value.trim()
    setRobotWeight(val)
    updateWeightFilter(val)
  }

  return (
    <div className={styles.filters}>
      {!isPozicionery && (
        <div className={styles.filterSection}>
          <div
            className={styles.filterHeader}
            onClick={() => setIsApplicationOpen(!isApplicationOpen)}
          >
            Область применения
            <img
              src={
                isApplicationOpen
                  ? "/images/icons/filters-dropdown-open.svg"
                  : "/images/icons/filters-dropdown-close.svg"
              }
              alt="toggle"
            />
          </div>
          {isApplicationOpen && (
            <div className={styles.filterOptions}>
              {applications.map(app => (
                <label key={app}>
                  <input
                    type="checkbox"
                    checked={isAppSelected(app)}
                    onChange={() => toggleApplication(app)}
                  />
                  {app}
                </label>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={styles.filterSection}>
        <div
          className={styles.filterHeader}
          onClick={() => setIsAxesOpen(!isAxesOpen)}
        >
          Кол-во осей
          <img
            src={
              isAxesOpen
                ? "/images/icons/filters-dropdown-open.svg"
                : "/images/icons/filters-dropdown-close.svg"
            }
            alt="toggle"
          />
        </div>
        {isAxesOpen && (
          <div className={styles.filterOptions}>
            {axesOptions.map(axis => (
              <label key={axis}>
                <input
                  type="checkbox"
                  checked={isAxisSelected(axis)}
                  onChange={() => toggleAxis(axis)}
                />
                {axis}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div
          className={styles.filterHeader}
          onClick={() => setIsPayloadOpen(!isPayloadOpen)}
        >
          Максимальная грузоподъёмность
          <img
            src={
              isPayloadOpen
                ? "/images/icons/filters-dropdown-open.svg"
                : "/images/icons/filters-dropdown-close.svg"
            }
            alt="toggle"
          />
        </div>
        {isPayloadOpen && (
          <div className={styles.filterOptions}>
            <Slider
              value={payloadRange}
              onChange={handlePayloadRangeChange}
              min={DEFAULT_PAYLOAD_MIN}
              max={DEFAULT_PAYLOAD_MAX}
              className={styles.customSlider}
              sx={{
                color: "#C6DFF5",
                height: 6,
                "& .MuiSlider-thumb": {
                  width: 24,
                  height: 24,
                  backgroundColor: "#0149BF",
                  boxShadow: "none",
                  "&:hover": { boxShadow: "none" },
                  "&.Mui-active": { boxShadow: "none" },
                  "&:focus": { boxShadow: "none" },
                },
                "& .MuiSlider-track": { border: "none" },
                "& .MuiSlider-rail": {
                  opacity: 0.5,
                  height: 6,
                  backgroundColor: "#3232321A",
                },
              }}
            />
            <div className={styles.rangeInputs}>
              <div className={styles.inputWrapper} data-unit="кг">
                <input
                  type="number"
                  min={DEFAULT_PAYLOAD_MIN}
                  max={DEFAULT_PAYLOAD_MAX}
                  value={payloadRange[0]}
                  onChange={handlePayloadMinChange}
                />
              </div>
              <div className={styles.inputWrapper} data-unit="кг">
                <input
                  type="number"
                  min={DEFAULT_PAYLOAD_MIN}
                  max={DEFAULT_PAYLOAD_MAX}
                  value={payloadRange[1]}
                  onChange={handlePayloadMaxChange}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {!isPozicionery && (
        <>
          <div className={styles.filterSection}>
            <div
              className={styles.filterHeader}
              onClick={() => setIsReachOpen(!isReachOpen)}
            >
              Максимальный охват
              <img
                src={
                  isReachOpen
                    ? "/images/icons/filters-dropdown-open.svg"
                    : "/images/icons/filters-dropdown-close.svg"
                }
                alt="toggle"
              />
            </div>
            {isReachOpen && (
              <div className={styles.filterOptions}>
                <Slider
                  value={reachRange}
                  onChange={handleReachRangeChange}
                  min={DEFAULT_REACH_MIN}
                  max={DEFAULT_REACH_MAX}
                  className={styles.customSlider}
                  sx={{
                    color: "#C6DFF5",
                    height: 6,
                    "& .MuiSlider-thumb": {
                      width: 24,
                      height: 24,
                      backgroundColor: "#0149BF",
                      boxShadow: "none",
                      "&:hover": { boxShadow: "none" },
                      "&.Mui-active": { boxShadow: "none" },
                      "&:focus": { boxShadow: "none" },
                    },
                    "& .MuiSlider-track": { border: "none" },
                    "& .MuiSlider-rail": {
                      opacity: 0.5,
                      height: 6,
                      backgroundColor: "#3232321A",
                    },
                  }}
                />
                <div className={styles.rangeInputs}>
                  <div className={styles.inputWrapper} data-unit="мм">
                    <input
                      type="number"
                      min={DEFAULT_REACH_MIN}
                      max={DEFAULT_REACH_MAX}
                      value={reachRange[0]}
                      onChange={handleReachMinChange}
                    />
                  </div>
                  <div className={styles.inputWrapper} data-unit="мм">
                    <input
                      type="number"
                      min={DEFAULT_REACH_MIN}
                      max={DEFAULT_REACH_MAX}
                      value={reachRange[1]}
                      onChange={handleReachMaxChange}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.filterSection}>
            <div
              className={styles.filterHeader}
              onClick={() => setIsWeightOpen(!isWeightOpen)}
            >
              Вес робота
              <img
                src={
                  isWeightOpen
                    ? "/images/icons/filters-dropdown-open.svg"
                    : "/images/icons/filters-dropdown-close.svg"
                }
                alt="toggle"
              />
            </div>
            {isWeightOpen && (
              <div className={styles.filterOptions}>
                <input
                  type="number"
                  placeholder="Введите вес"
                  value={robotWeight}
                  onChange={handleWeightChange}
                />
              </div>
            )}
          </div>
        </>
      )}

      <button
        className={styles.applyButton}
        onClick={() => {
          onChangeFilters(selectedFilters)
        }}
      >
        Показать
      </button>
    </div>
  )
}
