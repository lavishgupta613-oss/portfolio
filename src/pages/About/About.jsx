import HeroImg from "@/assets/images/my_photo.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Data Scientist, AI Engineer, Problem Solver
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Lavish Gupta"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-semibold">Lavish Gupta</span>, a
                Data Scientist at <span className="font-semibold">Turing</span> and
                a B.Tech graduate in{" "}
                <span className="font-semibold">
                  Artificial Intelligence and Data Science from IIT Jodhpur
                </span>
                . I specialize in building intelligent, reliable systems by
                combining strong core computer science fundamentals with
                hands-on experience in machine learning and backend development.
              </p>

              <p className="text-white">
                At Turing, I work extensively with Large Language Models,
                designing and refining system prompts, performing iterative
                prompt tuning, and evaluating model outputs using feedback-driven
                mechanisms inspired by RLHF. My focus is on improving alignment,
                consistency, and real-world reliability of AI systems.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Beyond my professional work, I have built and shipped
                    end-to-end projects including a smart wishlist browser
                    extension published on the Microsoft Edge Add-ons Store,
                    full-stack GenAI applications with FastAPI and React, and
                    distributed federated learning systems focused on data
                    privacy. I am driven by continuous learning and a passion
                    for creating practical, impactful technology.
                  </p>

                  <div className="mt-6 space-y-2">
                    <cite className="block font-medium text-white">
                      Lavish Gupta
                    </cite>
                    <span className="text-sm text-gray-300">
                      Data Scientist @ Turing · IIT Jodhpur (AI & DS)
                    </span>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
