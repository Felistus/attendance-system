import NotFoundIcon from "../components/icons/NotFoundIcon";

export default function PageNotFound() {
  return (
    <section>
      <div className="flex justify-center items-center pt-1 pageError">
        <NotFoundIcon />
      </div>
    </section>
  );
}
