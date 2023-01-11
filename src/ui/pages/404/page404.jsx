//Core
import { Link } from 'react-router-dom';


const Page404 = () => {
    return (
        <div>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginTop: 100 }}>Page doesn't exist</p>
            <Link style={{ color: '#439058', display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginTop: 30 }} to='/'>Back to main page</Link>
        </div>
    );
};

export default Page404;