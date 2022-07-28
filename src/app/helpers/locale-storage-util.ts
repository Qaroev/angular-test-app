export function getFromLocalStorage(key: string): any {
  if (window.localStorage) {
    const str = localStorage.getItem(key);
    if (str) {
        return str;
    }
  }
  return null;
}

export function setToLocalStorage(key: string, data: any): void {
  if (window.localStorage) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

export function removeLocalStorage(key: string): void {
  if (window.localStorage) {
    localStorage.removeItem(key);
  }
}
