import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react"

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Header */}
      <section className="section pt-12">
        <div className="container-xl">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Projects
            </div>
            <h1 className="headline">
              <span className="gradient-text">My Projects</span>
            </h1>
            <p className="subheadline">
              Exploring the intersection of AI, machine learning, and real-world applications
            </p>
          </div>
        </div>
      </section>

      {/* Projects Categories */}
      <section className="section pt-0">
        <div className="container-xl">
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-4 py-2 bg-white text-black rounded-md font-medium text-sm">All Projects</button>
            <button className="px-4 py-2 bg-transparent border border-gray-800 text-white rounded-md font-medium text-sm hover:border-gray-700 transition-colors">
              Machine Learning
            </button>
            <button className="px-4 py-2 bg-transparent border border-gray-800 text-white rounded-md font-medium text-sm hover:border-gray-700 transition-colors">
              NLP
            </button>
            <button className="px-4 py-2 bg-transparent border border-gray-800 text-white rounded-md font-medium text-sm hover:border-gray-700 transition-colors">
              Computer Vision
            </button>
            <button className="px-4 py-2 bg-transparent border border-gray-800 text-white rounded-md font-medium text-sm hover:border-gray-700 transition-colors">
              Reinforcement Learning
            </button>
          </div>

          {/* Featured Project */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium mb-8">Featured Project</h2>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-full min-h-[300px] overflow-hidden">
                  <img src="/images/project-1.png" alt="Intelli-Chat" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-purple-400/20 text-purple-400 rounded-md">Featured</span>
                    <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">NLP</span>
                    <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">LLMs</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-2">Intelli-Chat</h3>
                  <p className="text-purple-400 text-sm mb-4">AI-Powered Conversational System</p>
                  <p className="text-gray-300 mb-6">
                    Architected scalable chatbot system processing 60,000+ documents with hybrid retrieval-augmented
                    generation approach. Implemented dual-mode architecture combining LLM-based conversation and
                    vector-based information retrieval for accurate and contextually relevant responses.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>2023</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Tag className="h-4 w-4 mr-2" />
                      <span>Python, OpenAI API, TensorFlow</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="https://github.com/swethareddyganta/intelli-chat"
                      className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors"
                      target="_blank"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-medium mb-8">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Intelli-Chat"
                subtitle="AI-Powered Conversational System"
                description="Architected scalable chatbot system processing 60,000+ documents with hybrid retrieval-augmented generation approach."
                image="/images/project-1.png"
                tags={["NLP", "LLMs", "OpenAI API"]}
                year="2023"
                githubLink="https://github.com/swethareddyganta/intelli-chat"
              />
              <ProjectCard
                title="Language Translation"
                subtitle="Neural Machine Translation"
                description="Built production-ready neural translation system supporting 5+ language pairs with 85% BLEU score."
                image="/images/project-2.png"
                tags={["Seq2Seq", "LSTM", "Attention Mechanism"]}
                year="2022"
                githubLink="https://github.com/swethareddyganta/Language-Translation"
              />
              <ProjectCard
                title="Telugu GPT"
                subtitle="Language Model for Telugu"
                description="Developed specialized language model for Telugu language with improved tokenization and context handling."
                image="/images/project-3.png"
                tags={["NLP", "Transformers", "Low-Resource Languages"]}
                year="2022"
                githubLink="https://github.com/swethareddyganta/teluguGPT"
              />
              <ProjectCard
                title="Meme Persuasion Detection"
                subtitle="Multimodal Content Analysis"
                description="Developed multimodal classification system for detecting persuasion techniques in internet memes."
                image="/images/project-4.png"
                tags={["Multimodal ML", "Computer Vision", "NLP"]}
                year="2023"
                githubLink="https://github.com/swethareddyganta/MemePersuasionDetection"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Research
            </div>
            <h2 className="headline">Research Projects</h2>
            <p className="subheadline mx-auto">Academic and industry research contributions</p>
          </div>
          <div className="space-y-12">
            <ResearchProjectCard
              title="Tokenization Challenges in Multilingual GPT"
              conference="ICIIRS-23"
              description="Research addressing real-world challenges in multilingual AI text generation, focusing on optimizing tokenization for non-English languages. Developed novel preprocessing techniques that reduced token usage by 75% while maintaining semantic accuracy."
              image="/images/experience-1.png"
              tags={["NLP", "Multilingual AI", "Tokenization"]}
              year="2023"
              paperLink="#"
            />
            <ResearchProjectCard
              title="Fraud Detection in Insurance Claims"
              conference="ICIIRS-23"
              description="Published findings demonstrating practical applications of ML in financial fraud detection, with a focus on ensemble methods and imbalanced datasets. Proposed a novel feature engineering pipeline that improved detection accuracy by 15% compared to baseline models."
              image="/images/experience-2.png"
              tags={["Machine Learning", "Fraud Detection", "Ensemble Methods"]}
              year="2023"
              paperLink="#"
            />
            <ResearchProjectCard
              title="Data Augmentation Techniques in Computer Vision"
              conference="IEEE ICSES 2021"
              description="Research on deep learning-based image augmentation techniques, achieving 98.57% accuracy on MNIST and advancing robust computer vision techniques. Introduced a new augmentation strategy that improved model generalization by 12% on limited training data."
              image="/images/experience-3.png"
              tags={["Computer Vision", "Data Augmentation", "CNN"]}
              year="2021"
              paperLink="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section gradient-bg">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline">Interested in Collaboration?</h2>
            <p className="subheadline mx-auto mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="mailto:sganta3@buffalo.edu" className="button-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-lg font-medium text-white">
                SRG
              </Link>
            </div>
            <div className="flex space-x-8 mb-6 md:mb-0">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="text-sm text-gray-400 hover:text-white transition-colors">
                Experience
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link href="mailto:sganta3@buffalo.edu" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-sm">Email</span>
              </Link>
              <Link
                href="https://linkedin.com/in/swetha-reddy-ganta"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <span className="text-sm">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/swethareddyganta"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <span className="text-sm">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Swetha Reddy Ganta. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

function ProjectCard({ title, subtitle, description, image, tags, year, githubLink }) {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">{year}</span>
            {tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          <p className="text-purple-400 text-sm mb-3">{subtitle}</p>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
        </div>
        <Link
          href={githubLink}
          className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors mt-4"
          target="_blank"
        >
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
        </Link>
      </div>
    </div>
  )
}

function ResearchProjectCard({ title, conference, description, image, tags, year, paperLink }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-1">
        <div className="card overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-purple-400/20 text-purple-400 rounded-md">Research</span>
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">{year}</span>
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-purple-400 text-sm mb-4">{conference}</p>
          <p className="text-gray-300 text-sm mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={paperLink}
            className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors"
            target="_blank"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Research Paper
          </Link>
        </div>
      </div>
    </div>
  )
}

