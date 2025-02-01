import React from "react";
import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";
import ParticlesComponent from "./partcals";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="relative min-h-[calc(100vh-76px)] flex items-center bg-transparent text-white">
        {/* Background effect placeholder */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Replace with FloatingPaper equivalent */}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Hi i am
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {" "}
                  Swapnil
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
            >
              Building seamless digital experiences with clean code and creative
              design – Full Stack Developer crafting the future of the web
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to={"/contact"}>
                {" "}
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center">
                  Contact me
                </button>
              </Link>
              <Link to={"/project"}>
                <button className="border border-purple-500 text-white hover:bg-purple-500/20 px-8 py-3 rounded-lg flex items-center">
                  <Sparkles className="mr-2 h-5 w-5" /> See Examples
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Animated robot placeholder */}
        <div className="absolute bottom-0 right-0 w-96 h-96">
          {/* Replace with RoboAnimation equivalent */}
        </div>
      </div>
      <ParticlesComponent />
    </>
  );
}

export default Home;
