import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type ClassValue = Parameters<typeof clsx>[0]

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export { cn }
