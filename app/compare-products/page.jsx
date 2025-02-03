'use client'
import { useSelector } from "react-redux";
export default function page() {
  const comparisons = useSelector((state) => state.compare);
  console.log(comparisons)
  return (
    <div>
    <h2>Сравнение</h2>
    <ul>
      {comparisons.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
  );
}
