"use client"

import React, { ElementType, useCallback, useRef } from "react"
import { motion, useAnimationFrame } from "framer-motion"

import { cn } from "@/lib/utils"
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref"

interface FontVariationAxis {
  name: string
  min: number
  max: number
}

interface FontVariationMapping {
  x: FontVariationAxis
  y: FontVariationAxis
}

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  as?: ElementType
  fontVariationMapping: FontVariationMapping
  containerRef: React.RefObject<HTMLDivElement | null>
}

const VariableFontAndCursor = ({
  children,
  as = "span",
  fontVariationMapping,
  className,
  containerRef,
  ...props
}: TextProps) => {
  const mousePositionRef = useMousePositionRef(containerRef)
  const spanRef = useRef<HTMLSpanElement>(null)

  const interpolateFontVariationSettings = useCallback(
    (xPosition: number, yPosition: number) => {
      const container = containerRef.current
      if (!container) return "0 0"

      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight

      const xProgress = Math.min(Math.max(xPosition / containerWidth, 0), 1)
      const yProgress = Math.min(Math.max(yPosition / containerHeight, 0), 1)

      const xValue =
        fontVariationMapping.x.min +
        (fontVariationMapping.x.max - fontVariationMapping.x.min) * xProgress
      const yValue =
        fontVariationMapping.y.min +
        (fontVariationMapping.y.max - fontVariationMapping.y.min) * yProgress

      return `'${fontVariationMapping.x.name}' ${xValue}, '${fontVariationMapping.y.name}' ${yValue}`
    },
    [fontVariationMapping, containerRef]
  )

  useAnimationFrame(() => {
    const settings = interpolateFontVariationSettings(
      mousePositionRef.current.x,
      mousePositionRef.current.y
    )
    if (spanRef.current) {
      spanRef.current.style.fontVariationSettings = settings
    }
  })

  // Fixed framer-motion create component usage
  const MotionComponent = motion[as as keyof typeof motion] as React.FC<any> || motion.span

  return (
    <MotionComponent
      className={cn(className)}
      data-text={typeof children === "string" ? children : undefined}
      ref={spanRef}
      {...props}
    >
      <span className="inline-block">{children}</span>
    </MotionComponent>
  )
}

export default VariableFontAndCursor
