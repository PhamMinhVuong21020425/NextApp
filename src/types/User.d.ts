interface User {
    id: number;
    gender: string;
    date_of_birth: string;
    job: string;
    city: string;
    zipcode: string;
    latitude: number;
    profile_picture: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    street: string;
    state: string;
    country: string;
    longitude: number;
}

interface UserAPIResponse {
    users: User[];
}

export { User, UserAPIResponse };