import { Button } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex flex-row items-center justify-between">
            <h1 className='text-5xl font-bold my-8'>Member Card</h1>
            <Link to='/modify'>
                <Button type="primary">
                    Create
                </Button>
            </Link>
        </div>
    )
}

export default Header