'use client'

import { Skeleton } from "@/components/ui/skeleton"


import { useTheme } from "next-themes";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import {useState, useEffect} from 'react'

export default function ThemeButton() {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() =>  {
    setMounted(true)
  }, [])

  if(!mounted) {
        return <Skeleton className="w-[25px] h-[25px] rounded-full" />
  }


  return (
    <button aria-label="theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? (
            <BiSun size={25} className="text-black dark:text-white hover:animate-spin"/>
        ) : (
            <BiMoon size={25} className="text-black dark:text-white hover:animate-spin"/>
        )}
    </button>
  )
}
