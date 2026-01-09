const Table = ({ columns, data }) => {
  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-white/10">
          <tr>
            {columns.map(col => (
              <th key={col} className="px-6 py-4 text-sm text-gray-300">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t border-white/10">
              {Object.values(row).map((cell, idx) => (
                <td key={idx} className="px-6 py-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
