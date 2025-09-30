import React, { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const [captions, setCaptions] = useState([]);
  const [currentRoastIndex, setCurrentRoastIndex] = useState(-1);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!/^image\/(png|jpe?g|webp)$/i.test(file.type)) {
      alert("Please upload a PNG/JPG/WEBP image.");
      return;
    }
    setImage(URL.createObjectURL(file));
    setCaptions([]);
    setCurrentRoastIndex(-1);
  };

  const roastLocally = () => {
    if (!image) {
      alert("Upload a selfie first.");
      return;
    }
    setCaptions([
      "Bro, pose nannaythundu, but still no Dubai visa soon alle 😂",
      "This DP screams: ‘Mole, kalyanam eppo?’ – every aunty at church 💍",
      "Hairline status: more empty than KSRTC at 1am 🚌🤣",
      "Expression polichu, but appan still thinks nursing job means cleaning toilet 😅",
      "You look like someone who says ‘just one porotta more’ and orders six 🫓🔥",
      "This selfie has more filter than Palakkad gap dust-free day 🌫️📸",
      "Vibe is ‘Lulu Mall parking full’ but still circle for 40 minutes 🚗🌀",
      "You look ready to fight anyone who says biriyani without achaar is fine 🍛🤨",
      "Face says gym-going, stomach says pazham pori + chaaya combo daily 🍌☕",
      "Stylish hair, but barber uncle still used Vibhoothi-level confidence ✂️😌",
      "That smile is pure ‘Onam adipoli’ till u see payasam finish ayyi 🥲🥣",
      "Full cool look, but mom still calls at 9pm: ‘Evideya?’ 📱😤",
      "Bro, this is the same face you make when rain starts and clothes are outside 🌧️🧺",
      "Outfit on point, but chappal is still Hawai from bus stand stall 👡😎",
      "Eyes say ‘calm’, but inside: ‘signalil oru green thara daivame’ 🚦🙏",
      "Your aura says you still argue ‘parotta>naan’ in every restaurant debate 🍽️🔥",
      "Grown-up look, but still saves cousin’s number as ‘Shaji auto’ 🚗📲",
      "This face is exactly ‘rains for 10 mins, power cut for 4 hours’ 🌧️🔌",
      "Confidence level: ordering meen curry and then asking for more moru 🐟🥛",
      "Bro, you look like the guy who says ‘last overil adi’ and gets bowled 🏏😅",
    ]);
    setCurrentRoastIndex(0);
  };

  const showNextRoast = () => {
    if (captions.length === 0) return;
    setCurrentRoastIndex((prev) => (prev + 1) % captions.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-violet-50 to-sky-50">
      <main className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center gap-8">
        {/* One colorful main title */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Aneesh Roast My Selfie
        </h1>

        {/* Upload • compact dashed button */}
        <div className="flex justify-center">
          <label className="group inline-flex flex-col items-center justify-center gap-2 w-44 md:w-52 px-4 py-5 rounded-xl border-2 border-dashed border-gray-300 bg-white/80 hover:bg-white cursor-pointer transition-colors select-none">
            <svg className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 15a4 4 0 01.88-7.903A5 5 0 1116 7a4 4 0 011 7.874M12 12v6m0-6l-3 3m3-3l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-center text-xs text-gray-500 group-hover:text-blue-600">
              Upload a selfie (PNG, JPG, or WEBP)
            </span>
            <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
          </label>
        </div>

        {/* Preview + CTA Card */}
        {image && (
          <div className="w-full max-w-2xl bg-white/95 backdrop-blur rounded-3xl shadow-2xl border border-white p-6 flex flex-col items-center gap-6">
            <img src={image} alt="Preview" className="w-full rounded-2xl" />
            <button
              onClick={roastLocally}
              className="self-center px-10 md:px-12 py-5 md:py-6 rounded-full bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 text-white font-extrabold text-3xl md:text-4xl tracking-tight shadow-lg hover:shadow-pink-300/50 hover:scale-[1.02] active:scale-[0.99] transition-transform"
            >
              Roast me 🔥
            </button>
          </div>
        )}

        {/* One-by-one roast viewer */}
        {currentRoastIndex >= 0 && (
          <div className="w-full max-w-2xl bg-white/95 rounded-3xl shadow-xl border border-white p-6 flex flex-col items-center gap-4">
            <div className="w-full text-center text-lg md:text-xl p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
              {captions[currentRoastIndex]}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={showNextRoast}
                className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition-colors"
              >
                Roast me again
              </button>
              <button
                onClick={() => setCurrentRoastIndex(-1)}
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 font-semibold bg-white hover:bg-gray-50"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
