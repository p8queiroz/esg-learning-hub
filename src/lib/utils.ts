import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMinutes(minutes: number) {
  return `${minutes} min`
}

export const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')
