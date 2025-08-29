import { Link } from 'react-router-dom';
import './Welcome.css';

interface ContainerProps {
    title: string;
    subtitle: string;
    text: string;
    link: string;
}

const Welcome: React.FC<ContainerProps> = ({ title, subtitle, text, link }) => {
    return (
        <div className="container">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <Link to={link}>{text}</Link>
        </div>
    );
};

export default Welcome;
