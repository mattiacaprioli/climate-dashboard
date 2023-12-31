import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-4 text-center">
      <div className="container mx-auto text-gray-300">
        <p>&copy; {currentYear} Mattia Caprioli. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;