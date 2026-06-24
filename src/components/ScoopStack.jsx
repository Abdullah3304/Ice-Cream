export default function ScoopStack() {
  return (
    <div className="scoop-stack" aria-hidden="true">
      <div className="scoop scoop--3">
        <div className="scoop__shine" />
        <div className="scoop__drip scoop__drip--left" />
        <div className="scoop__drip scoop__drip--right" />
      </div>
      <div className="scoop scoop--2">
        <div className="scoop__shine" />
      </div>
      <div className="scoop scoop--1">
        <div className="scoop__shine" />
      </div>
      <div className="cone">
        <div className="cone__grid" />
      </div>
    </div>
  );
}
