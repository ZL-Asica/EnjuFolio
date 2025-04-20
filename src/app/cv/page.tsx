import type { Metadata } from 'next'
import { Brain, Computer, Cpu, Download, Eye, Globe, HeartPulse, Watch } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CV | Elara\'s Portfolio',
  description: 'Curriculum vitae of Zhuoran (Elara) Liu, MSCS student focusing on HCI research.',
  keywords: 'cv, resume, elara, portfolio, Zhuoran',
  authors: { name: 'Elara Liu', url: 'https://zla.app' },
  alternates: { canonical: `https://zla.app/cv` },
}

export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 ">
      {/* name and download button */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <div>
          <h1 className="text-4xl font-serif font-bold">
            Zhuoran (Elara) Liu
          </h1>
          <p className="mt-1 text-primary-300 dark:text-primary-400">
            MSCS, Northwestern University
          </p>
        </div>
        <Link
          href=""
          download
          className="mt-4 sm:mt-0 inline-flex items-center text-secondary dark:text-secondary-dark text-hover-secondary"
          aria-label="Download CV PDF"
        >
          <Download className="w-6 h-6 mr-2" />
          Download CV
        </Link>
      </section>

      {/* Contact Information */}
      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-2">
          Contact Information
        </h2>
        <ul className="list-none space-y-1">
          <li>
            Email:
            <Link href="mailto:elara.liu@u.northwestern.edu" className="ml-1 underline-interactive text-hover-primary">elara.liu@u.northwestern.edu</Link>
          </li>
          <li>
            Website:
            <Link href="https://zla.app" className="ml-1 underline-interactive text-hover-primary">zla.app</Link>
          </li>
          <li>Location: Evanston, IL, USA</li>
        </ul>
      </section>

      {/* Education */}
      <section id="education" className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-2">
          Education
        </h2>
        <ul className="space-y-4">
          <li>
            <p className="font-semibold">Northwestern University</p>
            <p className="text-sm italic">Master of Science in Computer Science, Sep 2024 – Present</p>
          </li>
          <li>
            <p className="font-semibold">University of California, Irvine</p>
            <p className="text-sm italic">Bachelor of Science (Hons) in Computer Science & Informatics, Sep 2020 – Jun 2024</p>
          </li>
        </ul>
      </section>

      {/* Research Interests */}
      <section id="research-interests" className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-2">
          Research Interests
        </h2>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-3 list-none p-0 m-0 sm:grid-cols-2">
          <li className="flex items-center">
            <Computer className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2" />
            Human–Computer Interaction
          </li>
          <li className="flex items-center">
            <HeartPulse className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2" />
            Health Informatics
          </li>
          <li className="flex items-center">
            <Watch className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2" />
            Wearable Sensing
          </li>
          <li className="flex items-center">
            <Cpu className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2" />
            Machine Learning
          </li>
          <li className="flex items-center">
            <Eye className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2" />
            UX & Accessibility
          </li>
          <li className="flex items-center">
            <Brain className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2" />
            LLM
          </li>
          <li className="flex items-center">
            <Globe className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2" />
            UbiComp
          </li>
        </ul>
      </section>

      {/* Selected Publications */}
      {/* <section id="publications" className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-2">
          Selected Publications
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Liu Z., “”
            {' '}
            <span className="italic">VENUE</span>
            .
          </li>
          <li>
            Liu E., “,”
            {' '}
            <span className="italic">VENUE</span>
            , 2024.
          </li>
          <li>
            Liu Z., “,”
            {' '}
            <span className="italic">VENUE</span>
            .
          </li>
        </ol>
      </section> */}

      {/* Teaching Experience */}
      <section id="teaching" className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-2">
          Teaching Experience
        </h2>
        <ul className="space-y-2 list-disc pl-5">
          <li>AP Computer Science A - Instructor (Spring 2025): Prepared modules on Java, OOP, and Data Structures.</li>
          <li>Consumer Health Informatics - Reader (Spring 2024): Helped Prof.Yunan Chen on teaching and grading.</li>
          <li>Programming with Software Libraries - Learning Assistant (Winter 2024): Help coaching on Python libraries related contents.</li>
          <li>Programming with Software Libraries - Tutor (Spring 2023): Teach students about Python libraries related contents.</li>
          <li>Boolean Algebra & Logic (Winter 2021): Introduction to discrete mathematics.</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-2">
          Skills
        </h2>
        <dl className="space-y-6">
          <div>
            <dt className="font-semibold text-secondary dark:text-secondary-dark">Programming Languages</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Swift', 'C++', 'C', 'HTML', 'CSS'].map(item => (
                <span key={item} className="px-2 py-1 bg-primary-200 dark:bg-primary-600 rounded text-sm">{item}</span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-secondary dark:text-secondary-dark">Frameworks & Servers</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {['React', 'Expo', 'Next.js', 'Nuxt', 'Express.js', 'Hono', 'Vitest', 'Vue', 'Jekyll', 'Flask', 'Nginx', 'Linux'].map(item => (
                <span key={item} className="px-2 py-1 bg-primary-200 dark:bg-primary-600 rounded text-sm">{item}</span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-secondary dark:text-secondary-dark">Design & Media</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {['Figma', 'Premiere Pro', 'Photoshop', 'InDesign', 'Final Cut Pro', 'Da Vinci Resolve', 'Cinema 4D'].map(item => (
                <span key={item} className="px-2 py-1 bg-primary-200 dark:bg-primary-600 rounded text-sm">{item}</span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-secondary dark:text-secondary-dark">DevOps</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {['GitHub Actions', 'Docker', 'npm', 'AWS (Lambda, RDS, EC2)', 'Cloudflare (Workers, D1, KV)', 'Firebase'].map(item => (
                <span key={item} className="px-2 py-1 bg-primary-200 dark:bg-primary-600 rounded text-sm">{item}</span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-secondary dark:text-secondary-dark">Languages</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {['English (Proficient)', 'Chinese (Native)'].map(item => (
                <span key={item} className="px-2 py-1 bg-primary-200 dark:bg-primary-600 rounded text-sm">{item}</span>
              ))}
            </dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
