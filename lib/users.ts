// In-memory user store (replace with database in production)
export const users = new Map<string, { id: string; email: string; password: string }>()