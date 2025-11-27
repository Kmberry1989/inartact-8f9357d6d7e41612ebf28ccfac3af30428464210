"use client"

import { usePathname } from "next/navigation"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Directory", href: "/" },
  { name: "Map", href: "/activists/map" },
  { name: "Timeline", href: "/activists/timeline" },
  { name: "Zine", href: "/activists/zine" },
  { name: "Analytics", href: "/activists/analytics" },
  { name: "About", href: "/about" },
]

interface HeaderProps {
  hideNav?: boolean
}

export function Header({ hideNav = false }: HeaderProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {!hideNav && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="w-full max-w-5xl rounded-full border border-white/20 bg-background/70 backdrop-blur-xl shadow-lg transition-all duration-300">
            <div className="flex h-14 items-center justify-between px-6">

              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold font-heading tracking-tight text-foreground">
                  {/* Home removed */}
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1" onMouseLeave={() => setHoveredIndex(null)}>
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-4 py-2 text-base font-medium transition-colors ${isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"
                        }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                    >
                      {/* Floating Pill */}
                      {(hoveredIndex === index || (isActive && hoveredIndex === null)) && (
                        <motion.div
                          layoutId="navbar-pill"
                          className={`absolute inset-0 rounded-full -z-10 ${isActive && hoveredIndex === null
                            ? "bg-secondary"
                            : "bg-secondary/50"
                            }`}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}

                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )
                })}
                <div className="pl-4 border-l border-border/50 ml-2">
                  <ThemeSwitcher />
                </div>
              </nav>

              {/* Mobile Nav */}
              <div className="flex items-center md:hidden gap-4">
                <ThemeSwitcher />
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col gap-6 mt-10">
                      <Link href="/" className="text-2xl font-bold font-heading mb-4">
                        {/* Home removed */}
                      </Link>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-xl font-medium hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}