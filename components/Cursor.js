import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Cursor() {
  const { isMobileView } = useWindowDimensions();

  customCursor(isMobileView);

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
    let cursor = document.querySelector(".cursor");
    let outerCursor = document.querySelector(".cursor__outer");
    document.addEventListener("mousemove", (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      outerCursor.style.top = `${e.clientY}px`;
      outerCursor.style.left = `${e.clientX}px`;
    });

    const links = Array.from(document.querySelectorAll("a"));

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        console.log("test");
        cursor.classList.add("cursor--hovered");
        outerCursor.classList.add("cursor__outer--hovered");
      });

      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor--hovered");
        outerCursor.classList.remove("cursor__outer--hovered");
      });
    });
  }
};
