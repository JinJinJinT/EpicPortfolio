"use client";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { motion } from "framer-motion";
import { useNavbarVisibility } from "@/app/NavbarProvider";

// export function NavbarDemo() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <OldNavbar className="top-2" />
//     </div>
//   );
// }

export function NavBar() {
  const { isVisible } = useNavbarVisibility();

  return (
    <div className="top-2 relative w-full items-center justify-center mt-4">
      <motion.div
        className="nav"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -60 }}
        transition={{ duration: 1.4, delay: 3 }} // Customize the duration as needed
      >
        <JapaneseNavBar />
      </motion.div>
    </div>
  );
}

function JapaneseNavBar() {
  return (
    <nav
      className="flex items-center justify-center sm:text-sm md:text-base lg:text-lg sm:flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6"
      // style={{ fontSize: "calc(10px + 2vmin)" }}
    >
      <ul className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap space-x-4">
        {["projects", "about me", "contact", "cv", "github"].map((item, i) => (
          <React.Fragment key={item}>
            <li>
              <a
                href="#"
                className="hover:text-pink-300 dark:text-base-100 dark:hover:text-orange-500 transition-none exclude-transition text-md md:text-2xl lg:text-3xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item}
              </a>
            </li>
            {i <= 4 && <li className="text-gray-500">|</li>}
            {i === 4 && <ThemeSwitcher />}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

// function OldNavbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <div
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Services">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//         {/* <ThemeSwitcher /> */}
//       </Menu>
//     </div>
//   );
// }
