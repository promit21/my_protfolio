const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-stone-950 text-white p-4 py-4">
        <aside>
          <p className="text-xl font-semibold">
            Copyright © ${new Date().getFullYear()} - All right reserved by Promit Mondol
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
