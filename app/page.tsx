'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/arena?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-screen px-4">
      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-16 h-16 text-blue-600 mr-4" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Lumio v1.1
          </h1>
        </div>
        <p className="text-xl text-slate-600 mb-8">
          AI 기반 연구 및 분석 시스템
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="무엇이든 물어보세요..."
            className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-full focus:border-blue-500 focus:outline-none shadow-lg"
          />
          <button
            type="submit"
            disabled={!query.trim()}
            className="absolute right-2 top-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </form>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">🔍 심층 연구</h3>
          <p className="text-slate-600">다중 소스에서 정보를 수집하고 분석합니다</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">🤖 AI 협업</h3>
          <p className="text-slate-600">여러 AI 에이전트가 협력하여 최고의 답변을 제공합니다</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">⚡ 실시간 분석</h3>
          <p className="text-slate-600">실시간으로 분석 과정을 확인할 수 있습니다</p>
        </div>
      </div>
    </div>
  );
}
