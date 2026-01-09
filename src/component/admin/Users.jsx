import Table from "../../component/admin/Table"
import { users } from "../../data/data"

const Users = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Users</h1>
      <Table
        columns={["Name", "Email", "Status", "Joined"]}
        data={users}
      />
    </div>
  )
}

export default Users
