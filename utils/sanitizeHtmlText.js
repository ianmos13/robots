import he from "he";
import DOMPurify from "isomorphic-dompurify";

export function sanitizeData(data) {
    const decodedTakeOfferText = he.decode(data);
    return DOMPurify.sanitize(decodedTakeOfferText);
}