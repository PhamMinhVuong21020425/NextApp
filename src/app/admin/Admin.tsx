"use client"
import { useRouter } from "next/navigation";
import Button from 'react-bootstrap/Button';

const Admin = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
    }

    return (
        <div className="m-2">
            <h1>Dashboard Page</h1>
            <Button variant="danger" onClick={handleGoHome}>Go home</Button>
        </div>
    )
}

export default Admin;