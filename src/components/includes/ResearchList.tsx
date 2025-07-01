import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const researchCategories = [
  {
    id: "bio",
    name: "Biomedical Sciences",
    icon: "🧬",
    description: "Human health, disease mechanisms, and medical innovations",
    color: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    id: "env",
    name: "Environmental Research",
    icon: "🌿",
    description: "Climate change, ecosystems, and sustainability solutions",
    color: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: "tech",
    name: "Technology & Engineering",
    icon: "⚙️",
    description: "Advanced materials, computing, and infrastructure",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: "data",
    name: "Data Science",
    icon: "📊",
    description: "AI, machine learning, and big data analytics",
    color: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: "social",
    name: "Social Sciences",
    icon: "👥",
    description: "Human behavior, economics, and policy research",
    color: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    id: "physics",
    name: "Physical Sciences",
    icon: "🔭",
    description: "Fundamental discoveries in physics and chemistry",
    color: "bg-indigo-100 dark:bg-indigo-900/30",
  },
];

export function ResearchSearchWithCategories() {
  return (
    <div className="w-full lg:max-w-7xl mx-auto px-4 py-12">
      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Discover National Research
        </h2>

        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search research papers, datasets, and projects..."
            className="pl-12 pr-28 h-14 text-lg rounded-xl shadow-sm border-2 focus:border-primary focus-visible:ring-0"
          />
          <Button
            size="lg"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-5 font-medium"
          >
            Search
          </Button>
        </div>

        <p className="mt-4 text-muted-foreground">
          Try: "climate change models" or "nanomaterials applications"
        </p>
      </motion.div>

      {/* Categories Slideshow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration: 30,
          }}
          className="w-full"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Browse by Category</h3>
            <div className="flex gap-2">
              <CarouselPrevious className="static -translate-y-0 h-10 w-10 border-2" />
              <CarouselNext className="static -translate-y-0 h-10 w-10 border-2" />
            </div>
          </div>
          <CarouselContent className="-ml-2 py-4">
            {researchCategories.map((category) => (
              <CarouselItem
                key={category.id}
                className="pl-2 basis-1/1 md:basis-1/3 lg:basis-1/4"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-2 hover:border-primary transition-colors h-[350px] ">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div
                        className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4`}
                      >
                        {category.icon}
                      </div>
                      <h4 className="font-semibold text-lg mb-2">
                        {category.name}
                      </h4>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {category.description}
                      </p>
                      <Button
                        variant="link"
                        className="w-fit px-0 text-primary hover:text-primary/80 justify-start group"
                      >
                        Explore category
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>

      {/* Recent Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-semibold mb-6">
          Recent Research Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Breakthrough in Quantum Computing",
              authors: "Dr. Chen et al.",
              date: "May 2024",
              category: "Technology",
            },
            {
              title: "Climate Resilience in Coastal Cities",
              authors: "Prof. Rodriguez Team",
              date: "April 2024",
              category: "Environmental",
            },
            {
              title: "New Alzheimer's Treatment Pathways",
              authors: "Dr. Schmidt Laboratory",
              date: "June 2024",
              category: "Biomedical",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border rounded-xl p-6 bg-background hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.category === "Technology"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      : item.category === "Environmental"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                      : "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300"
                  }`}
                >
                  {item.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.date}
                </span>
              </div>
              <h4 className="font-medium text-lg mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.authors}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
