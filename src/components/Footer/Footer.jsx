import './Footer.css';
const Footer = () => {
    var Year = new Date()
    return(
        <footer>
           <h5> Team Member Allocation App - {Year.getFullYear()}</h5>
        </footer>
    );
}

export default Footer;