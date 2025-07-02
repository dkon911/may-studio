import React from "react"
import { Link } from "react-router-dom"
import { useLanguage } from "@/contexts/LanguageContext"
import { Menu } from "lucide-react"
import VietnamFlag from "@/components/icons/VietnamFlag"
import UKFlag from "@/components/icons/UKFlag"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const Header = ({ onMenuOpen, navLinks }) => {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 justify-between md:px-4">
        {/* Left side: Logo and Navigation */}
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            {/* You can replace this with an SVG logo */}
            <span className="font-bold text-3xl font-serif">May Studio</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link to={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side: Language switcher and Mobile menu button */}
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-2 sm:px-3">
                {language === "vi" ? (
                  <VietnamFlag className="w-5 h-3.5" />
                ) : (
                  <UKFlag className="w-5 h-3.5" />
                )}
                <span className="hidden sm:inline-block ml-2 text-sm font-medium">
                  {language === "vi" ? "Tiếng Việt" : "English"}
                </span>
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("vi")}>
                <VietnamFlag className="w-5 h-3.5 mr-2" />
                <span>Tiếng Việt</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                <UKFlag className="w-5 h-3.5 mr-2" />
                <span>English</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            className="md:hidden"
            onClick={onMenuOpen} // Use the prop to open the menu
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open mobile menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

