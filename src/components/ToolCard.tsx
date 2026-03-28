import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ToolCard({ tool }) {
  return (
    <Link
      href={tool.url}
      target="_blank"
      className="block border p-4 rounded-xl hover:shadow-md"
    >
      <div className="flex justify-between">
        <h3 className="font-bold">{tool.name}</h3>
        <ExternalLink size={16} />
      </div>
      <p className="text-sm text-gray-500 mt-1">{tool.desc}</p>
      {tool.free && (
        <span className="text-xs bg-green-100 text-green-700 px-2 rounded mt-2 inline-block">
          免费
        </span>
      )}
    </Link>
  );
}