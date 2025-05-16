import Image from "next/image"
import type { Metadata } from "next"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Mitch Zamoff | Alternative Dispute Resolution",
  description: "Experienced mediator and arbitrator providing ADR services throughout the United States",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header/>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://zamoffadr.com/wp-content/uploads/2018/11/ZAM_Home_photo.jpg"
                  alt="Mitch Zamoff"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a3b6c] mb-4">
                  An experienced neutral with substantial experience as a mediator and arbitrator
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Mitch draws upon his experience as an alternative dispute resolution professor, a leader of ADR
                  organizations, an ADR practitioner at one of the world's largest law firms and General Counsel of a
                  Fortune 10 company to help parties resolve disputes of all shapes, sizes and complexity.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Based in Minneapolis, Minnesota, Mitch provides arbitration, mediation and other ADR services to
                  clients throughout the United States using an active, hands-on approach that is informed by thorough
                  preparation and many years of ADR experience.
                </p>
                <Button className="bg-[#0a3b6c] text-white hover:text-blue-200">
                  <a href="#contact">Contact for Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0a3b6c] mb-12">Services</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="mediation">
                  <AccordionTrigger className="text-xl font-semibold text-[#0a3b6c]">Mediation</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-4">
                      My role as a mediator is, first and foremost, to facilitate a candid, robust and respectful
                      exchange of information, interests and ideas. After this exchange has taken place, I will help the
                      parties figure out whether they can find a pathway to resolution. My level of activism is dictated
                      by the desire of the parties, the nature of the dispute and the dynamics of the mediation.
                    </p>
                    <p className="mb-4">
                      Where I believe that I have a useful perspective, I may use a range of evaluative techniques to
                      test whether the proposals are meaningful and calculated to lead to a resolution of the matter.
                    </p>
                    <p>
                      I will do my best to create and promote a respectful, collaborative environment that is conducive
                      to an exchange of interests, ideas and proposals – and, ultimately, the resolution of the dispute.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="arbitration">
                  <AccordionTrigger className="text-xl font-semibold text-[#0a3b6c]">Arbitration</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-4">
                      I have experience both as a single arbitrator and party-appointed arbitrator on three-arbitrator
                      panels. I have extensive familiarity with the rules of the American Arbitration Association and
                      JAMS. I advised the AAA on the development of its rules relating to disputes between healthcare
                      payors and providers.
                    </p>
                    <p>
                      While I will abide by the agreement of the parties with respect to how the arbitration is
                      conducted, I will actively manage your arbitration to ensure that the proceedings are conducted in
                      a timely and efficient matter so that the parties realize the benefits of participating in a
                      process that is more flexible and nimble than litigation. I typically issue reasoned awards unless
                      the parties prefer otherwise. I make maximum use of technology to minimize costs for the parties.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="special-master">
                  <AccordionTrigger className="text-xl font-semibold text-[#0a3b6c]">Special Master</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-4">
                      A special master is a neutral party appointed by a court, often with the consent of the parties,
                      to assist in resolving disputes. Special masters are typically appointed in complex cases in which
                      there are numerous disputes over procedural issues or discovery. With the assistance of an
                      experienced special master, these disputes can often be resolved more quickly and efficiently than
                      if the assigned judge had to decide all the issues herself. Special masters may be appointed
                      pre-trial, during trial or post-trial.
                    </p>
                    <p>
                      I am well-qualified to serve as a special master due to my many years of experience as a civil
                      procedure professor and complex litigation practitioner.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="early-neutral">
                  <AccordionTrigger className="text-xl font-semibold text-[#0a3b6c]">
                    Early Neutral Evaluation and Summary Jury Trials
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-4">
                      Parties engaged in legal disputes are often unsure of the strength of their positions. The
                      application of the law to their case may be ambiguous or difficult to predict. In such a
                      situation, early neutral evaluation can help provide clarity and a more meaningful basis for
                      negotiation and settlement than the mere predictions of counsel. Early neutral evaluation is a
                      process in which a neutral party examines the evidence, listens to the disputants' positions, and
                      then gives the parties his or her evaluation of the case.
                    </p>
                    <p className="mb-4">
                      Another innovative case evaluation tool is the summary jury trial. A summary jury trial can take
                      much of the uncertainty out of a legal dispute. The plaintiff and defendant may agree on the facts
                      of a case, but disagree on what the outcome would be at trial. In summary jury trials, attorneys
                      for each party make abbreviated case presentations to a mock jury, the party representatives and a
                      presiding neutral. The mock jury renders an advisory verdict. The verdict is frequently helpful in
                      resolving the dispute, particularly where one of the parties has an unrealistic assessment of its
                      case.
                    </p>
                    <p>
                      I am available to serve either as a neutral in early neutral evaluation processes or to preside
                      over summary jury trials or similar case assessment exercises.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="corporate-monitor">
                  <AccordionTrigger className="text-xl font-semibold text-[#0a3b6c]">
                    Corporate Monitor
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p>
                      Settlements of government investigations involving a wide range of compliance issues often call
                      for the appointment of a corporate monitor to ensure that the settling party adheres to its
                      obligations under the settlement agreement and otherwise maintains and enforces a robust
                      compliance program. As a former federal prosecutor and General Counsel of a major publicly traded
                      company, as well as lead counsel for clients in numerous high-stakes government investigations
                      involving corporate integrity agreements, I am well-positioned to serve as a corporate compliance
                      monitor.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0a3b6c] mb-12">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[400px] md:h-[500px] min-w-[350px] lg:row-span-2">
                <Image
                  src="https://zamoffadr.com/wp-content/uploads/2018/11/ZAM_Experience_photo_sm.jpg"
                  alt="Mitch Zamoff"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <p className="text-gray-700 mb-8">
                    Mitch draws upon his extensive experience as an alternative dispute resolution professor, a leader of
                    ADR organizations, an ADR practitioner at one of the world's largest law firms, and General Counsel of
                    a Fortune 10 company to help parties resolve disputes of all shapes, sizes and complexity.
                  </p>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full my-6 md:col-span-2 lg:col-span-1">
                <AccordionItem value="academic">
                  <AccordionTrigger className="text-xl font-semibold text-[#0a3b6c]">
                    Academic Experience
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[#0a3b6c]">
                        Litigation Program Director and Professor, University of Minnesota Law School
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Professor of alternative dispute resolution, civil procedure and evidence</li>
                        <li>Civil litigation concentration chair</li>
                        <li>Co-Director, Law in Practice program</li>
                        <li>Co-Founder and Co-Director, Community Mediation Clinic</li>
                        <li>Stanley Kinyon Teacher of the Year Award</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="legal">
                  <AccordionTrigger className="text-xl font-semibold text-[#0a3b6c]">
                    Legal Practice Experience
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-[#0a3b6c]">Partner, Hogan Lovells U.S. LLP</h4>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>
                            Extensive experience arbitrating, mediating and litigating high-stakes, complex disputes
                            at leading international law firm
                          </li>
                          <li>
                            Specific experience and expertise in healthcare law, contract disputes, insurance law,
                            competition and consumer protection matters, class action proceedings, government
                            investigations and enforcement proceedings
                          </li>
                          <li>Guide to the Leading U.S. Litigation Lawyers</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#0a3b6c]">
                          Executive Vice President & General Counsel, UnitedHealth Group
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Responsible for ADR and litigation dockets of Fortune 10 healthcare company</li>
                          <li>One of "10 GCs to Watch" Identified by Corporate Board Member</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#0a3b6c]">
                          Assistant United States Attorney, U.S. Department of Justice (Philadelphia, PA)
                        </h4>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="adr">
                  <AccordionTrigger className="text-xl font-semibold text-[#0a3b6c]">
                    Specific ADR Experience
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-[#0a3b6c]">American Arbitration Association</h4>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Member, AAA Council</li>
                          <li>Former member, AAA Board of Directors</li>
                          <li>Former member, AAA Healthcare Dispute Resolution Advisory Council</li>
                          <li>Faculty, AAA Healthcare Dispute Resolution Innovation & Strategy Conference</li>
                          <li>
                            Faculty, American Conference Institute, Managed Care Disputes and Litigation, Alternative
                            Dispute Resolution: Streamlining the Arbitration Process in Light of the Healthcare
                            Payor-Provider Rules
                          </li>
                          <li>
                            Faculty, AAA Rx for Healthcare Disputes: Exploring Alternative Dispute Resolution
                            Solutions
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#0a3b6c]">Conflict Resolution Center of Minnesota</h4>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Former co-chair and vice-chair of the Board of Directors</li>
                          <li>Mediator and arbitrator</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#0a3b6c]">Additional Roles</h4>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Arbitrator, Minneapolis Public Housing Authority</li>
                          <li>Mediator, City of Minneapolis</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="training">
                  <AccordionTrigger className="text-xl font-semibold text-[#0a3b6c]">
                    ADR-Specific Training
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>AAA, Arbitrator Performance and Demeanor: Meeting Participant Expectations</li>
                      <li>AAA, Best Practices In Commercial Arbitration</li>
                      <li>AAA, The Ethics of e-Discovery in Arbitration</li>
                      <li>AAA, Exercising Arbitrator Discretion: A Look at Some Best Practices</li>
                      <li>AAA, Case Xplorer Evaluative Arbitration Training Program</li>
                      <li>Minnesota CLE, The Strategic Mediator</li>
                      <li>AAA, Top Ways to Persuade Your Arbitrator</li>
                      <li>
                        Conflict Resolution Minnesota, Building Bridges: Better Dispute Resolution Through Research
                        Based Practices
                      </li>
                      <li>AAA, Healthcare Payor Provider Arbitration Rules Training</li>
                      <li>Straus Institute for Dispute Resolution, A Systematic Approach to Mediation Strategies</li>
                      <li>Minnesota State Bar Association, Certified Civil Arbitration Skills Training</li>
                      <li>AAA Webinar, How to Prevent Arbitrations from Transforming into Litigations</li>
                      <li>AAA Arbitration Awards: Safeguarding, Deciding & Writing Awards</li>
                      <li>AAA, Arbitration Fundamentals and Best Practices</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#0a3b6c] mb-12">Contact</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0a3b6c] mb-4">Get in Touch</h3>
                    <p className="text-gray-700 mb-6">
                      Contact Mitch for more information about his ADR services or to schedule a consultation.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#0a3b6c] flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">202-641-2437</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#0a3b6c] flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <a href="mailto:mitch@zamoffadr.com" className="text-gray-700 hover:text-[#0a3b6c]">
                          mitch@zamoffadr.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#0a3b6c] flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">Minneapolis, Minnesota</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3b6c]"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3b6c]"
                          placeholder="Your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3b6c]"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-[#0a3b6c] hover:text-blue-200 text-white">Send Message</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a3b6c] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Mitch Zamoff ADR</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/mitch-zamoff-1b308049/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 hover:text-blue-200" />
              </a>
              <div className="text-sm">
                <span>Call: 202-641-2437 | Email: </span>
                <a href="mailto:mitch@zamoffadr.com" className="hover:text-blue-200">
                  mitch@zamoffadr.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
