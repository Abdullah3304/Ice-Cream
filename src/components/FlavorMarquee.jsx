const flavors = [
  'Vanilla Bean', 'Midnight Fudge', 'Rose Kulfa', 'Mango Sorbet',
  'Salted Caramel', 'Pistachio Dream', 'Berry Swirl', 'Cookie Dough',
];

export default function FlavorMarquee() {
  const track = [...flavors, ...flavors];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((flavor, i) => (
          <span className="marquee__item" key={`${flavor}-${i}`}>
            {flavor}
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
