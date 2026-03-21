"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  icon?: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-10 flex items-center gap-1 rounded-md border border-transparent 
                   bg-white px-3 py-2 text-sm font-medium text-gray-700 
                   shadow-sm transition-colors duration-200 
                   hover:text-blue-600 focus:outline-none 
                   focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md 
                     bg-white py-2 text-sm shadow-xl transition-transform"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 capitalize text-gray-600 
                         transition-colors duration-300 
                         hover:bg-gray-100 hover:text-gray-900"
            >
              {item.icon ? `${item.icon} ${item.label}` : item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
