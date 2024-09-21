
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    (<div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <nav className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            Gongati Chetan Reddy
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Education
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section id="about" className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold md:text-4xl">Gongati Chetan Reddy</h1>
              <p className="text-muted-foreground">
                I am a passionate and driven fresher student, eager to apply my knowledge and skills to make a positive
                impact in the industry. With a strong academic background and a keen interest in technology, I am
                excited to embark on a new chapter of my career.
              </p>
              <Link
                href="#"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}>
                Contact Me
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/Photo.jpg"
                alt="Gongati Chetan Reddy"
                width={300}
                height={300}
                className="rounded-full" />
            </div>
          </div>
        </section>
        <section
          id="education"
          className="container mx-auto px-4 py-12 md:px-6 md:py-16 bg-muted">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
                <p className="text-muted-foreground">KL University, 2021 - 2025</p>
                <p className="text-muted-foreground">CGPA: 9.46/10.0</p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Higher Secondary</h3>
                <p className="text-muted-foreground">Akanksha Jr College, 2019 - 2021</p>
                <p className="text-muted-foreground">Marks: 939/1000</p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Secondary</h3>
                <p className="text-muted-foreground">SDR English Medium High School, 2018 - 2019</p>
                <p className="text-muted-foreground">GPA: 10.0/10.0</p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg border bg-background p-4 shadow-sm">
                <h3 className="text-lg font-bold">Programming Languages</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-4 shadow-sm">
                <h3 className="text-lg font-bold">Frameworks & Libraries</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Django</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-4 shadow-sm">
                <h3 className="text-lg font-bold">Tools & Technologies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                  
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-4 shadow-sm">
                <h3 className="text-lg font-bold">Other Skills</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Problem-solving</li>
                  <li>Teamwork</li>
                  <li>Communication</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="container mx-auto px-4 py-12 md:px-6 md:py-16 bg-muted">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Employability Consultancy System</CardTitle>
                  <CardDescription>
                  The Employability Consultancy System is a platform designed to connect job seekers with career experts, providing personalized guidance on resume building, interview preparation, and skill enhancement. It leverages data-driven insights to help users improve their employability and secure suitable job opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://github.com/chetan-4-5/Employability-Consultancy-System"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}>
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Movie Search</CardTitle>
                  <CardDescription>
                  The Movie Search application allows users to explore a vast database of films, providing detailed information such as cast, synopsis, reviews, and ratings. Users can search for movies by title, genre, or release year.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://movie-search-front-end-xi.vercel.app/"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}>
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Task Management System</CardTitle>
                  <CardDescription>
                  The Task Management System is a productivity tool designed to help individuals and teams organize, prioritize, and track their tasks effectively. It features intuitive interfaces for creating and assigning tasks, setting deadlines, and monitoring progress, ultimately enhancing collaboration and ensuring that projects are completed on time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://github.com/chetan-4-5/Task-Management-System"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}>
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>House Price Prediction</CardTitle>
                  <CardDescription>
                  The House Price Prediction system utilizes machine learning algorithms to analyze various factors, such as location, size, and amenities, to forecast real estate prices. By leveraging historical data and trends, it provides users with accurate estimates, helping buyers, sellers, and investors make informed decisions in the housing market.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://github.com/chetan-4-5/House-Price-Predictor"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}>
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>EKirana</CardTitle>
                  <CardDescription>
                  EKirana is a user-friendly app designed to streamline the grocery shopping experience by connecting local kirana stores with customers. It enables users to browse products, place orders, and receive home delivery, while providing shop owners with tools for inventory management and customer engagement, fostering a vibrant community marketplace.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://github.com/chetan-4-5/Ekirana"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}>
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  rows={4} />
              </div>
              <div className="col-span-1 md:col-span-2">
                <Button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div
          className="container mx-auto px-4 text-center text-muted-foreground md:px-6">
          <p>&copy; 2024 Gongati Chetan Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>)
  );
}
