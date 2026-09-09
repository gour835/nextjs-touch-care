import { CheckCircleIcon } from "lucide-react";


export default function Home() {
  return (
    <>
      <section className="hero-wrap js-fullheight "
        style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
        data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-10   text-center">
              <div className="icon">
                <span className="flaticon-lotus"></span>
              </div>
              <h1>Spa &amp; Beauty Center</h1>
              <div className="row justify-content-center">
                <div className="col-md-7 mb-3">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
                </div>
              </div>
              <p>
                <a href="#" className="btn btn-primary p-3 px-5 py-4 mr-md-2 rounded-lg">Get in Touch</a>
                <a href="#" className="btn btn-outline-primary p-3 px-5 py-4 ml-md-2 rounded-lg">Contact</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-intro"
        // style="background-image: url(images/intro.jpg);"
        style={{ backgroundImage: "url('/images/intro.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6">
              <div className="heading-section  ">
                <h2 className="mb-4">Benefits of Doing Spa &amp; Massage</h2>
              </div>
              <p className=" ">Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.</p>
              <ul className="mt-5 do-list">
                <li className="flex  "><a href="#">

                  <CheckCircleIcon className="float-left m-2 " />
                  Spa
                  &amp; Massage boosts brain power</a>
                </li>
                <li className="flex  "><a href="#"><CheckCircleIcon className="float-left m-2 " />Spa
                  &amp; Massage helps you to breathe better</a></li>
                <li className="flex  "><a href="#"><CheckCircleIcon className="float-left m-2 " />Spa
                  &amp; Massage improves your strength</a></li>
                <li className="flex  "><a href="#"><CheckCircleIcon className="float-left m-2 " />Spa
                  &amp; Massage helps you to focus</a></li>
                <li className="flex  "><a href="#"><CheckCircleIcon className="float-left m-2 " />Spa
                  &amp; Massage helps give meaning to your day</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div className="img"
                  // style="background-image: url(images/offer-deal-1.jpg);"
                  style={{ backgroundImage: "url('/images/offer-deal-1.jpg')" }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Book Your Treatment</h3>
                  <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.</p>
                  <p><a href="#" className="btn btn-white px-4 py-3"> Book A Treatment <span
                    className="ion-ios-arrow-round-forward"></span></a></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal active text-center px-2 px-lg-5">
                <div className="img"
                  // style="background-image: url(images/offer-deal-2.jpg);"
                  style={{ backgroundImage: "url('/images/offer-deal-2.jpg')" }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Great Gift Packages</h3>
                  <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.</p>
                  <p><a href="#" className="btn btn-white px-4 py-3"> Book A Treatment <span
                    className="ion-ios-arrow-round-forward"></span></a></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div className="img"
                  // style="background-image: url(images/offer-deal-3.jpg);"
                  style={{ backgroundImage: "url('/images/offer-deal-3.jpg')" }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Special Offer &amp; Deal</h3>
                  <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.</p>
                  <p><a href="#" className="btn btn-white px-4 py-3"> Book A Treatment <span
                    className="ion-ios-arrow-round-forward"></span></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-section-services bg-light">
        <div className="container-fluid px-md-5">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="services text-center  ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-candle"></span>
                </div>
                <div className="text mt-3">
                  <h3>Aromatheraphy</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="services text-center  ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-beauty-treatment"></span>
                </div>
                <div className="text mt-3">
                  <h3>Skin Care</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="services text-center  ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-stone"></span>
                </div>
                <div className="text mt-3">
                  <h3>Herbal Spa</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="services text-center  ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-relax"></span>
                </div>
                <div className="text mt-3">
                  <h3>Body Massage</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" id="treatment">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section text-center">
              <h3 className="subheading">Services</h3>
              <h2 className="mb-1">Treatments</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="row no-gutters">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div
                    className="treatment w-100 text-center border border-right-0 border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-candle"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Salt &amp; Aroma</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center  border border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-spa-1"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Hydro</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center border border-right-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-stone"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Hot Stone</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center   border p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-lotus"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Aroma</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-4 d-flex align-items-stretch">
              <div id="accordion" className="myaccordion w-100 text-center py-5 px-1 px-md-4">
                <div>
                  <h3>Prices</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                </div>
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button className="d-flex align-items-center justify-content-between btn btn-link"
                        data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        Spa Therapies
                        <i className="fa" aria-hidden="true"></i>
                      </button>
                    </h2>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                    data-parent="#accordion">
                    <div className="card-body text-left">
                      <ul>
                        <li className="d-flex">
                          <span>Face Treatments</span>
                          <span>40 min.</span>
                          <span>$10</span>
                        </li>
                        <li className="d-flex">
                          <span>Nail Treatments</span>
                          <span>30 min.</span>
                          <span>$20</span>
                        </li>
                        <li className="d-flex">
                          <span>Medical Treatments</span>
                          <span>60 min.</span>
                          <span>$10</span>
                        </li>
                        <li className="d-flex">
                          <span>Hair Treatments</span>
                          <span>30 min.</span>
                          <span>$30</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                        data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        Massage Therapies
                        <i className="fa" aria-hidden="true"></i>
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                    data-parent="#accordion">
                    <div className="card-body text-left">
                      <ul>
                        <li className="d-flex">
                          <span>Face Treatments</span>
                          <span>40 min.</span>
                          <span>$10</span>
                        </li>
                        <li className="d-flex">
                          <span>Nail Treatments</span>
                          <span>30 min.</span>
                          <span>$20</span>
                        </li>
                        <li className="d-flex">
                          <span>Medical Treatments</span>
                          <span>60 min.</span>
                          <span>$10</span>
                        </li>
                        <li className="d-flex">
                          <span>Hair Treatments</span>
                          <span>30 min.</span>
                          <span>$30</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="row no-gutters">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div
                    className="treatment w-100 text-center   border border-right-0 border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-beauty-treatment"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Relaxation</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center   border border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-relax"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Athlete</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center   border border-right-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-massage"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Thai</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center   border p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-rose"></span>
                    </div>
                    <div className="text mt-2">
                      <h3>Rose</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light" id="pricing">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section   text-center">
              <h3 className="subheading">Pricing Tables</h3>
              <h2 className="mb-1">Pricing Treatments</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4  ">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Year Card</h2>
                  <span className="price"><sup>$</sup> <span className="number">449</span></span>
                  <span className="excerpt d-block">For 1 Year</span>

                  <h3 className="heading-2 my-4">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-5">
                    <li>Face Treatments</li>
                    <li>Nail Treatments</li>
                    <li>Medical Treatments</li>
                    <li>Hair Removal</li>
                  </ul>

                  <a href="#" className="btn btn-primary d-block px-2 py-4">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Monthly Card</h2>
                  <span className="price"><sup>$</sup> <span className="number">200</span></span>
                  <span className="excerpt d-block">For 1 Month</span>

                  <h3 className="heading-2 my-4">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-5">
                    <li>Face Treatments</li>
                    <li>Nail Treatments</li>
                    <li>Medical Treatments</li>
                    <li>Hair Removal</li>
                  </ul>

                  <a href="#" className="btn btn-primary d-block px-2 py-4">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="block-7">
                <div className="text-center">
                  <h2 className="heading">Weekly Card</h2>
                  <span className="price"><sup>$</sup> <span className="number">85</span></span>
                  <span className="excerpt d-block">For 1 Week</span>

                  <h3 className="heading-2 my-4">Enjoy All The Features</h3>

                  <ul className="pricing-text mb-5">
                    <li>Face Treatments</li>
                    <li>Nail Treatments</li>
                    <li>Medical Treatments</li>
                    <li>Hair Removal</li>
                  </ul>

                  <a href="#" className="btn btn-primary d-block px-2 py-4">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-10 heading-section text-center">
              <h3 className="subheading">Testimony</h3>
              <h2 className="mb-1">Successful Stories</h2>
            </div>
          </div>
          <div className="row  ">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel">
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text ">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="user-img"
                          // style="background-image: url(images/person_1.jpg)"
                          style={{ backgroundImage: "url('/images/person_1.jpg')" }}
                        >
                        </div>
                        <div className="ml-4">
                          <p className="name">Gabby Smith</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div className="user-img"
                          // style="background-image: url(images/person_2.jpg)"
                          style={{ backgroundImage: "url('/images/person_2.jpg')" }}
                        >
                        </div>
                        <div className="ml-4">
                          <p className="name">Floyd Weather</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div className="user-img"
                          // style="background-image: url(images/person_3.jpg)"
                          style={{ backgroundImage: "url('/images/person_3.jpg')" }}
                        >
                        </div>
                        <div className="ml-4">
                          <p className="name">James Dee</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div className="user-img"
                          // style="background-image: url(images/person_4.jpg)"
                          style={{ backgroundImage: "url('/images/person_4.jpg')" }}
                        >
                        </div>
                        <div className="ml-4">
                          <p className="name">Lance Roger</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="text">
                      <div className="line pl-5">
                        <p className="mb-4 pb-1">Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div className="user-img"
                          // style="background-image: url(images/person_2.jpg)"
                          style={{ backgroundImage: "url('/images/person_2.jpg')" }}
                        >
                        </div>
                        <div className="ml-4">
                          <p className="name">Kenny Bufer</p>
                          <span className="position">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-counter img" id="section-counter"
        // style="background-image: url(images/bg_3.jpg);"
        data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap  ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="3000">0</strong>
                      <span>Happy Customers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap  ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="60">0</strong>
                      <span>Treatments</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap  ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="50">0</strong>
                      <span>Years of Experience</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap  ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="100">0</strong>
                      <span>Lesson Conducted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section   text-center">
              <h3 className="subheading">Blog</h3>
              <h2 className="mb-1">Recent Posts</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex  ">
              <div className="blog-entry justify-content-end">
                <a href="blog-single.html" className="block-20"
                  // style="background-image: url('images/image_1.jpg');"
                  style={{ backgroundImage: "url('/images/image_1.jpg')" }}
                >
                </a>
                <div className="text p-4 float-right d-block">
                  <div className="d-flex align-items-center pt-2 mb-4">
                    <div className="one">
                      <span className="day">25</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading mt-2"><a href="#">Is wellness the new luxury</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex  ">
              <div className="blog-entry justify-content-end">
                <a href="blog-single.html" className="block-20"
                  // style="background-image: url('images/image_2.jpg');"
                  style={{ backgroundImage: "url('/images/image_2.jpg')" }}
                >
                </a>
                <div className="text p-4 float-right d-block">
                  <div className="d-flex align-items-center pt-2 mb-4">
                    <div className="one">
                      <span className="day">25</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading mt-2"><a href="#">Is wellness the new luxury</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex  ">
              <div className="blog-entry">
                <a href="blog-single.html" className="block-20"
                  // style="background-image: url('images/image_3.jpg');"
                  style={{ backgroundImage: "url('/images/image_3.jpg')" }}
                >
                </a>
                <div className="text p-4 float-right d-block">
                  <div className="d-flex align-items-center pt-2 mb-4">
                    <div className="one">
                      <span className="day">25</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading mt-2"><a href="#">Is wellness the new luxury</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-gallery ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section   text-center">
              <h3 className="subheading">Gallery</h3>
              <h2 className="mb-1">See the latest photos</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3  ">
              <a href="images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center"
                // style="background-image: url(images/gallery-1.jpg);"
                style={{ backgroundImage: "url('/images/gallery-1.jpg')" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3  ">
              <a href="images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center"
                // style="background-image: url(images/gallery-2.jpg);"
                style={{ backgroundImage: "url('/images/gallery-2.jpg')" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3  ">
              <a href="images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center"
                // style="background-image: url(images/gallery-3.jpg);"
                style={{ backgroundImage: "url('/images/gallery-3.jpg')" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-3  ">
              <a href="images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center"
                // style="background-image: url(images/gallery-4.jpg);"
                style={{ backgroundImage: "url('/images/gallery-4.jpg')" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      

    </>
  );
}
