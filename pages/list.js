import React from "react";
import TableUser from "../component/TableUser";

export async function getServerSideProps() {
  const res = await fetch("https://admin.uzbekvoice.ai/items/camp_form");

  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default function List({ users }) {
  return (
    <TableUser users={users.data} />
  )
}
