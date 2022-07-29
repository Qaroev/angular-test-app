export function getFromLocalStorage(key: string): any {
  return localStorage.getItem(key)
}

export function setToLocalStorage(key: string, data: string): void {
  localStorage.setItem(key, data);
}

export function removeLocalStorage(key: string): void {
  localStorage.removeItem(key);
}

export function clearStorage(): void {
  localStorage.clear();
}
