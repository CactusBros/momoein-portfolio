const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {currentYear} Momoein. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
