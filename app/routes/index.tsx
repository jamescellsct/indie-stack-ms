import { Link } from "remix";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <img src="http://www.mediswiss.us/assets/images/header.png" alt="mediswiss" />
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <div>
                    <div>
                      <p>Please click on the links below to download the case studies.</p>
                      <p>
                        <strong>Case Studies:</strong>
                      </p>
                      <p>
                        <a
                          href="https://mediswiss.us/assets/pcs/15-06-21_Patient_file_Ano.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Patient File - Ano
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://mediswiss.us/assets/pcs/15-06-21_Patient_file_Bal.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Patient File - Bal
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://mediswiss.us/assets/pcs/15-06-21_Patient_file_Nek.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Patient File - Nek
                        </a>
                      </p>
                    </div>
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                    >
                      View Notes for {user.email}
                    </Link>
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
