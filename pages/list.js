import React from 'react'


export async function getServerSideProps() {
   
    const res = await fetch(
      "https://admin.uzbekvoice.ai/items/camp_form"
    );

  
    const data = await res.json();

  
    return {
      props: {
        users: data,
      },
    };
  }

export default function List({users}) {
    
    const user = users.data;
    console.log(user)
  return (
    <div className='userlist'><table>
	<caption>Foydalanuvchilar</caption>
	<thead>
		<tr>
			<th>FIO</th>
			<th>Yoshi</th>
			<th>Telefon raqami</th>
			<th>Futbolka ulchami</th>
			<th>Region</th>
            <th>Til bilish darjasi</th>
		</tr>
	</thead>
	<tbody>

        {user.map(({name_surname, age, contacts, size_sweat, region, level_of_uzbek }) => (
		<tr>
        <td data-label="FIO">{name_surname}</td>
        <td data-label="Yoshi">{age}</td>
        <td data-label="Telefon raqami">{contacts}</td>
        <td data-label="Futbolka ulchami">{size_sweat}</td>
        <td data-label="Region">{region}</td>
        <td data-label="Til bilish darjasi">{level_of_uzbek}</td>
    </tr>

        ))}

		
	</tbody>
</table></div>
  )
}
