interface FlakeStyle {
  left: string
  animationDuration: string
  animationDelay: string
  fontSize: string
  opacity: number
  filter: string
}

interface Flake {
  id: number
  icon: string
  style: FlakeStyle
}

export type { Flake }
