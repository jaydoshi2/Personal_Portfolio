"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Github, Linkedin, Code, X as XIcon } from "lucide-react"

import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo, menu, close, jd_logo } from "../assets"

const IconWithTooltip = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group text-secondary hover:text-white transition-colors"
  >
    {children}
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-white text-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
      {label}
    </span>
  </a>
)

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Name - Left Section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={jd_logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            &nbsp;
            <span className="sm:block hidden">Jay.D.Doshi</span>
          </p>
        </Link>

        {/* Navigation Links - Center Section */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons and Resume Button - Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <IconWithTooltip href="https://github.com" label="GitHub">
            <Github size={20} />
          </IconWithTooltip>
          <IconWithTooltip href="https://linkedin.com" label="LinkedIn">
            <Linkedin size={20} />
          </IconWithTooltip>
          <IconWithTooltip href="https://x.com" label="X">
            <XIcon size={20} />
          </IconWithTooltip>
          <IconWithTooltip href="https://leetcode.com" label="LeetCode">
            <Code size={20} />
          </IconWithTooltip>
          <a
            href="https://drive.google.com/file/d/1AoXKlnZ0xXXy1L5yS7QvvuBb-1IyoV9j/view?usp=sharing"
            download
            className="ml-2 px-4 py-2 bg-tertiary text-white rounded-lg font-medium text-sm hover:bg-opacity-80 transition-all"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl`}
          >
            <div className="flex flex-col gap-6 w-full">
              {/* Navigation Links in Mobile Menu */}
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(nav.title)
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>

              {/* Separator */}
              <div className="h-px w-full bg-gray-700"></div>

              {/* Social Icons in Mobile Menu */}
              <div className="flex justify-between">
                <IconWithTooltip href="https://github.com" label="GitHub">
                  <Github size={20} />
                </IconWithTooltip>
                <IconWithTooltip href="https://linkedin.com" label="LinkedIn">
                  <Linkedin size={20} />
                </IconWithTooltip>
                <IconWithTooltip href="https://x.com" label="X">
                  <XIcon size={20} />
                </IconWithTooltip>
                <IconWithTooltip href="https://leetcode.com" label="LeetCode">
                  <Code size={20} />
                </IconWithTooltip>
              </div>

              {/* Resume Button in Mobile Menu */}
              <a
                href="/resume.pdf"
                download
                className="w-full text-center px-4 py-2 bg-tertiary text-white rounded-lg font-medium text-sm hover:bg-opacity-80 transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
