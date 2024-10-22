"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { Menu, X } from 'lucide-react';
import { SignupForm } from './Signup';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

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
            <Button onClick={() => setIsSignupOpen(true)}>Sign Up</Button>
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
            <Button className="mt-2" onClick={() => setIsSignupOpen(true)}>Sign Up</Button>
            <div className="mt-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
      {isSignupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <SignupForm />
            <Button onClick={() => setIsSignupOpen(false)} className="mt-4">Close</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
