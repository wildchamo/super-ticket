const users = [
  {
    name: "Alice Ling",
    job: "Software Engineer",
    isAvailable: true,
  },
];

export default function UsersPage() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td>
              {user.isAvailable ? "✔️ " : "X "}
              {user.name}
            </td>
            <td>{user.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
