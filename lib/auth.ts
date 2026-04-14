import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { users } from './users'

export async function getUser() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) return null

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret')
    const { payload } = await jwtVerify(token, secret)

    const user = users.get(payload.email as string)
    return user || null
  } catch (error) {
    return null
  }
}