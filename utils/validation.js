export function isValidSubData(subData) {
    if (subData === null || subData === "") {
        return false;
    }
    if (Array.isArray(subData)) {
        return subData.length > 0 && subData.some(item => item !== "" && isValidSubData(item));
    }
    if (typeof subData === "object") {
        const values = Object.values(subData);
        const hasValidValue = values.some(value => isValidSubData(value));
        return hasValidValue;
    }
    return subData !== null && subData !== "";
}