
export default function useConvertedDate(date) {
    const regex = /\d{2}\.\d{2}\.\d{4}/;
    const updDate = date?.match(regex);
    return updDate ? updDate : date
}