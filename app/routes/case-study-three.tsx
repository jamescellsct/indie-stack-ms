import React from "react";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import HeroLanding from "../components/Heros/HeroLanding";
import FooterMain from "../components/Footers/FooterMain";
import HeadingBg from "~/components/Heros/heading-01.png";
import CsOneWoundImg01 from "../../assets/case-studies/cs-three-wound-01.png";
import CsOneWoundImg02 from "../../assets/case-studies/cs-three-wound-02.png";
import CsOneWoundImg03 from "../../assets/case-studies/cs-three-wound-03.png";
import CsOneWoundImg04 from "../../assets/case-studies/cs-three-wound-04.png";
import CsOneWoundImg05 from "../../assets/case-studies/cs-three-wound-05.png";
import CsOneWoundImg06 from "../../assets/case-studies/cs-three-wound-06.png";
import CsOneWoundImg07 from "../../assets/case-studies/cs-three-wound-07.png";
import CsOneWoundImg08 from "../../assets/case-studies/cs-three-wound-08.png";
import CsOneWoundImg09 from "../../assets/case-studies/cs-three-wound-09.png";
import { Tab } from "@headlessui/react";

export default function Index() {
  const user = useOptionalUser();
  return (
    <div>
      <div>
        <HeroLanding />
        <main>
          <div>
            <div>
              {user ? (
                <div>
                  <section>
                    <div className="container mx-auto flex flex-col justify-between p-6">
                      <Tab.Group vertical>
                        <Tab.List className="pb-[20px]">
                          <Tab className="font-bold uppercase">
                            <button className="width-[200px] rounded bg-gray-600 py-2 px-4 font-bold text-white hover:bg-blue-700">
                              Patient Details
                            </button>
                          </Tab>
                          <Tab className="font-bold uppercase">
                            <button className="width-[200px] ml-[20px] rounded bg-gray-600 py-2 px-4 font-bold text-white hover:bg-blue-700">
                              PWCT Treatment
                            </button>
                          </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-[20px]">
                          <Tab.Panel>
                            <h5 className="text-base font-bold uppercase text-slate-orange">
                              PATHELEN® WOUND CARE TREATMENT (PWCT) case reports
                            </h5>
                            <div className="mt-[18px]">
                              <h2 className="text-mobile-h2 font-medium text-slate-headline lg:text-desktop-h2">
                                Patient File: Nek. Olena O.
                              </h2>
                            </div>
                            <div className="mt-[18px] mb-[20px]">
                              <p className="font-bold">Patient Details:</p>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] font-medium">
                                Name (Initials):
                              </div>
                              <div className="flex w-[100%] text-left">
                                Nek. Olena O.
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] font-medium">
                                Birthdate / Age:
                              </div>
                              <div className="flex w-[100%] text-left">
                                1953-06-21 / 62 y.o.
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] font-medium">
                                Gender:
                              </div>
                              <div className="flex w-[100%] text-left">
                                male
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Diagnosis:
                              </div>
                              <div className="flex w-[100%] text-left">
                                Type 2 diabetes mellitus, diabetic foot syndrome
                                neuroischemic form, abscess of the left tibia,
                                abscess of the left leg.
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Actual non PWCT
                                <br />
                                therapeutic measures:
                              </div>
                              <div className="flex w-[100%] text-left">
                                Amikacin 500 mg i.m. 2 times/day
                                <br />
                                Ciprofloxacin1000 mg i.v. 3 times/day
                                <br />
                                Fraxiparine (Nadroparin calcium) (0.3ml) subcut.
                                1 time/day
                                <br />
                                Warfarin 2.5 mg 1 tab. 1 time/day Nalbuphin 1 ml
                                i.m. at pains Ketalgin 1 ml i.m. at pains
                                Reosorbylact 200 ml i in/v 1t/d Nvorapid
                                <br />
                                Subcut 6 ut. Morning 6 ut. launch 6 ut. evening
                                Nvomix subcut16ut. Morning 12ut. evening
                                <br />
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Patient informed:
                              </div>
                              <div className="flex w-[100%] text-left">
                                By Dr. Prystupiuk M.O. on 2015-04-23
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Data protection info:
                              </div>
                              <div className="flex w-[100%] text-left">
                                By Dr. Prystupiuk M.O. on 2015-04-23
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Agreed by:
                              </div>
                              <div className="flex w-[100%] text-left">
                                Patient - 2015-04-23
                                <br />
                                physician - 2015-04-23
                              </div>
                            </div>

                            <div className="mt-[18px] mb-[20px]">
                              <p className="font-bold">Therapy center:</p>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Hospital:
                              </div>
                              <div className="flex w-[100%] text-left">
                                Kyiv city clinical hospital #4
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Address details:
                              </div>
                              <div className="flex w-[100%] text-left">
                                Solominska str., 17
                                <br />
                                Kyiv, Ukraine
                                <br />
                                03100
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Department:
                              </div>
                              <div className="flex w-[100%] text-left">
                                #2 surgery dept.
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Physician:
                              </div>
                              <div className="flex w-[100%] text-left">
                                Dr. Prystupiuk M.O.
                              </div>
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <h5 className="text-base font-bold uppercase text-slate-orange">
                              PATHELEN® WOUND CARE TREATMENT (PWCT) case reports
                            </h5>
                            <div className="mt-[18px]">
                              <h2 className="text-mobile-h2 font-medium text-slate-headline lg:text-desktop-h2">
                                Patient File: Nek. Olena O.
                              </h2>
                            </div>

                            <div className="mt-[18px] mb-[20px]">
                              <p className="font-bold">PWCT treatment</p>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Start date:
                              </div>
                              <div className="flex w-[100%] text-left">
                                2015-04-23
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Expiry:
                              </div>
                              <div className="flex w-[100%] text-left">
                                2015-01-15
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Doses:
                              </div>
                              <div className="flex w-[100%] text-left">
                                0.5-0.8 g 1time/day (external using)
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Therapy schedule:
                              </div>
                              <div className="flex w-[100%] text-left">
                                Pathelen® wound care treatment – 1time/day up to
                                2015-01-15
                              </div>
                            </div>

                            <div className="mt-[40px] mb-[20px]">
                              <p className="font-bold">Outcome</p>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <p>
                                Narrative: The patient was admitted with
                                complaints of pain in his left leg, redness and
                                itching on the internal surface of the left
                                tibia and femur. raise fever up to 37.5 °C. Ps –
                                110/min. AP – 140/90 mm Hg. The disease began 7
                                days ago (WBCs): leukocytes – 10.0×109/L.
                                Leukocytes Formula: banded neutrophils – 8%,
                                segmented neutrophils – 81%, lymphocytes– 4%.
                                2015-04-23
                                <br />
                                <br />
                                Surgery: opening and drainage of abscess tibia,
                                opening and drainage thigh phlegmons..
                                <br />
                                S. aureus, 12x1016 CFU/g,
                              </p>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Additional comments:
                              </div>
                              <div className="flex w-[100%] text-left">
                                2015-04-27: WBC – 8.5×10 9/L. <br />
                                2015-04-29: S. aureus, 107 CFU/g,
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Brief treatment summary:
                              </div>
                              <div className="flex w-[100%] text-left">
                                2015-05-07 Necrosis missing in both wounds.
                                Wound pink pure visible areas of granulation.
                                Wounds blood contact
                              </div>
                            </div>

                            <div className="mt-[40px] mb-[20px]">
                              <p className="font-bold">
                                Day 1 (day of hospitalization)
                              </p>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Condition:
                              </div>
                              <div className="flex w-[100%] text-left">
                                The patient was admitted with complaints of pain
                                in his left leg, redness and itching on the
                                internal surface of the left tibia and femur.
                                raise fever up to 37.5 °C. Ps – 110/min. AP –
                                140/90 mm Hg. The disease began 7 days ago.
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Status localis:
                              </div>
                              <div className="flex w-[100%] text-left">
                                The inner surface of the left lower leg abscess,
                                with maceration of skin over it, when it is
                                painful to palpation and surface pus. Swollen
                                left thigh, on the inside surface of the
                                maceration of the skin, there are places and
                                areas of necrosis of the skin, palpable under
                                the skin seen floating, pressing out of the skin
                                follows pus.
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Blood tests:
                              </div>
                              <div className="flex w-[100%] text-left">
                                (RBC) Hemoglobin: Hgb-104 g/l, Erythrocytes:
                                Er-3,0×1012/L White blood cells (WBCs):
                                leukocytes – 10.0×109/L. Leukocytes Formula:
                                banded neutrophils – 8%, segmented neutrophils –
                                81%, lymphocytes– 4%. Fever up to 39.5 °C,
                                leukocytosis – 20.3×109/L , hemoglobin: Hb-80
                                g/l, and frequency of pulse – 110/min showed
                                that the patient had Systemic Inflammatory
                                Response Syndrome (SIRS). Based on existence of
                                purulent inflammation and SIRS, the Patient was
                                diagnosed – Sepsis.
                              </div>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <div className="flex w-[210px] text-left font-medium">
                                Surgery:
                              </div>
                              <div className="flex w-[100%] text-left">
                                On the day 1 was made surgery – opening and
                                drainage of abscess tibia, opening and drainage
                                thigh phlegmons. From hip cavities phlegmons
                                allocated to 500ml of pus. To cut the fascia
                                removed necrotic tissue. Taken wound seeding
                                content on bacteriological examination. The
                                wound washed with a solution of 10% Betadine and
                                3% hydrogen peroxide solution. Wound was worked
                                out by Pathelen® 3-5 mm layer and covered with
                                aseptic bandage The patient is assigned
                                antibiotic Amikacin 500 mg i.m. 2
                                times/dayCiprofloxacin1000 mg i.v. 3 times/day
                              </div>
                            </div>

                            <div className="mt-[40px] mb-[20px]">
                              <p className="font-bold">
                                Method of application of Pathelen®:
                              </p>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <p>
                                1. Remove old bandages
                                <br />
                                2. Wash out the skin around the wound with
                                antiseptic solution (Betadine)
                                <br />
                                3. Wash out the wound surface with antiseptic
                                solution (Сhlorhexidinum)
                                <br />
                                4. To drain the wound surface with sterile gauze
                                <br />
                                5. Thoroughly shake the vial with PATHELEN® to
                                fluff up the powder (5-10 seconds), until the
                                effect of the fluidized consistency of the drug
                                (drug identification)
                                <br />
                                6. Sprinkle the powder at the wound surface by
                                even 3-5 mm layer
                                <br />
                                7. Cover the wound with sterile dry gauze
                                <br />
                                8. Next bandaging in 12 hours
                                <br />
                              </p>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <section className="bg-slate-light py-12 px-6 font-dm-sans md:py-[90px] md:px-0">
                                <div className="m-auto max-w-default">
                                  <div className="m-auto max-w-[558px]">
                                    <h2>Treatment Course:</h2>
                                  </div>
                                  <div className="mx-3 mt-[60px] md:mx-auto">
                                    <div className="md:flex">
                                      <div className="mt-10 md:ml-[30px] md:mt-0 md:w-1/3">
                                        <img
                                          src={CsOneWoundImg01}
                                          alt="Sample Image"
                                        />
                                        <div className="mt-10">
                                          <h4 className="text-xl font-medium text-slate-headline">
                                            Day 1
                                          </h4>
                                          <p className="mt-6 text-desktop-paragraph text-slate-body">
                                            The chronic wound.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-10 md:ml-[30px] md:mt-0 md:w-1/3">
                                        <img
                                          src={CsOneWoundImg02}
                                          alt="Sample Image"
                                        />
                                        <div className="mt-10">
                                          <h4 className="text-xl font-medium text-slate-headline">
                                            Pus allocated from the wound
                                          </h4>
                                          <p className="mt-6 text-desktop-paragraph text-slate-body">
                                            Wound was worked out by Pathelen®
                                            3-5 mm layer and covered with
                                            aseptic bandage.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-10 md:ml-[30px] md:mt-0 md:w-1/3">
                                        <img
                                          src={CsOneWoundImg03}
                                          alt="Sample Image"
                                        />
                                        <div className="mt-10">
                                          <h4 className="text-xl font-medium text-slate-headline">
                                            Pus allocated from the wound
                                          </h4>
                                          <p className="mt-6 text-desktop-paragraph text-slate-body">
                                            Wound was drainage and worked out by
                                            Pathelen® 3-5 mm layer and covered
                                            with aseptic bandage
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <section className="bg-slate-light py-12 px-6 font-dm-sans md:py-[90px] md:px-0">
                                <div className="m-auto max-w-default">
                                  <div className="mx-3 mt-[60px] md:mx-auto">
                                    <div className="md:flex">
                                      <div className="mt-10 md:ml-[30px] md:mt-0 md:w-1/3">
                                        <img
                                          src={CsOneWoundImg04}
                                          alt="Sample Image"
                                        />
                                        <div className="mt-10">
                                          <h4 className="text-xl font-medium text-slate-headline">
                                            Day 5
                                          </h4>
                                          <p className="mt-6 text-desktop-paragraph text-slate-body">
                                            With wounds will not oozing pus.
                                            Swelling of the skin and flushing of
                                            the skin around the wound less.
                                            Available necrosis in the wound on
                                            the thigh. The wound in the leg
                                            without necrosis cleared.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-10 md:ml-[30px] md:mt-0 md:w-1/3">
                                        <img
                                          src={CsOneWoundImg05}
                                          alt="Sample Image"
                                        />
                                        <div className="mt-10">
                                          <h4 className="text-xl font-medium text-slate-headline">
                                            Day 15
                                          </h4>
                                          <p className="mt-6 text-desktop-paragraph text-slate-body">
                                            Necrosis missing in the wound. Wound
                                            pink pure visible areas of
                                            granulation. Wounds blood contact
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-10 md:ml-[30px] md:mt-0 md:w-1/3">
                                        <img
                                          src={CsOneWoundImg06}
                                          alt="Sample Image"
                                        />
                                        <div className="mt-10">
                                          <h4 className="text-xl font-medium text-slate-headline">
                                            Day 23
                                          </h4>
                                          <p className="mt-6 text-desktop-paragraph text-slate-body">
                                            Active wound granulated active
                                            epithelialization of the wound, the
                                            wound is reduced in size, there are
                                            areas completely healed. PWCT was
                                            canceled.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>

                            <div className="mt-[36px] flex flex-row">
                              <section className="bg-slate-light py-12 px-6 font-dm-sans md:py-[90px] md:px-0">
                                <div className="m-auto max-w-default">
                                  <div className="mx-3 mt-[60px] md:mx-auto">
                                    <div className="md:flex">
                                      <div className="mt-10 md:ml-[30px] md:mt-0 md:w-1/3">
                                        <img
                                          src={CsOneWoundImg07}
                                          alt="Sample Image"
                                        />
                                        <div className="mt-10">
                                          <h4 className="text-xl font-medium text-slate-headline">
                                            &nbsp;
                                          </h4>
                                          <p className="mt-6 text-desktop-paragraph text-slate-body">
                                            With wounds will not oozing pus.
                                            Swelling of the skin and flushing of
                                            the skin around the wound less.
                                            Available necrosis in the wound on
                                            the thigh. The wound in the leg
                                            without necrosis cleared.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-10 md:ml-[30px] md:mt-0 md:w-1/3">
                                        <img
                                          src={CsOneWoundImg08}
                                          alt="Sample Image"
                                        />
                                        <div className="mt-10">
                                          <h4 className="text-xl font-medium text-slate-headline">
                                            &nbsp;
                                          </h4>
                                          <p className="mt-6 text-desktop-paragraph text-slate-body">
                                            Necrosis missing in both wounds.
                                            Wound pink pure visible areas of
                                            granulation. Wounds blood contact.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-10 md:ml-[30px] md:mt-0 md:w-1/3">
                                        <img
                                          src={CsOneWoundImg09}
                                          alt="Sample Image"
                                        />
                                        <div className="mt-10">
                                          <h4 className="text-xl font-medium text-slate-headline">
                                            &nbsp;
                                          </h4>
                                          <p className="mt-6 text-desktop-paragraph text-slate-body">
                                            Active wound granulated active
                                            epithelialization of the wound, the
                                            wound is reduced in size, there are
                                            areas completely healed. PWCT was
                                            canceled.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </section>
                </div>
              ) : (
                <div>
                  <div className="mb-3 flex items-center justify-center">
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
                  </div>
                  <div className="text-center">
                    <img
                      src={HeadingBg}
                      alt="PATHELEN® WOUND CARE TREATMENT (PWCT) case reports"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        <FooterMain />
      </div>
    </div>
  );
}
