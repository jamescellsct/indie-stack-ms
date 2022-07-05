import { Link } from "remix";
import { useOptionalUser } from "~/utils";
import HeroLanding from "../components/Heros/HeroLanding";
import FooterMain from "../components/Footers/FooterMain";
import HeadingBg from "~/components/Heros/heading-01.png";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <img
              src="http://www.mediswiss.us/assets/images/header.png"
              alt="mediswiss"
            />
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <div>
                    <div>
                      <div>
                        <section className="bg-slate-light py-12 px-6 font-dm-sans md:py-[90px] md:px-0">
                          <div className="m-auto max-w-default">
                            <h3 className="max-w-[558px] text-mobile-h2 font-medium leading-tight text-slate-headline md:text-desktop-h2">
                              Hello, {user.email}
                            </h3>
                            <p className="mt-8 max-w-[460px] text-desktop-subheading text-slate-body">
                              Pathelen Hybrid Case Studies
                            </p>
                          </div>
                          <div className="mt-[60px]">
                            <div className="m-auto max-w-default md:flex">
                              <div className="mr-10 mb-12 md:min-w-[362px] ">
                                <div className="min-h-[400px] rounded-3xl bg-white py-9 px-[30px]">
                                  <h4 className="mt-4 text-xl font-medium">
                                    <strong>Patient File:</strong> Ano. Nykolay A.
                                  </h4>
                                  <p className="mt-4 h-[200px] text-desktop-paragraph">
                                    <strong>Diagnosis:</strong> Chronic infected
                                    wound to the left lower leg
                                  </p>
                                  <Link
                                    to="/case-study-one"
                                    className="mt-5 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                                  >
                                    View Case Study
                                  </Link>
                                </div>
                              </div>

                              <div className="mr-10 mb-12 md:min-w-[362px]">
                                <div className="min-h-[400px] rounded-3xl bg-white py-9 px-[30px]">
                                  <h4 className="mt-4 text-xl font-medium">
                                    <strong>Patient File:</strong> Bal. Viktor A.
                                  </h4>
                                  <p className="mt-4 h-[200px] text-desktop-paragraph">
                                    <strong>Diagnosis:</strong> Type 2 diabetes
                                    mellitus, diabetic foot syndrome neuroischemic
                                    form, foot abscess, osteomyelitis of the foot
                                    bones. Sepsis
                                  </p>
                                  <Link
                                    to="/case-study-two"
                                    className="mt-5 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                                  >
                                    View Case Study
                                  </Link>
                                </div>
                              </div>
                              {/*
                            <div className="md:min-w-[362px] mb-12">
                              <div className="rounded-3xl bg-white py-9 px-[30px] min-h-[400px]">
                                <h4 className="mt-4 text-xl font-medium">
                                  <strong>Patient File:</strong> Nek. Olena O.
                                </h4>
                                <p className="mt-4 text-desktop-paragraph h-[200px]">
                                  <strong>Diagnosis:</strong> Type 2 diabetes mellitus, diabetic foot syndrome neuroischemic form, abscess of
                                  the left tibia, abscess of the left leg.
                                </p>
                                <Link
                                  to="/case-study-three"
                                  className="mt-5 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                                >
                                  View Case Study
                                </Link>
                              </div>
                            </div>
*/}
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600  "
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
