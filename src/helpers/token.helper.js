export function storeToken(token) {
    localStorage.setItem('token', token )
}
export function resetToken() {
    localStorage.clear()
    return 'LOCAL_STORAGE_CLEAR'
}