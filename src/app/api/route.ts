// Create json in NextRequest
import { NextResponse } from 'next/server'
import { UserAPIResponse } from '@/types/User'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
    try {
        const requestUrl = new URL(req.url)
        const offset = requestUrl.searchParams.get("offset") ?? 0
        const limit = requestUrl.searchParams.get("limit") ?? 10
        const url = `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`
        const response = await fetch(url)
        const data = (await response.json()) as UserAPIResponse
        return NextResponse.json(data.users)
    } catch (error: unknown) {
        console.log(error)
        throw new Error(`An error happened: ${error}`)
    }
}