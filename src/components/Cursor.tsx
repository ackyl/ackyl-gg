import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Cursor() {
  const { isMobileView } = useWindowDimensions();

  console.log("called!");
  customCursor();

  return (
    <>
      <div
        className={
          !isMobileView ? "cursor__wrapper" : "cursor__wrapper--hidden"
        }
      >
        <div className="cursor"></div>
        <div className="cursor__outer"></div>
      </div>
    </>
  );
}

const customCursor = () => {
  if (typeof window !== "undefined") {
    let cursor: HTMLElement | null = document.querySelector(".cursor");
    let outerCursor: HTMLElement | null =
      document.querySelector(".cursor__outer");

    document.addEventListener("mousemove", (e) => {
      if (cursor && outerCursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
        outerCursor.style.top = `${e.clientY}px`;
        outerCursor.style.left = `${e.clientX}px`;
      }
    });

    const links = Array.from(document.querySelectorAll("a"));

    console.log(links);

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        if (cursor && outerCursor) {
          cursor.classList.add("cursor--hovered");
          outerCursor.classList.add("cursor__outer--hovered");
        }
      });

      link.addEventListener("mouseleave", () => {
        if (cursor && outerCursor) {
          cursor.classList.remove("cursor--hovered");
          outerCursor.classList.remove("cursor__outer--hovered");
        }
      });
    });
  }
};
