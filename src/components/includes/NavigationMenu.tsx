import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BarChart2, Library, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Link } from "react-router";
import { useState } from "react";

export function ResearchNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between">
        {/* Logo and Main Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Library className="h-6 w-6 text-primary" />
            <Link to="/" className="text-md font-bold">
               <span className="hidden lg:block">ER Research & Enhancement center</span>
               <span className="block lg:hidden">Eemam Razie</span>
            </Link>
          </div>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {/* Research Areas Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  Research Areas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] rounded-lg gap-3 p-6 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/research/health"
                        >
                          <div className="mb-2 mt-4 flex items-center gap-2">
                            <BarChart2 className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              Health Sciences
                            </span>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Biomedical, clinical, and public health research
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/research/technology"
                      title="Technology & Engineering"
                    >
                      Cutting-edge innovations in computing, materials, and
                      systems
                    </ListItem>
                    <ListItem
                      href="/research/environment"
                      title="Environmental Science"
                    >
                      Climate change, biodiversity, and sustainability studies
                    </ListItem>
                    <ListItem href="/research/social" title="Social Sciences">
                      Human behavior, economics, and policy research
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Publications */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  Publications
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem
                      href="/publications/journals"
                      title="Research Journals"
                    >
                      Peer-reviewed academic publications
                    </ListItem>
                    <ListItem
                      href="/publications/reports"
                      title="Technical Reports"
                    >
                      In-depth analysis and white papers
                    </ListItem>
                    <ListItem href="/publications/data" title="Open Data">
                      Publicly available research datasets
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={`${navigationMenuTriggerStyle()} text-sm`}
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/request-passage"
                  className={`${navigationMenuTriggerStyle()} text-sm`}
                >
                  Request passage
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* International */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  International
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem
                      href="/international/collaborations"
                      title="Collaborations"
                    >
                      Global research partnerships
                    </ListItem>
                    <ListItem
                      href="/international/funding"
                      title="Funding Programs"
                    >
                      International grant opportunities
                    </ListItem>
                    <ListItem
                      href="/international/conferences"
                      title="Conferences"
                    >
                      Upcoming international events
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search research..."
              className="pl-10 w-[200px] lg:w-[300px]"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <LanguageSelection />

          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-8 h-8 rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search research..."
                className="pl-10 w-full"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <MobileNavItem
                title="Research Areas"
                items={[
                  {
                    title: "Health Sciences",
                    href: "/research/health",
                    description: "Biomedical, clinical, and public health research",
                  },
                  {
                    title: "Technology & Engineering",
                    href: "/research/technology",
                    description: "Cutting-edge innovations in computing, materials, and systems",
                  },
                  {
                    title: "Environmental Science",
                    href: "/research/environment",
                    description: "Climate change, biodiversity, and sustainability studies",
                  },
                  {
                    title: "Social Sciences",
                    href: "/research/social",
                    description: "Human behavior, economics, and policy research",
                  },
                ]}
              />

              <MobileNavItem
                title="Publications"
                items={[
                  {
                    title: "Research Journals",
                    href: "/publications/journals",
                    description: "Peer-reviewed academic publications",
                  },
                  {
                    title: "Technical Reports",
                    href: "/publications/reports",
                    description: "In-depth analysis and white papers",
                  },
                  {
                    title: "Open Data",
                    href: "/publications/data",
                    description: "Publicly available research datasets",
                  },
                ]}
              />

              <Link
                to="/about"
                className="w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
              >
                About Us
              </Link>

              <Link
                to="/request-passage"
                className="w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
              >
                Request passage
              </Link>

              <MobileNavItem
                title="International"
                items={[
                  {
                    title: "Collaborations",
                    href: "/international/collaborations",
                    description: "Global research partnerships",
                  },
                  {
                    title: "Funding Programs",
                    href: "/international/funding",
                    description: "International grant opportunities",
                  },
                  {
                    title: "Conferences",
                    href: "/international/conferences",
                    description: "Upcoming international events",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

function MobileNavItem({
  title,
  items,
}: {
  title: string;
  items: Array<{
    title: string;
    href: string;
    description: string;
  }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
      >
        <span>{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="ml-4 mt-1 space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-4 py-2 text-sm rounded-md hover:bg-accent"
            >
              <div className="font-medium">{item.title}</div>
              <div className="text-muted-foreground">{item.description}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function LanguageSelection() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="uppercase">
            En
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40 bg-background flex flex-col gap-2 rounded-lg mt-1 mr-8 p-1 border shadow-md">
          <Button
            className="w-full cursor-pointer rounded-md hover:bg-accent"
            variant="ghost"
          >
            EN
          </Button>
          <Button
            className="w-full cursor-pointer rounded-md hover:bg-accent"
            variant="ghost"
          >
            FA (فارسی دری)
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}