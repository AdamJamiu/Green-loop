"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function MiniChart({
  data,
  color = "#5eb237",
}: {
  data: any;
  color?: string;
}) {
  return (
    <div className="w-28 h-10">
      {/* Adjust width/height as needed */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color} // Tailwind green-400
            fill="white" // Tailwind green-100
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
