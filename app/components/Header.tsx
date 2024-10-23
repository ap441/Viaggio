"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { Menu, X } from 'lucide-react';
import AuthForm from './AuthForm'; // Make sure to import AuthForm

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(false); // Renamed state for clarity

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Viaggio
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/rewards" className="text-foreground hover:text-primary transition-colors">Rewards</Link>
            <Link href="/partners" className="text-foreground hover:text-primary transition-colors">Partners</Link>
            <Link href="/account" className="text-foreground hover:text-primary transition-colors">My Account</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button onClick={() => setIsAuthFormOpen(true)}>Sign Up / Sign In</Button>
          </div>
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="/rewards" className="text-foreground hover:text-primary transition-colors">Rewards</Link>
            <Link href="/partners" className="text-foreground hover:text-primary transition-colors">Partners</Link>
            <Link href="/account" className="text-foreground hover:text-primary transition-colors">My Account</Link>
            <Button className="mt-2" onClick={() => setIsAuthFormOpen(true)}>Sign Up / Sign In</Button>
            <div className="mt-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
      {isAuthFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative shadow-lg w-full max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsAuthFormOpen(false)}
            >
              <X size={24} />
            </button>
            <AuthForm /> {/* Updated to use AuthForm */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
