"use client";
import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import tools from "@/data/tools.json";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

  const categories = [
    "全部",
    "编程开发",
    "设计绘画",
    "视频剪辑",
    "写作办公",
    "音频配音",
    "教育学习",
    "效率工具",
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase())
      || tool.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "全部" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">✨ AI 工具导航</h1>
          <p className="text-slate-500">收集全网优质AI工具</p>
        </div>

        <div className="relative max-w-xl mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="搜索工具..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-500 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-800">{tool.name}</h3>
                <ExternalLink size={16} className="text-slate-400" />
              </div>
              <p className="text-sm text-slate-500 mb-3">{tool.desc}</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
                  {tool.category}
                </span>
                {tool.free && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    免费
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}