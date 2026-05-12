"use client";
import useReveal from "../hooks/useReveal";

/**
 * Client component that bootstraps scroll-reveal on the page.
 * Keeps page.tsx as a Server Component.
 */
export default function RevealInit() {
  useReveal();
  return null;
}
