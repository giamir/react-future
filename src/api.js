export async function fetchTranslation(text) {
    return await new Promise(resolve => setTimeout(() => resolve(`TRANSLATED! ${text}`), 3000));
}