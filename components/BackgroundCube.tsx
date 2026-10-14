const cubeSlotClass =
  "absolute flex h-[min(42vw,280px)] w-[min(42vw,280px)] items-center justify-center sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]";

/**
 * Three subtle 3D cubes (left, center, right) in the page background.
 * Animated with CSS keyframes (transform only) so the browser runs them on the
 * compositor thread: no per-frame JS, and they stay smooth while scrolling.
 * Styles live in globals.css under `.portfolio-bg-cube*`.
 */
export function BackgroundCube() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className={`${cubeSlotClass} -left-16 top-[min(18vh,140px)] sm:left-4`}
      >
        <div className="portfolio-bg-cube__inner portfolio-bg-cube__inner--left">
          <div className="portfolio-bg-cube__cube portfolio-bg-cube__cube--left">
            <div className="portfolio-bg-cube__side portfolio-bg-cube__front" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__left" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__right" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__top" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__bottom" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__back" />
          </div>
        </div>
      </div>

      <div
        className={`portfolio-bg-cube--center ${cubeSlotClass} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.85] sm:scale-90`}
      >
        <div className="portfolio-bg-cube__inner portfolio-bg-cube__inner--center">
          <div className="portfolio-bg-cube__cube portfolio-bg-cube__cube--center">
            <div className="portfolio-bg-cube__side portfolio-bg-cube__front" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__left" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__right" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__top" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__bottom" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__back" />
          </div>
        </div>
      </div>

      <div
        className={`${cubeSlotClass} -right-16 top-[min(18vh,140px)] sm:right-4`}
      >
        <div className="portfolio-bg-cube__inner portfolio-bg-cube__inner--right">
          <div className="portfolio-bg-cube__cube portfolio-bg-cube__cube--right">
            <div className="portfolio-bg-cube__side portfolio-bg-cube__front" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__left" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__right" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__top" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__bottom" />
            <div className="portfolio-bg-cube__side portfolio-bg-cube__back" />
          </div>
        </div>
      </div>

    </div>
  );
}
