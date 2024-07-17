import { Link } from "react-router-dom";

export function Landingpage() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.samsung.com/is/image/samsung/assets/id/p6_gro1/p6_initial_explore_detail/brand/the-voyage-sets-sail/id-global0022_explore_the-voyage-sets-sail_article-hero_pc_1440x788.jpg?$1440_N_JPG$)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="box-content bg-slate-900/90 rounded-2xl p-10">
              <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
              <h3 className="mb-5 text-3xl">Welcome to ChattingYuk!</h3>
              <p className="mb-5">
                ChattingYuk! adalah aplikasi inovatif yang dirancang untuk
                generasi muda yang berinteraksi dengan orang. Aplikasi ini mudah
                digunakan memastikan pengalaman chatting yang lancar dan
                menyenangkan. Dengan ChattingYuk, Anda dapat memperluas jaringan
                sosial Anda, menemukan teman baru, dan berbagi pengalaman
                menarik setiap hari!
              </p>
              <Link to={"/register"}>
                <button className="btn btn-primary text-center m-1">
                  Get Started
                </button>
              </Link>
              <Link to={"/login"}>
                <button className="btn btn-secondary text-center m-1">
                  Login Here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
