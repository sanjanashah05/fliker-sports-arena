
import React from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  showThemeToggle?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showThemeToggle = true }) => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6">
      <Logo />
      {showThemeToggle && <ThemeToggle />}
    </header>
  );
};

export default Header;
