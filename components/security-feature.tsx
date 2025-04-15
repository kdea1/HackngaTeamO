"use client"

import { motion } from "framer-motion"

interface SecurityFeatureProps {
  number: string
  title: string
  description: string
}

export default function SecurityFeature({ number, title, description }: SecurityFeatureProps) {
  return (
    <motion.div
      className="rounded-lg border border-gray-800 bg-gray-900 p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900 text-lg font-bold text-emerald-400">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
