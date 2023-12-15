import { cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

type ClassValue = Parameters<typeof cx>[0]

const cn = (...inputs: ClassValue[]) => twMerge(cx(inputs))

export { cn }
