import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="leftSection">
        <p>
          Rua Domingos Arevalo - Jardim Damasceno - 02879-070 - São Paulo SP{" "}
        </p>
        <p>(11)91234-5769</p>
        <p>Terça a Domingo das 11:00 as 23:00</p>
      </div>
      <div className="rightSection">
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-instagram"></a>
      </div>
    </footer>
  );
};

export default Footer;
