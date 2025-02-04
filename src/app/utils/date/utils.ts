export function getCurrentDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son indexados desde 0, por lo que se suma 1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
