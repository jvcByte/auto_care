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
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <Link to={link}>{text}</Link>
        </div>
    );
};

export default Welcome;
