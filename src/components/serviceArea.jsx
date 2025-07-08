export default function ServiceAreas() {
  return (
    <section className="bg-green-50 py-16 px-6 max-w-6xl mx-auto rounded-xl text-center">
      <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
      <p className="text-lg text-gray-700 mb-8">
        Grey Techs proudly serves Central and Southern Ohio.
      </p>
      <img
        src="/assets/ohio-map-placeholder.png" // Replace with your real map image
        alt="Service area map"
        className="mx-auto w-full max-w-2xl rounded-lg shadow"
      />
      <div className="mt-8 text-gray-700">
        <p className="font-semibold">Frequently serviced cities:</p>
        <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <li>Columbus, OH</li>
          <li>Dublin, OH</li>
          <li>New Lexington, OH</li>
          <li>Logan, OH</li>
          <li>Marysville, OH</li>
          <li>Cambridge, OH</li>
          <li>Lancaster, OH</li>
          <li>Gahanna, OH</li>
          <li>Conesville, OH</li>
        </ul>
      </div>
    </section>
  );
}