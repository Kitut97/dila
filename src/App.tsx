import { useState } from 'react'
import './App.css'

const tulusTracks = [
  {
    title: 'Hati-hati di Jalan',
    mood: 'buat kamu yang lagi pelan-pelan melepaskan dan belajar percaya lagi.',
  },
  {
    title: 'Ruang Sendiri',
    mood: 'untuk malam-malam ketika kamu butuh istirahat dari semua suara luar.',
  },
  {
    title: 'Monokrom',
    mood: 'mengajak kamu mengingat orang-orang yang pernah menemani tumbuh.',
  },
  {
    title: 'Adu Rayu',
    mood: 'ringan, manis, dan bikin senyum kecil yang susah hilang.',
  },
]

const featureCards = [
  {
    title: 'Bab I · Senyum Pertama',
    copy: 'Senyum kamu itu jenis yang pelan tapi nempel. Nggak heboh, tapi bikin suasana langsung lebih lembut.',
  },
  {
    title: 'Bab II · Orang-Orang Tersayang',
    copy: 'Ada keluarga, ada sahabat, ada orang yang diam-diam selalu mendoakan kamu di setiap pergantian tahun.',
  },
  {
    title: 'Bab III · Hati yang Tenang',
    copy: 'Bukan soal seberapa ramai pestanya, tapi seberapa damai kamu bisa jadi diri sendiri di tengah semuanya.',
  },
]

const App = () => {
  const [hasWished, setHasWished] = useState(false)
  const [showCandle, setShowCandle] = useState(false)
  const [candleBlown, setCandleBlown] = useState(false)

  const handleBlowCandle = () => {
    setShowCandle(true)
    setCandleBlown(false)

    window.setTimeout(() => {
      setCandleBlown(true)
      setHasWished(true)

      window.setTimeout(() => {
        setShowCandle(false)
        setHasWished(false)
      }, 2600)
    }, 2200)
  }

  return (
    <main className={`cinema-page${hasWished ? ' cinema-page--wished' : ''}`}>
      <div className="starlight" aria-hidden="true" />
      <div className="glow-orb glow-orb--left" aria-hidden="true" />
      <div className="glow-orb glow-orb--right" aria-hidden="true" />

      <header className="hero">
        <div className="hero-left">
          <p className="hero-tag">05 · 12 · 25</p>
          <h1 className="hero-title">
            Selamat Ulang Tahun
            <span>Dila</span>
          </h1>
          <p className="hero-lede">
            Tahun ini bukan cuma soal angka baru, tapi tentang hati kamu yang pelan-pelan tumbuh lebih kuat,
            lebih lembut, dan lebih berani menerima cinta dalam semua bentuknya.
          </p>
          <div className="hero-cta-row">
            <button className="cta primary" onClick={handleBlowCandle}>
              Tiup Lilin
            </button>
           
          </div>
        </div>

        <div className="hero-portrait">
          <div className="hero-portrait-inner">
            <img src="public/images/dila-1.jpeg" alt="Dila close-up dengan senyum lembut" />
            <span className="hero-portrait-badge">BIRTHDAY STAR</span>
          </div>
        </div>
      </header>

      {showCandle && (
        <div className="candle-overlay" role="dialog" aria-modal="true">
          <div className="candle-card">
            <div className="candle-visual">
              <div className="candle-body">
                <div className={`candle-flame${candleBlown ? ' candle-flame--out' : ''}`} />
                <div className="candle-wick" />
              </div>
              <div className={`candle-glow${candleBlown ? ' candle-glow--fade' : ''}`} />
            </div>
            <div className="candle-text">
              <p className="candle-heading">Tutup mata, tarik napas…</p>
              <p className="candle-copy">
                Dalam hitungan tiga, bayangkan satu hal yang paling kamu harapkan di tahun ini. Lilinnya
                akan padam sendiri, tapi harapannya tetap kami simpan baik-baik.
              </p>
            </div>
          </div>
        </div>
      )}

      {hasWished && (
        <div className="wish-banner">
          <p>
            Lilin sudah padam, harapan kamu sudah kami kirim pelan-pelan ke langit. Semoga tahun ini penuh
            hal-hal baik yang datang dengan cara yang lembut.
          </p>
        </div>
      )}

      <section className="music">
        <div className="section-head">
          <p className="section-kicker">Playlist Tulus</p>
          <h2>Lagu-lagu yang cocok nemenin ulang tahun Dila</h2>
        </div>
        <div className="music-layout">
          <div className="music-card">
            <div className="music-cover">
              <div className="music-disc" />
              <span className="music-badge">TULUS MIX</span>
            </div>
            <div className="music-info">
              <p className="music-title">Putar playlist Tulus</p>
              <p className="music-sub">
                Klik tombol di bawah ini, pilih platform favorit kamu, lalu biarkan lirik-lirik hangatnya
                nemenin kamu malam ini.
              </p>
              <div className="music-buttons">
                <a
                  className="cta primary"
                  href="https://open.spotify.com/search/tulus%20playlist"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buka di Spotify
                </a>
                <a
                  className="cta secondary"
                  href="https://music.youtube.com/search?q=tulus%20playlist"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buka di YouTube Music
                </a>
              </div>
            </div>
          </div>
          <ul className="music-tracks">
            {tulusTracks.map((track) => (
              <li key={track.title}>
                <p className="track-title">{track.title}</p>
                <p className="track-mood">{track.mood}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="features">
        <div className="section-head">
          <p className="section-kicker">Tentang Kamu</p>
          <h2>Hal-hal manis yang ingin kami rayakan</h2>
        </div>
        <div className="feature-grid">
          {featureCards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery">
        <div className="section-head">
          <p className="section-kicker">Foto Kamu</p>
          <h2>Versi Dila yang bikin jatuh cinta</h2>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-item">
            <img src="public/images/dila-1.jpeg" alt="Dila bersama orang tersayang di momen hangat" />
            <figcaption>Satu foto sederhana yang diam-diam menyimpan banyak rasa syukur di dalamnya.</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="public/images/dila-2.jpeg" alt="Dila tersenyum di suasana santai" />
            <figcaption>Satu momen kecil dengan baju favorit dan senyum yang bikin hari terasa lebih lembut.</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="public/images/dila-light.jpeg" alt="Dila berdiri di bawah cahaya lembut" />
            <figcaption>Cahaya pelan menyentuh wajah kamu, seolah dunia lagi pelan-pelan memelukmu.</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="public/images/dila-dan-keluarga.jpeg" alt="Dila bersama keluarga" />
            <figcaption>Rumah sejati: tawa, pelukan, dan keluarga yang selalu jadi tempat pulang.</figcaption>
          </figure>
        </div>
      </section>

      <section className="toast toast--cinema">
        <h2>Ucapan dari hati</h2>
        <p>
          Untuk kamu yang selalu berusaha jadi kuat bahkan saat capek: semoga tahun ini dipenuhi pelukan yang
          tulus, tawa yang ringan, dan orang-orang yang memilih tinggal di sisi kamu tanpa diminta.
        </p>
        <p className="signature">Dengan banyak sayang · orang-orang yang selalu berpihak pada kamu</p>
      </section>
    </main>
  )
}

export default App
