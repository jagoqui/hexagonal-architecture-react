interface DataTableProps<Data> {
  data: Array<Data>;
  columns?: (keyof Data)[];
  renderCell?: (value: unknown, key: keyof Data, row: Data) => React.ReactNode;
}

export function DataTable<Data extends Record<string, unknown>>({
  data,
  columns,
  renderCell,
}: DataTableProps<Data>) {
  if (data.length === 0) return <p className="text-gray-500">No data</p>;

  const columnKeys = columns ?? (Object.keys(data[0]) as (keyof Data)[]);

  return (
    <div className="relative flex flex-col w-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {columnKeys.map((key) => (
              <th key={String(key)} className="p-4 border-b bg-blue-gray-50">
                <p className="text-sm font-normal text-blue-gray-900 opacity-70">
                  {String(key).toUpperCase()}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnKeys.map((key) => (
                <td key={String(key)} className="p-4 border-b">
                  <p className="text-sm text-blue-gray-900">
                    {renderCell
                      ? renderCell(row[key], key, row)
                      : String(row[key])}
                  </p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
