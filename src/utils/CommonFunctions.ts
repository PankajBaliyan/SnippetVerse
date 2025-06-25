export function sortArrayByKey(arr, key, order = "asc") {
    return [...arr].sort((a, b) => {
        const valueA = String(a[key] ?? "").toLowerCase();
        const valueB = String(b[key] ?? "").toLowerCase();
        const comparison = valueA.localeCompare(valueB);
        return order === "desc" ? -comparison : comparison;
    });
}

// sort array without giving key
export function sortArrayWithoutKey(arr, order = "asc") {
    return [...arr].sort((a, b) => {
        const valueA = String(a).toLowerCase();
        const valueB = String(b).toLowerCase();
        const comparison = valueA.localeCompare(valueB);
        return order === "desc" ? -comparison : comparison;
    });
}