export function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateName(name: string) {
    return name.trim().length >= 2;
}

export function validateMessage(message: string) {
    return message.trim().length >= 15;
}
