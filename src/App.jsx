import React from 'react';
import episode1 from './assets/episode1.jpg';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="py-12 px-4 text-center bg-white shadow-sm">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-comic-accent">
          看護学生妻とフリーダム夫の子育て奮闘記
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          めたほんだ家のドタバタな日常をお届けする4コマコミックエッセイ
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">

        {/* Character Introduction */}
        <section className="mb-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-comic-text">めたほんだ家の3人</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Papa */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
              <h3 className="text-xl font-bold mb-2 text-blue-600">パパ</h3>
              <p className="text-gray-700 leading-relaxed">
                超自由人のマイペースパパ。<br />
                在宅で仕事を調整しつつ、ひまの通院・公園・民泊掃除・送迎なんでも担当。<br />
                いじられがちで、いちばんパシられている人。
              </p>
            </div>

            {/* Mama */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-400">
              <h3 className="text-xl font-bold mb-2 text-pink-600">ママ</h3>
              <p className="text-gray-700 leading-relaxed">
                「ママ × 看護学校 × 戦士モード」の三刀流。<br />
                休みの日はだいたい図書館か教科書の山の中。<br />
                安全対策グッズと手作りヘッドギアのクオリティはプロ級。
              </p>
            </div>

            {/* Hima */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
              <h3 className="text-xl font-bold mb-2 text-yellow-600">ひま</h3>
              <p className="text-gray-700 leading-relaxed">
                持病もあって成長はゆっくりマイペース。<br />
                でもボール投げとハーモニカ、チェックの厳しさは年齢不相応。<br />
                お風呂・外食・民泊部屋をカオスにする、笑顔のラスボス。
              </p>
            </div>
          </div>
        </section>

        {/* Comic Viewer */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold">第1話：うちの3人</h2>
            <span className="text-sm text-gray-500">2025.11.27</span>
          </div>
          <div className="p-4 md:p-8 flex justify-center bg-gray-50">
            <img
              src={episode1}
              alt="第1話コミック"
              className="max-w-full h-auto rounded shadow-sm"
            />
          </div>
          <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">読んでくれてありがとう！</p>
            <a
              href="https://x.com/MetaHONDA/status/1993541976436990370?s=20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-comic-accent hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md transform hover:scale-105"
            >
              次の話を読む
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Metahonda Family. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
