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

  // Закрываем при клике вне
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
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-gray-700 dark:text-gray-200 
                   hover:text-blue-600 dark:hover:text-blue-400 
                   transition-colors duration-200 font-medium text-sm"
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-52 rounded-xl 
                     bg-white dark:bg-gray-800 shadow-lg ring-1 
                     ring-black/5 dark:ring-white/10 z-50
                     animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm 
                           text-gray-700 dark:text-gray-200
                           hover:bg-gray-50 dark:hover:bg-gray-700 
                           hover:text-blue-600 dark:hover:text-blue-400
                           transition-colors duration-150"
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
