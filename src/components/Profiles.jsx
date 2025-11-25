import { motion } from "framer-motion";
import { FaGithub, FaMedium } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiLinkedin } from "react-icons/si";

const profileCards = [
  {
    name: "GitHub",
    handle: "@pranavdua02",
    url: "https://github.com/pranavdua02",
    icon: <FaGithub className="text-4xl" />,
    gradient: "from-indigo-600 to-purple-600",
    summary: ["Open-source contributor", "50+ public repositories", "Featured stacks: MERN, GenAI, DevOps"],
  },
  {
    name: "LeetCode",
    handle: "@duapranav11",
    url: "https://leetcode.com/u/duapranav11/",
    icon: <SiLeetcode className="text-4xl" />,
    gradient: "from-amber-500 to-orange-500",
    summary: ["Rating 1800+", "1000+ problems solved", "10+ Badges earned"],
  },
];

const quickLinks = [
  {
    name: "GeeksforGeeks",
    handle: "@duapranav",
    url: "https://www.geeksforgeeks.org/user/duapranav/",
    icon: <SiGeeksforgeeks />,
    meta: "450+ problem solutions",
  },
  {
    name: "LinkedIn",
    handle: "@pranav-dua",
    url: "https://www.linkedin.com/in/pranav-dua/",
    icon: <SiLinkedin />,
    meta: "Weekly tech reflections",
  },
  {
    name: "Medium",
    handle: "@duapranav11",
    url: "https://medium.com/@duapranav11",
    icon: <FaMedium />,
    meta: "Technical Narratives",
  },
];

const Profiles = () => {
  return (
    <section className="bg-slate-50/80 w-full py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <div className="text-center space-y-4 mb-12">
          <h2 className="pt-10 text-5xl font-bold text-indigo-900">Developer Footprint</h2>
          <p className="text-slate-600 text-base lg:text-lg max-w-2xl mx-auto">
            These profiles capture my shipping cadence, problem-solving depth, and the
            communities where I stay sharp through code reviews, contests, and build-in-public
            projects.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-12">
          {profileCards.map((profile) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className={`p-6 rounded-3xl bg-gradient-to-br ${profile.gradient} text-white shadow-lg shadow-indigo-200/60 transition-transform hover:-translate-y-1`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    {profile.icon}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">{profile.name}</p>
                    <p className="text-2xl font-semibold">{profile.handle}</p>
                  </div>
                </div>
                <span className="text-white/70 text-sm">Visit ↗</span>
              </div>
              <ul className="space-y-2 text-sm lg:text-base">
                {profile.summary.map((line) => (
                  <li key={line} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-indigo-100/40 p-6 lg:p-10">
          <div className="flex flex-col items-center gap-6 mb-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Follow my daily development journey on these platforms
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="group border border-slate-100 rounded-2xl p-4 bg-slate-50 hover:bg-white transition-all hover:-translate-y-0.5 w-full max-w-[220px] text-center"
              >
                <div className="flex flex-col items-center gap-3 text-indigo-900 mb-3">
                  <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-2xl group-hover:text-indigo-600 transition-colors">
                    {profile.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{profile.name}</p>
                    <p className="font-semibold">{profile.handle}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{profile.meta}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;

