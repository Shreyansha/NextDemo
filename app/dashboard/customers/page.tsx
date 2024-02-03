import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function Page({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || '';
  const filteredcustomers = await fetchFilteredCustomers(query);
  return (
    <main>
      <CustomersTable customers={filteredcustomers} />
    </main>
  );
}

   