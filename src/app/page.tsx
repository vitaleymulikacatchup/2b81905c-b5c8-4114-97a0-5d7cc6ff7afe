"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Globe, Users, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="IT Home"
          navItems={[
            { name: "About", id: "about" },
            { name: "Courses", id: "courses" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Enroll Now",            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Master Digital Skills at IT Home"
          description="Comprehensive IT education programs designed to launch your tech career. Learn from industry experts in a supportive learning environment."
          background={{ variant: "sparkles-gradient" }}
          tag="Top-Rated IT School"
          tagIcon={Zap}
          imageSrc="https://img.b2bpic.net/free-photo/spacious-area-group-young-people-casual-clothes-working-modern-office_146671-16510.jpg"
          imageAlt="IT Home classroom with students learning"
          buttons={[
            { text: "Start Learning Today", href: "contact" },
            { text: "Explore Programs", href: "courses" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="IT Home: Preparing Tomorrow's Technology Leaders"
          useInvertedBackground="invertDefault"
          metrics={[
            { icon: Users, label: "Students Graduated", value: "5,000+" },
            { icon: Award, label: "Expert Instructors", value: "150+" },
            { icon: Zap, label: "Job Placement Rate", value: "94%" },
            { icon: Globe, label: "Industry Partnerships", value: "200+" }
          ]}
        />
      </div>

      <div id="courses" data-section="courses">
        <FeatureCardMedia
          title="Our Popular Programs"
          description="Choose from industry-leading courses designed to build practical skills and advance your technology career."
          useInvertedBackground="noInvert"
          animationType="slide-up"
          textboxLayout="default"
          features={[
            {
              id: "1",              title: "Full-Stack Web Development",              description: "Master front-end and back-end technologies with hands-on projects and real-world applications.",              tag: "12 Weeks",              imageSrc: "https://img.b2bpic.net/free-photo/side-view-attractive-hispanic-developer-programming-software-using-computer-while-working-from-home_662251-988.jpg",              imageAlt: "Web development course",              buttons: [{ text: "Learn More", href: "contact" }]
            },
            {
              id: "2",              title: "Advanced Python Programming",              description: "Build strong foundations in Python with applications in automation, data science, and AI projects.",              tag: "10 Weeks",              imageSrc: "https://img.b2bpic.net/free-photo/person-computing-software-code-laptop_482257-85707.jpg",              imageAlt: "Python programming course",              buttons: [{ text: "Learn More", href: "contact" }]
            },
            {
              id: "3",              title: "Data Science & Analytics",              description: "Learn data manipulation, visualization, and machine learning techniques for modern data-driven decisions.",              tag: "14 Weeks",              imageSrc: "https://img.b2bpic.net/free-photo/man-working-energy-innovations-his-laptop_23-2148820170.jpg",              imageAlt: "Data science course",              buttons: [{ text: "Learn More", href: "contact" }]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="Current Job Openings"
          description="Our graduates are in high demand. Here are some positions our students have recently filled."
          useInvertedBackground="invertDefault"
          textboxLayout="default"
          animationType="slide-up"
          metrics={[
            {
              id: "1",              title: "Junior Full-Stack Developer",              subtitle: "Remote · Full-time · Entry to Mid-level",              category: "Web Development",              value: "$65K – $85K",              buttons: [{ text: "View Job", href: "contact" }]
            },
            {
              id: "2",              title: "Data Analytics Specialist",              subtitle: "Hybrid · Full-time · Mid-level",              category: "Data Science",              value: "$70K – $95K",              buttons: [{ text: "View Job", href: "contact" }]
            },
            {
              id: "3",              title: "QA Automation Engineer",              subtitle: "On-site · Full-time · Mid-level",              category: "Quality Assurance",              value: "$60K – $80K",              buttons: [{ text: "View Job", href: "contact" }]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet Our Expert Instructors"
          description="Learn from industry professionals with decades of combined experience in technology."
          useInvertedBackground="noInvert"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",              name: "David Chen",              role: "Full-Stack Development Lead",              imageSrc: "https://img.b2bpic.net/free-photo/mid-shot-counselor-cabinet_23-2148759108.jpg",              imageAlt: "David Chen"
            },
            {
              id: "2",              name: "Sarah Mitchell",              role: "Data Science & AI Specialist",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-senior-lecturer-with-arms-crossed_1262-1753.jpg",              imageAlt: "Sarah Mitchell"
            },
            {
              id: "3",              name: "James Rodriguez",              role: "Cloud & DevOps Expert",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-colleagues-learning-work_23-2149300706.jpg",              imageAlt: "James Rodriguez"
            },
            {
              id: "4",              name: "Emily Wong",              role: "Cybersecurity Instructor",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-young-business-person-doing-internship_23-2149305396.jpg",              imageAlt: "Emily Wong"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Student Success Stories"
          description="See how IT Home has transformed careers and opened doors for our graduates."
          useInvertedBackground="invertDefault"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",              title: "Career-Changing Experience",              quote: "IT Home's comprehensive curriculum and supportive instructors helped me transition from a non-tech background into a thriving web development career. Within 3 months of graduation, I landed my dream job!",              name: "Marcus Johnson",              role: "Full-Stack Developer at TechCorp",              imageSrc: "https://img.b2bpic.net/free-photo/cheerful-young-man-holding-folder-outdoor_74855-2121.jpg",              imageAlt: "Marcus Johnson"
            },
            {
              id: "2",              title: "Industry-Ready Skills",              quote: "The hands-on projects and real-world scenarios prepared me perfectly for the demands of professional development. My employers were impressed with my practical experience from day one.",              name: "Priya Patel",              role: "Data Analyst at FinanceFirst",              imageSrc: "https://img.b2bpic.net/free-photo/blonde-young-woman-smiling-portrait-wearing-blue-gentle-shirt-building_158595-6609.jpg",              imageAlt: "Priya Patel"
            },
            {
              id: "3",              title: "Outstanding Support Team",              quote: "From enrollment to graduation and beyond, IT Home provided exceptional guidance. The mentorship and networking opportunities have been invaluable for my career growth.",              name: "Alex Thompson",              role: "Cloud Engineer at CloudSystems",              imageSrc: "https://img.b2bpic.net/free-photo/blonde-young-woman-smiling-portrait-wearing-blue-gentle-shirt-building_158595-6612.jpg",              imageAlt: "Alex Thompson"
            },
            {
              id: "4",              title: "Rapid Skill Development",              quote: "I was amazed at how quickly I progressed through the program. The structured curriculum combined with personalized attention from instructors made all the difference in my learning journey.",              name: "Jessica Lee",              role: "QA Automation Engineer at SoftwareHub",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-smiley-woman-library_23-2149204737.jpg",              imageAlt: "Jessica Lee"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our programs, enrollment, and career support."
          useInvertedBackground="noInvert"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",              title: "What are the prerequisites for IT Home programs?",              content: "Most programs are designed for beginners, though basic computer literacy is helpful. Some advanced courses require foundational programming knowledge. We offer prep modules to get you up to speed before the main curriculum."
            },
            {
              id: "2",              title: "How long do the programs take?",              content: "Our programs range from 10-16 weeks of full-time study. We also offer part-time options that span 4-6 months. Flexible scheduling allows you to balance learning with work or other commitments."
            },
            {
              id: "3",              title: "Do you provide job placement assistance?",              content: "Yes! Our career services team provides resume review, interview coaching, and connects you with our network of 200+ hiring partners. Our 94% job placement rate speaks to the quality of our support."
            },
            {
              id: "4",              title: "What is the cost of enrollment?",              content: "Program costs range from $4,500 to $9,500 depending on the course length and specialization. We offer payment plans, financing options, and scholarship programs for qualified students."
            },
            {
              id: "5",              title: "Can I study part-time while working?",              content: "Absolutely! We offer evening and weekend classes specifically designed for working professionals. Many of our students successfully balance full-time jobs with their IT Home education."
            },
            {
              id: "6",              title: "What kind of projects will I work on?",              content: "You'll work on real-world projects throughout the program, from building web applications to analyzing datasets to creating automation scripts. These portfolio pieces showcase your skills to potential employers."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your career with IT Home? Join thousands of successful graduates and start your journey into technology today."
          useInvertedBackground="invertDefault"
          animationType="entrance-slide"
          buttons={[
            { text: "Enroll Today", href: "contact" },
            { text: "Schedule a Consultation", href: "contact" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="IT Home"
          copyrightText="© 2025 IT Home. All rights reserved."
          columns={[
            {
              title: "Programs",              items: [
                { label: "Web Development", href: "courses" },
                { label: "Data Science", href: "courses" },
                { label: "Python Programming", href: "courses" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "contact" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Student Portal", href: "https://portal.ithome.example.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}