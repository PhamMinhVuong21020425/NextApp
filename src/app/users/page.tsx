// import UserCard from '@/components/UserCard'
// import { getUsers } from '@/actions/getUsers'

// const INITIAL_NUMBER_OF_USERS = 10

// export default async function Home() {
//     const initialUsers = await getUsers(0, INITIAL_NUMBER_OF_USERS)

//     return (
//         <div className='flex flex-col gap-3'>
//             {initialUsers.map((user) => (
//                 <UserCard key={user.id} user={user} />
//             ))}
//         </div>
//     )
// }

import UserList from '@/components/UserList'
import { getUsers } from '@/actions/getUsers'

const INITIAL_NUMBER_OF_USERS = 10

export default async function UserPage() {
    const initialUsers = await getUsers(0, INITIAL_NUMBER_OF_USERS)

    return <UserList initialUsers={initialUsers} />
}