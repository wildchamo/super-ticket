import Nav from "@/components/tickets/nav";
import TenantName from "@/components/tickets/tenant-name";

export default function TicketsLayout({ children }) {
  return (
    <>
      <section style={{ borderBottom: "1px solid gray" }}>
        <TenantName tenantName="Acme Inc." />
        <Nav />
      </section>
      <section>{children}</section>
    </>
  );
}
