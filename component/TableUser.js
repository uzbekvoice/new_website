import React from "react";

export default function TableUser({ users }) {
  return (
    <div className="userlist">
      <table>
        <caption>Foydalanuvchilar</caption>
        <thead>
          <tr>
            <th>Tartib raqami</th>
            <th>FIO</th>
            <th>Yoshi</th>
            <th>Telefon raqami</th>
            <th>Futbolka ulchami</th>
            <th>Region</th>
            <th>Til bilish darjasi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={item.id}>
              <td data-label="Tartib raqami">{index + 1}</td>
              <td data-label="FIO">{item.name_surname}</td>
              <td data-label="Yoshi">{item.age}</td>
              <td data-label="Telefon raqami">{item.contacts}</td>
              <td data-label="Futbolka ulchami">{item.size_sweat}</td>
              <td data-label="Region">{item.region}</td>
              <td data-label="Til bilish darjasi">{item.level_of_uzbek}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
