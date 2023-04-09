import { useState } from "react";
import screen from "./assets/tela.png";

import "./styles/global.css";
import { ButtonThemes } from "./components/ButtonThemes";

export function App() {
  const [darkTheme, setDarkTheme] = useState("");

  function handleDarkTheme() {
    darkTheme === "dark" ? setDarkTheme("") : setDarkTheme("dark");
  }

  return (
    <section className={darkTheme}>
      <main className="w-full flex max-md:flex-col dark:text-white h-screen">
        <div className="flex justify-center items-center flex-[1] max-md:hidden dark:bg-[#0A0D14] p-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-black leading-9 mb-3">
              &lt;Feita para <br />{" "}
              <strong className="text-[#00DEFE]">Desenvolvedores</strong>/&gt;
            </h1>
            <p className="text-[#121725] dark:text-[#AFB5C3] mb-6">
              Conecte-se e faça parte de uma comunidade construída <br /> por
              desenvolvedores e crie novas oportunidades.
            </p>
            <img src={screen} alt="Login tela" />
          </div>
        </div>

        <div className="flex flex-[1] flex-col justify-center items-center bg-[#F3F5F9] dark:bg-[#10141E] border-l border-[#dbdee4]dark:border-[0] p-4">
          <div className="flex flex-col">
            <h3 className="font-black mb-6 text-2xl">Login</h3>
            <form className="max-w-sm">
              <label className="font-semibold text-sm">E-mail</label>
              <input
                className="bg-white border-[1px] dark:border-[0] w-full h-11 p-4 rounded-md mt-2 mb-4 dark:bg-[#3D404b] placeholder:text-sm"
                placeholder="Digite seu e-mail"
                type="email"
              />

              <label className="font-semibold text-sm">Senha</label>
              <input
                className="bg-white border-[1px] dark:border-[0]  w-full h-11 p-4 rounded-md mt-2 mb-4 dark:bg-[#3D404b] placeholder:text-sm"
                type="password"
                placeholder="Digite sua senha"
              />
              <div className="flex items-center justify-between text-xs">
                <label className="text-[#9BA1AE]">
                  <input
                    className="mr-1 w-4 h-4 checked:bg-[#00DEFE] border-[#3D404b]"
                    type="checkbox"
                  />{" "}
                  Lembrar senha
                </label>
                <a href="#">Esqueceu sua senha?</a>
              </div>

              <button className="bg-[#00defe] font-bold w-full border-[0] p-3 text-[#2D272A] shadow-[0px 8px 26px rgba(0, 222, 254, 0.36)] rounded-md my-3 cursor-pointer">
                Login
              </button>

              <small>
                Não está registrado?{" "}
                <a href="#" className="text-[#00DEFE] font-semibold">
                  Crie sua conta
                </a>
              </small>
            </form>
          </div>
        </div>
      </main>
      <ButtonThemes darkTheme={darkTheme} handleDarkTheme={handleDarkTheme} />
    </section>
  );
}
