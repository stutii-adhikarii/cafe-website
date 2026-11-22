import Image from "next/image";

export default function MenuCard({ item }) {
  return (
    <div className="bg-white border border-dark/10">
      <div className="relative h-56">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="font-heading text-2xl uppercase">{item.name}</h3>
          <span className="text-primary font-semibold whitespace-nowrap">
            Rs. {item.price}
          </span>
        </div>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    </div>
  );
}