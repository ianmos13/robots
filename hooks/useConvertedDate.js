export default function useConvertedDate(date) {
    return date ? date.split("T")[0] : date;
  }
  