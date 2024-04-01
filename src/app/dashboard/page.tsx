import Link from "next/link";
const dashboard = () => {
    return (
        <>
            <h1>Dashboard Page</h1>
            <Link href="/" scroll={true}>Go home</Link>
        </>
    );
};
export default dashboard;
