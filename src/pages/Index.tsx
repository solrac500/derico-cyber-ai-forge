
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Send, Shield, Bot, Code, Mail, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent! 🔐",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const techStack = [
    "Python (Flask, FastAPI, Requests, Pandas)",
    "Cybersec (SIEM, Nmap, Burp, Metasploit, Nessus, Splunk, Wireshark)",
    "Cloud: AWS, Azure (IAM, Security Groups, Lambda, Defender)",
    "AI Tools: LangChain, OpenAI API, Prompt Engineering, RAG pipelines",
    "Languages: Python, Bash, JavaScript (Node), YAML, JSON, SQL"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 px-6 py-10">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold glow animate-glow-pulse mb-4">
          Carlos Derico
        </h1>
        <p className="text-xl md:text-2xl mt-2 text-sky-300 mb-6">
          Cybersecurity | Python Automation | AI Engineering
        </p>
        <Button 
          variant="outline" 
          className="border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-black transition-all duration-300 glow-hover"
          asChild
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </header>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="bg-slate-800 border-slate-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-sky-400 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              XSER™
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-slate-300">
              Exploit Surface Exposure Rating for real-world risk auditing. Ask for your XSER today.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-sky-400 flex items-center gap-2">
              <Bot className="h-6 w-6" />
              AI-Driven Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-slate-300">
              Prompt engineering, intelligent automation, GPT-based SOC tooling, threat detection, & more.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-sky-400 flex items-center gap-2">
              <Code className="h-6 w-6" />
              Script Arsenal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-slate-300">
              Custom Python tools for brute-force detection, log parsing, automation, red/blue ops, and backend APIs.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Tech Stack Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl mb-6 glow flex items-center gap-3">
          🧠 Tech Stack & Specialties
        </h2>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <ul className="space-y-3">
            {techStack.map((tech, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-300 hover:text-sky-300 transition-colors">
                <span className="text-sky-400 mt-1">▶</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl mb-6 glow flex items-center gap-3">
          <Mail className="h-8 w-8" />
          Contact Me
        </h2>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sky-300 mb-2 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sky-300 mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sky-300 mb-2 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </label>
                <Textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white focus:border-sky-500 focus:ring-sky-500 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-sky-500 text-black hover:bg-sky-400 transition-all duration-300 font-semibold"
              >
                <Send className="mr-2 h-4 w-4" />
                Send 🔐
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-500 mt-10 text-sm border-t border-slate-700 pt-8">
        <p>© 2025 Carlos Derico. XSER™ is a proprietary concept by Carlos Derico.</p>
      </footer>
    </div>
  );
};

export default Index;
