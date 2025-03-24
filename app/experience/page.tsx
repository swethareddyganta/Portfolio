import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, MapPin, Award } from "lucide-react"

export default function Experience() {
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
              Experience
            </div>
            <h1 className="headline">
              <span className="gradient-text">Professional Journey</span>
            </h1>
            <p className="subheadline">My experience in AI research and development</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section pt-0">
        <div className="container-xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:translate-x-[-0.5px]"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem
                position="right"
                title="Artificial Intelligence Research Intern"
                company="Kakatiya Institute of Technology and Science"
                companyLink="https://www.kitsw.ac.in/"
                location="Warangal, India"
                period="Feb 2023 – Jun 2023"
                description="Optimized tokenization in multilingual language models, improving efficiency by 60% for non-English languages. Developed language-specific preprocessing pipelines, reducing token usage per prompt from 70-100 to 18-25."
                achievements={[
                  "Published research paper at ICIIRS-23 conference",
                  "Reduced token usage by 75% for non-English languages",
                  "Implemented preprocessing pipeline used by 200+ students",
                  "Collaborated with a team of 5 researchers to develop novel tokenization strategies",
                  "Presented findings at 2 departmental seminars",
                ]}
                skills={["NLP", "Multilingual AI", "Python", "TensorFlow", "Research"]}
                image="/images/experience-1.png"
              />

              <TimelineItem
                position="left"
                title="Machine Learning Research Intern"
                company="Kakatiya Institute of Technology and Science"
                companyLink="https://www.kitsw.ac.in/"
                location="Warangal, India"
                period="Mar 2023 – Jul 2023"
                description="Engineered ML pipeline for fraud detection achieving 78% accuracy and 81% AUC using ensemble methods. Implemented data balancing and feature engineering techniques to optimize model performance on imbalanced datasets."
                achievements={[
                  "Achieved 78% accuracy on fraud detection task",
                  "Presented findings at regional ML conference",
                  "Developed reusable feature engineering pipeline",
                  "Reduced false positive rate by 23% compared to baseline models",
                  "Created comprehensive documentation and tutorials for future researchers",
                ]}
                skills={["Machine Learning", "Data Analysis", "Python", "Scikit-learn", "XGBoost"]}
                image="/images/experience-2.png"
              />

              <TimelineItem
                position="right"
                title="Data Science Intern"
                company="3 CORTEX Technologies"
                companyLink="#"
                location="Hyderabad, India"
                period="Jun 2022 – Jul 2022"
                description="Applied innovative AI optimization techniques to solve complex challenges, improving project outcomes by 75%. Created interactive data visualizations to communicate insights and enhance cross-functional collaboration."
                achievements={[
                  "Improved project outcomes by 75%",
                  "Created interactive dashboards used by executive team",
                  "Optimized data processing pipeline reducing runtime by 40%",
                  "Automated weekly reporting process saving 5+ hours per week",
                  "Mentored 2 junior interns on data visualization techniques",
                ]}
                skills={["Data Visualization", "Python", "Pandas", "Tableau", "SQL"]}
                image="/images/experience-3.png"
              />

              <TimelineItem
                position="left"
                title="Computer Vision Research Assistant"
                company="Kakatiya Institute of Technology and Science"
                companyLink="https://www.kitsw.ac.in/"
                location="Warangal, India"
                period="Jan 2022 – May 2022"
                description="Conducted research on deep learning-based image augmentation techniques, achieving 98.57% accuracy on MNIST dataset. Implemented and evaluated various data augmentation strategies to improve model robustness and generalization."
                achievements={[
                  "Published paper in IEEE ICSES 2021 conference",
                  "Achieved 98.57% accuracy on MNIST with limited training data",
                  "Developed novel augmentation technique improving generalization by 12%",
                  "Created open-source library for image augmentation techniques",
                  "Presented research at undergraduate symposium",
                ]}
                skills={["Computer Vision", "Deep Learning", "PyTorch", "Data Augmentation", "CNNs"]}
                image="/images/experience-4.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Skills
            </div>
            <h2 className="headline">Technical Expertise</h2>
            <p className="subheadline mx-auto">Core competencies and technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              category="AI & Machine Learning"
              skills={[
                { name: "TensorFlow", level: 90 },
                { name: "PyTorch", level: 85 },
                { name: "Scikit-learn", level: 95 },
                { name: "NLP", level: 90 },
                { name: "Computer Vision", level: 85 },
                { name: "Reinforcement Learning", level: 80 },
              ]}
            />
            <SkillCard
              category="Programming"
              skills={[
                { name: "Python", level: 95 },
                { name: "C/C++", level: 80 },
                { name: "Java", level: 75 },
                { name: "SQL", level: 85 },
                { name: "MATLAB", level: 70 },
              ]}
            />
            <SkillCard
              category="Data & Analytics"
              skills={[
                { name: "NumPy", level: 95 },
                { name: "Pandas", level: 90 },
                { name: "Matplotlib", level: 85 },
                { name: "Seaborn", level: 80 },
                { name: "Tableau", level: 75 },
                { name: "Statistical Analysis", level: 85 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Education
            </div>
            <h2 className="headline">Academic Background</h2>
            <p className="subheadline mx-auto">Foundation in artificial intelligence and computer science</p>
          </div>
          <div className="space-y-12">
            <EducationCard
              institution="University at Buffalo, State University of New York"
              degree="Master of Science in Engineering Science"
              specialization="Artificial Intelligence"
              period="Aug. 2023 – Dec. 2024"
              location="Buffalo, NY"
              description="Pursuing advanced studies in artificial intelligence with focus on deep learning, natural language processing, and computer vision. Conducting research on multilingual NLP and reinforcement learning applications."
              courses={[
                "Advanced Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Reinforcement Learning",
                "AI Ethics",
                "Big Data Analytics",
              ]}
              image="/images/university-at-buffalo.jpeg"
              link="https://www.buffalo.edu/"
            />

            <EducationCard
              institution="Kakatiya Institute of Technology and Science"
              degree="Bachelor of Technology"
              specialization="Computer Science"
              period="Aug. 2019 – May 2023"
              location="Warangal, India"
              description="Graduated with honors in Computer Science with specialization in artificial intelligence and machine learning. Completed thesis on 'Tokenization Challenges in Multilingual GPT' with distinction."
              courses={[
                "Data Structures and Algorithms",
                "Database Management Systems",
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Networks",
                "Operating Systems",
                "Software Engineering",
              ]}
              image="/images/kakatiya-university.jpeg"
              link="https://www.kitsw.ac.in/"
            />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Certifications
            </div>
            <h2 className="headline">Professional Development</h2>
            <p className="subheadline mx-auto">Continuous learning and skill enhancement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard
              title="Deep Learning Specialization"
              issuer="Coursera - deeplearning.ai"
              date="2022"
              description="Completed 5-course specialization covering neural networks, CNN, RNN, and ML project structuring."
              skills={["Neural Networks", "CNN", "RNN", "TensorFlow"]}
              link="#"
            />
            <CertificationCard
              title="TensorFlow Developer Certificate"
              issuer="Google"
              date="2022"
              description="Professional certification demonstrating proficiency in building TensorFlow models."
              skills={["TensorFlow", "Keras", "ML Deployment", "Model Optimization"]}
              link="#"
            />
            <CertificationCard
              title="Machine Learning Engineering for Production (MLOps)"
              issuer="Coursera - deeplearning.ai"
              date="2023"
              description="Specialized training in deploying ML models to production environments."
              skills={["MLOps", "Model Serving", "Data Pipelines", "Monitoring"]}
              link="#"
            />
            <CertificationCard
              title="Natural Language Processing Specialization"
              issuer="Coursera - deeplearning.ai"
              date="2022"
              description="Comprehensive training in modern NLP techniques and applications."
              skills={["NLP", "Transformers", "Word Embeddings", "Sequence Models"]}
              link="#"
            />
            <CertificationCard
              title="Computer Vision Nanodegree"
              issuer="Udacity"
              date="2021"
              description="Advanced computer vision techniques including object detection and image segmentation."
              skills={["Computer Vision", "Object Detection", "Image Segmentation", "PyTorch"]}
              link="#"
            />
            <CertificationCard
              title="Data Science Professional Certificate"
              issuer="IBM"
              date="2021"
              description="Comprehensive data science training covering the entire data science workflow."
              skills={["Data Analysis", "Machine Learning", "Data Visualization", "SQL"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section gradient-bg">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline">Let's Connect</h2>
            <p className="subheadline mx-auto mb-10">
              Interested in discussing potential opportunities or collaborations?
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

function TimelineItem({
  position,
  title,
  company,
  companyLink,
  location,
  period,
  description,
  achievements,
  skills,
  image,
}) {
  return (
    <div className={`relative flex items-start ${position === "right" ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-purple-500 rounded-full transform md:translate-x-[-50%] translate-y-[10px]"></div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${position === "right" ? "md:pl-16 pl-8" : "md:pr-16 pl-8"}`}>
        <div className="card overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={company} className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-medium mb-1">{title}</h3>
                <Link
                  href={companyLink}
                  target="_blank"
                  className="text-purple-400 text-sm mb-1 hover:text-purple-300 transition-colors"
                >
                  {company}
                </Link>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-sm text-gray-400 mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{period}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">{description}</p>
            <h4 className="text-lg font-medium mb-3">Key Achievements</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mb-6">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillCard({ category, skills }) {
  return (
    <div className="card p-6 h-full">
      <h3 className="text-xl font-medium mb-6">{category}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EducationCard({ institution, degree, specialization, period, location, description, courses, image, link }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-1">
        <div className="card overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={institution} className="w-full h-48 object-cover" />
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="card p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <Link href={link} target="_blank" className="hover:text-purple-400 transition-colors">
                <h3 className="text-xl font-medium mb-1">{institution}</h3>
              </Link>
              <p className="text-purple-400 text-sm mb-1">{degree}</p>
              <p className="text-blue-400 text-sm">{specialization}</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center text-sm text-gray-400 mb-1">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{period}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-6">{description}</p>
          <h4 className="text-lg font-medium mb-3">Key Courses</h4>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-md">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CertificationCard({ title, issuer, date, description, skills, link }) {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="mb-auto">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center text-sm text-gray-400">
            <Award className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <p className="text-purple-400 text-sm mb-4">{issuer}</p>
        <p className="text-gray-300 text-sm mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={link}
        className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors mt-4"
        target="_blank"
      >
        <ExternalLink className="mr-2 h-4 w-4" />
        View Certificate
      </Link>
    </div>
  )
}

