import { User } from '@/types/User'

type UserProps = {
    user: User
}

export default function UserCard({ user }: UserProps) {
    return (
        <div className='bg-orange-400 text-white rounded w-96 p-3'>
            <div>
                <div>{user.id}</div>
                <div>{user.first_name}</div>
                <div>{user.last_name}</div>
                <div>{user.phone}</div>
                <div>{user.email}</div>
                <div>{user.country}</div>
            </div>
            <img src={user.profile_picture} alt='profile picture' />
        </div>
    )
}