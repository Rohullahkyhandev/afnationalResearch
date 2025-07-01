import { motion } from "framer-motion"
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  BookText,
  LibraryBig,
  GraduationCap,
  ArrowRight
} from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"



export function ResearchFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-gray-800">
      <div className="w-full px-6 py-16 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Research Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <BookText className="h-5 w-5 text-blue-400" />
              Research Resources
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/labs" text="Research Labs" />
              <FooterLink href="/publications" text="Publications" />
              <FooterLink href="/datasets" text="Open Datasets" />
              <FooterLink href="/grants" text="Funding Opportunities" />
              <FooterLink href="/collaborate" text="Collaborate With Us" />
            </ul>
          </motion.div>

          {/* Academic Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-purple-400" />
              Academics
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/programs" text="Degree Programs" />
              <FooterLink href="/courses" text="Research Courses" />
              <FooterLink href="/faculty" text="Faculty Directory" />
              <FooterLink href="/admissions" text="Graduate Admissions" />
              <FooterLink href="/calendar" text="Academic Calendar" />
            </ul>
          </motion.div>

          {/* Library Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <LibraryBig className="h-5 w-5 text-emerald-400" />
              Digital Library
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/databases" text="Research Databases" />
              <FooterLink href="/journals" text="Academic Journals" />
              <FooterLink href="/theses" text="Dissertations" />
              <FooterLink href="/archives" text="Special Collections" />
              <FooterLink href="/ask-librarian" text="Research Help" />
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to our research newsletter for the latest discoveries and publications.
            </p>
            
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
              <Button 
                type="submit" 
                variant="secondary"
                className="bg-white hover:bg-gray-200 "
              >
                Subscribe
              </Button>
            </form>

            <div className="pt-4">
              <h4 className="text-sm font-medium text-white mb-3">Connect With Us</h4>
              <div className="flex gap-4">
                <SocialIcon href="#" icon={<Github className="h-5 w-5" />} />
                <SocialIcon href="#" icon={<Twitter className="h-5 w-5" />} />
                <SocialIcon href="#" icon={<Linkedin className="h-5 w-5" />} />
                <SocialIcon href="#" icon={<Mail className="h-5 w-5" />} />
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-12 bg-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
          >
            © {new Date().getFullYear()} Advanced Research Institute. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6 mt-6 md:mt-0"
          >
            <a href="/privacy" className="text-sm text-gray-500 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-500 hover:text-white transition">
              Terms of Service
            </a>
            <a href="/accessibility" className="text-sm text-gray-500 hover:text-white transition">
              Accessibility
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
      <a 
        href={href} 
        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
      >
        <ArrowRight className="h-3 w-3 text-white group-hover:text-blue-400 transition-all" />
          {text}
      </a>
    </motion.li>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all"
      whileHover={{ y: -3, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}