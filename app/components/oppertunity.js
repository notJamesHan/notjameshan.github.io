// components/OpportunityBanner.js
export default function OpportunityBanner() {
  return (
    <div className="bg-gray-700 text-white py-4 rounded-md">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold">
          I am open for new opportunities and experiences! <br />
          <br />
          Email:{" "}
          <a className="underline" href="mailto:contactjameshan@gmail.com">
            contactjameshan@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
