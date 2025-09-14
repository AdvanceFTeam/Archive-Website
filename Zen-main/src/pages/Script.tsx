import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code, Zap, Shield, Star } from 'lucide-react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import lua from 'react-syntax-highlighter/dist/esm/languages/hljs/lua';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaDiscord } from 'react-icons/fa';

SyntaxHighlighter.registerLanguage('lua', lua);

const ScriptPage = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `loadstring(game:HttpGet("https://raw.githubusercontent.com/Zenhubtop/zen_hub_pr/main/zennewwwwui.lua", true))()`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    { name: 'Title', icon: Zap, description: 'The Description.' },
    { name: 'Title 2', icon: Shield, description: 'The Description.' },
    { name: 'Title 3', icon: Star, description: 'The Description.' }
  ];

  const supportedGames = [
    { name: 'Bloxfruit', id: '2753915549' },
    { name: 'King Legacy', id: '4520749081' },
    { name: 'Fisch', id: '16732694052' }
  ];

  const changelog = [
    {
      version: '1.0.0',
      date: 'Date',
      changes: [
        'Changelog 1',
        'Changelog 2',
        'Changelog 3'
      ]
    },
  ];

  const handleGameClick = (gameId: string) => {
    window.open(`https://www.roblox.com/games/${gameId}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 px-4 pb-24 relative"
    >
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <Code className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 text-white"
          >
            Scripts
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Get started with our script
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 lg:col-span-2 order-1"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Code className="w-5 h-5 text-accent-primary" />
                Script
              </h2>
              <button
                onClick={handleCopy}
                className="bg-black/50 border border-white/10 hover:border-white/20 px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <SyntaxHighlighter
              language="lua"
              style={atomOneDark}
              className="rounded-xl !bg-black/50 !p-4"
              showLineNumbers
            >
              {codeString}
            </SyntaxHighlighter>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold mb-4">Changelog</h3>
              <div className="space-y-6">
                {changelog.map((release) => (
                  <div key={release.version} className="border-l-2 border-accent-primary pl-4">
                    <h4 className="font-semibold">{release.version}</h4>
                    <p className="text-sm text-gray-400 mb-2">{release.date}</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {release.changes.map((change, index) => (
                        <li key={index}>• {change}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 order-2"
          >
            <h2 className="text-xl font-semibold mb-4">Join Our Community</h2>
            <div className="space-y-4">
              <a
                href="https://discord.gg/zen-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#5865F2]/20 hover:bg-[#5865F2]/30 border border-[#5865F2]/30 rounded-xl p-4 flex items-center gap-3 transition-all duration-300"
              >
                <FaDiscord className="w-6 h-6 text-[#5865F2]" />
                <div>
                  <div className="font-medium">ZenHub</div>
                  <div className="text-sm text-gray-400">Join our main community</div>
                </div>
              </a>
              <a
                href="https://discord.gg/gGsDxanW"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#5865F2]/20 hover:bg-[#5865F2]/30 border border-[#5865F2]/30 rounded-xl p-4 flex items-center gap-3 transition-all duration-300"
              >
                <FaDiscord className="w-6 h-6 text-[#5865F2]" />
                <div>
                  <div className="font-medium">Zenware</div>
                  <div className="text-sm text-gray-400">Executor Server</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Supported Games</h2>
            <div className="grid grid-cols-1 gap-3">
              {supportedGames.map((game) => (
                <button
                  key={game.name}
                  onClick={() => handleGameClick(game.id)}
                  className="bg-black/30 border border-white/5 rounded-xl p-4 flex items-center gap-3 hover:bg-black/40 hover:border-white/10 transition-all duration-300 w-full text-left"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
                  <span>{game.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <div className="grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="bg-black/30 border border-white/5 rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">{feature.name}</div>
                    <div className="text-sm text-gray-400">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScriptPage;
