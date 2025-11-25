import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import { LuBrainCircuit } from "react-icons/lu";
import { GiArtificialIntelligence } from "react-icons/gi";

function Skills() {
  return (
    <div className="flex flex-col items-center relative w-full">
      <div className="absolute h-[25vh] bg-[#6e07f3] w-full" />
      <div className="z-20 border border-indigo-100 flex flex-col lg:flex-row bg-white w-[90%] rounded-[15px] shadow-xl">
        <div className="flex-1 lg:border-r border-b flex flex-col items-center border-indigo-100 space-y-8 py-10 ">
          <BsCodeSlash className="text-7xl p-3 text-black-600 bg-[#5be9b9] rounded-full" />
          <h1 className="lg:text-2xl text-lg font-bold mx-5 text-center text-indigo-800">
            Competitive Programming
          </h1>
          <p className="text-center text-gray-600 font-semibold text-sm lg:text-lg px-5">
            Skilled in competitive programming, consistently delivering
            optimized solutions in coding challenges and contests.
          </p>
          <div>
            <h3 className="text-center text-indigo-800 font-semibold lg:text-lg px-5">
              Languages I use:
            </h3>
            <div className="flex items-center space-x-4 pt-4">
              <img
                alt="java"
                src="https://th.bing.com/th/id/R.d96e9d49bafb33ca0f13109c8daa6502?rik=5Ca%2fwX7juwsZRQ&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2flogopedia%2fimages%2f2%2f26%2fJava.png%2frevision%2flatest%3fcb%3d20120902073224&ehk=nSXkq7nkK89z6IdqWVyk6RUgdtZeQ0n7cGwpAWiaBmc%3d&risl=&pid=ImgRaw&r=0"
                className="h-18 w-12"
              />
              <img
                alt="python"
                src="https://th.bing.com/th/id/OIP.ywwpmPTIExm5SU8gUHesQwHaHa?pid=ImgDet&rs=1"
                className="h-18 w-12"
              />
              <img
                alt="c++"
                src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
                className="h-18 w-12"
              />
            </div>
          </div>
          <div>
            <h3 className="text-center text-indigo-800 font-semibold text-lg px-5">
              My Coding Profiles:
            </h3>
            <div className="flex  items-center space-x-4 pt-4">
              <a href="https://www.codechef.com/users/duapranav11">
                <img
                  src="https://i.pinimg.com/236x/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6--programming.jpg?nii=t"
                  alt="codechef"
                  className="h-12 w-12"
                />
              </a>
              <a href="https://leetcode.com/u/duapranav11/">
                <img
                  src="https://leetcode.com/static/images/LeetCode_logo.png"
                  alt="leetcode"
                  className="h-12 w-12 pt-[3px]"
                />
              </a>
              <a href="https://codeforces.com/profile/duapranav02">
                <img
                  src="https://th.bing.com/th/id/OIP.VbDK_jQbIdyxN3ecX_Ql1AAAAA?pid=ImgDet&rs=1"
                  alt="codeforces"
                  className="h-12 w-12 mx-2"
                />
              </a>
              <a href="https://www.geeksforgeeks.org/user/duapranav/">
                <img
                  src="https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000"
                  alt="geeksforgeeks"
                  className="h-12 w-12 mx-2"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:border-r border-b flex flex-col items-center border-indigo-100 space-y-8 py-10">
          <AiOutlineCode className="text-7xl p-3 text-black-600 bg-[#5be9b9] rounded-full" />
          <h1 className="lg:text-2xl text-lg font-bold mx-5 text-center text-indigo-800">
            Full Stack Development
          </h1>
          <p className="text-center text-gray-600 font-semibold text-sm lg:text-lg px-5">
            Full-stack web developer with expertise in both front-end and
            back-end technologies, creating robust and responsive web
            applications.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-center text-indigo-800 font-semibold text-lg px-5">
              Tools I use:
            </h3>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4 pt-4">
                <img
                  alt="javascript"
                  src="https://ih1.redbubble.net/image.316760221.5828/flat,800x800,075,f.jpg"
                  className="h-18 w-12"
                />
                <img
                  alt="typescript"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                  className="h-18 w-12"
                />
                <img
                  alt="mySQL"
                  src="https://th.bing.com/th/id/OIP.urLHYMYPFxkcs6AC4Io9vwHaHa?pid=ImgDet&rs=1"
                  className="h-18 w-12"
                />
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img
                  alt="html"
                  src="https://world-it.ro/images/logo_html.png"
                  className="h-18 w-12"
                />
                <img
                  alt="css"
                  src="https://th.bing.com/th/id/R.4c4f489f49777a9fd5cd0385dbcb240f?rik=tB%2bvsig0rtG%2bZQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-1Ou9VU12EVk%2fUzEExPKgdLI%2fAAAAAAAAHo0%2fqaZ0lOZI6jw%2fs1600%2fcss_logo.png&ehk=aC26SVdvzcAuykXVtH4EQ%2bb9S4m0aFiOIKxVHps%2fNN8%3d&risl=&pid=ImgRaw&r=0"
                  className="h-14 w-11"
                />
                <img
                  alt="tailwind"
                  src="https://iconape.com/wp-content/files/an/351546/png/tailwind-css-logo.png"
                  className="h-18 w-12"
                />
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img
                  alt="Docker"
                  src="https://vadosware.io/images/docker-logo.png"
                  className="h-18 w-12"
                />
                <img
                  alt="git"
                  src="https://th.bing.com/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?pid=ImgDet&rs=1"
                  className="h-18 w-12"
                />
                <img
                  alt="vscode"
                  src="https://mobilemancerblog.blob.core.windows.net/blog/2020/08/vs-code-logo-transp.png"
                  className="h-18 w-12"
                />
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img
                  alt="aws"
                  src="https://th.bing.com/th/id/R.a6c1d39637949a370f8e93aab60a741f?rik=ABtTtCBpS8oVOw&riu=http%3a%2f%2fgisuser.com%2fwp-content%2fuploads%2f2018%2f08%2f2000px-Amazon_Web_Services_Logo.svg_.png&ehk=hQq0rohWcsyiJCNiAOwDAXgnti8Yjm0TPZJLBnIXSHM%3d&risl=&pid=ImgRaw&r=0"
                  className="h-18 w-12"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-center text-indigo-800 font-semibold text-lg px-5">
              Framework I use:
            </h3>
            <div className="flex flex-col items-center">
              <div className="flex  items-center space-x-4 pt-4">
                <img
                  alt="react"
                  src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
                  className="h-18 w-12"
                />
                <img
                  alt="node"
                  src="https://devlewis.github.io/Portfolio/images/node-icon-real.png"
                  className="h-18 w-12"
                />
                <img
                  alt="mongo"
                  src="https://www.servernoobs.com/wp-content/uploads/2016/01/mongodb-logo-1.png"
                  className="h-18 w-12"
                />
              </div>
              <div className="flex  items-center space-x-4 pt-4">
                <img
                  alt="express"
                  src="https://media.zeemly.com/zeemly/product/expressjs.png"
                  className="h-18 w-12"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  flex flex-col items-center space-y-8 py-10">
          <GiArtificialIntelligence className="text-7xl p-3 text-black-600 bg-[#5be9b9] rounded-full" />
          <h1 className="lg:text-2xl text-lg font-bold mx-5 text-center text-indigo-800">
            AI & ML
          </h1>
          <p className="text-center text-gray-600 font-semibold text-sm lg:text-lg px-5">
            In the realm of artificial intelligence, I am a dedicated deep
            learning enthusiast. My passion drives me to master neural networks,
            ensuring I remain at the forefront of AI innovation. Proficiency in
            designing and training advanced neural networks equips me to develop
            cutting-edge solutions for diverse applications.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-center text-indigo-800 font-semibold text-lg px-5">
              Tools I use:
            </h3>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4 pt-4">
                <img
                  alt="python"
                  src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2019/11/python-logo.png"
                  className="h-18 w-12"
                />
                <img
                  alt="numpy"
                  src="https://avatars2.githubusercontent.com/u/288276?s=280&v=4"
                  className="h-18 w-16"
                />
                <img
                  alt="pandas"
                  src="https://static.javatpoint.com/tutorial/pandas/images/python-pandas.png"
                  className="h-18 w-16 object-fill content-end"
                />
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img
                  alt="tensorflow"
                  src="https://i1.wp.com/albertfattal.com/wp-content/uploads/2018/03/Tensorflow_logo.svg.png?ssl=1"
                  className="h-18 w-12"
                />
                <img
                  alt="kaggle"
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png"
                  className="h-18 w-12"
                />
                <img
                  alt="jupyter"
                  src="https://i0.wp.com/crowintelligence.org/wp-content/uploads/2021/04/1200px-Jupyter_logo.svg_.png?fit=800%2C928&ssl=1"
                  className="h-18 w-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
