export default function TicketsLayout({ children }) {
  return (
    <>
      <section style={{ borderBottom: "1px solid gray" }}>
        <main>{children}</main>
      </section>
    </>
  );
}
