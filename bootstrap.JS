<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Italian Foodiess</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

<style>
  :root {
    --red: #c0392b;
    --gold: #d4a017;
    --dark: #1a1a1a;
    --cream: #fdf6ec;
  }

  * { scroll-behavior: smooth; }

  body {
    font-family: 'Lato', sans-serif;
    background: var(--cream);
    color: var(--dark);
    overflow-x: hidden;
  }

  /* ── NAVBAR ── */
  .navbar {
    background: rgba(26,26,26,0.97) !important;
    padding: 18px 0;
    backdrop-filter: blur(8px);
  }
  .navbar-brand {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: var(--gold) !important;
    letter-spacing: 2px;
  }
  .nav-link {
    color: #ddd !important;
    letter-spacing: 1px;
    font-size: 0.85rem;
    text-transform: uppercase;
    margin: 0 6px;
    transition: color 0.3s;
  }
  .nav-link:hover { color: var(--gold) !important; }

  /* ── HERO CAROUSEL ── */
  .carousel-item {
    min-height: 92vh;
    background-size: cover !important;
    background-position: center !important;
    position: relative;
  }
  .carousel-item::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(26,10,0,0.82) 0%, rgba(59,26,10,0.6) 60%, rgba(26,10,0,0.5) 100%);
  }
  .slide-1 { background: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80'); }
  .slide-2 { background: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80'); }
  .slide-3 { background: url('https://images.unsplash.com/photo-1481931715705-36f5122a6103?w=1400&q=80'); }

  .carousel-caption-custom {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 820px;
    text-align: center;
  }
  .hero-badge {
    display: inline-block;
    border: 1px solid var(--gold);
    color: var(--gold);
    font-size: 0.75rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 30px;
    margin-bottom: 20px;
    animation: fadeDown 0.8s ease both;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    color: #fff;
    line-height: 1.1;
    margin-bottom: 18px;
    animation: fadeUp 0.9s 0.2s ease both;
  }
  .hero-title span { color: var(--gold); font-style: italic; }
  .hero-sub {
    color: #ddd;
    font-weight: 300;
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin-bottom: 34px;
    animation: fadeUp 0.9s 0.4s ease both;
  }
  .hero-btns { animation: fadeUp 0.9s 0.6s ease both; }

  .btn-gold {
    background: var(--gold);
    color: #fff;
    border: none;
    padding: 14px 36px;
    border-radius: 40px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.85rem;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-gold:hover { background: #b8860b; color: #fff; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(212,160,23,0.4); }
  .btn-outline-light-custom {
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255,255,255,0.4);
    padding: 12px 32px;
    border-radius: 40px;
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s;
  }
  .btn-outline-light-custom:hover { border-color: #fff; color: #fff; background: rgba(255,255,255,0.1); }

  /* carousel controls */
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 48px; height: 48px;
    background-color: rgba(212,160,23,0.7);
    border-radius: 50%;
    background-size: 50%;
  }
  .carousel-control-prev, .carousel-control-next { width: 6%; }
  .carousel-indicators [data-bs-target] {
    width: 10px; height: 10px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.5);
    border: none;
    margin: 0 5px;
  }
  .carousel-indicators .active { background-color: var(--gold); }

  /* hero stats bar */
  .hero-stats {
    background: rgba(26,26,26,0.88);
    backdrop-filter: blur(6px);
    padding: 18px 0;
  }
  .stat-item { text-align: center; }
  .stat-item h4 { font-family: 'Playfair Display', serif; color: var(--gold); font-size: 1.8rem; margin: 0; }
  .stat-item p { color: #aaa; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; margin: 0; }

  /* ── SEARCH ── */
  .search-wrap { background: var(--dark); padding: 22px 0; }
  .search-wrap .form-control {
    border-radius: 30px 0 0 30px;
    border: none;
    padding: 12px 22px;
    background: #2c2c2c;
    color: #fff;
    font-size: 0.9rem;
  }
  .search-wrap .form-control::placeholder { color: #888; }
  .search-wrap .form-control:focus { box-shadow: none; background: #333; color: #fff; }
  .search-btn {
    border-radius: 0 30px 30px 0;
    background: var(--gold);
    border: none;
    color: #fff;
    padding: 12px 28px;
    font-weight: 700;
    cursor: pointer;
  }

  /* ── SECTION TITLES ── */
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    color: var(--dark);
    margin-bottom: 8px;
  }
  .section-title span { color: var(--red); font-style: italic; }
  .divider { width: 60px; height: 3px; background: var(--gold); margin: 0 auto 40px; }
  .divider-left { margin: 12px 0 28px; }

  /* ── ABOUT ── */
  #about { background: #fff; padding: 90px 0; }
  .about-img {
    border-radius: 16px;
    box-shadow: 20px 20px 0 var(--gold);
    object-fit: cover;
    width: 100%;
    height: 380px;
  }
  .about-text p { color: #555; line-height: 1.9; font-size: 1.05rem; }
  .stat-box {
    background: var(--cream);
    border-left: 4px solid var(--red);
    padding: 16px 22px;
    border-radius: 8px;
    margin-top: 10px;
  }
  .stat-box h3 { font-family: 'Playfair Display', serif; color: var(--red); font-size: 1.8rem; margin: 0; }
  .stat-box p { color: #666; margin: 0; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; }

  /* ── MENU ── */
  #menu { background: var(--cream); padding: 90px 0; }

  /* Menu carousel */
  .menu-slide { background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
  .menu-slide img { width: 100%; height: 380px; object-fit: cover; }
  .menu-slide-body {
    padding: 36px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 380px;
  }
  .menu-slide-body h3 { font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 10px; }
  .menu-slide-body p { color: #777; font-size: 1rem; line-height: 1.8; }
  .menu-slide-price { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--red); margin-top: 16px; }
  #menuCarousel .carousel-control-prev-icon,
  #menuCarousel .carousel-control-next-icon { background-color: var(--gold); }
  #menuCarousel .carousel-indicators [data-bs-target] { background-color: rgba(0,0,0,0.25); }
  #menuCarousel .carousel-indicators .active { background-color: var(--red); }

  .menu-card-badge {
    display: inline-block;
    padding: 3px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .badge-veg { background: #e8f5e9; color: #2e7d32; }
  .badge-nonveg { background: #fdecea; color: var(--red); }

  /* price table */
  .menu-table thead th {
    background: var(--dark);
    color: var(--gold);
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    padding: 16px 20px;
  }
  .menu-table tbody td { padding: 15px 20px; border-color: #f0e8dc; vertical-align: middle; }
  .menu-table tbody tr:hover { background: #fdf0e0; }
  .price-tag { font-family: 'Playfair Display', serif; color: var(--red); font-size: 1.1rem; font-weight: 700; }

  /* ── SPECIALS BANNER ── */
  .specials-banner { background: var(--red); color: #fff; padding: 60px 0; text-align: center; }
  .specials-banner h2 { font-family: 'Playfair Display', serif; font-size: 2rem; }

  /* ── TESTIMONIALS ── */
  #testimonials { background: #fff; padding: 80px 0; }
  .testi-card {
    background: var(--cream);
    border-radius: 20px;
    padding: 40px 36px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
    text-align: center;
    margin: 0 10px 30px;
  }
  .testi-stars { color: var(--gold); font-size: 1.3rem; margin-bottom: 16px; }
  .testi-text { font-style: italic; color: #666; font-size: 1.05rem; line-height: 1.8; margin-bottom: 20px; }
  .testi-name { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--dark); }
  .testi-role { color: #aaa; font-size: 0.8rem; letter-spacing: 1px; text-transform: uppercase; }
  #testiCarousel .carousel-control-prev-icon,
  #testiCarousel .carousel-control-next-icon { background-color: var(--gold); }
  #testiCarousel .carousel-indicators [data-bs-target] { background-color: rgba(0,0,0,0.2); }
  #testiCarousel .carousel-indicators .active { background-color: var(--gold); }

  /* ── RESERVATION ── */
  #reservation {
    background: linear-gradient(135deg, #1a0a00, #3b1a0a);
    padding: 90px 0;
    position: relative;
  }
  #reservation::before {
    content: '';
    position: absolute; inset: 0;
    background: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80') center/cover;
    opacity: 0.12;
  }
  .res-card {
    background: rgba(255,255,255,0.97);
    border-radius: 20px;
    padding: 48px 40px;
    box-shadow: 0 24px 60px rgba(0,0,0,0.3);
    position: relative;
  }
  .res-card .form-control, .res-card .form-select {
    border: 1.5px solid #e0d5c5;
    border-radius: 10px;
    padding: 13px 18px;
    font-size: 0.95rem;
    background: #fdfaf6;
  }
  .res-card .form-control:focus, .res-card .form-select:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(212,160,23,0.15);
  }
  .res-card label { font-weight: 700; font-size: 0.82rem; letter-spacing: 1px; text-transform: uppercase; color: #555; margin-bottom: 6px; }

  /* ── CONTACT ── */
  #contact { background: var(--dark); color: #fff; padding: 70px 0 40px; }
  .contact-icon { font-size: 1.8rem; color: var(--gold); margin-bottom: 12px; }
  .contact-box { padding: 30px; border-radius: 14px; background: rgba(255,255,255,0.05); height: 100%; }
  .footer-bottom { border-top: 1px solid #333; margin-top: 50px; padding-top: 24px; color: #666; font-size: 0.85rem; }
  .social-link { color: #888; font-size: 1.4rem; margin: 0 8px; transition: color 0.3s; text-decoration: none; }
  .social-link:hover { color: var(--gold); }

  /* ── SCROLL SLIDE-IN ── */
  .slide-in {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.75s ease, transform 0.75s ease;
  }
  .slide-in.from-left  { transform: translateX(-60px); }
  .slide-in.from-right { transform: translateX(60px); }
  .slide-in.visible    { opacity: 1; transform: translate(0,0); }
  .slide-in.delay-1 { transition-delay: 0.1s; }
  .slide-in.delay-2 { transition-delay: 0.25s; }
  .slide-in.delay-3 { transition-delay: 0.4s; }
  .slide-in.delay-4 { transition-delay: 0.55s; }

  /* ── KEYFRAMES ── */
  @keyframes fadeDown {
    from { opacity:0; transform:translateY(-20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }
</style>
</head>
<body>

<!-- NAVBAR -->
<nav class="navbar navbar-expand-lg sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#">🍝 Italian Foodiess</a>
    <button class="navbar-toggler border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#menu">Menu</a></li>
        <li class="nav-item"><a class="nav-link" href="#testimonials">Reviews</a></li>
        <li class="nav-item"><a class="nav-link" href="#reservation">Reservation</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        <li class="nav-item ms-3">
          <a href="#reservation" class="btn-gold" style="padding:10px 24px;font-size:0.78rem;">Book a Table</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- SEARCH -->
<div class="search-wrap">
  <div class="container">
    <div class="d-flex justify-content-center">
      <input class="form-control w-50" type="search" placeholder="🔍  Search pasta, pizza, noodles...">
      <button class="search-btn">Search</button>
    </div>
  </div>
</div>

<!-- ══ HERO CAROUSEL ══ -->
<section id="home">
  <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4500">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
    </div>
    <div class="carousel-inner">

      <div class="carousel-item active slide-1">
        <div class="carousel-caption-custom">
          <span class="hero-badge">Est. 2020 · Nagpur, India</span>
          <h1 class="hero-title">Taste of <span>Authentic</span> Italy</h1>
          <p class="hero-sub">Handcrafted recipes passed down through generations.<br>Fresh ingredients. Unforgettable flavors.</p>
          <div class="hero-btns d-flex flex-wrap gap-3 justify-content-center">
            <a href="#menu" class="btn-gold">Explore Menu</a>
            <a href="#reservation" class="btn-outline-light-custom">Reserve a Table</a>
          </div>
        </div>
      </div>

      <div class="carousel-item slide-2">
        <div class="carousel-caption-custom">
          <span class="hero-badge">Weekend Special</span>
          <h1 class="hero-title">Family <span>Feast</span> Night</h1>
          <p class="hero-sub">Every weekend, bring your family for a meal to remember.<br>20% off on all combo meals!</p>
          <div class="hero-btns d-flex flex-wrap gap-3 justify-content-center">
            <a href="#menu" class="btn-gold">See Combos</a>
            <a href="#reservation" class="btn-outline-light-custom">Book Now</a>
          </div>
        </div>
      </div>

      <div class="carousel-item slide-3">
        <div class="carousel-caption-custom">
          <span class="hero-badge">Chef's Specials</span>
          <h1 class="hero-title">Wood-Fired <span>Pizza</span> & Pasta</h1>
          <p class="hero-sub">Slow-cooked sauces, al-dente pasta, and pizzas<br>straight from our stone oven.</p>
          <div class="hero-btns d-flex flex-wrap gap-3 justify-content-center">
            <a href="#menu" class="btn-gold">Our Menu</a>
            <a href="#reservation" class="btn-outline-light-custom">Reserve a Table</a>
          </div>
        </div>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>

  <!-- Stats bar below hero -->
  <div class="hero-stats">
    <div class="container">
      <div class="row">
        <div class="col-4 stat-item"><h4>10+</h4><p>Dishes</p></div>
        <div class="col-4 stat-item"><h4>5K+</h4><p>Happy Guests</p></div>
        <div class="col-4 stat-item"><h4>4.8★</h4><p>Rating</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-md-6 about-text slide-in from-left">
        <p style="color:var(--gold);text-transform:uppercase;letter-spacing:3px;font-size:0.8rem;font-weight:700;">Our Story</p>
        <h2 class="section-title">A Little Piece of <span>Italy</span> in Your City</h2>
        <div class="divider divider-left"></div>
        <p>Italian Foodiess was born from a passion for authentic flavors. We bring you the heart of Italian cuisine — slow-cooked sauces, wood-fired pizzas, and al-dente pasta — all made fresh every day in our kitchen.</p>
        <p>Perfect for family dinners, date nights, or special celebrations. Every meal here is crafted with love and the finest ingredients.</p>
        <div class="row g-3 mt-2">
          <div class="col-6"><div class="stat-box"><h3>5+</h3><p>Years of Experience</p></div></div>
          <div class="col-6"><div class="stat-box"><h3>100%</h3><p>Fresh Ingredients</p></div></div>
        </div>
      </div>
      <div class="col-md-6 text-center slide-in from-right">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" class="about-img" alt="Restaurant Interior">
      </div>
    </div>
  </div>
</section>

<!-- ══ MENU ══ -->
<section id="menu">
  <div class="container">
    <div class="text-center mb-2 slide-in">
      <p style="color:var(--gold);text-transform:uppercase;letter-spacing:3px;font-size:0.8rem;font-weight:700;">What We Serve</p>
      <h2 class="section-title">Our <span>Special</span> Menu</h2>
    </div>
    <div class="divider slide-in delay-1"></div>

    <!-- ══ MENU DISH CAROUSEL ══ -->
    <div id="menuCarousel" class="carousel slide mb-5 slide-in delay-2" data-bs-ride="carousel" data-bs-interval="3500">
      <div class="carousel-indicators" style="bottom:-34px;">
        <button type="button" data-bs-target="#menuCarousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#menuCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#menuCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#menuCarousel" data-bs-slide-to="3"></button>
      </div>
      <div class="carousel-inner rounded-4 overflow-hidden shadow">

        <div class="carousel-item active">
          <div class="menu-slide row g-0">
            <div class="col-md-6">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80" alt="Pizza">
            </div>
            <div class="col-md-6">
              <div class="menu-slide-body">
                <span class="menu-card-badge badge-nonveg">🍖 Non-Veg</span>
                <h3>Chicken Pizza</h3>
                <p>Our signature wood-fired pizza topped with tender BBQ chicken, bell peppers, mozzarella, and a smoky tomato base.</p>
                <div class="menu-slide-price">₹350</div>
                <a href="#reservation" class="btn-gold mt-3" style="padding:10px 28px;font-size:0.82rem;">Order Now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="menu-slide row g-0">
            <div class="col-md-6">
              <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700&q=80" alt="Pasta">
            </div>
            <div class="col-md-6">
              <div class="menu-slide-body">
                <span class="menu-card-badge badge-nonveg">🍖 Non-Veg</span>
                <h3>Chicken Pasta</h3>
                <p>Silky Alfredo cream sauce tossed with penne and golden grilled chicken. Topped with fresh parmesan and cracked pepper.</p>
                <div class="menu-slide-price">₹350</div>
                <a href="#reservation" class="btn-gold mt-3" style="padding:10px 28px;font-size:0.82rem;">Order Now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="menu-slide row g-0">
            <div class="col-md-6">
              <img src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=700&q=80" alt="Noodles">
            </div>
            <div class="col-md-6">
              <div class="menu-slide-body">
                <span class="menu-card-badge badge-veg">🌿 Veg</span>
                <h3>Italian Noodles</h3>
                <p>Classic Italian-style noodles tossed in a rich garlic-herb olive oil sauce with seasonal vegetables and fresh basil.</p>
                <div class="menu-slide-price">₹280</div>
                <a href="#reservation" class="btn-gold mt-3" style="padding:10px 28px;font-size:0.82rem;">Order Now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="menu-slide row g-0">
            <div class="col-md-6">
              <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=80" alt="Margherita">
            </div>
            <div class="col-md-6">
              <div class="menu-slide-body">
                <span class="menu-card-badge badge-veg">🌿 Veg</span>
                <h3>Margherita Pizza</h3>
                <p>The timeless classic — fresh mozzarella, hand-crushed San Marzano tomatoes, and fragrant basil on a thin, crispy crust.</p>
                <div class="menu-slide-price">₹250</div>
                <a href="#reservation" class="btn-gold mt-3" style="padding:10px 28px;font-size:0.82rem;">Order Now</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#menuCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#menuCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <!-- Price Table -->
    <div class="mt-5 pt-3 slide-in delay-1">
      <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
        <table class="table menu-table mb-0">
          <thead>
            <tr>
              <th><i class="bi bi-tag-fill me-2"></i>Type</th>
              <th><i class="bi bi-egg-fried me-2"></i>Dish</th>
              <th><i class="bi bi-currency-rupee me-2"></i>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="menu-card-badge badge-veg">🌿 Veg</span></td>
              <td><strong>Margherita Pizza</strong><br><small class="text-muted">Fresh mozzarella & basil</small></td>
              <td class="price-tag">₹250</td>
            </tr>
            <tr>
              <td><span class="menu-card-badge badge-veg">🌿 Veg</span></td>
              <td><strong>Veg Pasta</strong><br><small class="text-muted">Seasonal vegetables in marinara</small></td>
              <td class="price-tag">₹300</td>
            </tr>
            <tr>
              <td><span class="menu-card-badge badge-nonveg">🍖 Non-Veg</span></td>
              <td><strong>Chicken Pasta</strong><br><small class="text-muted">Creamy Alfredo sauce</small></td>
              <td class="price-tag">₹350</td>
            </tr>
            <tr>
              <td><span class="menu-card-badge badge-nonveg">🍖 Non-Veg</span></td>
              <td><strong>Spaghetti Bolognese</strong><br><small class="text-muted">Slow-cooked meat sauce</small></td>
              <td class="price-tag">₹400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- SPECIALS BANNER -->
<div class="specials-banner slide-in">
  <div class="container">
    <p style="letter-spacing:3px;font-size:0.8rem;text-transform:uppercase;opacity:0.8;">Limited Time</p>
    <h2>🍕 Family Combo Meal — Flat 20% OFF Every Weekend!</h2>
    <a href="#reservation" class="btn-gold mt-3 d-inline-block">Grab the Deal</a>
  </div>
</div>

<!-- ══ TESTIMONIALS CAROUSEL ══ -->
<section id="testimonials">
  <div class="container">
    <div class="text-center mb-2 slide-in">
      <p style="color:var(--gold);text-transform:uppercase;letter-spacing:3px;font-size:0.8rem;font-weight:700;">What Guests Say</p>
      <h2 class="section-title">Customer <span>Reviews</span></h2>
    </div>
    <div class="divider slide-in delay-1"></div>

    <div id="testiCarousel" class="carousel slide slide-in delay-2" data-bs-ride="carousel" data-bs-interval="4500">
      <div class="carousel-indicators" style="bottom:-30px; filter:invert(0);">
        <button type="button" data-bs-target="#testiCarousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#testiCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#testiCarousel" data-bs-slide-to="2"></button>
      </div>
      <div class="carousel-inner pb-4">

        <div class="carousel-item active">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <div class="testi-card">
                <div class="testi-stars">★★★★★</div>
                <p class="testi-text">"The pasta here is absolutely divine — I've been coming back every week since I discovered this place. The atmosphere is warm and the service is outstanding!"</p>
                <div class="testi-name">Priya Sharma</div>
                <div class="testi-role">Regular Customer · Nagpur</div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <div class="testi-card">
                <div class="testi-stars">★★★★★</div>
                <p class="testi-text">"Best Margherita pizza I've ever had outside of Italy! The wood-fired crust is perfect and the tomato sauce is incredibly fresh. Highly recommend!"</p>
                <div class="testi-name">Rahul Deshmukh</div>
                <div class="testi-role">Food Blogger · Nagpur</div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <div class="testi-card">
                <div class="testi-stars">★★★★☆</div>
                <p class="testi-text">"Came here for a family dinner and everyone loved it. The portions are generous, the ambience is cozy, and the staff made us feel very welcome!"</p>
                <div class="testi-name">Anjali Verma</div>
                <div class="testi-role">Family Diner · Nagpur</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#testiCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testiCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</section>

<!-- RESERVATION -->
<section id="reservation">
  <div class="container position-relative">
    <div class="row justify-content-center">
      <div class="col-lg-7 slide-in">
        <div class="res-card">
          <div class="text-center mb-4">
            <p style="color:var(--gold);text-transform:uppercase;letter-spacing:3px;font-size:0.8rem;font-weight:700;">Book Online</p>
            <h2 class="section-title" style="font-size:2rem;">Reserve Your <span>Table</span></h2>
            <div class="divider"></div>
          </div>
          <div class="row g-3">
            <div class="col-md-6">
              <label>Full Name</label>
              <input type="text" class="form-control" placeholder="Your name">
            </div>
            <div class="col-md-6">
              <label>Phone Number</label>
              <input type="tel" class="form-control" placeholder="+91 XXXXX XXXXX">
            </div>
            <div class="col-md-6">
              <label>Date</label>
              <input type="date" class="form-control">
            </div>
            <div class="col-md-6">
              <label>Time</label>
              <input type="time" class="form-control">
            </div>
            <div class="col-12">
              <label>Number of Guests</label>
              <select class="form-select">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option selected>4 Guests</option>
                <option>6 Guests</option>
                <option>8+ Guests</option>
              </select>
            </div>
            <div class="col-12 mt-2">
              <button class="btn-gold w-100 text-center" style="display:block;padding:16px;font-size:1rem;">
                <i class="bi bi-calendar-check me-2"></i>Confirm Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT / FOOTER -->
<section id="contact">
  <div class="container">
    <div class="text-center mb-5 slide-in">
      <h2 class="section-title" style="color:#fff;">Get In <span>Touch</span></h2>
      <div class="divider"></div>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-4 slide-in delay-1">
        <div class="contact-box text-center">
          <div class="contact-icon"><i class="bi bi-telephone-fill"></i></div>
          <h6 style="color:#fff;letter-spacing:1px;text-transform:uppercase;font-size:0.8rem;">Call Us</h6>
          <p style="color:#bbb;">+91 98765 43210</p>
        </div>
      </div>
      <div class="col-md-4 slide-in delay-2">
        <div class="contact-box text-center">
          <div class="contact-icon"><i class="bi bi-envelope-fill"></i></div>
          <h6 style="color:#fff;letter-spacing:1px;text-transform:uppercase;font-size:0.8rem;">Email Us</h6>
          <p style="color:#bbb;">itala@gmail.com</p>
        </div>
      </div>
      <div class="col-md-4 slide-in delay-3">
        <div class="contact-box text-center">
          <div class="contact-icon"><i class="bi bi-geo-alt-fill"></i></div>
          <h6 style="color:#fff;letter-spacing:1px;text-transform:uppercase;font-size:0.8rem;">Find Us</h6>
          <p style="color:#bbb;">MG Road, Nagpur, Maharashtra</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center">
      <div class="mb-3">
        <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
        <a href="#" class="social-link"><i class="bi bi-facebook"></i></a>
        <a href="#" class="social-link"><i class="bi bi-twitter"></i></a>
      </div>
      <p>© 2026 Italian Foodiess. Made with in Nagpur.</p>
    </div>
  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
  // Scroll slide-in observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));
</script>
</body>
</html>
