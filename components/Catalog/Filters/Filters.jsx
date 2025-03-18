import { usePathname } from "next/navigation";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import styles from "./Filters.module.scss";

const DEFAULT_PAYLOAD_MIN = 0;
const DEFAULT_REACH_MIN = 0;

export default function Filters({
  selectedFilters,
  onChangeFilters,
  maxReach,
  maxPayload,
  applications = [],
  axes = [],
  voltages = [], // новый пропс для уникальных значений напряжения
}) {
  const pathname = usePathname();
  const isPozicionery = pathname.toLowerCase().includes("pozicionery");

  const DEFAULT_PAYLOAD_MAX = maxPayload || 2500;
  const DEFAULT_REACH_MAX = maxReach || 1000;

  const [isApplicationOpen, setIsApplicationOpen] = useState(true);
  const [isAxesOpen, setIsAxesOpen] = useState(false);
  const [isPayloadOpen, setIsPayloadOpen] = useState(false);
  const [isReachOpen, setIsReachOpen] = useState(false);
  const [isWeightOpen, setIsWeightOpen] = useState(false);
  const [isVoltageOpen, setIsVoltageOpen] = useState(false);

  const [payloadRange, setPayloadRange] = useState([
    DEFAULT_PAYLOAD_MIN,
    DEFAULT_PAYLOAD_MAX,
  ]);
  const [reachRange, setReachRange] = useState([
    DEFAULT_REACH_MIN,
    DEFAULT_REACH_MAX,
  ]);
  const [robotWeight, setRobotWeight] = useState("");
  const [voltage, setVoltage] = useState("");

  useEffect(() => {
    const payloadFilter = selectedFilters.find((f) =>
      f.startsWith("Грузоподъёмность: ")
    );
    if (payloadFilter) {
      const rangeStr = payloadFilter
        .replace("Грузоподъёмность: ", "")
        .replace(" кг", "");
      const [minStr, maxStr] = rangeStr.split("-");
      setPayloadRange([parseInt(minStr, 10), parseInt(maxStr, 10)]);
    } else {
      setPayloadRange([DEFAULT_PAYLOAD_MIN, DEFAULT_PAYLOAD_MAX]);
    }

    const reachFilter = selectedFilters.find((f) => f.startsWith("Охват: "));
    if (reachFilter) {
      const rangeStr = reachFilter.replace("Охват: ", "").replace(" мм", "");
      const [minStr, maxStr] = rangeStr.split("-");
      setReachRange([parseInt(minStr, 10), parseInt(maxStr, 10)]);
    } else {
      setReachRange([DEFAULT_REACH_MIN, DEFAULT_REACH_MAX]);
    }

    const weightFilter = selectedFilters.find((f) => f.startsWith("Вес: "));
    if (weightFilter) {
      const val = weightFilter.replace("Вес: ", "").replace(" кг", "");
      setRobotWeight(val);
    } else {
      setRobotWeight("");
    }

    const voltageFilter = selectedFilters.find((f) =>
      f.startsWith("Напряжение: ")
    );
    if (voltageFilter) {
      const val = voltageFilter.replace("Напряжение: ", "").replace(" В", "");
      setVoltage(val);
    } else {
      setVoltage("");
    }
  }, [selectedFilters, DEFAULT_PAYLOAD_MAX, DEFAULT_REACH_MAX]);

  const isAppSelected = (app) =>
    selectedFilters.includes(`Область применения: ${app}`);

  const toggleApplication = (app) => {
    const label = `Область применения: ${app}`;
    if (isAppSelected(app)) {
      onChangeFilters(selectedFilters.filter((f) => f !== label));
    } else {
      onChangeFilters([...selectedFilters, label]);
    }
  };

  const isAxisSelected = (axis) =>
    selectedFilters.includes(`Кол-во осей: ${axis}`);

  const toggleAxis = (axis) => {
    const label = `Кол-во осей: ${axis}`;
    if (isAxisSelected(axis)) {
      onChangeFilters(selectedFilters.filter((f) => f !== label));
    } else {
      onChangeFilters([...selectedFilters, label]);
    }
  };

  const updatePayloadFilter = (minVal, maxVal) => {
    const label = `Грузоподъёмность: ${minVal}-${maxVal} кг`;
    const isDefault =
      minVal === DEFAULT_PAYLOAD_MIN && maxVal === DEFAULT_PAYLOAD_MAX;
    const withoutOld = selectedFilters.filter(
      (f) => !f.startsWith("Грузоподъёмность: ")
    );
    if (!isDefault) {
      onChangeFilters([...withoutOld, label]);
    } else {
      onChangeFilters(withoutOld);
    }
  };

  const updateReachFilter = (minVal, maxVal) => {
    const label = `Охват: ${minVal}-${maxVal} мм`;
    const isDefault =
      minVal === DEFAULT_REACH_MIN && maxVal === DEFAULT_REACH_MAX;
    const withoutOld = selectedFilters.filter((f) => !f.startsWith("Охват: "));
    if (!isDefault) {
      onChangeFilters([...withoutOld, label]);
    } else {
      onChangeFilters(withoutOld);
    }
  };

  const updateWeightFilter = (val) => {
    const label = `Вес: ${val} кг`;
    const withoutOld = selectedFilters.filter((f) => !f.startsWith("Вес: "));
    if (!val) {
      onChangeFilters(withoutOld);
      return;
    }
    onChangeFilters([...withoutOld, label]);
  };

  const updateVoltageFilter = (val) => {
    const label = `Напряжение: ${val} В`;
    const withoutOld = selectedFilters.filter(
      (f) => !f.startsWith("Напряжение: ")
    );
    if (!val) {
      onChangeFilters(withoutOld);
      return;
    }
    onChangeFilters([...withoutOld, label]);
  };

  const handlePayloadRangeChange = (e, newValue) => {
    setPayloadRange(newValue);
    updatePayloadFilter(newValue[0], newValue[1]);
  };

  const handleReachRangeChange = (e, newValue) => {
    setReachRange(newValue);
    updateReachFilter(newValue[0], newValue[1]);
  };

  const handlePayloadMinChange = (e) => {
    const newMin = parseInt(e.target.value, 10);
    if (Number.isNaN(newMin)) return;
    const safeMin = Math.min(newMin, payloadRange[1]);
    setPayloadRange([safeMin, payloadRange[1]]);
    updatePayloadFilter(safeMin, payloadRange[1]);
  };

  const handlePayloadMaxChange = (e) => {
    const newMax = parseInt(e.target.value, 10);
    if (Number.isNaN(newMax)) return;
    const safeMax = Math.max(newMax, payloadRange[0]);
    setPayloadRange([payloadRange[0], safeMax]);
    updatePayloadFilter(payloadRange[0], safeMax);
  };

  const handleReachMinChange = (e) => {
    const newMin = parseInt(e.target.value, 10);
    if (Number.isNaN(newMin)) return;
    const safeMin = Math.min(newMin, reachRange[1]);
    setReachRange([safeMin, reachRange[1]]);
    updateReachFilter(safeMin, reachRange[1]);
  };

  const handleReachMaxChange = (e) => {
    const newMax = parseInt(e.target.value, 10);
    if (Number.isNaN(newMax)) return;
    const safeMax = Math.max(newMax, reachRange[0]);
    setReachRange([reachRange[0], safeMax]);
    updateReachFilter(reachRange[0], safeMax);
  };

  const handleWeightChange = (e) => {
    const val = e.target.value.trim();
    setRobotWeight(val);
    updateWeightFilter(val);
  };

  const handleVoltageChange = (e) => {
    const val = e.target.value.trim();
    if (voltage === val) {
      setVoltage("");
      updateVoltageFilter("");
    } else {
      setVoltage(val);
      updateVoltageFilter(val);
    }
  };

  return (
    <div className={styles.filters}>
      {!isPozicionery && (
        <div className={styles.filterSection}>
          <div
            className={styles.filterHeader}
            onClick={() => setIsApplicationOpen(!isApplicationOpen)}>
            <h2>Область применения</h2>
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
              {applications.map((app) => (
                <label key={app}>
                  <input
                    type="checkbox"
                    checked={isAppSelected(app)}
                    onChange={() => toggleApplication(app)}
                  />
                  <h3>{app}</h3>
                </label>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={styles.filterSection}>
        <div
          className={styles.filterHeader}
          onClick={() => setIsAxesOpen(!isAxesOpen)}>
          <h2>Кол-во осей</h2>
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
            {axes.map((axis) => (
              <label key={axis}>
                <input
                  type="checkbox"
                  checked={isAxisSelected(axis)}
                  onChange={() => toggleAxis(axis)}
                />
                <h3>{axis}</h3>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div
          className={styles.filterHeader}
          onClick={() => setIsPayloadOpen(!isPayloadOpen)}>
          <h2>Максимальная грузоподъёмность</h2>
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
              onClick={() => setIsReachOpen(!isReachOpen)}>
              <h2>Максимальный охват</h2>
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
              onClick={() => setIsVoltageOpen(!isVoltageOpen)}>
              <h2>Напряжение</h2>
              <img
                src={
                  isVoltageOpen
                    ? "/images/icons/filters-dropdown-open.svg"
                    : "/images/icons/filters-dropdown-close.svg"
                }
                alt="toggle"
              />
            </div>
            {isVoltageOpen && (
              <div className={styles.filterOptions}>
                {voltages &&
                  voltages.map((volt) => (
                    <label key={volt}>
                      <input
                        type="checkbox"
                        name="voltage"
                        value={volt}
                        checked={voltage === String(volt)}
                        onChange={() =>
                          handleVoltageChange({
                            target: { value: String(volt) },
                          })
                        }
                      />
                      <h3>{volt} В</h3>
                    </label>
                  ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
