import { useState } from "react";
import Loader from "./Loader";

export default function NewCompanyForm({
  setNewCoordinates,
  newCoordinates,
  API_URL
}: any) {
  //States input's values

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");

  const [isSending, setIsSending] = useState<boolean>(false);

  const sendPostApi = async () => {
    if (name.length === 0 || description.length === 0 || mail.length === 0 || phone.length === 0 || website.length === 0 || country.length === 0 || city.length === 0 || street.length === 0 || postalCode.length === 0) {
      alert('Informations manquantes');
      return false;
    }
    else {
      try {
        const response = await fetch(`${API_URL}/setCompany.php`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            description: description,
            mail: mail,
            phone: phone,
            website: website,
            country: country,
            city: city,
            postal_code: postalCode,
            street: street,
            longitude: newCoordinates.longitude,
            latitude: newCoordinates.latitude,
          }),
        });

        const result = await response.json();

        if (result === "success") {
          setNewCoordinates(null);
        }
      } catch (error) {
        alert('Une erreur c\'est produite');
        setIsSending(false);
        console.log(error);
        return false;

      }
    }

  };

  const handleClose = (e: any) => {
    if (e.target.id === "form-modal" && isSending === false) {
      setNewCoordinates(null);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (await sendPostApi() !== false) {
      setIsSending(true);
    }

  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-30"
      id="form-modal"
      onClick={handleClose}
    >
      <div className="lg:w-full lg:max-w-lg h-4/6 w-5/6 overflow-y-scroll md:overflow-hidden  bg-white p-4 rounded">
        {isSending ? (
          <div className="h-56">
            <Loader />
          </div>
        ) : (
          <form id="companyForm" onSubmit={handleSubmit}>
            <h3 className="text-gray-700 text-3xl font-bold mb-7">
              Informations
            </h3>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Nom
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  name="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="mail"
                >
                  mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="mail"
                  type="mail"
                  name="mail"
                  required
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="tel"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className=" w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="website"
                >
                  Site web
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="website"
                  type="url"
                  name="website"
                  required
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="website"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="description"
                  name="description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="country"
                >
                  Pays
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="country"
                  type="text"
                  name="country"
                  required
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Ville
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="city"
                  type="text"
                  name="city"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="postal_code"
                >
                  Code postal
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="postal_code"
                  type="text"
                  name="postal_code"
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>
            <div className="-mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="postal_code"
                >
                  Rue
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="street"
                  type="text"
                  name="street"
                  required
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center -mx-3 mb-2">
              <button
                className="rounded bg-green-500 text-white px-4 py-2"
                onClick={handleSubmit}
              >
                Valider
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
