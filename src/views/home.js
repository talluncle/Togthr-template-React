import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <header className="home-header1">
          <header data-thq="thq-navbar" className="home-navbar">
            <img alt="image" src="/logo.svg" className="home-branding" />
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <div className="home-hamburger">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-icon10"
                />
              </div>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container2">
                  <img alt="image" src="/logo.svg" className="home-image1" />
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon11">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="home-text10">About</span>
                  <span className="home-text11">Features</span>
                  <span className="home-text12">Pricing</span>
                  <span className="home-text13">Team</span>
                  <span className="home-text14">Blog</span>
                </nav>
                <div className="home-container3">
                  <button className="home-login button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon13"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon15"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon17"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
        <video
          src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          loop
          muted
          poster="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-hero-content">
          <div className="home-header-container1">
            <div className="home-header2">
              <h1 className="home-heading1">
                <span className="home-text15">Você está preparado?</span>
                <br className="home-text16"></br>
              </h1>
            </div>
            <p className="home-caption1">
              Uma nova fase da guerra acaba de começar
            </p>
          </div>
          <button className="home-button1 button">
            <span>conheça agora</span>
          </button>
        </div>
      </section>
      <section className="home-note">
        <span className="home-text18">
          <span>Somos a New League Games</span>
          <br></br>
        </span>
        <h2 className="home-caption2">
          <span>Uma comunidade feita por gamers, para gamers.</span>
          <br></br>
          <span>
            Vivemos a competição, valorizamos o respeito e jogamos para vencer.
          </span>
          <br></br>
          <span>Se é jogo, é sério. Se é NLG, é lendário.</span>
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content1">
          <div className="home-stat1">
            <h3 className="home-header3">jogue com os amigos</h3>
          </div>
          <div className="home-stat2">
            <h3 className="home-header4">ganhe premios em dinheiro</h3>
          </div>
          <div className="home-stat3">
            <h3 className="home-header5">participe da diverção</h3>
          </div>
        </div>
      </section>
      <section className="home-slider1">
        <div className="home-header6">
          <h2 className="home-heading2">
            A primeira liga e-sports com sistema econômico próprio
          </h2>
        </div>
        <div className="home-selector">
          <p className="home-caption3">
            <span>
              Você pode utilizar os NlG coins para comprar na nossa loja 
            </span>
            <br></br>
            <span>
              Os NLG coins tambem podem ser usados para participar dos torneios 
            </span>
          </p>
        </div>
      </section>
      <section className="home-slides">
        <div className="home-slider2 slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <div className="home-container4">
                    <img
                      alt="image"
                      src="/20250716_1412_futuristic%20nlgcoin%20animation_simple_compose_01k0a3gtg9ejv8wj8wfk4y04ec%20(1)-400w.png"
                      className="home-image2"
                    />
                  </div>
                  <div className="home-content2">
                    <div className="home-header7">
                      <h3 className="home-heading3">
                        <span>💰 O que são NLGcoins?</span>
                        <br></br>
                        <span className="home-text31">
                          As NLGcoins são a moeda oficial da comunidade NLG!
                          Ganhe jogando, participe de eventos, troque por
                          prêmios e suba no ranking. Quanto mais você joga, mais
                          você conquista.
                        </span>
                      </h3>
                    </div>
                    <div className="home-more">
                      <span className="home-caption4">Saiba mais</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon19">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  data-role="current-banner"
                  className="home-slide2 banner"
                ></div>
                <div
                  data-role="current-banner"
                  className="home-slide3 banner"
                ></div>
                <div
                  data-role="current-banner"
                  className="home-slide4 banner"
                ></div>
              </div>
            </div>
            <div className="home-controls"></div>
          </div>
        </div>
        <div>
          <div className="home-container6">
            <Script
              html={`<script defer>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container2">
          <div className="home-header8">
            <h2 className="home-heading4">
              <span>🔥 NLG Torneios — Onde Heróis se Revelam</span>
              <br></br>
              <span className="home-text34">
                Não é só um jogo. É sua chance de mostrar quem manda!
              </span>
              <br className="home-text35"></br>
              <span className="home-text36">
                Entre na arena, vença desafios e conquiste prêmios épicos.
              </span>
              <br className="home-text37"></br>
              <span className="home-text38">
                Suba no ranking. Deixe sua marca.
              </span>
              <br className="home-text39"></br>
              <span className="home-text40">🎮 Você nasceu pra isso</span>
            </h2>
          </div>
          <div className="home-button2">
            <button className="button">
              <span>conheça as regras</span>
            </button>
          </div>
        </div>
        <div className="home-container7">
          <img
            alt="image"
            src="/20250716_1420_futuristic%20gamer%20emblem_simple_compose_01k0a3z393fh6sxrtmb3n0aw86%20(1)-700w.png"
            className="home-image3"
          />
        </div>
      </section>
      <section className="home-objectives">
        <div className="home-content3">
          <span className="home-text42">Objectives</span>
          <div className="home-objectives-list">
            <div className="objective">
              <h3 className="home-text43">
                🏆 Destacar os verdadeiros campeões
              </h3>
              <p className="home-text44">
                Onde apenas os melhores se elevam e conquistam o topo do
                ranking.
              </p>
            </div>
            <div className="objective home-objective2">
              <h3 className="home-text45">⚔️ Fomentar rivalidades lendárias</h3>
              <p className="home-text46">
                Torneios criados para desafiar habilidades, unir clãs e criar
                histórias memoráveis.
              </p>
            </div>
            <div className="objective home-objective3">
              <h3 className="home-text47">
                🎁 Recompensar com glória e prêmios reais
              </h3>
              <p className="home-text48">
                Mais que troféus digitais — é reconhecimento, prestígio e
                conquistas que ecoam na comunidade.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer"></div>
      <div>
        <div className="home-container9">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
